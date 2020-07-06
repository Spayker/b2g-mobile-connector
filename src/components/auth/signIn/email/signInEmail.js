import React from 'react'
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native'
import StorageManager from '../../../common/storage/StorageManager'
import AccountRequests from '../../../common/rest/accountRequests'
import Toast from 'react-native-easy-toast'
import styles from '../../styles'

export default class SignInEmail extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      emailValue: '',
      passwordValue: '',
      storageManager: new StorageManager()    
    }
    
  }

  componentDidMount = async () => { 
    await this.state.storageManager.initDeviceData()
    await this.state.storageManager.initServiceData()
    await this.state.storageManager.initAccountData()
    
    this.setState({emailValue: await this.state.storageManager.getAccountEmail()})
    this.setState({passwordValue: await this.state.storageManager.getAccountPassword()})
  }

  signIn = async () => {
    try {
      var accountRequestsObj = new AccountRequests()
      const status = await accountRequestsObj.getAccessToken(this.state.emailValue, this.state.passwordValue)
      console.debug('signInEmail.js [signIn]: SignIn status finished ' + status)
      if (status) {
        this.props.navigation.navigate('MainMenu')
      } else {
        this.refs.toast.show('SignIn failed...', 1000);
      }
    } catch (error) { console.error("signInEmail.js [signIn]: " + error) }
  }

  removeSpaces = (str) =>  { return str.replace(/\s/g,'') }

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

            <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => this.signIn()}>
                    <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

          </View>
          
          <View style={styles.textAreaLoginLink}>
            <Text style={styles.link} onPress={() => {this.props.navigation.navigate('SignUpEmail')}}>Do not have an account?</Text>
          </View>

          <Toast ref="toast" positionValue={150}/>

        </View>
    );
  }
}