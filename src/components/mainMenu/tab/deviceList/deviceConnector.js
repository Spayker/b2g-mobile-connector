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

    linkWithDevice = (deviceList, macAddress) => {
        NativeModules.DeviceConnector.linkWithDevice(macAddress, (error, data) => {
            deviceList.setState({ deviceBondLevel: data})
            deviceList.setState({ isConnectedWithMiBand: true})
        })
    }



}