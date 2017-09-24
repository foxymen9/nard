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
    const { currentLanguage } = this.props;

    return (
      <Container currentLanguage={currentLanguage} pageTitle="ourServicesDetail">
        <View style={ styles.container } >
          <View style={ styles.titleBar}>
            <Text style={styles.titleText}>Domain name: <Text style={styles.boldText}>www.domain1.com</Text></Text>
            <Text style={styles.titleText}>Capacity: <Text style={styles.boldText}>100 GB</Text></Text>
            <Text style={styles.titleText}>Expiration date: <Text style={styles.boldText}>08.19.2019</Text></Text>
          </View>
          <ScrollView>
            <View style={ styles.subContainer}>
              <View style={styles.scrollView}>
                <Text style={styles.importantText}>IMPORTANT:</Text>
                <Text style={styles.contentText}>
                  To point your domain name to the new server,
                  please change its name server (DNS) to:
                  ns1.s482.sureaserver.com
                  [192.1252.146.32]
                  ns1.s482.sureaserver.com
                  [192.1252.146.32]
                  You should be able to do this throughan online domain management interface provided by your domain register/

                  Plese contacat them for futher hlep with changing your domain name servers. 
                  Pleaase note that the domain registration for brakat.com is not currently
                  hadled by our company, and you will have to renew it at the current register.

                  Website URL: https://brakaat.com or
                  http://www.brakat.com
                </Text>
              </View>
            </View>
          </ScrollView>
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
  titleBar: {
    backgroundColor: commonColors.detailTitleBar,
    width: screenWidth,
    paddingVertical: 20,
    paddingLeft: screenWidth * 0.05,
  },
  titleText: {
    fontSize: 16,
    color: commonColors.title,
    lineHeight: 20,
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
  contentText: {
    fontSize: 14,
    color: commonColors.grayTitleText,
    lineHeight: 30,
  }
});

export default connect(state => ({
  currentLanguage: state.login.currentLanguage,
}),{ })(ServicesDetail);