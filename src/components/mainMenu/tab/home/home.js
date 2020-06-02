import React from 'react'
import {View, Image, Text} from 'react-native';
import styles from "./styles.js";

export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        
        }
    }

    render() {
        return (
            <View style={styles.container}/>
        );
    }

}