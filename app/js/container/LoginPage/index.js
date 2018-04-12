'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert,
  Keyboard,
  findNodeHandle,
  Linking,
  AsyncStorage,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import OrientationLoadingOveraly from 'react-native-orientation-loading-overlay';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PhoneInput from 'react-native-phone-input';
import  ModalPickerImage from '../../utils/ModalPickerImage';

import * as commonColors from '../../styles/commonColors';
import { screenWidth, screenHeight, statusBar, subWidth, inputMargin, NORMAL_FONT } from '../../styles/commonStyles';
import { userLoginIn, saveLoggin, initialStore, registerDeviceID } from './actions';
import { rememberMe } from '../RememberMe/actions';
import { changeLanguage } from '../LanguageStore/actions';
import { getApiToken, changeTokenStatus } from '../ParentComponent/actions';
import language from '../../utils/language/language';
import { logout } from '../LoginPage/actions';

const background = require('../../../assets/imgs/background/background.png');
const logo = require('../../../assets/imgs/login/logo.png');
const languageIcon = require('../../../assets/imgs/login/arabic_language.png');
const menu = require('../../../assets/imgs/login/menu.png');
const email = require('../../../assets/imgs/login/mail.png');
const email_ar = require('../../../assets/imgs/login/mail_ar.png');
const phone = require('../../../assets/imgs/login/phone.png');
const phone_ar = require('../../../assets/imgs/login/phone_ar.png');
const login_img = require('../../../assets/imgs/login/login.png');
const skip = require('../../../assets/imgs/login/skip_arrow.png');
const check = require('../../../assets/imgs/login/check.png');
const uncheck = require('../../../assets/imgs/login/uncheck.png');

