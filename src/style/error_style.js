import { StyleSheet, Dimensions } from 'react-native';


const error_style = StyleSheet.create({

    error_container: {
        position: 'absolute',
        top: Dimensions.get('screen').height * 0.5,
        marginTop: -100,
        width: Dimensions.get('screen').width * 0.9,
        left: Dimensions.get('screen').width * 0.05,
        borderRadius: 20,
        backgroundColor: "#ff0000",
        height: 200,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },  

    error_header: {
      color: '#fff',
      fontSize: 30,
      marginBottom: 10,  
      fontWeight: '600',
    },

    error_desc: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center',
        width: Dimensions.get('screen').width * 0.75,
    },
    
});

export default error_style