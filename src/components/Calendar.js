import React from "react";
import { Text, TouchableOpacity, View, Image, SafeAreaView, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import home from '../style/home_style';

import NavigationSubject from "../pages/NavigationSubject";
import InfoSubject from "../pages/InfoSubject";

class Calendar extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            items: this.props.items,
            call: this.props.call,
            countSubjectDay: this.props.countSubjectDay,
            DayOfWeek: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
            CountSubject: 5,

            infoSubject: false,
        }

        this.show = this.show.bind(this)
    }

    show() {
        this.setState({
            infoSubject: !this.state.infoSubject,
        })
    }

    render() {
        if (!this.state.infoSubject)
        {
            return (
                <ScrollView 
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                horizontal
                style={home.wrap}
                >
                {
                    this.state.DayOfWeek.map(DayOfWeek => (
                        this.state.countSubjectDay.map(countSubjectDay => {
                            if (countSubjectDay.Day_Of_Week == DayOfWeek) {
                                return (
                                    <View style={home.slider_container}>
                                    <Text style={home.day_of_week}>{DayOfWeek}</Text>
                                    {
                                        Array.from({length: this.state.CountSubject}, (_, index) => index + 1).map(id => (
                                        <View>
                                            <View style={home.subject_container}>
                                            <Text style={home.id_subject}>{id}</Text>
                    
                                            <View> 
                                            {
                                                this.state.items.map(item => {
                                                    if (item.Time_Start == this.state.call[id - 1].Time_Start && item.Day_Of_Week == DayOfWeek) 
                                                    return (
                                                        <TouchableOpacity onPress={this.show}>
                                                            <Text key={item.Id} style={home.subject}>{item.Subject}</Text>
                                                            {item.Week_Number != 0 ? <Text style={home.subject_week}>{item.Week_Number + " неделя"}</Text> : ("")}
                                                        </TouchableOpacity>
                                                    )
                                                })
                                            }
                                            </View>
                    
                                            {
                                                this.state.items.map(item => {
                                                if (item.Time_Start == this.state.call[id - 1].Time_Start && item.Day_Of_Week == DayOfWeek) 
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
                                )
                            }
                    })
                    ))
                }
                </ScrollView>
            )
        }

        else {
            return (
                <View>
                    <TouchableOpacity onPress={this.show}>
                        <Ionicons name="arrow-back" color='#0F6CCC' size={36} />
                    </TouchableOpacity>

                    <InfoSubject show={this.state.infoSubject}/>
                </View>
            )
        }
    }
}

function Button() {
    return (
        <NavigationSubject/>
    )
}

export default Calendar;