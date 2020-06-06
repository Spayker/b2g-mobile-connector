import React from 'react'
import {View, Image, Text} from 'react-native';
import FastImage from 'react-native-fast-image'
import ReactNativeSettingsPage, { NavigateRow } from 'react-native-settings-page';
import styles from './styles';

export default class Account extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            picture: null
        }
    }

    render() {
        return (
            <ReactNativeSettingsPage>

                <View style={styles.container}>
                    
                    {this.state.picture === null ? (   
                        <Image style={styles.image} source={require('../../../../resources/user_pick.png')} />    
                    ) : (
                        <FastImage style={styles.image}
                            source={{
                                uri: this.state.picture, 
                                priority: FastImage.priority.high,
                            }}
                            resizeMode={FastImage.resizeMode.contain} 
                        />
                    )}
                    
                    <Text style={styles.contentTextHeader}>username</Text>
                    <Text style={styles.contentTextDescription}>user mailbox</Text>
                </View>

                <NavigateRow style={styles.contentTextHeader}
                    text='Height'
                    iconName='arrows-v'
                    onPressCallback={() => {console.log()}} />

                <NavigateRow style={styles.navigationRow}
                    text='Weight'
                    iconName='cubes'
                    onPressCallback={() => {console.log()}} />
                
                <NavigateRow style={styles.navigationRow}
                    text='Gender'
                    iconName='intersex'
                    onPressCallback={() => {console.log()}} />

                <NavigateRow style={styles.navigationRow}
                    text='Age'
                    iconName='calendar'
                    onPressCallback={() => {console.log()}} />
                
                <NavigateRow style={styles.navigationRow}
                    text='Log out'
                    iconName='sign-out'
                    onPressCallback={() => {console.log()}} />

            </ReactNativeSettingsPage>
        );
    }

}