import React from 'react'
import { FlatList, View, Image, Text, Button } from 'react-native';
import styles from './styles';

export default class DeviceList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        {
                            deviceName: 'Device 1',
                            deviceMac:  '00:11:22:33:44:55'
                        },
                        {
                            deviceName: 'Device 2',
                            deviceMac:  '00:11:22:33:44:55'
                        },
                        {
                            deviceName: 'Device 3',
                            deviceMac:  '00:11:22:33:44:55'
                        },
                        {
                            deviceName: 'Device 4',
                            deviceMac:  '00:11:22:33:44:55'
                        },
                        {
                            deviceName: 'Device 5',
                            deviceMac:  '00:11:22:33:44:55'
                        },
                        {
                            deviceName: 'Device 6',
                            deviceMac:  '00:11:22:33:44:55'
                        },
                        {
                            deviceName: 'Device 7',
                            deviceMac:  '00:11:22:33:44:55'
                        },
                        {
                            deviceName: 'Device 8',
                            deviceMac:  '00:11:22:33:44:55'
                        },
                        {
                            deviceName: 'Device 9',
                            deviceMac:  '00:11:22:33:44:55'
                        },
                        {
                            deviceName: 'Device 0',
                            deviceMac:  '00:11:22:33:44:55'
                        }
                    ]}
                    renderItem={
                        ({item}) => 
                            <View style={styles.listTrainingContainer}>
                                <Image style={styles.image} source={require('../../../../resources/watch.png')} />
                                <View style={styles.listTrainingColumnData}>
                                    <Text style={styles.item}>{item.deviceName}</Text>
                                    <Text style={styles.item}>{item.deviceMac}</Text>
                                </View>
                                <Button 
                                    title='Link' 
                                    onPress={() => console.console.log()}/>
                            </View>
                        
                    }
                    />
            </View>
        );
    }

}