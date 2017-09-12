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

class OffersDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phone: '',
      email: '',
      department: '',
    };
  }

  componentWillMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  onApply() {

  }
  
  render() {
    const { currentLanguage } = this.props;

    return (
      <Container currentLanguage={currentLanguage} pageTitle="offersDetail">
        <View style={ styles.container } >
          
            <View style={ styles.container } >
              <View style={ styles.titleBar}>
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
                  <TouchableOpacity
                    activeOpacity={ .5 }
                    onPress={ () => this.onApply() }
                  >
                    <Image source={ apply } style={ styles.button } resizeMode="contain">
                      <Text style={ styles.textButton }>{language.apply[currentLanguage]}</Text>
                    </Image>
                  </TouchableOpacity>
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
  currentLanguage: state.login.currentLanguage,
}),{ })(OffersDetail);