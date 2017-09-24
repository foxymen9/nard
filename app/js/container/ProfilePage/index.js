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
  RecyclerViewBackedScrollView
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Spinner from 'react-native-loading-spinner-overlay';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import * as commonColors from '../../styles/commonColors';
import { screenWidth, screenHeight, statusBar, navBar, inputMargin, subWidth } from '../../styles/commonStyles';
import language from '../../utils/language/language';
import Container from '../Container';

const avatar = require('../../../assets/imgs/profile/avatar.png');
const name = require('../../../assets/imgs/start_project/full_name.png');
const email = require('../../../assets/imgs/start_project/mail.png');
const phone = require('../../../assets/imgs/start_project/phone.png');
const company = require('../../../assets/imgs/start_project/company.png');
const update = require('../../../assets/imgs/main/yellow_button.png');

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
    };
  }

  componentWillMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  conUpdate() {

  }

  render() {
    const { currentLanguage } = this.props;

    return (
      <Container currentLanguage={currentLanguage} pageTitle="null">
        <View style={ styles.container } >
          <KeyboardAwareScrollView>
            <View style={ styles.subContainer } >
              <Image source={avatar} style={ styles.avatar } resizeMode="contain" >
                <Text  style={ styles.avatarText }>{this.state.firstName}</Text>
              </Image>
              <View style={{flex:0.7}}>
                <Image source={company} style={ styles.inputImg } resizeMode="contain" >
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
                    value={ this.state.company }
                    onChangeText={ (text) => this.setState({ company: text }) }
                    onSubmitEditing={ () => this.refs.name.focus() }
                  />
                </Image>
                <Image source={name} style={ styles.inputImg } resizeMode="contain" >
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
                    value={ this.state.name }
                    onChangeText={ (text) => this.setState({ name: text }) }
                    onSubmitEditing={ () => this.refs.phone.focus() }
                  />
                </Image>
                <Image source={phone} style={ styles.inputImg } resizeMode="contain" >
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
                    value={ this.state.phone }
                    onChangeText={ (text) => this.setState({ phone: text }) }
                    onSubmitEditing={ () => this.refs.email.focus() }
                  />
                </Image>
                <Image source={email} style={ styles.inputImg } resizeMode="contain" >
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
                    value={ this.state.email }
                    onChangeText={ (text) => this.setState({ email: text }) }
                    onSubmitEditing={ () => this.refs.content.focus() }
                  />
                </Image>
                <View style={styles.buttonWrapper}>
                  <TouchableOpacity
                    activeOpacity={ .5 }
                    onPress={ () => this.conUpdate() }
                  >
                    <Image source={ update } style={ styles.button } resizeMode="contain" >
                      <Text style={ styles.textButton }>{language.update[currentLanguage]}</Text>
                    </Image>
                  </TouchableOpacity>
                </View>
              </View>
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
  currentLanguage: state.login.currentLanguage,
}),{ })(Profile);