import React from 'react'
import { NativeModules } from 'react-native'
import StorageManager from '../../../common/storage/StorageManager'

const storageManager  = StorageManager.getInstance()

export default class DeviceConnector extends React.Component {

    static instance = null;

    static getInstance() {
        if (DeviceConnector.instance == null) {
            DeviceConnector.instance = new DeviceConnector();
        }
        return this.instance;
    }

    constructor(props) {
        super(props)
        this.state = {
            foundDevices: [],
        }
    }

    discoverDevices = (deviceList) => {
        NativeModules.DeviceConnector.discoverDevices((error, data) => {
            const converteddata = [data]
            console.debug('deviceConnector.js [discoverDevices]: received data - ' + JSON.stringify(converteddata))
            deviceList.setState({foundDevices: converteddata})
            storageManager.storeDevices(converteddata)
        })
    }

    linkWithDevice = async (deviceList, macAddress) => {
        const pairedMacAddress = await storageManager.getPairedDevices()
        console.debug('deviceConnector.js [linkWithDevice]: macAddress - ' + macAddress)
        console.debug('deviceConnector.js [linkWithDevice]: paired MAC address - ' + pairedMacAddress)
        let isPaired = false
        if(macAddress === pairedMacAddress){
            isPaired = true
        }

        console.debug('deviceConnector.js [linkWithDevice]: isPaired - ' + isPaired)

        NativeModules.DeviceConnector.linkWithDevice(macAddress, isPaired, (error, data) => {
            deviceList.setState({ deviceBondLevel: data})
            deviceList.setState({ isConnectedWithMiBand: true})
            storageManager.storePairedDevices(macAddress)
        })
    }

    unlinkBluetoothDevice = (deviceList) => {
        NativeModules.DeviceConnector.disconnectDevice( (error, deviceBondLevel) => {
            deviceList.setState({ deviceBondLevel: deviceBondLevel});
            deviceList.setState({ isConnectedWithMiBand: false})
        })
    }

    getDeviceInfo(deviceList) {
        NativeModules.InfoReceiver.getInfo((error, steps, battery) => {
            console.debug('deviceConnector.js [getDeviceInfo]: steps - ' + steps)
            console.debug('deviceConnector.js [getDeviceInfo]: battery - ' + battery)
            deviceList.setState({ steps: steps})
            deviceList.updateTrainingList()
        })
    }



}