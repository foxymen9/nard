'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Keyboard,
  findNodeHandle,  
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Drawer from 'react-native-drawer';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PhoneInput from 'react-native-phone-input';

import * as commonColors from '../../styles/commonColors';
import { screenWidth, screenHeight, statusBar, navBar, subWidth, inputMargin  } from '../../styles/commonStyles';
import Menu from '../Menu';
import language from '../../utils/language/language';

import { saveMenuSelectedID } from '../Menu/actions';

const logo = require('../../../assets/imgs/main/logo_color.png');
const menu = require('../../../assets/imgs/main/menu.png');
const back = require('../../../assets/imgs/background/back.png');

class ForgotPasswordPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuStatus: false,
    };
  }

  onBack() {
    Actions.pop();
  }

  render() {
    return (
        <View style={ styles.container } >
          <View style={ styles.navBar } >
            <TouchableOpacity
              activeOpacity={ .5 }
              onPress={ () => this.gotoLoginPage() }
            >
              <View>
                <Text style={styles.logoText} >CONTACT US</Text>
                  <TouchableOpacity
                    activeOpacity={ .5 }
                    style={ styles.back }
                    onPress={ () => this.onBack() }
                  >
                    <View >
                      <Image source={ back } resizeMode="contain" style={styles.backIcon} />  
                    </View>
                  </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.border} />
          <View style={ styles.container } >
            <View style={styles.profile}>
              <Text style={styles.text}>Saudi Arabia</Text>
              <Text style={styles.text}>Grenada Business Park A4, 12th floor - Riyadh Kingdom of Saudi Arabia</Text>
              <Text style={styles.text}><Text style={styles.textBold}>Mobile: </Text>+966.55.86.77.3</Text>
              <Text style={styles.text}><Text style={styles.textBold}>Tel: </Text>+966.55.86.77.3</Text>
              <Text style={styles.text}><Text style={styles.textBold}>E-mail: </Text>info@nard.sa</Text>
              <Text style={styles.text}><Text style={styles.textBold}>Web: </Text>www.nard.sa</Text>
            </View>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  navBar: {
    backgroundColor: commonColors.title,
    flexDirection: 'row',
    paddingTop: statusBar,
    height: navBar-2,
    width: screenWidth,
  },
  border: {
    height: 2,
    width: screenWidth,
    backgroundColor: commonColors.separateGray,
  },
  logo: {
    width: screenWidth,
    alignItems: 'center',
  },
  logoText: {
    width: screenWidth,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 19,
    marginTop: 20,
  },
  back: {
    left: 0,
    paddingLeft: 20,
    paddingTop: 20,
    position: 'absolute',
    width: 50,
    height: 50,
  },
  container: {
    flex: 1,
    width: screenWidth,
    height: screenHeight - navBar,
    backgroundColor: commonColors.title,
    alignItems: 'center',
  },
  profile: {
    width: subWidth,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  textBold: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  text: {
    lineHeight: 30,
    fontSize: 20,
  },
});

export default connect(state => ({
}),{ })(ForgotPasswordPage);