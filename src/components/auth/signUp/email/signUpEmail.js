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
      name: '',
      passwordValue: '',
      areFieldsFilled: false
    }
    
  }

  signUp = async () => {
    try {
      accountRequestsObj = new AccountRequests()
      const status = await accountRequestsObj.signUp(this.state.emailValue, this.state.name, this.state.passwordValue)
      console.debug('signUpEmail.js [signUp]: SignUp status finished ' + status)
      if (status) {
        this.props.navigation.navigate('MainMenu')
      } else {
        this.refs.toast.show('SignUp failed...', 1000);
      }
    } catch (error) { console.error("signUpEmail.js [signUp]: " + error) }
  }

  areFieldsFilled(){
    return this.state.emailValue != '' && this.state.passwordValue != '' // && this.state.name != ''
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
              placeholder='Name'
              placeholderTextColor= "#BDBDBD"
              name='name'
              type='text'
              id='name'
              secureTextEntry={true}
              value={this.state.name}
              onFocus={() => this.setState({ areFieldsFilled: false})}
              onChangeText={(name) => this.setState({name})}
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