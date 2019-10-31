import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {Router, Scene, Actions, Drawer} from 'react-native-router-flux';

import Login from './src/pages/Login';
import List from './src/pages/List';
import Menu from './src/pages/Menu'
const {width, height} = Dimensions.get('window');
class Root extends Component {
  render() {
    return (
      <Router navigationBarStyle={styles.navBar}>
        <Scene hideNavBar key="Root">
          <Scene key="Login" initial component={Login} hideNavBar />

          
          <Drawer 
                        drawerWidth={(width/2)+50}
                        drawerImage={require('./src/img/menu.png')}
                        drawerPosition='left'
                         key="LastScreen"
                        contentComponent={Menu}
                     
                          >
                       <Scene key="List" component={List} hideNavBar />
                          </Drawer>
        </Scene>
      </Router>
    );
  }
}
const styles = {
  navBar: {
    backgroundColor: '#6704AA',
  },
};
export default Root;
