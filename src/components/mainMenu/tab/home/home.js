import React from 'react'
import { FlatList, View, Image, Text, TouchableOpacity} from 'react-native'
import styles from "./styles";

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
                },

            ]
        }
    }

    doSmt(training){
        this.props.navigation.navigate('')
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
                            <TouchableOpacity style={styles.listTrainingContainer} onPress={(item) => this.doSmt()}>

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
                                    <Text style={styles.item}>Callories</Text>
                                    <Text style={styles.item}>{item.callories}</Text>
                                </View>
                                <View style={styles.listTrainingColumnData}>
                                    <Text style={styles.item}>Date/Time</Text>
                                    <Text style={styles.item}>{item.dateTime}</Text>
                                </View>

                            </TouchableOpacity>
                        )


                            
                        
                    }
                    />
            </View>
        );
    }

}