const DeviceInfo = require('react-native-device-info');

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',  // info@nard.sa
      rememberMe: false,
      language: true,   //EN -> AR,
      pickerData: null,
      apiTokenState: '',
      loading: false,
      loadingToken: false,
      tokenFlag: false,
      apiToken: null,
      alert_flag: false,
      async_flag: false,
      async_user_info: null,
      device_id: '',
    };
  }

  componentWillMount() {
    const { token_status } = this.props;
    const { tokenFlag, async_flag } = this.state;

    let device_uuid = DeviceInfo.getUniqueID();
    this.setState({device_id: device_uuid});

    //Set flag after Asyncstorage data loading
    AsyncStorage.getItem('userInfo').then((value) => {
      this.setState({async_flag: true});
      this.setState({async_user_info: JSON.parse(value)});
		}).done();

    if (!token_status && !tokenFlag) {
      this.setState({tokenFlag: true});
      this.props.getApiToken();
    }
    this.setState({alert_flag: false}); 
  }

  componentDidMount() {
    this.setState({pickerData: this.refs.phone.getPickerData()});
  }

  componentWillReceiveProps(nextProps) {
    const { loggin, loggout, userInfoResult, loading, loadingToken, token_status, apiToken } = nextProps;
    const { email, async_user_info, async_flag } = this.state;
    const phoneNumber = this.refs.phone.getValue();
    
    this.setState({loadingToken: loadingToken});
    this.setState({loading: loading});

    if (!loadingToken) {
      // check after Asynstorage loading.
      if ( async_flag ) {
        this.setState({async_flag: false});
        if (async_user_info != null && async_user_info.data.client_data) {
          //get user data from AsyncStorage
          const email = async_user_info.data.client_data.email;
          const mobile = async_user_info.data.client_data.mobile;
          const data = { email: email, telephone: mobile };
          this.props.userLoginIn(data, apiToken.api_token);
        }
      }
      else {
        if (userInfoResult) {
          if (userInfoResult.error) {
            if (!this.state.alert_flag && !loading) {
              this.setState({alert_flag: true}); 
              setTimeout(()=> {
                Alert.alert("ERROR",  "invalid email or phone number");
              }, 100);
            }
          }
          else if (!loggin && !loggout) {
            this.props.saveLoggin();
            this.props.registerDeviceID(apiToken.api_token, {
              user_id: userInfoResult.data.client_data.clients_id,
              subscribe_id: this.state.device_id
            });
            // Actions.Main();
            Actions.MyServices();
          }
        }
      }
    }
  }

  onLogin() {
    this.setState({alert_flag: false}); 
    Keyboard.dismiss();
    const { apiToken } = this.props;
    const { email } = this.state;
    if (apiToken) {
      const phoneNumber = this.refs.phone.getValue();
      // const phoneNumber = '+966558644773'
      const data = { email: email, telephone: phoneNumber };
      this.props.userLoginIn(data, apiToken.api_token);
    }
  }

  onChangeLanguage() {
    let {language} = this.state;
    language = !language;
    this.setState({language: language});
    const lang = language ? 'EN' : 'AR';
    this.props.changeLanguage(lang);
  }

  onRememberMe() {
    this.setState({rememberMe: !this.state.rememberMe});
    this.props.rememberMe(!this.state.rememberMe);
  }

  onForgotPassword() {
    const { email } = this.state;
    Actions.ForgotPassword();
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
    const { currentLanguage, apiToken } = this.props;
    const { loading, loadingToken } = this.state;
    return (
        <View style={ styles.main } >
          <OrientationLoadingOveraly visible={ loadingToken } />
          <OrientationLoadingOveraly visible={ loading } />
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
                <ImageBackground source={email} style={ styles.inputImg } resizeMode="contain" >
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
                </ImageBackground>
                <ImageBackground source={email} style={ styles.inputImg } resizeMode="contain" >
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
                </ImageBackground>
                {currentLanguage == "EN" ?
                <View style={ styles.textWrapper }>
                  <TouchableOpacity
                    activeOpacity={ .5 }
                    style={styles.rememberWrapper}
                    onPress={ () => this.onRememberMe() }
                  >
                    <Image source={ this.state.rememberMe ? check : uncheck } resizeMode="contain" />
                    <Text style={ this.state.rememberMe ? styles.textRememberMe : styles.textRememberMe }>
                      {language.rememberMe[currentLanguage]}
                    </Text>
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
                  <ImageBackground source={ login_img } style={ styles.lognButton } resizeMode="contain">
                    <Text style={ styles.textButton }>{language.login_text[currentLanguage]}</Text>
                  </ImageBackground>
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
    height: 30,
    marginTop: 15,
    width: 30,
  },
  menuIcon: {
    height: 20,
    width: 20,
  },
  container: {
    flex: 1.9,
    height: screenHeight - 55,
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
    height: 60,
    marginTop: 10,
  },
  input: {
    fontSize: 14,
    color: commonColors.title,
    alignSelf: 'stretch',
    marginLeft: inputMargin,
    fontFamily: NORMAL_FONT,
  },
  input_ar: {
    fontSize: 14,
    color: commonColors.title,
    alignSelf: 'stretch',
    marginRight: inputMargin,
    fontFamily: NORMAL_FONT,
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
    fontFamily: NORMAL_FONT,
  },
  textRememberMeCheck: {
    color: commonColors.lightYellow,
    fontSize: 13,
    marginLeft: 10,
    backgroundColor: 'transparent',
    fontFamily: NORMAL_FONT,
  },
  textRememberMeAr: {
    color: commonColors.placeholderTextGray,
    fontSize: 13,
    marginRight: 10,
    backgroundColor: 'transparent',
    fontFamily: NORMAL_FONT,
  },
  textForgotPassword: {
    color: commonColors.placeholderTextGray,
    fontSize: 14,
    fontStyle: 'italic',
    backgroundColor: 'transparent',
    textAlign: 'right',
    fontFamily: NORMAL_FONT,
  },
  textForgotPasswordAr: {
    color: commonColors.placeholderTextGray,
    fontSize: 14,
    fontStyle: 'italic',
    backgroundColor: 'transparent',
    textAlign: 'right',
    marginRight: 10,
    fontFamily: NORMAL_FONT,
  },
  loginButtonWrapper: {
    marginTop: 20,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  lognButton: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: subWidth,
    height: 60,
  },
  textButton: {
    color: commonColors.title,
    fontSize: 14,
    backgroundColor: 'transparent',
    fontFamily: NORMAL_FONT,
  },
  bottomContainer: {
    flex: 0.4,
    alignItems: 'center',
  },
  skip: {
    marginTop: 30,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipText: {
    fontSize: 15,
    color: commonColors.title,
    fontFamily: NORMAL_FONT,
  },
  siteWrapper: {
    position: 'absolute',
    bottom: 30,
  },
  siteText: {
    backgroundColor: 'transparent',
    color: commonColors.title,
    fontSize: 14,
    fontFamily: NORMAL_FONT,
  }
});

export default connect(state => ({
  loading: state.auth.loading,
  loggin: state.auth.loggin,
  loggout: state.auth.loggout,
  userInfoResult: state.auth.userInfoResult,
  currentLanguage: state.language.currentLanguage,
  token_status: state.parent_state.token_status,
  apiToken: state.parent_state.apiToken,
  loadingToken: state.parent_state.loadingToken,
}),{ userLoginIn, changeLanguage, changeTokenStatus, getApiToken, saveLoggin, logout, initialStore, rememberMe, registerDeviceID })(Login);