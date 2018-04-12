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
  Platform,
  BackHandler,
  ImageBackground,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Spinner from 'react-native-loading-spinner-overlay';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import * as commonColors from '../../styles/commonColors';
import { screenWidth, screenHeight, statusBar, navBar, subWidth, NORMAL_FONT, NORMAL_BOLD_FONT } from '../../styles/commonStyles';
import language from '../../utils/language/language';
import Container from '../Container';

const apply = require('../../../assets/imgs/main/yellow_button.png');
const pressBtn = require('../../../assets/imgs/main/blue_button.png');

class OffersDetail extends Component {
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

    this.state = {
      name: '',
      phone: '',
      email: '',
    };
  }

  componentWillMount() {
    if (Platform.OS === "android") {
      BackHandler.addEventListener("hardwareBackPress", this.handleBackButtonClick);
    }
  }

  componentWillUnmount() {
    if (Platform.OS === "android") {
      BackHandler.removeEventListener("hardwareBackPress", this.handleBackButtonClick);
    }
  }

  handleBackButtonClick() {
    Actions.Offers();
    return true;
  }

  componentWillReceiveProps(nextProps) {
  }

  onApply() {
    Actions.StartProject();
  }
  
  render() {
    const { currentLanguage, rowID, offerData } = this.props;
    const backColors = [commonColors.lightYellow, commonColors.detailTitleBar, commonColors.grayTitleText];

    return (
      <Container currentLanguage={currentLanguage} pageTitle="offersDetail">
        <View style={ styles.container } >
          {currentLanguage == 'EN'
            ?<View style={ styles.container } >
              <View style={ [styles.titleBar, {backgroundColor: backColors[rowID % 3]}]}>
                <Text style={styles.boldText}>{offerData[rowID].text[0].title}</Text>
              </View>
              <ScrollView>
                <View style={ styles.subContainer}>
                  <View style={styles.scrollView}>
                    <Text style={styles.contentText}>
                      {offerData[rowID].text[0].description}
                    </Text>
                  </View>
                  <TouchableHighlight
                    onShowUnderlay={()=>this.setState({pressStatus: true})}
                    onHideUnderlay={()=>this.setState({pressStatus: false})}
                    underlayColor={'#fff'}
                    onPress={ () => this.onApply() }
                  >
                    <ImageBackground source={ this.state.pressStatus ? pressBtn : apply } style={ styles.button } resizeMode="contain">
                      <Text style={ styles.textButton }>{language.apply[currentLanguage]}</Text>
                    </ImageBackground>
                  </TouchableHighlight>
                </View>
              </ScrollView>
            </View>
          :<View style={ styles.container } >
              <View style={ [styles.titleBar, {backgroundColor: backColors[rowID]}]}>
                <Text style={styles.boldText_ar}>{offerData[rowID].text[1].title}</Text>
              </View>
              <ScrollView>
                <View style={ styles.subContainer}>
                  <View style={styles.scrollView}>
                    <Text style={styles.contentText_ar}>
                      {offerData[rowID].text[0].description}
                    </Text>
                  </View>
                  <TouchableHighlight
                    onShowUnderlay={()=>this.setState({pressStatus: true})}
                    onHideUnderlay={()=>this.setState({pressStatus: false})}
                    underlayColor={'#fff'}
                    onPress={ () => this.onApply() }
                  >
                    <ImageBackground source={ this.state.pressStatus ? pressBtn : apply } style={ styles.button } resizeMode="contain">
                      <Text style={ styles.textButton }>{language.apply[currentLanguage]}</Text>
                    </ImageBackground>
                  </TouchableHighlight>
                </View>
              </ScrollView>
            </View>
          }
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
  titleBar: {
    // backgroundColor: commonColors.detailTitleBar,
    width: screenWidth,
    paddingVertical: 20,
    paddingHorizontal: screenWidth * 0.05,
  },
  titleText: {
    fontSize: 16,
    color: commonColors.title,
    fontFamily: NORMAL_FONT,
  },
  titleText_ar: {
    fontSize: 16,
    color: commonColors.title,
    textAlign: 'right',
    fontFamily: NORMAL_FONT,
  },
  boldText: {
    fontSize: 16,
    color: commonColors.title,
    fontFamily: NORMAL_BOLD_FONT,
  },
  boldText_ar: {
    fontSize: 16,
    color: commonColors.title,
    textAlign: 'right',
    fontFamily: NORMAL_BOLD_FONT,
  },
  subContainer: {
    width: screenWidth,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex:1, 
    marginBottom: 20,
    width: screenWidth * 0.9,
  },
  contentTitleText: {
    fontSize: 14,
    color: commonColors.grayTitleText,
    lineHeight: 20,
    marginBottom: 10,
    fontFamily: NORMAL_BOLD_FONT,
  },
  contentTitleText_ar: {
    fontSize: 14,
    color: commonColors.grayTitleText,
    lineHeight: 20,
    marginBottom: 10,
    textAlign: 'right',
    fontFamily: NORMAL_BOLD_FONT,
  },
  contentText_ar: {
    fontSize: 14,
    color: commonColors.grayTitleText,
    lineHeight: 20,
    textAlign: 'right',
    fontFamily: NORMAL_FONT,
  },
  contentText: {
    fontSize: 14,
    color: commonColors.grayTitleText,
    lineHeight: 20,
    fontFamily: NORMAL_FONT,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: subWidth,
    height: 60,
    marginTop: 10,
  },
  textButton: {
    color: '#fff',
    fontSize: 14,
    backgroundColor: 'transparent',
    fontFamily: NORMAL_FONT,
  },
});

export default connect(state => ({
  currentLanguage: state.language.currentLanguage,
}),{ })(OffersDetail);