import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({

    imageBackground:{
        width: "100%",
        height: "100%",
        backgroundColor: "black"
    },

    image:{
        alignSelf: "center",
        marginTop: 150
    },

    container: {
        marginTop: 160,
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 15
    },

    loginButton: {
        color: "#24C324",
        backgroundColor: "#24C324",
        alignItems: 'center',
        justifyContent: 'center'
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    spacing: {
        padding: 12
    },

    textArea: {
        paddingTop: 24,
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },

    text: {
        color: "white"
    },

    link:{
        color: "#2979ff"
    },

    dataInputText:{
        fontSize: 20,
        textAlign: "left",
        marginTop: 25,
        borderColor: "#24C324",
        borderBottomWidth: 1
    }
});