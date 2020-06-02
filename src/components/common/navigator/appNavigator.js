import { createStackNavigator } from 'react-navigation-stack';
import Intro from '../../intro/intro';


const AppNavigator = createStackNavigator({
  Intro: {
    screen: Intro,
    navigationOptions: {
      header: false,
    }
  },
  // SignInEmail: {screen: SignInEmail},
  // SignUpEmail: {screen: SignUpEmail},
  // AddNewDevice: {
  //   screen: AddNewDevice, 
  //   navigationOptions: { title: 'Volme' } 
  // },
  // ActivateDevice: { screen: ActivateDevice },
  // QrCodeScannerIntro: { screen: QrCodeScannerIntro },
  // QrCodeScannerOutro: { screen: QrCodeScannerOutro },
  // QrCodeScannerFailedOutro: { screen: QrCodeScannerFailedOutro },
  // ScanScreen: {
  //   screen: ScanScreen, 
  //   navigationOptions: { header: null }
  // },
  // MainMenu: {
  //   screen: MainMenu,
  //   navigationOptions: { header: null }
  // },
  // Profile:{
  //   screen: Profile, 
  //   navigationOptions: { header: null }
  // },
  // EditProfile:{ screen: EditProfile },
  // ChangePassword:{ screen: ChangePassword },
  initialRouteName: 'Intro'
});

export default AppNavigator;