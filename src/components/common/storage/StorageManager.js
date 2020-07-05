import React from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import globals from '../globals'


export default class StorageManager extends React.Component {

    static instance = null;

    static getInstance() {
        if (StorageManager.instance == null) {
            StorageManager.instance = new StorageManager()
        }

        return this.instance;
    }

    getFoundDevices = async () => {
        return await AsyncStorage.getItem(globals.DEVICES_KEY)
    }

    storeDevices = async (foundDevices) => {
        try {
            let multiDataSet = [
                [globals.DEVICES_KEY, JSON.stringify(foundDevices)]
            ];
            await AsyncStorage.multiSet(multiDataSet);
            const savedDevices = await AsyncStorage.getItem(globals.DEVICES_KEY)
            console.log('savedDevices: ' + savedDevices)
        } catch (error) { console.debug('couldn\'t save devices to storage because of: ' + error) }
    }

    getPairedDevices = async () => {
        return await AsyncStorage.getItem(globals.PAIRED_DEVICES_KEY)
    }

    storePairedDevices = async (macAddress) => {
        try {
            let multiDataSet = [
                [globals.PAIRED_DEVICES_KEY, macAddress]
            ];
            await AsyncStorage.multiSet(multiDataSet);
            const savedPairedDevices = await AsyncStorage.getItem(globals.PAIRED_DEVICES_KEY)
            console.log('savedPairedDevices: ' + savedPairedDevices)
        } catch (error) { console.debug('couldn\'t save paired devices to storage because of: ' + error) }
    }

    initDeviceData = async () => {
        const foundDevices = await AsyncStorage.getItem(globals.DEVICES_KEY);
        console.debug('foundDevices: ' + foundDevices)
        if (foundDevices === null) {
            try {
                let multiDataSet = [
                    [globals.DEVICES_KEY, JSON.stringify([])]
                ];
                await AsyncStorage.multiSet(multiDataSet);
            } catch (error) { console.debug('couldn\'t save devices to storage because of: ' + error) }
        }
    }

    initServiceData = async () => {
        const foundServices = await AsyncStorage.getItem(globals.SERVICES_KEY);
        console.debug('foundServices: ' + foundServices)
        if (foundServices === null) {
            try {
                let multiDataSet = [
                    [globals.SERVICES_KEY, JSON.stringify([])]
                ];
                await AsyncStorage.multiSet(multiDataSet);
            } catch (error) { console.debug('couldn\'t save services to storage because of: ' + error) }
        }
    }

    initAccountData = async () => {
        const foundAccounts = await AsyncStorage.getItem(globals.ACCOUNTS_KEY);
        console.debug('foundAccounts: ' + foundAccounts)
        if (foundAccounts === null) {
            try {
                let multiDataSet = [
                    [globals.ACCOUNTS_KEY, JSON.stringify([])]
                ];
                await AsyncStorage.multiSet(multiDataSet);
            } catch (error) { console.debug('couldn\'t save accounts to storage because of: ' + error) }
        }
    }

    getAccountEmail = async () => {
        return await AsyncStorage.getItem(globals.USERNAME_TOKEN_KEY)
    }

    getAccountPassword = async () => {
        return await AsyncStorage.getItem(globals.ACCOUNT_PASSWORD_KEY)
    }



}