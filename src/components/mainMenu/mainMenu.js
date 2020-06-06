import React from 'react'
import { View } from 'react-native';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation'
import Home from './tab/home/home';
import DeviceList from './tab/deviceList/deviceList';
import Account from './tab/account/account';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class MainMenu extends React.Component {

  tabs = [
    {
      key: 'home',
      icon: 'home',
      label: 'Home',
      barColor: '#040d14',
      pressColor: '#24C324'
    },
    {
      key: 'deviceList',
      icon: 'watch',
      label: 'Devices',
      barColor: '#040d14',
      pressColor: '#24C324'
    },
    {
      key: 'account',
      icon: 'account',
      label: 'Account',
      barColor: '#040d14',
      pressColor: '#24C324'
    }
  ]

  state = {
    activeTab: this.tabs[0].key
  }

  renderIcon = icon => ({ isActive }) => (
      <Icon size={24} style={{ color: isActive ? '#24C324' : 'white' }} name={icon} />
  )
 
  renderTab = ({ tab, isActive }) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      labelStyle={{ color: isActive ? '#24C324' : 'white' }}
      renderIcon={this.renderIcon(tab.icon)}
    />
  )

  render() {
    return (
        <View style={{ flex: 1 }}>
          
          <View style={{ flex: 1 }}>            
            {
              this.state.activeTab == 'home' &&
                <Home/>
            }
            {
              this.state.activeTab == 'deviceList' &&
                <DeviceList/>
            }
            {
              this.state.activeTab == 'account' &&
                <Account/>
            }
          </View>
          
          <BottomNavigation
            onTabPress={newTab => this.setState({ activeTab: newTab.key })}
            activeTab={this.state.activeTab}
            renderTab={this.renderTab}
            tabs={this.tabs}/>
        </View>
    );
  }
}