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
  Linking,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import CheckBox from 'react-native-checkbox-heaven';
import Spinner from 'react-native-loading-spinner-overlay';
import timer from 'react-native-timer';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PhoneInput from 'react-native-phone-input';
import  ModalPickerImage from '../../utils/ModalPickerImage';

import * as commonColors from '../../styles/commonColors';
import { screenWidth, screenHeight, statusBar, subWidth, inputMargin } from '../../styles/commonStyles';
import { logIn, changeLanguage } from './actions';
import language from '../../utils/language/language';

const background = require('../../../assets/imgs/background/background.png');
const logo = require('../../../assets/imgs/login/logo.png');
const languageIcon = require('../../../assets/imgs/login/arabic_language.png');
const menu = require('../../../assets/imgs/login/menu.png');
const email = require('../../../assets/imgs/login/mail.png');
const email_ar = require('../../../assets/imgs/login/mail_ar.png');
const phone = require('../../../assets/imgs/login/phone.png');
const phone_ar = require('../../../assets/imgs/login/phone_ar.png');
const login = require('../../../assets/imgs/login/login.png');
const skip = require('../../../assets/imgs/login/skip_arrow.png');
const check = require('../../../assets/imgs/login/check.png');
const uncheck = require('../../../assets/imgs/login/uncheck.png');

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      rememberMe: false,
      language: true,   //EN -> AR,
      pickerData: null,
    };
  }

  componentDidMount() {
    this.setState({pickerData: this.refs.phone.getPickerData()});
  }

  onLogin() {
    Keyboard.dismiss();
    const {email} = this.state;
    const phoneNumber = this.refs.phone.getValue();
    const data = {email: email, phone: phoneNumber};
    this.props.logIn(data);
  }

  onRememberMe() {
    this.setState({rememberMe: !this.state.rememberMe});
  }

  onForgotPassword() {
    console.log('forgot password');
  }

  onChangeLanguage() {
    let {language} = this.state;
    language = !language;
    this.setState({language: language});
    const lang = language ? 'EN' : 'AR';
    this.props.changeLanguage(lang);
  }

  onSkip() {
    Actions.Main();
  }

  onGotoSite() {
    Linking.openURL("https://www.nard.sa");
  }

  //Phone Input
  onPressFlag() {
    this.refs.myCountryPicker.open();
  }

  selectCountry(country) {
    this.refs.phone.selectCountry(country.iso2);
  }
  
  render() {
    const { currentLanguage, loading } = this.props;

    return (
      <View style={ styles.main } >
        <Spinner visible={ loading } />
        <Image source={ background } style={ styles.background } />
        <View style={ styles.navBar } >
          <TouchableOpacity
            activeOpacity={ .5 }
            onPress={ () => this.onChangeLanguage() }
          >
            <Image source={ languageIcon } resizeMode="contain" style={styles.languageIcon} />  
          </TouchableOpacity>
        </View>
        <KeyboardAwareScrollView>
          <View style={ styles.container } >
            <View style={ styles.descriptionContainer } >
              <Image source={ logo } style={ styles.logo } resizeMode="center" />
            </View>
            <View style= { styles.inputContainer }>
              <Image source={email} style={ styles.inputImg } resizeMode="contain" >
                <TextInput
                  ref="email"
                  autoCapitalize="none"
                  autoCorrect={ false }
                  placeholder={language.email[currentLanguage]}
                  placeholderTextColor={ commonColors.placeholderText }
                  textAlign="left"
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  returnKeyType={ 'next' }
                  keyboardType="email-address"
                  value={ this.state.email }
                  onChangeText={ (text) => this.setState({ email: text }) }
                  onSubmitEditing={ () => this.refs.phone.focus() }
                />
              </Image>
              <Image source={phone} style={ styles.inputImg }  resizeMode="contain" >
                <View style={styles.phoneWrapper }>
                  <PhoneInput 
                    ref='phone' 
                    initialCountry='sa'
                    textStyle={{fontSize: 13, color: commonColors.title}}
                    onPressFlag={()=>this.onPressFlag()}
                  />
                  <ModalPickerImage
                    ref='myCountryPicker'
                    data={this.state.pickerData}
                    onChange={(country)=>{ this.selectCountry(country) }}
                    cancelText='Cancel'
                  />
                </View>
              </Image>
              {currentLanguage == "EN" ?
              <View style={ styles.textWrapper }>
                <TouchableOpacity
                  activeOpacity={ .5 }
                  style={styles.rememberWrapper}
                  onPress={ () => this.onRememberMe() }
                >
                  <Image source={ this.state.rememberMe ? check : uncheck } resizeMode="contain" />
                  <Text style={ styles.textRememberMe }>{language.rememberMe[currentLanguage]}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={ .5 }
                  onPress={ () => this.onForgotPassword() }
                >
                  <Text style={ styles.textForgotPassword }>{language.forgotPassword[currentLanguage]}</Text>
                </TouchableOpacity>
              </View>
              :
              <View style={ styles.textWrapper }>
                <TouchableOpacity
                  activeOpacity={ .5 }
                  onPress={ () => this.onForgotPassword() }
                >
                  <Text style={ styles.textForgotPassword }>{language.forgotPassword[currentLanguage]}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={ .5 }
                  style={styles.rememberWrapper}
                  onPress={ () => this.onRememberMe() }
                >
                  <Text style={ styles.textRememberMeAr }>{language.rememberMe[currentLanguage]}</Text>
                  <Image source={ this.state.rememberMe ? check : uncheck } resizeMode="contain" />
                </TouchableOpacity>
              </View>
              }
              <TouchableOpacity
                activeOpacity={ .5 }
                onPress={ () => this.onLogin() }
              >
                <Image source={ login } style={ styles.lognButton } resizeMode="contain">
                  <Text style={ styles.textButton }>{language.login[currentLanguage]}</Text>
                </Image>
              </TouchableOpacity>
            </View>
            <View style={ styles.bottomContainer }>
              <TouchableOpacity
                activeOpacity={ .5 }
                onPress={ () => this.onSkip() }
              >
                <View style={styles.skip}>
                  <Text style={ styles.skipText }>{language.skip[currentLanguage]}</Text>
                  <Image source={ skip } style={ styles.skipIcon } resizeMode="contain" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={ .5 }
                style={styles.siteWrapper}
                onPress={ () => this.onGotoSite() }
              >
                <Text style={ styles.siteText }>www.nard.sa</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    height: screenHeight,
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: screenWidth,
    height: screenHeight,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: statusBar,
    width: screenWidth * 0.9,
  },
  languageIcon: {
    height: 20,
    width: 20,
  },
  menuIcon: {
    height: 20,
    width: 20,
  },
  container: {
    flex: 1.9,
    height: screenHeight - 50,
  },
  descriptionContainer: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: screenWidth,
  },
  inputContainer: {
    flex: 0.9,
    alignItems: 'center',
  },
  inputImg: {
    justifyContent: 'center',
    width: subWidth,
    marginTop: 10,
  },
  input: {
    fontSize: 14,
    color: commonColors.title,
    alignSelf: 'stretch',
    marginLeft: inputMargin,
  },
  input_ar: {
    fontSize: 14,
    color: commonColors.title,
    alignSelf: 'stretch',
    marginRight: inputMargin,
  },
  phoneWrapper: {
    marginLeft: inputMargin,
  },
  phoneWrapper_ar: {
    marginRight: inputMargin,
  },
  textWrapper: {
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row',
    width: subWidth,
    justifyContent: 'space-between',
  },
  rememberWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textRememberMe: {
    color: commonColors.placeholderTextGray,
    fontSize: 13,
    marginLeft: 10,
    backgroundColor: 'transparent',
  },
  textRememberMeAr: {
    color: commonColors.placeholderTextGray,
    fontSize: 13,
    marginRight: 10,
    backgroundColor: 'transparent',
  },
  textForgotPassword: {
    color: commonColors.placeholderTextGray,
    fontSize: 13,
    fontStyle: 'italic',
    backgroundColor: 'transparent',
    textAlign: 'right',
  },
  textForgotPasswordAr: {
    color: commonColors.placeholderTextGray,
    fontSize: 13,
    fontStyle: 'italic',
    backgroundColor: 'transparent',
    textAlign: 'right',
    marginRight: 10,
  },
  loginButtonWrapper: {
    marginTop: 20,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  lognButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: subWidth,
  },
  textButton: {
    color: commonColors.title,
    fontSize: 14,
    backgroundColor: 'transparent',
  },
  bottomContainer: {
    flex: 0.4,
    alignItems: 'center',
  },
  skip: {
    marginTop: 25,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipText: {
    fontSize: 15,
    color: commonColors.title,
  },
  siteWrapper: {
    position: 'absolute',
    bottom: 20,
  },
  siteText: {
    backgroundColor: 'transparent',
    color: commonColors.title,
    fontSize: 14,
  }
});

export default connect(state => ({
  loading: state.login.loading,
  currentLanguage: state.login.currentLanguage,
}),{ logIn, changeLanguage })(Login);