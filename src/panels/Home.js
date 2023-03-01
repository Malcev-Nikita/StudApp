
import React from 'react';
import { Text, TouchableOpacity, View, Image, SafeAreaView, ScrollView } from 'react-native';

import Settings from './Settings';

import global from '../style/global_style';
import home from '../style/home_style';

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      error: null,
      isLoaded: false,
      items: []
    }
  }

  componentDidMount() {
    fetch("https://a15459-a752.s.d-f.pw/api/get_all_items_of_group/1")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;

    onchange = (nativeEvent) => {

    }

    if (error) return <Text style={home.mt}>Ошибка: {error.message}</Text>

    else if (!isLoaded) return <Text style={home.mt}>Загрузка...</Text>

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
                    items.map( item => (
                      <Text style={home.mt}>{item.Id_Call_Schedule}</Text>
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