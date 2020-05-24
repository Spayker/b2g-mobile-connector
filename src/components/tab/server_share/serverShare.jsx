import React from 'react'
import { Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import TrainingRequests from "../../common/rest/trainingRequests.jsx"
import globals from "../../common/globals.jsx";
import styles from "./styles.jsx";

export default class ServerShare extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            storedDeviceBondLevel: 0,
            storedHeartBeatRate: 0,
            storedSteps: 0,
            storedBattery: 0,
            storedDateTime: '',
            userToken: '',
            username: '',
            deviceId: 'unknown',
            serverStoredDeviceId: ''
        }
        trainingRequestsObj = new TrainingRequests()
    }

    sendDataToServer = () => {
        trainingRequestsObj.sendTrainingData(this.state.username, this.state.userToken)
    }

    componentDidMount(){ this.updateStateByAsyncStorage() }

    updateStateByAsyncStorage = async () => {
        try {
          const accessToken = await AsyncStorage.getItem(globals.ACCESS_TOKEN_KEY);
          const username = await AsyncStorage.getItem(globals.USERNAME_TOKEN_KEY);

          if (accessToken !== null && username !== null) {
            this.setState({userToken: accessToken})
            this.setState({username: username})
          }
        } catch (error) { console.log(error) }
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.package}>
                    <Text style={styles.tabHeader}>Data From Server</Text>

                    <View style={styles.dataContainer}>
                        <View style={styles.dataPackage}>
                            <Text style={styles.dataField}>Device Id:</Text>
                            <Text style={styles.dataField}>{this.state.serverStoredDeviceId}</Text>
                        </View>
                        
                        <View style={styles.dataPackage}>
                            <Text style={styles.dataField}>Heart Beat:</Text>
                            <Text style={styles.dataField}>{this.state.storedHeartBeatRate + ' Bpm'}</Text>
                        </View>

                        <View style={styles.dataPackage}>
                            <Text style={styles.dataField}>Server Date Mark:</Text>
                            <Text style={styles.dataField}>{this.state.storedDateTime}</Text>
                        </View>

                        <View style={styles.dataPackage}>
                            <Text style={styles.dataField}>Steps:</Text>
                            <Text style={styles.dataField}>{this.state.storedSteps}</Text>
                        </View>

                        <View style={styles.dataPackage}>
                            <Text style={styles.dataField}>Battery:</Text>
                            <Text style={styles.dataField}>{this.state.storedBattery + ' %'}</Text>
                        </View>

                        <View style={styles.dataPackage}>
                            <Text style={styles.dataField}>Device Bond Level:</Text>
                            <Text style={styles.dataField}>{this.state.storedDeviceBondLevel}</Text>
                        </View>
                    </View>
                </View>
                
                <View style={styles.package}>
                    <Text style={styles.tabHeader}></Text>
                </View>

                <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonEnabled} onPress={() => {this.sendDataToServer()}}>
                            <Text style={styles.buttonText}>Send Data</Text>
                        </TouchableOpacity>
                </View>
            </View>
        );
    }

}