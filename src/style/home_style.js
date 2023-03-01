import { Dimensions, StyleSheet } from 'react-native';

const home = StyleSheet.create({

    container: {
        flex: 1,
    },

    mt: {
        marginTop: 100
    },

    wrap: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.25,
        backgroundColor: '#a8a8a8'
    }

});

export default home