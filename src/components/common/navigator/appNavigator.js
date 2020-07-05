import { createStackNavigator } from 'react-navigation-stack'
import SignInEmail from '../../auth/signIn/email/signInEmail'
import SignUpEmail from '../../auth/signUp/email/signUpEmail'
import MainMenu from '../../mainMenu/mainMenu'
import ServiceMenu from '../../service/serviceMenu'


const AppNavigator = createStackNavigator({
  SignInEmail: {
    screen: SignInEmail,
    navigationOptions: { header: null }
  },
  SignUpEmail: {
    screen: SignUpEmail,
    navigationOptions: { header: null }
  },
  ServiceMenu: {
    screen: ServiceMenu,
    navigationOptions: { header: null }
  },
  MainMenu: {
    screen: MainMenu,
    navigationOptions: { header: null }
  },
  initialRouteName: 'SignInEmail'
});

export default AppNavigator;