import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#333333",
        padding: 15,
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

    loginButton: {
        marginTop: 10,
        height: 65,
        backgroundColor: "#158A15",
        borderRadius:30,
        alignItems: 'center'
    },
    
    ItemButton: {
        backgroundColor: "#158A15",
        borderRadius:30,
        alignItems: 'center'
    },

    itemButtonEnabled: {
        height: 35,
        borderRadius: 30,
        backgroundColor: "#158A15",
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 5},
        alignItems: 'center'
    },

    itemButtonDisabled: {
        height: 35,
        borderRadius: 30,
        backgroundColor: "grey",
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 5},
        alignItems: 'center'
    },

    buttonText: {
        color: "#FFFFFF",
        height: 65,
        fontSize: 16,
        paddingTop: 20,
        alignItems: 'center'
    },

    listTrainingContainer:{
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
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