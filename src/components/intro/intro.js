import React from 'react'
import { Button, View, Image, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import AsyncStorage from '@react-native-community/async-storage';
import styles from "./styles.js";

export default class Intro extends React.Component {

  doSomeStuff(){

  }

  render() {
    return (
        <View style={styles.imageBackground} >

          <Image style={styles.image} source={require('../../resources/b2gm_logo.png')} />
          
          <View style={styles.container}>

            <TextInput
              style={styles.dataInputText}
              editable={true}
              placeholder='E-mail'
              name="email"
              type="email"
              id="email"
              //value={this.removeSpaces(this.state.emailValue)}
              onFocus={() => this.setState({ areFieldsFilled: false})}
              onChangeText={(emailValue) => this.setState({emailValue: this.removeSpaces(emailValue)})}
              onSubmitEditing={() => this.setState({areFieldsFilled: this.areFieldsFilled()})}
            />

            <TextInput
                  style={styles.dataInputText}
                  editable={true}
                  placeholder='Password'
                  name='password'
                  type='password'
                  id='password'
                  secureTextEntry={true}
                  //value={this.state.passwordValue}
                  onFocus={() => this.setState({ areFieldsFilled: false})}
                  onChangeText={(passwordValue) => this.setState({passwordValue})}
                  onSubmitEditing={() => this.setState({areFieldsFilled: this.areFieldsFilled()})}
                />

            <Button name="Login" title="Login" style={styles.loginButton} onPress={() => {this.doSomeStuff()}}/>

          </View>
          
          <View style={styles.textArea}>
            <Text style={styles.text}>Already have an account?</Text>
            <Text style={styles.link} onPress={() => {this.doSomeStuff()}}> Login</Text>
          </View>

        </View>
    );
  }
}