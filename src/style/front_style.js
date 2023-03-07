import { StyleSheet, Dimensions } from 'react-native';


const front_style = StyleSheet.create({

    logo_container: {
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        width: (Dimensions.get('screen').width),
        justifyContent: 'center',
        top: '30%',
    },

    logo_text_container: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    logo: {
        width: 160,
        height: 140,
    },

    logo_text: {
        fontSize: 70,
        letterSpacing: 10,
        fontFamily: 'nunito-semibold',
        color: '#1275DD',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: {width: 4, height: 4},
        textShadowRadius: 10
    },

    logo_description: {
        fontSize: 16,
        letterSpacing: 1.2,
        textAlign: 'center',
        fontFamily: 'nunito-semibold',
        color: '#1275DD',
        marginTop: 10,
    },

    login_container: {
        position: 'absolute',
        bottom: -10,
        left: '21%',
        flexDirection: 'row',
        height: 50,
    },

    login_text: {
        fontSize: 16,
        letterSpacing: 1.2,
        height: 30,
    },

    login_button: {
        marginLeft: 10,
        height: 30,
    },

    login_button_text: {
        fontSize: 17,
        fontWeight: '700',
        color: '#C91E5E',
        letterSpacing: 1.2,
    }
    
});

export default front_style