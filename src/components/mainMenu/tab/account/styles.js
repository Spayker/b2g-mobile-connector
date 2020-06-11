import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({

    container:{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
        padding: 15,
    },
    
    containerSettings:{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
        paddingTop: 15,
    },

    containerImage:{
        alignItems: "center",
        backgroundColor: "#060403",
        padding: 15,
    },

    contentTextHeader:{
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
        color: "#FFFFFF",
        marginTop: 10
    },

    contentTextDescription:{
        textAlign: "center",
        marginTop: 8,
        color: "#FFFFFF",
        fontSize: 16
    },

    image:{
        alignSelf: "center",
        marginTop: 64,
        marginBottom: 16,
        width: 100,
        height: 100
    },

    containerInSection: {
        height: 50,
        borderRadius: 1,
        borderBottomWidth: 0.2 
    },

    containerInnerSection: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },

    iconRight: {
        flex: 1,
        textAlign: 'center'
    },
    iconLeft: {
        flex: 1,
        textAlign: 'center'
    },

    text: {
        flex: 6,
        flexDirection: 'row',
        fontSize: 15,
        color: 'black'
    },


});