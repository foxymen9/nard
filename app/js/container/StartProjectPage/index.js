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
import { saveMenuSelectedID } from '../Menu/actions';

const name = require('../../../assets/imgs/start_project/full_name.png');
const email = require('../../../assets/imgs/start_project/mail.png');
const phone = require('../../../assets/imgs/start_project/phone.png');
const department_img = require('../../../assets/imgs/start_project/click.png');
const content = require('../../../assets/imgs/start_project/text_field.png');
const submit = require('../../../assets/imgs/main/yellow_button.png');
const arrow = require('../../../assets/imgs/start_project/down_arrow.png');
const pressBtn = require('../../../assets/imgs/main/blue_button.png');

class StarProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phone: '',
      email: '',
      pressStatus: false,
      defaultDepartment: 'Select Department',
      departments: ['option1', 'option2', 'option3', 'option4', 'option5', 'option6'],
    };
  }

  componentWillMount() {
    const { currentLanguage } = this.props;
    this.changeDepartmentLanguage(currentLanguage);
    this.props.saveMenuSelectedID('null');
  }

  componentWillReceiveProps(nextProps) {
    const { currentLanguage } = nextProps;
    this.changeDepartmentLanguage(currentLanguage);
  }
  
  changeDepartmentLanguage(currentLanguage) {
    const { defaultDepartment } = this.state; 
    this.setState({defaultDepartment: language.department_txt[currentLanguage] });
  }

  onStartProject() {
    // Actions.MyServices();
  }

  onSelectDepartment(index){
    const { departments } = this.state;
    this.setState({ defaultDepartment: departments[index] });
  }

  render() {
    const { currentLanguage } = this.props;

    return (
      <Container currentLanguage={currentLanguage} pageTitle="startProject">
        <View style={ styles.container } >
          <KeyboardAwareScrollView>
            <View style={ styles.subContainer } >
              <Image source={name} style={ styles.inputImg } resizeMode="contain">
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
              <Image source={email} style={ styles.inputImg }  resizeMode="contain">
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
              <Image source={department_img} style={ styles.inputImg }  resizeMode="contain" >
                <ModalDropdown options={this.state.departments}  
                              style={styles.modalDropdown} 
                              dropdownStyle={styles.dropdownStyle} 
                              onSelect={(index)=>this.onSelectDepartment(index)}
                >
                  <View style={styles.dropdown}>
                    <Text style={styles.dropdownText}>{this.state.defaultDepartment}</Text>
                    <Image source={arrow} resizeMode="center" />
                  </View>
                </ModalDropdown>
              </Image>
              <Image source={content} style={ styles.inputImgContent }  resizeMode="contain" >
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
              <View style={styles.buttonWrapper}>
                <TouchableHighlight
                  activeOpacity={ .5 }
                  onShowUnderlay={()=>this.setState({pressStatus: true})}
                  onHideUnderlay={()=>this.setState({pressStatus: false})}
                  underlayColor={'#fff'}
                  onPress={ () => this.onStartProject() }
                >
                  <Image source={ this.state.pressStatus ? pressBtn : submit } style={ styles.button }  resizeMode="contain">
                    <Text style={ styles.textButton }>{language.startNewProject[currentLanguage]}</Text>
                  </Image>
                </TouchableHighlight>
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
  subContainer: {
    flex: 1,
    height: screenHeight - navBar - 20,
    width: screenWidth,
    alignItems: 'center',
    marginTop: 20,
  },
  inputImg: {
    justifyContent: 'center',
    width: subWidth,
    marginTop: 10,
  },
  modalDropdown: {
    backgroundColor:  'transparent', 
    marginLeft: inputMargin,
    width: 210,
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
    color: commonColors.title,
    fontSize: 14,
    backgroundColor: 'transparent',
  },
});

export default connect(state => ({
  currentLanguage: state.auth.currentLanguage,
}),{ saveMenuSelectedID })(StarProject);