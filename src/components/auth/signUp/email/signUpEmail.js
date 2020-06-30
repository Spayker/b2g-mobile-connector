import React from 'react'
import { Button, View, Image, Text, TextInput, TouchableOpacity } from 'react-native'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
// import AsyncStorage from '@react-native-community/async-storage'
import AccountRequests from '../../../common/rest/accountRequests'
import styles from '../../styles.js'

export default class SignUpEmail extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      emailValue: '',
      passwordValue: '',
      //confirmPasswordValue: '',
      areFieldsFilled: false
    }
    
  }

  signUp(){
    accountRequestsObj = new AccountRequests()
    // this.props.navigation.navigate('MainMenu')
  }

  areFieldsFilled(){
    return this.state.emailValue != '' && this.state.passwordValue != '' // && this.state.confirmPasswordValue != ''
  }

  removeSpaces = (str) => { return str.replace(/\s/g, '') }

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
              value={this.removeSpaces(this.state.emailValue)}
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
              value={this.state.passwordValue}
              onFocus={() => this.setState({ areFieldsFilled: false})}
              onChangeText={(passwordValue) => this.setState({passwordValue})}
              onSubmitEditing={() => this.setState({areFieldsFilled: this.areFieldsFilled()})}/>

            {/* <TextInput
              style={styles.dataInputText}
              editable={true}
              placeholder='Confirm Password'
              placeholderTextColor= "#BDBDBD"
              name='confirmPassword'
              type='password'
              id='confirmPassword'
              secureTextEntry={true}
              value={this.state.confirmPasswordValue}
              onFocus={() => this.setState({ areFieldsFilled: false})}
              onChangeText={(confirmPasswordValue) => this.setState({confirmPasswordValue})}
              onSubmitEditing={() => this.setState({areFieldsFilled: this.areFieldsFilled()})}/> */}

            <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => this.signUp()}>
                    <Text style={styles.loginButtonText}>SignUp</Text>
            </TouchableOpacity>

          </View>
          
          <View style={styles.textAreaSignUpLink}>
            <Text style={styles.link} onPress={() => {this.props.navigation.navigate('SignInEmail')}}>Already have an account?</Text>
          </View>

        </View>
    );
  }
}