import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#333333",
        padding: 15,
        paddingBottom: 75
    },

    contentTextDescription:{
        textAlign: "center",
        marginTop: 16,
        color: "#9e9e9e",
        fontSize: 16
    },

    image:{
        alignSelf: "center",
        marginTop: 24,
        marginBottom: 50
    },

    listTrainingContainer:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    listTrainingColumnData:{
        alignSelf: "center",
        flexDirection: "column",
        justifyContent: "space-between",
    },

    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        color: "white",
      }

});