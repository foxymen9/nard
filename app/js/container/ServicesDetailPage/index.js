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

import WebSitePage from './subPages/website';
import EcommercePage from './subPages/ecommerce';
import LogoDesignPage from './subPages/logo';
import MultiMediaPage from './subPages/multimedia';
import ContentPage from './subPages/content';
import SeoPage from './subPages/seo';
import AnnualPage from './subPages/annual';
import KenticoPage from './subPages/kentico';
import MobilePage from './subPages/kentico';

class ServicesDetail extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  onApply() {

  }
  
  render() {
    const { currentLanguage, titleKey, rowID, title } = this.props;
    const avatars = [
        { avatar: web, backColor: commonColors.serviceWebColor },
        { avatar: cart, backColor: commonColors.detailTitleBar },
        { avatar: logo, backColor: commonColors.serviceLogoColor },
        { avatar: video, backColor: commonColors.serviceMediaColor },
        { avatar: content, backColor: commonColors.serviceContentColor },
        { avatar: search, backColor: commonColors.serviceSeoColor },
        { avatar: maintenance , backColor: commonColors.serviceMaintanenceColor },
        { avatar: kentico, backColor: commonColors.serviceKenticoColor },
        { avatar: mobile, backColor: commonColors.serviceMobileColor }
    ];

    const serviceTitle = [
      language.sWebsite[currentLanguage],
      language.sEcommerce[currentLanguage],
      language.sLogoDesign[currentLanguage],
      language.sMultimediaCD[currentLanguage],
      language.sContentSolution[currentLanguage],
      language.sSeo[currentLanguage],
      language.sMaintanence[currentLanguage],
      language.sKentico[currentLanguage],
      language.sMobile[currentLanguage],
    ];

    const data = [
        <WebSitePage />,
        <EcommercePage />,
        <LogoDesignPage />,
        <MultiMediaPage />,
        <ContentPage />,
        <SeoPage />,
        <AnnualPage />,
        <KenticoPage />,
        <MobilePage />
    ];

    return (
      <Container currentLanguage={currentLanguage} pageTitle={"services"} serviceDetail="true">
        <View style={ styles.container } >
          <View style={ styles.container } >
            {currentLanguage == 'EN'
            ?<View style={{ 
                      backgroundColor: avatars[rowID].backColor,
                      width: screenWidth,
                      height: 80,
                      paddingLeft: screenWidth * 0.05,
                      flexDirection: 'row',
                      alignItems: 'center'}}>
              <Image source={ avatars[rowID].avatar } style={ styles.avatar} resizeMod="center" />
              <View style={styles.rightWrapper}>
                <Text style={styles.boldText}>{serviceTitle[rowID]}</Text>
              </View>
            </View>
            :<View style={{ 
                      backgroundColor: avatars[rowID].backColor,
                      width: screenWidth,
                      height: 80,
                      paddingHorizontal: screenWidth * 0.05,
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      alignItems: 'center'}}>
              <View style={styles.rightWrapper_ar}>
                <Text style={styles.boldText}>{serviceTitle[rowID]}</Text>
              </View>
              <Image source={ avatars[rowID].avatar } style={ styles.avatar} resizeMod="center" />
            </View>
            }
            <ScrollView>
              <View style={ styles.subContainer}>
                <View style={styles.scrollView}>
                  {data[rowID]}
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
  rightWrapper_ar: {
    marginRight: 20,
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
});

export default connect(state => ({
  currentLanguage: state.auth.currentLanguage,
}),{ })(ServicesDetail);