import React from 'react'
import { FlatList, View, Image, Text, TouchableOpacity } from 'react-native'
import styles from './styles'


export default class ServiceMenu extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            services: [],
            isConnectedWithMiBand: false
        }
    }

    sendTraining = () => {
        console.log()
    }

    render() {
        return (
            <View style = {styles.container}>
                <FlatList
                    data = {this.state.services}
                    renderItem = {
                        ({item}) => 
                            item.deviceName === undefined ? (
                                <View/>
                            ) : (
                                <View style={styles.listTrainingContainer}>
                                    {/* <Image style={styles.image} source={require('../../../../resources/watch.png')} /> */}
                                    <View style={styles.listTrainingColumnData}>
                                        <Text style={styles.item}>{item.deviceName}</Text>
                                        <Text style={styles.item}>{item.deviceMac}</Text>
                                    </View>

                                    {this.state.isConnectedWithMiBand ? (
                                        <TouchableOpacity style={styles.itemButtonEnabled} onPress={() => this.unlinkBluetoothDevice()}>
                                            <Text style={styles.buttonText}>Unlink</Text>
                                        </TouchableOpacity>
                                    ) : (
                                        item.deviceName === 'Unknown Device' ? (
                                            <TouchableOpacity style={styles.itemButtonDisabled} disabled={true}>
                                                <Text style={styles.buttonText}>Link</Text>
                                            </TouchableOpacity>
                                        ) : (
                                            <TouchableOpacity style={styles.itemButtonEnabled} onPress={() => this.linkWithDevice(item.deviceMac)}>
                                                <Text style={styles.buttonText}>Link</Text>
                                            </TouchableOpacity>
                                        )
                                    )}
                                </View>
                            )
                    }
                    keyExtractor={item => item.deviceMac}
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