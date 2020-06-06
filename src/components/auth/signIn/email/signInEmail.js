import React from 'react'
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import AsyncStorage from '@react-native-community/async-storage';
import styles from "../../styles";

export default class SignInEmail extends React.Component {

  doSomeStuff(){

  }

  render() {
    return (
        <View style={styles.imageBackground} >

          <Image style={styles.image} source={require('../../../../resources/b2gm_logo.png')} />
          
          <Text style={styles.textHeader}>B2G</Text>

          <View style={styles.container}>

            <TextInput
              style={styles.dataInputText}
              editable={true}
              placeholder='E-mail'
              placeholderTextColor= "#BDBDBD"
              name="email"
              type="email"
              id="email"
              //value={this.removeSpaces(this.state.emailValue)}
              onFocus={() => this.setState({ areFieldsFilled: false})}
              onChangeText={(emailValue) => this.setState({emailValue: this.removeSpaces(emailValue)})}
              onSubmitEditing={() => this.setState({areFieldsFilled: this.areFieldsFilled()})}/>

            <TextInput
              style={styles.dataInputText}
              editable={true}
              placeholder='Password'
              placeholderTextColor= "#BDBDBD"
              name='password'
              type='password'
              id='password'
              secureTextEntry={true}
              //value={this.state.passwordValue}
              onFocus={() => this.setState({ areFieldsFilled: false})}
              onChangeText={(passwordValue) => this.setState({passwordValue})}
              onSubmitEditing={() => this.setState({areFieldsFilled: this.areFieldsFilled()})}/>

            <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => this.props.navigation.navigate('MainMenu')}>
                    <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

          </View>
          
          <View style={styles.textAreaLoginLink}>
            <Text style={styles.link} onPress={() => {this.props.navigation.navigate('SignUpEmail')}}>Do not have an account?</Text>
          </View>

        </View>
    );
  }
}