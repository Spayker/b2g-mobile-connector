import React from 'react'
import { FlatList, View, Image, Text, TouchableOpacity} from 'react-native'
import DeviceConnector from '../deviceList/deviceConnector'
import styles from "./styles"

const deviceConnector = DeviceConnector.getInstance()

/**
 * Home tab serves to show first and main tab with currently registered trainings.
 *
 */
export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            trainings: [
                {
                    'id':        0,
                    'type':      'cycling',
                    'duration':  '300s',
                    'callories': '2500',
                    'dateTime':  '06/11/2020'
                },
                {
                    'id':        1,
                    'type':      'cycling',
                    'duration':  '200s',
                    'callories': '1500',
                    'dateTime':  '06/12/2020'
                },
                {
                    'id':        2,
                    'type':      'cycling',
                    'duration':  '400s',
                    'callories': '3500',
                    'dateTime':  '06/13/2020'
                }

            ],
            steps: 0
        }
    }

    sendData(training){
        this.props.navigation.navigate('ServiceMenu', { training: training })
    }

    addTrainings = async () => {
        await deviceConnector.getDeviceInfo(this)
    }

    updateTrainingList(){
        const date = new Date().getDate()
        const month = new Date().getMonth() + 1
        const year = new Date().getFullYear()

        const newTraining = {
            id: Math.floor(Math.random() * 100) + 1,
            type: 'cycling',
            duration: Math.floor(Math.random() * 100) + 1,
            steps: this.state.steps,
            dateTime: date + '/' + month + '/' + year
        }

        this.setState({trainings: [...this.state.trainings, newTraining]})
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    data={this.state.trainings}
                    renderItem={
                        ({item}) => 

                        item.id === undefined ? (
                            <View/>
                        ) : (
                            <TouchableOpacity style={styles.listTrainingContainer} onPress={(item) => this.sendData(item)}>

                                {
                                    item.type === 'cycling' ? (
                                        <Image style={styles.image} source={require('../../../../resources/cycling.png')} />
                                    ) : (
                                        <Image style={styles.image} source={require('../../../../resources/jogging.png')} />
                                    )
                                }
                                
                                <View style={styles.listTrainingColumnData}>
                                    <Text style={styles.item}>Duration</Text>
                                    <Text style={styles.item}>{item.duration}</Text>
                                </View>
                                <View style={styles.listTrainingColumnData}>
                                    <Text style={styles.item}>Steps</Text>
                                    <Text style={styles.item}>{item.steps}</Text>
                                </View>
                                <View style={styles.listTrainingColumnData}>
                                    <Text style={styles.item}>Date/Time</Text>
                                    <Text style={styles.item}>{item.dateTime}</Text>
                                </View>

                            </TouchableOpacity>
                        )
                    }
                    />
                <TouchableOpacity
                        style={styles.addTrainingButton}
                        onPress={() => this.addTrainings()}>
                        <Text style={styles.discoverDevicesButtonText}>Add Trainings</Text>
                </TouchableOpacity>
            </View>
        );
    }

}