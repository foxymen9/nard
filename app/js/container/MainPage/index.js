'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert,
  Keyboard,
  findNodeHandle,  
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import CheckBox from 'react-native-checkbox-heaven';
import Spinner from 'react-native-loading-spinner-overlay';
import timer from 'react-native-timer';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PhoneInput from 'react-native-phone-input';

import * as commonColors from '../../styles/commonColors';
import { screenWidth, screenHeight, statusBar, navBar, subWidth } from '../../styles/commonStyles';
import { } from './actions';
import language from '../../utils/language/language';
import Container from '../Container';

import { saveMenuSelectedID } from '../Menu/actions';

const background = require('../../../assets/imgs/main/back.png');
const imgBlue = require('../../../assets/imgs/main/blue_button.png');
const imgYellow = require('../../../assets/imgs/main/yellow_button.png');
const menu = require('../../../assets/imgs/main/menu.png');

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentWillMount() {
    this.props.saveMenuSelectedID(0);
  }

  componentWillReceiveProps(nextProps) {
  }

  onStartProject() {
    Actions.StartProject();
  }

  onServices() {
    Actions.Services();
  }

  render() {
    const { currentLanguage } = this.props;

    return (
      <Container currentLanguage={currentLanguage} pageTitle="null" >
          <Image source={ background } style={ styles.background } >
            <View style={ styles.container } >
              <View style={ styles.wrapper_title }>
                <Text style={ styles.textTitle }>{language.mainPageTitle[currentLanguage]}</Text>
              </View>
              <View style={ styles.wrapper_content }>
                <Text style={ styles.textContent }>{language.mainPageContent_b[currentLanguage]}
                  <Text style={ styles.textContentNormal }>{language.mainPageContent_n[currentLanguage]}</Text>
                </Text>
              </View>
              <View style={ styles.buttonWrapper }>
                <TouchableOpacity
                  activeOpacity={ .5 }
                  onPress={ () => this.onStartProject() }
                >
                  <Image source={ imgYellow } style={ styles.button } resizeMode="contain">
                    <Text style={ styles.textButton }>{language.startNewProject[currentLanguage]}</Text>
                  </Image>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={ .5 }
                  onPress={ () => this.onServices() }
                >
                  <Image source={ imgBlue } style={ styles.button } resizeMode="contain">
                    <Text style={ styles.textButton }>{language.services[currentLanguage]}</Text>
                  </Image>
                </TouchableOpacity>
              </View>
            </View>
          </Image>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    alignItems: 'center',
    width: screenWidth,
    height: screenHeight - navBar,
  },
  container: {
    flex: 1,
    width: subWidth,
  },
  wrapper_title: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 14,
    textAlign: 'center',
    color: commonColors.title,
    backgroundColor: 'transparent',
  },
  wrapper_content: {
    flex: 0.3,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  textContent: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: commonColors.title,
  },
  textContentNormal: {
    fontSize: 20,
    fontWeight: 'normal',
    color: commonColors.title,
  },
  buttonWrapper: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    width: subWidth,
  },
  textButton: {
    color: commonColors.title,
    fontSize: 14,
    backgroundColor: 'transparent',
  },
});

export default connect(state => ({
  currentLanguage: state.auth.currentLanguage,
}),{ saveMenuSelectedID })(Main);