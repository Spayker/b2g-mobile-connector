import React from 'react'
import { FlatList, View, Image, Text} from 'react-native';
import { TrainingItem } from '../../../listView/item/training/trainingItem'
import styles from "./styles";

export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: '300s'},
                        {key: '400s'},
                        {key: '500s'},
                        {key: '600s'},
                        {key: '700s'},
                        {key: '800s'},
                        {key: '900s'},
                        {key: '200s'},
                        {key: '100s'},
                        {key: '10s'}
                    ]}
                    renderItem={
                        ({item}) => 
                            <View style={styles.listTrainingContainer}>
                                <Image style={styles.image} source={require('../../../../resources/cycling.png')} />
                                <View style={styles.listTrainingColumnData}>
                                    <Text style={styles.item}>Duration</Text>
                                    <Text style={styles.item}>{item.key}</Text>
                                </View>
                                <View style={styles.listTrainingColumnData}>
                                    <Text style={styles.item}>Callories</Text>
                                    <Text style={styles.item}>{item.key}</Text>
                                </View>
                                <View style={styles.listTrainingColumnData}>
                                    <Text style={styles.item}>Date/Time</Text>
                                    <Text style={styles.item}>{item.key}</Text>
                                </View>
                            </View>
                        
                    }
                    />
            </View>
        );
    }

}