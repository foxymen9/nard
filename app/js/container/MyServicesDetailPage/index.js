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
  ScrollView,
  WebView,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Spinner from 'react-native-loading-spinner-overlay';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import * as commonColors from '../../styles/commonColors';
import { screenWidth, screenHeight, statusBar, navBar } from '../../styles/commonStyles';
import language from '../../utils/language/language';
import Container from '../Container';

const name = require('../../../assets/imgs/start_project/full_name.png');
const email = require('../../../assets/imgs/start_project/mail.png');
const phone = require('../../../assets/imgs/start_project/phone.png');
const content = require('../../../assets/imgs/start_project/text_field.png');
const submit = require('../../../assets/imgs/main/yellow_button.png');

class ServicesDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phone: '',
      email: '',
    };
  }

  componentWillMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    const { currentLanguage, subData } = this.props;
    
    return (
      <Container currentLanguage={currentLanguage} pageTitle="ourServicesDetail">
        {currentLanguage == 'EN'
        ?<View style={ styles.container } >
          <View style={ styles.titleBar}>
            <Text style={styles.titleText}>Domain name: <Text style={styles.boldText}>{subData.domain_name}</Text></Text>
            <Text style={styles.titleText}>Capacity: <Text style={styles.boldText}>{subData.capacity}</Text></Text>
            <Text style={styles.titleText}>Expiration date: <Text style={styles.boldText}>{subData.expired_date}</Text></Text>
          </View>
          <ScrollView>
            <View style={ styles.subContainer}>
              <View style={styles.scrollView}>
                <Text style={styles.importantText}>IMPORTANT:</Text>
                <Text style={styles.contentText}>
                  {subData.service_details}
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
        :<View style={ styles.container } >
          <View style={ styles.titleBar}>
            <Text style={styles.titleText_ar}> {language.domainText["AR"]}: <Text style={styles.boldText}>{subData.domain_name}</Text></Text>
            <Text style={styles.titleText_ar}> {language.capacityText["AR"]}: <Text style={styles.boldText}>{subData.capacity}</Text></Text>
            <Text style={styles.titleText_ar}> {language.expiredDateText["AR"]}: <Text style={styles.boldText}>{subData.expired_date}</Text></Text>
          </View>
          <ScrollView>
            <View style={ styles.subContainer}>
              <View style={styles.scrollView}>
                <Text style={styles.importantText_ar}>IMPORTANT:</Text>
                <Text style={styles.contentText_ar}>
                   {subData.service_details}
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
        }
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
  titleBar: {
    backgroundColor: commonColors.detailTitleBar,
    width: screenWidth,
    paddingVertical: 20,
    paddingHorizontal: screenWidth * 0.05,
  },
  titleText: {
    fontSize: 16,
    color: commonColors.title,
    lineHeight: 20,
  },
  titleText_ar: {
    fontSize: 16,
    color: commonColors.title,
    lineHeight: 20,
    textAlign: 'right',
  },
  boldText: {
    fontWeight: 'bold',
  },
  subContainer: {
    width: screenWidth,
    marginVertical: 20,
    alignItems: 'center',
  },
  scrollView: {
    flex:1, 
    width: screenWidth * 0.9,
  },
  importantText: {
    color: commonColors.grayTitleText,
    fontWeight: 'bold',
  },
  importantText_ar: {
    color: commonColors.grayTitleText,
    fontWeight: 'bold',
    textAlign: 'right'
  },
  contentText: {
    fontSize: 14,
    color: commonColors.grayTitleText,
    lineHeight: 30,
  },
  contentText_ar: {
    fontSize: 14,
    color: commonColors.grayTitleText,
    lineHeight: 30,
    textAlign: 'right',
  }
});

export default connect(state => ({
  currentLanguage: state.language.currentLanguage,
}),{ })(ServicesDetail);