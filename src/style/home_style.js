import { Dimensions, StyleSheet } from 'react-native';

const home = StyleSheet.create({

    container: {
        flex: 1,
    },

    slider_container: {
        width: Dimensions.get('screen').width / 100 * 90,
        marginLeft: Dimensions.get('screen').width / 100 * 5,
        marginRight: Dimensions.get('screen').width / 100 * 5,
    },  

    day_of_week: {
        height: 35,
        paddingTop: 6,
        textAlign: 'center',
        fontSize: 16,
        backgroundColor: '#1275DD',
        borderRadius: 20,
        textTransform: 'uppercase',
        color: '#fff',
        fontWeight: 'bold',
        letterSpacing: 1.5,
        marginBottom: 15,
    },

    id_subject: {
        height: 23,
        width: 23,
        backgroundColor: '#1275DD',
        color: '#fff',
        borderRadius: 100,
        textAlign: 'center',
        paddingTop: 1.5,
        marginLeft: 15,
    },

    hr: {
        widht: Dimensions.get('screen').width,
        height: 1,
        backgroundColor: '#8F8F8F',
        marginTop: 10,
        marginBottom: 10,
    },  

    subject_container: {
        flexDirection: "row",
        alignItems: 'center',
    },

    subject: {
        marginLeft: 10,
        marginTop: 5,
        marginBottom: 5
    },

    subject_time: {
        marginTop: 5,
        marginBottom: 5,
        position: 'absolute',
        right: 0,
        fontSize: 12,
    },

    subject_week: {
        marginLeft: 15,
        fontSize: 10,
        marginTop: -7,
        marginBottom: -3,
    },  

    wrap: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.5,
        marginTop: 30
    }

});

export default home