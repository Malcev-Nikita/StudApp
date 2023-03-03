
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

  componentDidMount() {
    this.getCall()
    this.getItems()
  }

  render() {
    const { itemsError, itemsIsLoaded, items } = this.state;
    const { callError, callIsLoad, call } = this.state;
    const DayOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
    const CountSubject = 5

    if (itemsError || callError) return <Text style={home.mt}>Ошибка: {itemsError.message}</Text>

    else if (!itemsIsLoaded && !callIsLoad) return <Text style={home.mt}>Загрузка...</Text>

    else {
      return (
          <View>
            <SafeAreaView style={home.container}>
              <View style={home.wrap}>
                <ScrollView 
                  onScroll={({nativeEvent}) => onchange(nativeEvent)}
                  showsHorizontalScrollIndicator={false}
                  pagingEnabled
                  horizontal
                  style={home.wrap}
                >
                  {
                    DayOfWeek.map(Day_Of_Week => (
                      <View style={home.slider_container}>
                        <Text style={home.day_of_week}>{Day_Of_Week}</Text>

                        {
                          Array.from({length: CountSubject}, (_, index) => index + 1).map(id => (

                            <View>
                              <View style={home.subject_container}>
                                <Text style={home.id_subject}>{id}</Text>

                                <View> 
                                  {
                                    items.map(item => {
                                      if (item.Time_Start == call[id - 1].Time_Start && item.Day_Of_Week == Day_Of_Week) 
                                        return (<Text key={item.Id} style={home.subject}>{item.Subject}</Text>)
                                    })
                                  }
                                </View>

                                {
                                  items.map(item => {
                                    if (item.Time_Start == call[id - 1].Time_Start && item.Day_Of_Week == Day_Of_Week) 
                                      return (<Text key={item.Id} style={home.subject_time}>{item.Time_Start.slice(0,-3)} - {item.Time_End.slice(0,-3)}</Text>)
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
              </View>
            </SafeAreaView>
          </View>
      );
    }
  };
};

export default Home;