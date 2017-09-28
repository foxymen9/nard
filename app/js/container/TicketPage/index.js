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
import ModalDropdown from 'react-native-modal-dropdown';

import * as commonColors from '../../styles/commonColors';
import { screenWidth, screenHeight, statusBar, navBar, inputMargin, subWidth, textPadding } from '../../styles/commonStyles';
import language from '../../utils/language/language';
import Container from '../Container';

const name = require('../../../assets/imgs/start_project/full_name.png');
const name_ar = require('../../../assets/imgs/start_project/full_name_ar.png');
const email = require('../../../assets/imgs/start_project/mail.png');
const email_ar = require('../../../assets/imgs/start_project/mail_ar.png');
const phone = require('../../../assets/imgs/start_project/phone.png');
const phone_ar = require('../../../assets/imgs/start_project/phone_ar.png');
const department_img = require('../../../assets/imgs/start_project/click.png');
const department_img_ar = require('../../../assets/imgs/start_project/click_ar.png');
const content = require('../../../assets/imgs/start_project/text_field.png');
const submit = require('../../../assets/imgs/main/yellow_button.png');
const arrow = require('../../../assets/imgs/start_project/down_arrow.png');
const pressBtn = require('../../../assets/imgs/main/blue_button.png');

class Ticket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phone: '',
      email: '',
      defaultDepartment: 'Select Department',
      departments: ['option1', 'option2', 'option3', 'option4', 'option5', 'option6'],
    };
  }

  componentWillMount() {
    const { currentLanguage } = this.props;
    this.changeDepartmentLanguage(currentLanguage);
  }

  componentWillReceiveProps(nextProps) {
    const { currentLanguage } = nextProps;
    this.changeDepartmentLanguage(currentLanguage);
  }
  
  changeDepartmentLanguage(currentLanguage) {
    const { defaultDepartment } = this.state; 
    this.setState({defaultDepartment: language.department_txt[currentLanguage] });
  }

  onSubmit() {

  }

  onSelectDepartment(index){
    const { departments } = this.state;
    this.setState({ defaultDepartment: departments[index] });
  }

  render() {
    const { currentLanguage } = this.props;

    return (
      <Container currentLanguage={currentLanguage} pageTitle="ticket">
        <View style={ styles.container } >
          <View style={ styles.subContainer } >
            {currentLanguage == 'EN'
            ?<KeyboardAwareScrollView>
              <View style={ styles.subView } >
                <Image source={name} style={ styles.inputImg } resizeMode="contain" >
                  <TextInput
                    ref="name"
                    autoCapitalize="none"
                    autoCorrect={ false }
                    placeholder={ language.fullName[currentLanguage] }
                    placeholderTextColor={ commonColors.placeholderTextGray }
                    textAlign="left"
                    style={ styles.input }
                    underlineColorAndroid="transparent"
                    returnKeyType={ 'next' }
                    value={ this.state.name }
                    onChangeText={ (text) => this.setState({ name: text }) }
                    onSubmitEditing={ () => this.refs.phone.focus() }
                  />
                </Image>
              </View>
              <View style={ styles.subView } >
                <Image source={phone} style={ styles.inputImg } resizeMode="contain" >
                  <TextInput
                    ref="phone"
                    autoCapitalize="none"
                    autoCorrect={ false }
                    placeholder={ language.phone[currentLanguage] }
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
              </View>
              <View style={ styles.subView } >
                <Image source={ email } style={ styles.inputImg } resizeMode="contain" >
                  <TextInput
                    ref="email"
                    autoCapitalize="none"
                    autoCorrect={ false }
                    placeholder={ language.email[currentLanguage] }
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
              </View>
              <View style={ styles.subView } >
                <Image source={department_img} style={ styles.inputImg }  resizeMode="contain" >
                  <ModalDropdown options={this.state.departments}  
                                style={ styles.modalDropdown } 
                                dropdownStyle={ styles.dropdownStyle } 
                                onSelect={ (index) => this.onSelectDepartment(index) }
                  >
                    <View style={ styles.dropdown }>
                      <Text style={styles.dropdownText}>{ this.state.defaultDepartment }</Text>
                      <Image source={arrow} resizeMode="center" />
                    </View>
                  </ModalDropdown>
                </Image>
              </View>
              <View style={ styles.subView } >
                <Image source={content} style={ styles.inputImgContent } resizeMode="contain" >
                  <View style={styles.contentWrapper}>
                    <TextInput
                      ref="content"
                      autoCapitalize="none"
                      autoCorrect={ false }
                      placeholder={language.content[currentLanguage]}
                      placeholderTextColor={ commonColors.placeholderTextGray }
                      textAlign="left"
                      style={styles.inputContent}
                      underlineColorAndroid="transparent"
                      returnKeyType={ 'next' }
                      value={ this.state.content }
                      onChangeText={ (text) => this.setState({ content: text }) }
                      onSubmitEditing={ () => this.refs.content.focus() }
                      maxLength={200}
                      multiline={true}
                      numberOfLines={50}
                    />
                  </View>
                </Image>
              </View>
              <View style={ styles.subView } >
                <View style={styles.buttonWrapper}>
                  <TouchableHighlight
                    onShowUnderlay={()=>this.setState({pressStatus: true})}
                    onHideUnderlay={()=>this.setState({pressStatus: false})}
                    underlayColor={'#fff'}
                    onPress={ () => this.onSubmit() }
                  >
                    <Image source={ this.state.pressStatus ? pressBtn : submit } style={ styles.button } resizeMode="contain" >
                      <Text style={ styles.textButton }>{language.submit[currentLanguage]}</Text>
                    </Image>
                  </TouchableHighlight>
                </View>
              </View>
              <View style={ styles.subView } >
                <View style={styles.profile}>
                  <Text style={styles.text}>Saudi Arabia</Text>
                  <Text style={styles.text}>Grenada Business Park A4, 12th floor - Riyadh Kingdom of Saudi Arabia</Text>
                  <Text style={styles.text}><Text style={styles.textBold}>Mobile: </Text>+966.55.86.77.3</Text>
                  <Text style={styles.text}><Text style={styles.textBold}>Tel: </Text>+966.55.86.77.3</Text>
                  <Text style={styles.text}><Text style={styles.textBold}>E-mail: </Text>info@nard.sa</Text>
                  <Text style={styles.text}><Text style={styles.textBold}>Web: </Text>www.nard.sa</Text>
                </View>
              </View>
            </KeyboardAwareScrollView>
            :<KeyboardAwareScrollView>
              <View style={ styles.subView } >
                <Image source={name_ar} style={ styles.inputImg } resizeMode="contain" >
                  <TextInput
                    ref="name"
                    autoCapitalize="none"
                    autoCorrect={ false }
                    placeholder={ language.fullName[currentLanguage] }
                    placeholderTextColor={ commonColors.placeholderTextGray }
                    textAlign="right"
                    style={ styles.input_ar }
                    underlineColorAndroid="transparent"
                    returnKeyType={ 'next' }
                    value={ this.state.name }
                    onChangeText={ (text) => this.setState({ name: text }) }
                    onSubmitEditing={ () => this.refs.phone.focus() }
                  />
                </Image>
              </View>
              <View style={ styles.subView } >
                <Image source={phone_ar} style={ styles.inputImg } resizeMode="contain" >
                  <TextInput
                    ref="phone"
                    autoCapitalize="none"
                    autoCorrect={ false }
                    placeholder={ language.phone[currentLanguage] }
                    placeholderTextColor={ commonColors.placeholderTextGray }
                    textAlign="right"
                    style={styles.input_ar}
                    underlineColorAndroid="transparent"
                    returnKeyType={ 'next' }
                    keyboardType="numbers-and-punctuation"
                    value={ this.state.phone }
                    onChangeText={ (text) => this.setState({ phone: text }) }
                    onSubmitEditing={ () => this.refs.email.focus() }
                  />
                </Image>
              </View>
              <View style={ styles.subView } >
                <Image source={ email_ar } style={ styles.inputImg } resizeMode="contain" >
                  <TextInput
                    ref="email"
                    autoCapitalize="none"
                    autoCorrect={ false }
                    placeholder={ language.email[currentLanguage] }
                    placeholderTextColor={ commonColors.placeholderTextGray }
                    textAlign="right"
                    style={styles.input_ar}
                    underlineColorAndroid="transparent"
                    returnKeyType={ 'next' }
                    keyboardType="email-address"
                    value={ this.state.email }
                    onChangeText={ (text) => this.setState({ email: text }) }
                    onSubmitEditing={ () => this.refs.content.focus() }
                  />
                </Image>
              </View>
              <View style={ styles.subView } >
                <Image source={department_img_ar} style={ styles.inputImg }  resizeMode="contain" >
                  <ModalDropdown options={this.state.departments}  
                                style={ styles.modalDropdown_ar } 
                                dropdownStyle={ styles.dropdownStyle_ar } 
                                onSelect={ (index) => this.onSelectDepartment(index) }
                  >
                    <View style={ styles.dropdown_ar }>
                      <Image source={arrow} resizeMode="center" />
                      <Text style={styles.dropdownText}>{ this.state.defaultDepartment }</Text>
                    </View>
                  </ModalDropdown>
                </Image>
              </View>
              <View style={ styles.subView } >
                <Image source={content} style={ styles.inputImgContent } resizeMode="contain" >
                  <View style={styles.contentWrapper_ar}>
                    <TextInput
                      ref="content"
                      autoCapitalize="none"
                      autoCorrect={ false }
                      placeholder={language.content[currentLanguage]}
                      placeholderTextColor={ commonColors.placeholderTextGray }
                      textAlign="right"
                      style={styles.inputContent}
                      underlineColorAndroid="transparent"
                      returnKeyType={ 'next' }
                      value={ this.state.content }
                      onChangeText={ (text) => this.setState({ content: text }) }
                      onSubmitEditing={ () => this.refs.content.focus() }
                      maxLength={200}
                      multiline={true}
                      numberOfLines={50}
                    />
                  </View>
                </Image>
              </View>
              <View style={ styles.subView } >
                <View style={styles.buttonWrapper}>
                  <TouchableHighlight
                    onShowUnderlay={()=>this.setState({pressStatus: true})}
                    onHideUnderlay={()=>this.setState({pressStatus: false})}
                    underlayColor={'#fff'}
                    onPress={ () => this.onSubmit() }
                  >
                    <Image source={ this.state.pressStatus ? pressBtn : submit } style={ styles.button } resizeMode="contain" >
                      <Text style={ styles.textButton }>{language.submit[currentLanguage]}</Text>
                    </Image>
                  </TouchableHighlight>
                </View>
              </View>
              <View style={ styles.subView } >
                <View style={styles.profile}>
                  <Text style={styles.text_ar}>Saudi Arabia</Text>
                  <Text style={styles.text_ar}>Grenada Business Park A4, 12th floor - Riyadh Kingdom of Saudi Arabia</Text>
                  <Text style={styles.text_ar}>+966.55.86.77.3<Text style={styles.textBold}> :Mobile</Text></Text>
                  <Text style={styles.text_ar}>+966.55.86.77.3<Text style={styles.textBold}> :Tel</Text></Text>
                  <Text style={styles.text_ar}>info@nard.sa<Text style={styles.textBold}> :E-mail</Text></Text>
                  <Text style={styles.text_ar}>www.nard.sa<Text style={styles.textBold}> :Web</Text></Text>
                </View>
              </View>
            </KeyboardAwareScrollView>
            }
          </View>
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
    alignItems: 'center',
  },
  subContainer: {
    width: screenWidth,
    marginTop: 20,
    alignItems: 'center',
  },
  subView: {
    width: screenWidth,
    alignItems: 'center',
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
  modalDropdown: {
    backgroundColor:  'transparent', 
    marginLeft: inputMargin,
    width: subWidth - inputMargin,
  },
  modalDropdown_ar: {
    backgroundColor:  'transparent', 
    marginRight: inputMargin,
    width: subWidth - inputMargin,
  },
  dropdownStyle: {
    width: 180,
  },
  dropdownStyle_ar: {
    width: 180,
    marginLeft: 80,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 60,
  },
  dropdown_ar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 60,
  },
  dropdownText: {
    color: commonColors.placeholderTextGray,
  },
  inputImgContent: {
    width: subWidth,
    marginTop: 10,
    alignItems:'center',
  },
  contentWrapper: {
    width: subWidth,
    paddingLeft: textPadding,
  },
  contentWrapper_ar: {
    width: subWidth,
    paddingRight: textPadding,
  },
  inputContent: {
    fontSize: 14,
    color: commonColors.text,
    alignSelf: 'stretch',
    marginTop: 15,
    height: 50,
    width: subWidth - textPadding * 2,
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
    marginTop: 10,
  },
  textButton: {
    color: '#fff',
    fontSize: 14,
    backgroundColor: 'transparent',
  },
  profile: {
    width: subWidth,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  textBold: {
    fontWeight: 'bold',
  },
  text: {
    lineHeight: 20,
  },
  text_ar: {
    lineHeight: 20,
    textAlign: 'right',
  }
});

export default connect(state => ({
  currentLanguage: state.auth.currentLanguage,
}),{ })(Ticket);