import React from 'react'
import { FlatList, View, Image, Text, TouchableOpacity } from 'react-native'
import StorageManager from '../../../common/storage/StorageManager'
import DeviceConnector from './deviceConnector'
import styles from './styles'

const storageManager  = StorageManager.getInstance()
const deviceConnector = DeviceConnector.getInstance()

export default class DeviceList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            foundDevices: [],
            isConnectedWithMiBand: false
        }
    }

    discoverDevices = () => {
        deviceConnector.discoverDevices(this)
    }

    linkWithDevice = (macAddress) => {
        deviceConnector.linkWithDevice(this, macAddress)
    }

    componentDidMount = async () => { 
        this.setState({foundDevices: JSON.parse(await storageManager.getFoundDevices())})       
    }

    render() {
        return (
            <View style = {styles.container}>
                <FlatList
                    data = {this.state.foundDevices}
                    renderItem = {
                        ({item}) => 
                            item.deviceName === undefined ? (
                                <View/>
                            ) : (
                                <View style={styles.listTrainingContainer}>
                                    <Image style={styles.image} source={require('../../../../resources/watch.png')} />
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
                        onPress={() => this.discoverDevices()}>
                        <Text style={styles.searchButtonText}>Search</Text>
                </TouchableOpacity>

            </View>
        );
    }

}