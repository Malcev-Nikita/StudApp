import { Dimensions, StyleSheet } from 'react-native';


const button_style = StyleSheet.create({
    
    double_button_container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-evenly',
        position: 'absolute',
        bottom: 50,
        width: (Dimensions.get('screen').width),
    },  

    mini_button: {
        widht: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },  

    long_button: {
        width: 200,
        height: 50,
        backgroundColor: '#1275DD',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    long_button_test: {
        fontSize: 18,
        color: '#fff'
    }

});

export default button_style