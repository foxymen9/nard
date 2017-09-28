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
import { screenWidth, screenHeight, statusBar, navBar, subWidth } from '../../styles/commonStyles';
import language from '../../utils/language/language';
import Container from '../Container';

const apply = require('../../../assets/imgs/main/yellow_button.png');
const pressBtn = require('../../../assets/imgs/main/blue_button.png');

class OffersDetail extends Component {
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

  onApply() {

  }
  
  render() {
    const { currentLanguage, rowID } = this.props;
    const backColors = [commonColors.lightYellow, commonColors.detailTitleBar, commonColors.grayTitleText, commonColors.lightYellow];

    return (
      <Container currentLanguage={currentLanguage} pageTitle="offersDetail">
        <View style={ styles.container } >
          {currentLanguage == 'EN'
            ?<View style={ styles.container } >
              <View style={ [styles.titleBar, {backgroundColor: backColors[rowID]}]}>
                <Text style={styles.titleText}>HOSTING</Text>
                <Text style={styles.boldText}>FOR ALL CUSTOMERS</Text>
              </View>
              <ScrollView>
                <View style={ styles.subContainer}>
                  <View style={styles.scrollView}>
                    <Text style={styles.contentTitleText}>
                      To point your domain name to the new server,
                      please change its name server (DNS) to:
                      ns1.s482.sureaserver.com
                    </Text>
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
                  <TouchableHighlight
                    onShowUnderlay={()=>this.setState({pressStatus: true})}
                    onHideUnderlay={()=>this.setState({pressStatus: false})}
                    underlayColor={'#fff'}
                    onPress={ () => this.onApply() }
                  >
                    <Image source={ this.state.pressStatus ? pressBtn : apply } style={ styles.button } resizeMode="contain">
                      <Text style={ styles.textButton }>{language.apply[currentLanguage]}</Text>
                    </Image>
                  </TouchableHighlight>
                </View>
              </ScrollView>
            </View>
          :<View style={ styles.container } >
              <View style={ [styles.titleBar, {backgroundColor: backColors[rowID]}]}>
                <Text style={styles.titleText_ar}>HOSTING</Text>
                <Text style={styles.boldText_ar}>FOR ALL CUSTOMERS</Text>
              </View>
              <ScrollView>
                <View style={ styles.subContainer}>
                  <View style={styles.scrollView}>
                    <Text style={styles.contentTitleText_ar}>
                      To point your domain name to the new server,
                      please change its name server (DNS) to:
                      ns1.s482.sureaserver.com
                    </Text>
                    <Text style={styles.contentText_ar}>
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
                  <TouchableHighlight
                    onShowUnderlay={()=>this.setState({pressStatus: true})}
                    onHideUnderlay={()=>this.setState({pressStatus: false})}
                    underlayColor={'#fff'}
                    onPress={ () => this.onApply() }
                  >
                    <Image source={ this.state.pressStatus ? pressBtn : apply } style={ styles.button } resizeMode="contain">
                      <Text style={ styles.textButton }>{language.apply[currentLanguage]}</Text>
                    </Image>
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
    fontSize: 16,
    color: commonColors.title,
    lineHeight: 20,
  },
  boldText_ar: {
    fontWeight: 'bold',
    fontSize: 16,
    color: commonColors.title,
    lineHeight: 20,
    textAlign: 'right',
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
    fontWeight: 'bold',
    fontSize: 14,
    color: commonColors.grayTitleText,
    lineHeight: 20,
    marginBottom: 10,
  },
  contentTitleText_ar: {
    fontWeight: 'bold',
    fontSize: 14,
    color: commonColors.grayTitleText,
    lineHeight: 20,
    marginBottom: 10,
    textAlign: 'right',
  },
  contentText_ar: {
    fontSize: 14,
    color: commonColors.grayTitleText,
    lineHeight: 20,
    textAlign: 'right',
  },
  contentText: {
    fontSize: 14,
    color: commonColors.grayTitleText,
    lineHeight: 20,
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
});

export default connect(state => ({
  currentLanguage: state.auth.currentLanguage,
}),{ })(OffersDetail);