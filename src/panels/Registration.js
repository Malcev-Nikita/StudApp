import React from 'react';
import { Text, TouchableOpacity, View, Image, Dimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextInput } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';
import DropdownMenu from 'react-native-dropdown-menu';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Settings from './Settings';

import global from '../style/global_style';
import input_style from '../style/input_style';
import registration_style from '../style/registration_style';


class Registration extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            secure: true,
            phone: '+7',
            password: '',
            gender: '',
            age: '',
        };

        this.show = this.show.bind(this); 
    }

    show() {
        this.setState({
            secure: !this.state.secure,
        });
    }

    render() {
        let eye;

        if (this.state.secure) eye = <Ionicons name="eye" color="#1275DD" size={28} />

        else  eye = <Ionicons name="eye-off" color="#1275DD" size={28} />

        var data = [["Не выбран", "Мужской", "Женский"]];

        return (
            <KeyboardAwareScrollView contentContainerStyle={{height: Dimensions.get('screen').height}}>
                <View style={input_style.input_global_container}>
                    <View style={input_style.input_container}>
                        <Text style={input_style.input_text}>Номер телефона</Text>
                        <TextInputMask style={input_style.input} type={'custom'} value={this.state.phone} keyboardType='numeric'
                                    options={{
                                        mask: '+7 (***) ***-**-**',
                                        withDDD: true,
                                        dddMask: '+7 (***) ***-**-**',
                                    }} 
                                    onChangeText = {text => {
                                            this.setState({
                                                phone: text
                                            })
                                    } }
                        />
                    </View>

                    <View style={input_style.input_container}>
                        <Text style={input_style.input_text}>Имя Фамилия</Text>
                        <TextInput style={input_style.input} selectionColor={'#23232340'} />
                    </View>

                    <View style={input_style.input_container}>
                        <Text style={input_style.input_text}>Пароль</Text>
                        <TextInput  style={input_style.input} selectionColor={'#23232340'} secureTextEntry={this.state.secure} value={this.state.password}
                                    onChangeText = {text => {
                                            if (text.length <= 16) {
                                                this.setState({
                                                    password: text
                                                })
                                            }
                                        }} 
                        />
                        <TouchableOpacity style={input_style.password_container} onPress={this.show}>
                            {eye}
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        );
    };
};

export default Registration;