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
  Alert,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Spinner from 'react-native-loading-spinner-overlay';
import OrientationLoadingOveraly from 'react-native-orientation-loading-overlay';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ModalDropdown from 'react-native-modal-dropdown';
import SimplePicker from 'react-native-simple-picker';

import * as commonColors from '../../styles/commonColors';
import { screenWidth, screenHeight, statusBar, navBar, inputMargin, subWidth, textPadding } from '../../styles/commonStyles';
import language from '../../utils/language/language';
import Container from '../Container';
import { saveMenuSelectedID } from '../Menu/actions';
import { addNewProject, initialStore } from './actions';
import { logout } from '../LoginPage/actions';
import { changeTokenStatus } from '../ParentComponent/actions';

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

class StarProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phone: '',
      email: '',
      pressStatus: false,
      defaultDepartment: 'Select a service',
      departments: [],
      selectedID: null,
      loading: false,
      alert_flag: false,
      pickerOptions: [],
    };
  }

  componentWillMount() {
    const { currentLanguage , userInfoResult, apiToken, serviceList, loggin } = this.props;
    this.changeDepartmentLanguage(currentLanguage);
    this.props.saveMenuSelectedID('null');
    
    const departments = [], pickerOptions=[];
    for (let i = 0; i < serviceList.data.services.length; i ++) {
      departments.push(serviceList.data.services[i].title);
      pickerOptions.push(i);
    }

    this.setState({
      departments: departments,
      pickerOptions: pickerOptions,
    });

    if (userInfoResult && loggin) {
      this.setdDataState(userInfoResult.data, currentLanguage);
    }
  }
  
  setdDataState(userData, currentLanguage) {
    if (currentLanguage == 'EN') {
      this.setState({name: userData.client_descriptions[1].title});
      this.setState({phone: userData.client_data.mobile});
      this.setState({email: userData.client_data.email});
    }
    else {
      this.setState({name: userData.client_descriptions[2].title});
      this.setState({phone: userData.client_data.mobile});
      this.setState({email: userData.client_data.email});
    }
  }

  componentWillReceiveProps(nextProps) {
    const { currentLanguage, loading, serviceList, projectResult } = nextProps;
    this.changeDepartmentLanguage(currentLanguage);

    this.setState({ loading: loading });
    const departments = [], pickerOptions=[];

    for (let i = 0; i < serviceList.data.services.length; i ++) {
      departments.push(serviceList.data.services[i].title);
      pickerOptions.push(i);
    }

    this.setState({
      departments: departments,
      pickerOptions: pickerOptions,
    });

    if (projectResult) {
      if (projectResult === "token_failed") {
        if (token_status) {
          this.props.changeTokenStatus(false);
        }
        this.props.logout();
        if (!loggin && !token_status) {
          this.props.initialStore();
          Actions.Login();
        }
      }
      else {
        if (!this.state.alert_flag && !loading) {
          this.setState({alert_flag: true}); 
          if (projectResult.error) {   //warning
            setTimeout(()=> {
              Alert.alert("WARNING",  projectResult.error.warning);
            }, 100);
          }
          else {
            setTimeout(()=> {
              Alert.alert("SUCCESS",  projectResult.success);
            }, 100);
          }
        }
      }
    }
  }
  
  changeDepartmentLanguage(currentLanguage) {
    const { defaultDepartment } = this.state; 
    this.setState({defaultDepartment: language.department_txt[currentLanguage] });
  }

  onStartProject() {
    const {phone, name, email, selectedID, content} = this.state;
    const {apiToken, userInfoResult} = this.props;
    if (selectedID == null) {
      alert("Please select service");
      return;
    }

    this.setState({alert_flag: false}); 
    
    const data = {
      services_id: selectedID,
      name: name,
      email: email,
      mobile: phone,
      service_details: content,
    }
    this.props.addNewProject(apiToken.api_token, data);
  }

  onSelectDepartment(index){
    const { serviceList } = this.props;
    const { departments } = this.state;
    this.setState({ defaultDepartment: departments[index] });
    this.setState({ selectedID: serviceList.data.services[index].services_id });
  }

  render() {
    const { currentLanguage } = this.props;
    const { loading } = this.state;
    
    return (
      <Container currentLanguage={currentLanguage} pageTitle="startProject">
        <OrientationLoadingOveraly visible={ loading } />
        <View style={ styles.container } >
          <KeyboardAwareScrollView>
            {currentLanguage == 'EN'
            ?<View style={ styles.subContainer } >
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
              <Image source={department_img} style={ styles.inputImg } resizeMode="contain" >
                <TouchableOpacity  onPress={()=>{this.refs.picker.show()}}>
                  <View style={styles.modalDropdown}>
                    <View style={styles.dropdown}>
                      <Text style={styles.dropdownText}>{this.state.defaultDepartment}</Text>
                      <Image source={arrow} resizeMode="center" />
                    </View>
                    <SimplePicker
                      ref={'picker'}
                      options={this.state.pickerOptions}
                      labels={this.state.departments}
                      itemStyle={{
                        fontSize: 14,
                        color: '#000',
                        textAlign: 'center',
                      }}
                      onSubmit={(option) => {
                        this.onSelectDepartment(option)
                      }}
                    />
                  </View>
                </TouchableOpacity>
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
            :<View style={ styles.subContainer } >
              <Image source={name_ar} style={ styles.inputImg } resizeMode="contain">
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
                  value={ this.state.name }
                  onChangeText={ (text) => this.setState({ name: text }) }
                  onSubmitEditing={ () => this.refs.phone.focus() }
                />
              </Image>
              <Image source={phone_ar} style={ styles.inputImg } resizeMode="contain" >
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
                  value={ this.state.phone }
                  onChangeText={ (text) => this.setState({ phone: text }) }
                  onSubmitEditing={ () => this.refs.email.focus() }
                />
              </Image>
              <Image source={email_ar} style={ styles.inputImg }  resizeMode="contain">
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
                  value={ this.state.email }
                  onChangeText={ (text) => this.setState({ email: text }) }
                  onSubmitEditing={ () => this.refs.content.focus() }
                />
              </Image>
              <Image source={department_img_ar} style={ styles.inputImg }  resizeMode="contain" >
                <TouchableOpacity  onPress={()=>{this.refs.picker.show()}}>
                  <View style={styles.modalDropdown_ar}>
                    <View style={styles.dropdown_ar}>
                      <Image source={arrow} resizeMode="center" />
                      <Text style={styles.dropdownText}>{this.state.defaultDepartment}</Text>
                    </View>
                    <SimplePicker
                      ref={'picker'}
                      options={this.state.pickerOptions}
                      labels={this.state.departments}
                      itemStyle={{
                        fontSize: 14,
                        color: '#000',
                        textAlign: 'center',
                      }}
                      onSubmit={(option) => {
                        this.onSelectDepartment(option)
                      }}
                    />
                  </View>
                </TouchableOpacity>
              </Image>
              <Image source={content} style={ styles.inputImgContent }  resizeMode="contain" >
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
            }
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
  dropdownStyle: {
    width: 180,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdown_ar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 60,
  },
  dropdownText: {
    color: '#000',
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
  currentLanguage: state.language.currentLanguage,

  projectResult: state.project.data,
  loading: state.project.loading,

  serviceList: state.services.data,
  userInfoResult: state.auth.userInfoResult,
  token_status: state.parent_state.token_status,
  apiToken: state.parent_state.apiToken,
  loggin: state.auth.loggin,
}),{ saveMenuSelectedID, addNewProject, logout, changeTokenStatus, initialStore })(StarProject);