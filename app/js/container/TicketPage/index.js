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
const email = require('../../../assets/imgs/start_project/mail.png');
const phone = require('../../../assets/imgs/start_project/phone.png');
const department = require('../../../assets/imgs/start_project/click.png');
const content = require('../../../assets/imgs/start_project/text_field.png');
const submit = require('../../../assets/imgs/main/yellow_button.png');
const arrow = require('../../../assets/imgs/start_project/down_arrow.png');

class Ticket extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phone: '',
      email: '',
      department: '',
      defaultDepartment: 'Select Department',
      department: ['option1', 'option2', 'option3', 'option4', 'option5', 'option6'],
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
    this.setState({defaultDepartment: language.department[currentLanguage] });
  }

  onStartProject() {

  }

  onSelectDepartment(index){
    const { department } = this.state;
    this.setState({ defaultDepartment: department[index] });
  }

  render() {
    const { currentLanguage } = this.props;

    return (
      <Container currentLanguage={currentLanguage} pageTitle="ticket">
        <View style={ styles.container } >
          <View style={ styles.subContainer } >
            <KeyboardAwareScrollView>
              <View style={ styles.subView } >
                <Image source={name} style={ styles.inputImg } resizeMode="center" >
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
                <Image source={phone} style={ styles.inputImg } resizeMode="center" >
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
                <Image source={ email } style={ styles.inputImg } resizeMode="center" >
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
                <Image source={department} style={ styles.inputImg }  resizeMode="center" >
                  <ModalDropdown options={this.state.department}  
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
                <Image source={content} style={ styles.inputImgContent } resizeMode="center" >
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
                  <TouchableOpacity
                    activeOpacity={ .5 }
                    onPress={ () => this.onStartProject() }
                  >
                    <Image source={ submit } style={ styles.button } resizeMode="center" >
                      <Text style={ styles.textButton }>{language.submit[currentLanguage]}</Text>
                    </Image>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={ styles.subView } >
                <View style={styles.profile}>
                  <Text>Saudi Arabia</Text>
                  <Text>Grenada Business Park A4, 12th floor - Riyadh Kingdom of Saudi Arabia</Text>
                  <Text>Mobile:<Text>+966.55.86.77.3</Text></Text>
                  <Text><Text style={styles.textBold}>Tel: </Text>+966.55.86.77.3</Text>
                  <Text><Text style={styles.textBold}>E mail: </Text>info@nard.sa</Text>
                  <Text><Text style={styles.textBold}>Web: </Text>www.nard.sa</Text>
                </View>
              </View>
            </KeyboardAwareScrollView>
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
  },
  dropdownStyle: {
    width: 180,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    paddingHorizontal: textPadding,
  },
  inputContent: {
    fontSize: 14,
    color: commonColors.text,
    alignSelf: 'stretch',
    marginTop: 15,
    height: 50,
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
  }
});

export default connect(state => ({
  currentLanguage: state.login.currentLanguage,
}),{ })(Ticket);