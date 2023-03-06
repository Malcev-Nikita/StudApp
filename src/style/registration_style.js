import { StyleSheet } from 'react-native';

const registration_style = StyleSheet.create({

    total_black_button_reg: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#232323',
        width: 250,
        height: 65,
        borderRadius: 25,
        margin: 5,
    },  

    total_black_button_reg_text: {
        color: '#fff',
        fontSize: 21,
        fontWeight: '500',
        lineHeight: 30,
        marginRight: 17,
        letterSpacing: 1.4,
    },

    inputs_container: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        width: '70%',
        marginLeft: '15%',
        marginRight: '10%',
    }
    
});

export default registration_style