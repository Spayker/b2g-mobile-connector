import { createStackNavigator } from 'react-navigation-stack';
import Intro from '../../intro/intro';
import SignUpEmail from '../../auth/signUp/email/signUpEmail';


const AppNavigator = createStackNavigator({
  Intro: {
    screen: Intro,
    navigationOptions: { header: null }
  },
  SignUpEmail: {
    screen: SignUpEmail,
    navigationOptions: { header: null }
  },
  
  initialRouteName: 'Intro'
});

export default AppNavigator;