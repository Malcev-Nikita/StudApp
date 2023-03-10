
import React from 'react';
import { Text, TouchableOpacity, View, Image, SafeAreaView, ScrollView } from 'react-native';

import Settings from './Settings';

import global from '../style/global_style';
import home from '../style/home_style';

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      itemsError: null,
      itemsIsLoaded: false,
      items: [],

      callError: null,
      callIsLoad: false,
      call: [],

      countSubjectDayError: null,
      countSubjectDayIsLoad: false,
      countSubjectDay: [],
    }
  }
  
  getItems() {
    fetch("https://a15459-a752.s.d-f.pw/api/get_all_items_of_group/1")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            itemsIsLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            itemsIsLoaded: true,
            error
          });
        }
      )
  }

  getCall() {
    fetch("https://a15459-a752.s.d-f.pw/api/get_all_call_schedule")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            callIsLoad: true,
            call: result
          });
        },
        (error) => {
          this.setState({
            callIsLoad: true,
            error
          });
        }
      )
  }

  getCountSubjectDay() {
    fetch("https://a15459-a752.s.d-f.pw/api/count_subject_day/1")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          countSubjectDayIsLoad: true,
          countSubjectDay: result
        });
      },
      (error) => {
        this.setState({
          countSubjectDayIsLoad: true,
          error
        });
      }
    )
  }

  componentDidMount() {
    this.getCall()
    this.getItems()
    this.getCountSubjectDay()
  }

  render() {
    const { itemsError, itemsIsLoaded, items } = this.state;
    const { callError, callIsLoad, call } = this.state;
    const { countSubjectDayError, countSubjectDayIsLoad, countSubjectDay } = this.state;

    const DayOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
    const CountSubject = 5

    if (itemsError || callError || countSubjectDayError) return <Text style={home.mt}>Ошибка: {itemsError.message}</Text>

    else if (!itemsIsLoaded || !callIsLoad || !countSubjectDayIsLoad) return <Text style={home.mt}>Загрузка...</Text>

    else {
      return (
          <View>
            <SafeAreaView style={home.container}>
              <View style={home.wrap}>
                {Calendar(items, call, DayOfWeek, CountSubject, countSubjectDay)}
              </View>
            </SafeAreaView>
          </View>
      );
    }
  };
};

function Calendar(items, call, DayOfWeek, CountSubject, countSubjectDay) {
  return (
    <ScrollView 
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      horizontal
      style={home.wrap}
    >
      {
        countSubjectDay.map(DayOfWeek => (
          <View style={home.slider_container}>
            <Text style={home.day_of_week}>{DayOfWeek.Day_Of_Week}</Text>

            {
              Array.from({length: CountSubject}, (_, index) => index + 1).map(id => (
                <View>
                  <View style={home.subject_container}>
                    <Text style={home.id_subject}>{id}</Text>

                    <View> 
                      {
                        items.map(item => {
                          if (item.Time_Start == call[id - 1].Time_Start && item.Day_Of_Week == DayOfWeek.Day_Of_Week) 
                            return (
                              <View>
                                <Text key={item.Id} style={home.subject}>{item.Subject}</Text>
                                {item.Week_Number != 0 ? <Text style={home.subject_week}>{item.Week_Number + " неделя"}</Text> : ("")}
                              </View>
                            )
                        })
                      }
                    </View>

                    {
                      items.map(item => {
                        if (item.Time_Start == call[id - 1].Time_Start && item.Day_Of_Week == Day_Of_Week) 
                          return (
                            <Text key={item.Id} style={home.subject_time}>{item.Time_Start.slice(0,-3)} - {item.Time_End.slice(0,-3)}</Text>
                          )
                      })
                    }
                  </View>

                  <View style={home.hr}></View>
                </View>
              ))
            }
          </View>
        ))
      }
    </ScrollView>
  )
}

export default Home;