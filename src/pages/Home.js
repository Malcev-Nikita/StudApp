
import React from 'react';
import { Text, TouchableOpacity, View, Image, SafeAreaView, ScrollView } from 'react-native';

import Calendar from '../components/Calendar';

import global from '../style/global_style';
import home from '../style/home_style';
import error_style from '../style/error_style';

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
  
  async getItems() {
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

  async getCall() {
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

  async getCountSubjectDay() {
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

  async componentDidMount() {
    await this.getCall()
    await this.getItems()
    await this.getCountSubjectDay()
  }

  render() {
    const { itemsError, itemsIsLoaded, items } = this.state;
    const { callError, callIsLoad, call } = this.state;
    const { countSubjectDayError, countSubjectDayIsLoad, countSubjectDay } = this.state;

    if (itemsError || callError || countSubjectDayError) return (
      <View style={error_style.error_container}>
        <Text style={error_style.error_header}>Ошибка</Text>
        <Text style={error_style.error_desc}>Нет подключения к интернету, для получения информации нужно подключение к интернету</Text>
      </View>
    )

    else if (!itemsIsLoaded || !callIsLoad || !countSubjectDayIsLoad) return <Text style={home.mt}>Загрузка...</Text>

    else {
      return (
          <View>
            <SafeAreaView style={home.container}>
              <View style={home.wrap}>
                <Calendar items={items} call={call} countSubjectDay={countSubjectDay} /> 
              </View>
            </SafeAreaView>
          </View>
      );
    }
  };
};


export default Home;