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

const gear = require('../../../assets/imgs/services_detail/gear.png');
const kentico = require('../../../assets/imgs/services_detail/kentico.png');
const cart = require('../../../assets/imgs/services_detail/cart.png');
const content = require('../../../assets/imgs/services_detail/content.png');
const web = require('../../../assets/imgs/services_detail/web.png');
const video = require('../../../assets/imgs/services_detail/video.png');
const search = require('../../../assets/imgs/services_detail/search.png');
const mobile = require('../../../assets/imgs/services_detail/mobile.png');
const maintenance = require('../../../assets/imgs/services_detail/maintenance.png');
const logo = require('../../../assets/imgs/services_detail/logo.png');

class ServicesDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      avatars: [
        { avatar: web, backColor: commonColors.serviceWebColor },
        { avatar: cart, backColor: commonColors.detailTitleBar },
        { avatar: logo, backColor: commonColors.serviceLogoColor },
        { avatar: video, backColor: commonColors.lightYellow },
        { avatar: content, backColor: commonColors.serviceContentColor },
        { avatar: search, backColor: commonColors.serviceSeoColor },
        { avatar: maintenance , backColor: commonColors.serviceMaintanenceColor },
        { avatar: kentico, backColor: commonColors.serviceKenticoColor },
        { avatar: mobile, backColor: commonColors.serviceMobileColor }
      ],
    };
  }

  componentWillMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  onApply() {

  }
  
  render() {
    const { currentLanguage, titleKey, rowID } = this.props;
    const { avatars } = this.state;

    return (
      <Container currentLanguage={currentLanguage} pageTitle={titleKey} serviceDetail="true">
        <View style={ styles.container } >
          <View style={ styles.container } >
            <View style={{ 
                      backgroundColor: avatars[rowID].backColor,
                      width: screenWidth,
                      height: 80,
                      paddingLeft: screenWidth * 0.05,
                      flexDirection: 'row',
                      alignItems: 'center'}}
            >
              <Image source={ avatars[rowID].avatar } style={ styles.avatar} resizeMod="center" />
              <View style={styles.rightWrapper}>
                <Text style={styles.titleText}>CONTENT</Text>
                <Text style={styles.boldText}>SOLUTIONS</Text>
              </View>
            </View>
            <ScrollView>
              <View style={ styles.subContainer}>
                <View style={styles.scrollView}>
                  <Text style={styles.contentText}>
                    [192.1252.146.32]
                    ns1.s482.sureaserver.com
                    To point your domain name to the new server,
                    please change its name server (DNS) to:
                    ns1.s482.sureaserver.com
                    [192.1252.146.32]
                    ns1.s482.sureaserver.com
                    To point your domain name to the new server,
                    please change its name server (DNS) to:
                    ns1.s482.sureaserver.com
                    [192.1252.146.32]
                    ns1.s482.sureaserver.com
                    To point your domain name to the new server,
                    please change its name server (DNS) to:
                    ns1.s482.sureaserver.com
                    [192.1252.146.32]
                    ns1.s482.sureaserver.com
                  </Text>
                </View>
              </View>
            </ScrollView>
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
    backgroundColor: commonColors.title,
    alignItems: 'center',
  },
  rightWrapper: {
    marginLeft: 20,
  },
  titleText: {
    fontSize: 16,
    color: commonColors.title,
    lineHeight: 20,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: commonColors.title,
    lineHeight: 20,
  },
  subContainer: {
    width: screenWidth,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex:1,
    width: screenWidth * 0.9,
  },
  contentText: {
    fontSize: 14,
    lineHeight: 20,
    color: commonColors.grayTitleText,
  },
});

export default connect(state => ({
  currentLanguage: state.login.currentLanguage,
}),{ })(ServicesDetail);