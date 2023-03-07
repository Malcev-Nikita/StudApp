import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import global_style from '../style/global_style';
import front_style from '../style/front_style';
import button_style from '../style/button_style';

class Front extends React.Component {
  render() {
    return (
      <View style={global_style.container} >

        <View style={front_style.logo_container} >

            <View style={front_style.logo_text_container}>
                <Text style={front_style.logo_text} >StudApp</Text>
            </View>

            <Text style={front_style.logo_description} >Единственное кросплатформенное приложение для студентов в России</Text>

        </View>

        <View style={button_style.double_button_container}>
          
            <TouchableOpacity style={button_style.mini_button} onPress={() => this.props.navigation.navigate('Login')}>   
                <AntDesign name="login" color="#1275DD" size={28} />
            </TouchableOpacity>

            <TouchableOpacity style={button_style.long_button} onPress={() => this.props.navigation.navigate('Registration')}>
                <Text style={button_style.long_button_test}>Регистрация</Text>
            </TouchableOpacity>

        </View>

      </View>
    );
  };
};

export default Front;