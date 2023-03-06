import { StyleSheet } from 'react-native';


const input_style = StyleSheet.create({
    
    input_global_container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 140,
    },

    input_container: {
        justifyContent:'center',
        width:'80%',
        marginBottom: '5%',
        marginLeft: '10%',
        marginRight: '10%',
    },

    input: {
        height: 50,
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 8,
        color: '#232323',
        paddingLeft: 13,
    },
    
    input_text: {
        fontFamily: 'nunito-semibold',
        justifyContent: 'flex-start',
        color: '#fff',
        fontSize: 15,
        marginBottom: 5,
    },

    password_container: {
        position: 'absolute',
        top: 32,
        right: 20,
    },

    password_icon: {
        width: 35,
        height: 35,
    },

    dropdown_container: {
        width: '48%',
    },

    dropdown_text: {
        textAlign: 'center'
    },  

    age_container: {
        width: '48%',
    },

    age_text: {
        textAlign: 'center',
    },

    age_input: {
        height: 50,
        borderWidth: 2,
        borderColor: '#232323',
        borderRadius: 8,
        color: '#232323',
        paddingLeft: 13,
    },
});

export default input_style