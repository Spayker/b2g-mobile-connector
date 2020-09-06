import React from 'react'
import { FlatList, View, Image, Text, TouchableOpacity, Switch } from 'react-native'
import StorageManager from '../common/storage/StorageManager'
import TrainingRequests from '../common/rest/trainingRequests'
import Toast from 'react-native-easy-toast'
import styles from './styles'

/**
 * Service menu allows to select service(s) and transfer training data there.
 */
export default class ServiceMenu extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            services: [
                {
                    'name':         'GE Wasp Server',
                    'description':  'CTI related community',
                    'enabled':      true
                },
                {
                    'name':         'RU Wasp Server',
                    'description':  'CTI related community',
                    'enabled':      false
                },
            ],
            training: [],
            isConnectedWithMiBand: false,
            storageManager: new StorageManager()
        }
    }

    sendTraining = async () => {
        try {
            var trainingRequestsObj = new TrainingRequests()
            const userName = await this.state.storageManager.getAccountEmail()
            const token = await this.state.storageManager.getAccountToken()

            const status = await trainingRequestsObj.sendTrainingData(userName, token)
            console.debug('serviceMenu.js [sendTraining]: SignIn status finished ' + status)
            if (status) {
              this.props.navigation.navigate('MainMenu')
            } else {
              this.refs.toast.show('Training send failed...', 1000);
            }
          } catch (error) { console.error("serviceMenu.js [sendTraining]: " + error) }
    }

    doSmt = () => {}

    componentDidMount = async () => {
        const receivedTraining = this.props.navigation.getParam('training', [])
        await this.setState({training: receivedTraining})
        console.debug('serviceMenu.js [componentDidMount]: received training - ' + this.state.training)
    }

    render() {
        return (
            <View style = {styles.container}>
                <FlatList
                    data = {this.state.services}
                    renderItem = {
                        ({item}) => 
                            item.name === undefined ? (
                                <View/>
                            ) : (
                                <View style={styles.listTrainingContainer}>
                                    {/* <Image style={styles.image} source={require('../../../../resources/watch.png')} /> */}
                                    <View style={styles.listTrainingColumnData}>
                                        <Text style={styles.item}>{item.name}</Text>
                                        <Text style={styles.item}>{item.description}</Text>
                                    </View>

                                    <Switch trackColor={{ false: "#767577", true: "#24C324" }}
                                            thumbColor={{ false: "#767577", true: "#24C324"}}
                                            onValueChange = {() => this.doSmt()}
                                            value = {item.enabled}/>
                                </View>
                            )
                    }
                    keyExtractor={item => item.name}
                />

                <TouchableOpacity
                        style={styles.loginButton}
                        onPress={() => this.sendTraining()}>
                        <Text style={styles.searchButtonText}>Send</Text>
                </TouchableOpacity>

                <Toast ref="toast" positionValue={150}/>

            </View>
        );
    }
}