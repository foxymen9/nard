'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  ListView,
  Keyboard,
  findNodeHandle,  
  RecyclerViewBackedScrollView,
  AsyncStorage,
  Alert,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import OrientationLoadingOveraly from 'react-native-orientation-loading-overlay';
import Spinner from 'react-native-loading-spinner-overlay';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import * as commonColors from '../../styles/commonColors';
import { screenWidth, screenHeight, statusBar, navBar, inputMargin, subWidth } from '../../styles/commonStyles';
import language from '../../utils/language/language';
import Container from '../Container';
import {updateProfile, initialStore} from './actions';
import {logout} from '../LoginPage/actions';
import { changeTokenStatus } from '../ParentComponent/actions';

const avatar_img = require('../../../assets/imgs/profile/avatar.png');
const name_img = require('../../../assets/imgs/start_project/full_name.png');
const name_img_ar = require('../../../assets/imgs/start_project/full_name_ar.png');
const email_img = require('../../../assets/imgs/start_project/mail.png');
const email_img_ar = require('../../../assets/imgs/start_project/mail_ar.png');
const phone_img = require('../../../assets/imgs/start_project/phone.png');
const phone_img_ar = require('../../../assets/imgs/start_project/phone_ar.png');
const company_img = require('../../../assets/imgs/start_project/company.png');
const company_img_ar = require('../../../assets/imgs/start_project/company_ar.png');
const update_img = require('../../../assets/imgs/main/yellow_button.png');
const pressBtn_img = require('../../../assets/imgs/main/blue_button.png');

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: '',
      name: '',
      phone: '',
      email: '',
      content: '',
      firstName: 'K',
      loading: false,
      alert_flag: false,
    };
  }

  componentWillMount() {
    const {userInfoResult, currentLanguage} = this.props;

    if (userInfoResult) {
      this.setdDataState(userInfoResult.data, currentLanguage);
    }
  }

  setdDataState(userData, currentLanguage) {
    if (currentLanguage == 'EN') {
      this.setState({company: userData.client_descriptions[1].company_name});
      this.setState({name: userData.client_descriptions[1].title});
      this.setState({phone: userData.client_data.mobile});
      this.setState({email: userData.client_data.email});
    }
    else {
      this.setState({company: userData.client_descriptions[2].company_name});
      this.setState({name: userData.client_descriptions[2].title});
      this.setState({phone: userData.client_data.mobile});
      this.setState({email: userData.client_data.email});
    }
  }

  componentWillReceiveProps(nextProps) {
    const {profileUpdateResult, userInfoResult, currentLanguage, loggin, loading, token_status} = nextProps;
    // const userData = userInfoResult.data;
    this.setState({loading: loading});
    
    if (profileUpdateResult) {
      if (profileUpdateResult === "token_failed") {
        if (token_status) {
          this.props.changeTokenStatus(false);
        }
        this.props.logout();
        if (!loggin && !token_status) {
          this.props.initialStore();
          Actions.Login();
        }
        return;
      }
      else {
        if (!this.state.alert_flag && !loading) {
          this.setState({alert_flag: true}); 
          if (profileUpdateResult.error) {   //warning
            setTimeout(()=> {
              Alert.alert("WARNING",  profileUpdateResult.error.warning);
            }, 100);
          }
          else {
            setTimeout(()=> {
              Alert.alert("SUCCESS",  profileUpdateResult.success);
            }, 100);
          }
        }
      }
    }

    // if (userInfoResult) {
    //   this.setdDataState(userInfoResult.data, currentLanguage);
    // }
  }

  onUpdate() {
    const { currentLanguage, userInfoResult, apiToken } = this.props;
    const { company, name, phone, email, content, firstname } = this.state;

    this.setState({alert_flag: false}); 

    const data = {
      title: name,
      company_name: company,
      email: email,
      mobile: phone,
      clients_id: userInfoResult.data.client_data.clients_id,
      language_id: currentLanguage == 'EN' ? 1 : 2,
    }
    this.props.updateProfile(data, apiToken.api_token);
  }

  render() {
    const { currentLanguage, userInfoResult } = this.props;
    let { company, name, phone, email, content, firstname, loading } = this.state;

    return (
      <Container currentLanguage={currentLanguage} pageTitle="null">
        <OrientationLoadingOveraly visible={ loading } />
        <View style={ styles.container } >
          <KeyboardAwareScrollView>
            <View style={ styles.subContainer } >
              <Image source={avatar_img} style={ styles.avatar } resizeMode="contain" >
                <Text  style={ styles.avatarText }>{this.state.firstName}</Text>
              </Image>
              {currentLanguage == 'EN'
              ?<View style={{flex:0.7}}>
                <Image source={company_img} style={ styles.inputImg } resizeMode="contain" >
                  <TextInput
                    ref="company"
                    autoCapitalize="none"
                    autoCorrect={ false }
                    placeholder={language.company[currentLanguage]}
                    placeholderTextColor={ commonColors.placeholderTextGray }
                    textAlign="left"
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    returnKeyType={ 'next' }
                    value={ company }
                    onChangeText={ (text) => this.setState({ company: text }) }
                    onSubmitEditing={ () => this.refs.name.focus() }
                  />
                </Image>
                <Image source={name_img} style={ styles.inputImg } resizeMode="contain" >
                  <TextInput
                    ref="name"
                    autoCapitalize="none"
                    autoCorrect={ false }
                    placeholder={language.fullName[currentLanguage]}
                    placeholderTextColor={ commonColors.placeholderTextGray }
                    textAlign="left"
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    returnKeyType={ 'next' }
                    value={ name }
                    onChangeText={ (text) => this.setState({ name: text }) }
                    onSubmitEditing={ () => this.refs.phone.focus() }
                  />
                </Image>
                <Image source={phone_img} style={ styles.inputImg } resizeMode="contain" >
                  <TextInput
                    ref="phone"
                    autoCapitalize="none"
                    autoCorrect={ false }
                    placeholder={language.phone[currentLanguage]}
                    placeholderTextColor={ commonColors.placeholderTextGray }
                    textAlign="left"
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    returnKeyType={ 'next' }
                    keyboardType="numbers-and-punctuation"
                    value={ phone }
                    onChangeText={ (text) => this.setState({ phone: text }) }
                    onSubmitEditing={ () => this.refs.email.focus() }
                  />
                </Image>
                <Image source={email_img} style={ styles.inputImg } resizeMode="contain" >
                  <TextInput
                    ref="email"
                    autoCapitalize="none"
                    autoCorrect={ false }
                    placeholder={language.email[currentLanguage]}
                    placeholderTextColor={ commonColors.placeholderTextGray }
                    textAlign="left"
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    returnKeyType={ 'next' }
                    keyboardType="email-address"
                    value={ email }
                    onChangeText={ (text) => this.setState({ email: text }) }
                    onSubmitEditing={ () => this.refs.content.focus() }
                  />
                </Image>
                <View style={styles.buttonWrapper}>
                  <TouchableHighlight
                    onShowUnderlay={()=>this.setState({pressStatus: true})}
                    onHideUnderlay={()=>this.setState({pressStatus: false})}
                    underlayColor={'#fff'}
                    onPress={ () => this.onUpdate() }
                  >
                    <Image source={ this.state.pressStatus ? pressBtn_img : update_img } style={ styles.button } resizeMode="contain" >
                      <Text style={ styles.textButton }>{language.update[currentLanguage]}</Text>
                    </Image>
                  </TouchableHighlight>
                </View>
              </View>
              :<View style={{flex:0.7}}>
                <Image source={company_img_ar} style={ styles.inputImg } resizeMode="contain" >
                  <TextInput
                    ref="company"
                    autoCapitalize="none"
                    autoCorrect={ false }
                    placeholder={language.company[currentLanguage]}
                    placeholderTextColor={ commonColors.placeholderTextGray }
                    textAlign="right"
                    style={styles.input_ar}
                    underlineColorAndroid="transparent"
                    returnKeyType={ 'next' }
                    value={ company }
                    onChangeText={ (text) => this.setState({ company: text }) }
                    onSubmitEditing={ () => this.refs.name.focus() }
                  />
                </Image>
                <Image source={name_img_ar} style={ styles.inputImg } resizeMode="contain" >
                  <TextInput
                    ref="name"
                    autoCapitalize="none"
                    autoCorrect={ false }
                    placeholder={language.fullName[currentLanguage]}
                    placeholderTextColor={ commonColors.placeholderTextGray }
                    textAlign="right"
                    style={styles.input_ar}
                    underlineColorAndroid="transparent"
                    returnKeyType={ 'next' }
                    value={ name }
                    onChangeText={ (text) => this.setState({ name: text }) }
                    onSubmitEditing={ () => this.refs.phone.focus() }
                  />
                </Image>
                <Image source={phone_img_ar} style={ styles.inputImg } resizeMode="contain" >
                  <TextInput
                    ref="phone"
                    autoCapitalize="none"
                    autoCorrect={ false }
                    placeholder={language.phone[currentLanguage]}
                    placeholderTextColor={ commonColors.placeholderTextGray }
                    textAlign="right"
                    style={styles.input_ar}
                    underlineColorAndroid="transparent"
                    returnKeyType={ 'next' }
                    keyboardType="numbers-and-punctuation"
                    value={ phone }
                    onChangeText={ (text) => this.setState({ phone: text }) }
                    onSubmitEditing={ () => this.refs.email.focus() }
                  />
                </Image>
                <Image source={email_img_ar} style={ styles.inputImg } resizeMode="contain" >
                  <TextInput
                    ref="email"
                    autoCapitalize="none"
                    autoCorrect={ false }
                    placeholder={language.email[currentLanguage]}
                    placeholderTextColor={ commonColors.placeholderTextGray }
                    textAlign="right"
                    style={styles.input_ar}
                    underlineColorAndroid="transparent"
                    returnKeyType={ 'next' }
                    keyboardType="email-address"
                    value={ email }
                    onChangeText={ (text) => this.setState({ email: text }) }
                    onSubmitEditing={ () => this.refs.content.focus() }
                  />
                </Image>
                <View style={styles.buttonWrapper}>
                  <TouchableHighlight
                    onShowUnderlay={()=>this.setState({pressStatus: true})}
                    onHideUnderlay={()=>this.setState({pressStatus: false})}
                    underlayColor={'#fff'}
                    onPress={ () => this.onUpdate() }
                  >
                    <Image source={ this.state.pressStatus ? pressBtn_img : update_img } style={ styles.button } resizeMode="contain" >
                      <Text style={ styles.textButton }>{language.update[currentLanguage]}</Text>
                    </Image>
                  </TouchableHighlight>
                </View>
              </View>
              }
            </View>
          </KeyboardAwareScrollView>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
    height: screenHeight - navBar,
    backgroundColor: commonColors.title,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems:'center',
  },
  avatarText: {
    color: commonColors.title,
    fontSize: 40,
    backgroundColor: 'transparent',
  },
  subContainer: {
    flex: 1,
    alignItems: 'center',
    width: screenWidth,
    height: screenHeight - navBar,
  },
  inputImg: {
    justifyContent: 'center',
    width: subWidth,
    marginTop: 10,
  },
  input: {
    fontSize: 14,
    color: commonColors.text,
    alignSelf: 'stretch',
    marginLeft: inputMargin,
  },
  input_ar: {
    fontSize: 14,
    color: commonColors.text,
    alignSelf: 'stretch',
    marginRight: inputMargin,
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: subWidth,
  },
  textButton: {
    color: commonColors.title,
    fontSize: 14,
    backgroundColor: 'transparent',
  },
});

export default connect(state => ({
  loading: state.profile.loading,
  userInfoResult: state.auth.userInfoResult,
  currentLanguage: state.language.currentLanguage,
  profileUpdateResult: state.profile.data,
  apiToken: state.parent_state.apiToken,
  loggin: state.auth.loggin,
  token_status: state.parent_state.token_status,
}),{ updateProfile, changeTokenStatus, logout, initialStore })(Profile);