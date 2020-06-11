import React from 'react'
import { FlatList, View, Image, Text, TouchableOpacity, Switch } from 'react-native'
import styles from './styles'


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
            isConnectedWithMiBand: false
        }
    }

    sendTraining = () => {
        console.log()
    }

    doSmt = () => {}

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

            </View>
        );
    }
}