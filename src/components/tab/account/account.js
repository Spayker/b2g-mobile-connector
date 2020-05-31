import React from 'react'
import {Button, View, Image, TextInput} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import globals from '../../common/globals.js'
import AccountRequests from "../../common/rest/accountRequests.js"
import styles from "./styles.js";

export default class Account extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            accountName: 'spayker',
            email: 'spykerstar@gmail.com',
            password: 'qwerty'
        }
    }

    signUp = () => {
        accountRequestsObj = new AccountRequests();
        accountRequestsObj.signUp(this.state.accountName, this.state.email, this.state.password)
        this.updateAuthStatus()
    }

    updateAuthStatus = async () => {
        try {
            const accessToken = await AsyncStorage.getItem(globals.ACCESS_TOKEN_KEY);
            console.log('AceesToken: ' + accessToken)
            if (accessToken !== null) {
                this.setState({status: globals.AUTHORIZED_STATE})
            } else {
                this.setState({status: globals.UNAUTHORIZED_STATE})
            }
        } catch (error) { console.log(error) }
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.editPhotoPackage}>
                    <View style={styles.spacing}/>
                    <Image style={styles.image} source={require('../../../resources/galaxy_scaled.png')} />
                </View>

                <View style={styles.inputPackage}>

                    <TextInput
                        style={styles.dataInputText}
                        editable={true}
                        placeholder='Enter Your Name'
                        name='name'
                        type='name'
                        id='name'
                        value={this.state.accountName}
                        onChangeText={(accountName) => this.setState({accountName})} />

                    <TextInput
                        style={styles.dataInputText}
                        editable={true}
                        placeholder='Enter Your Email'
                        name='email'
                        type='email'
                        id='name'
                        value={this.state.email}
                        onChangeText={(email) => this.setState({email})} />

                    <TextInput
                        style={styles.dataInputText}
                        editable={true}
                        placeholder='Enter Your Password'
                        name='password'
                        type='password'
                        id='password'
                        value={this.state.password}
                        onChangeText={(password) => this.setState({password})} />

                </View>

                <Button style={styles.saveButton} title='Sign Up' onPress={() => { this.signUp() }}/>

            </View>
        )}



}