'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Keyboard,
  findNodeHandle,  
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Drawer from 'react-native-drawer';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PhoneInput from 'react-native-phone-input';

import * as commonColors from '../../styles/commonColors';
import { screenWidth, screenHeight, statusBar, navBar } from '../../styles/commonStyles';
import Menu from '../Menu';
import language from '../../utils/language/language';

import { saveMenuSelectedID } from '../Menu/actions';

const logo = require('../../../assets/imgs/main/logo_color.png');
const menu = require('../../../assets/imgs/main/menu.png');
const back = require('../../../assets/imgs/background/back.png');

class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuStatus: false,
    };
  }

  onChangeMenuState() {
    const {menuStatus} = this.state;

    Keyboard.dismiss();

    if (menuStatus) {
      this.setState({menuStatus: false});
      this._drawer.close();
    }
    else {
      this.setState({menuStatus: true});
      this._drawer.open();
    }
  };

  gotoLoginPage() {
    // this.props.saveMenuSelectedID('null');
    // Actions.Main();
  }

  onBack() {
    Actions.pop();
  }

  onBackMain() {
    Actions.Main();
  }

  render()
  {
      const drawerStyles = {
        drawer: { shadowColor: '#000', shadowOpacity: 0.8, shadowRadius: 5},
      }
      const { currentLanguage, pageTitle, serviceDetail, userInfoResult } = this.props;
      const { menuStatus } = this.state;
      const menuComponent = <Menu currentLanguage={currentLanguage} menuState={()=>this.onChangeMenuState()} profileInfo={userInfoResult} />;
      return (
          <Drawer
              type="overlay"
              side="right"
              content={menuComponent}
              panCloseMask={null}
              closeDrawerOffset={-3}
              styles={drawerStyles}
              ref={(ref)=>this._drawer = ref}
              tapToClose={true}
              tweenHandler={(ratio) => ({
                main: { opacity: (2 - ratio) / 2 }
              })}
              onOpen={()=>{
                this.setState({menuStatus: true});
              }}
              onClose={()=>{
                this.setState({menuStatus: false});
              }}
              openDrawerOffset={(viewport)=>{
                return 150
              }}
              useInteractionManager={true}
          >
            <View style={ styles.container } >
              <View style={ styles.navBar } >
                <TouchableOpacity
                  activeOpacity={ .5 }
                  onPress={ () => this.gotoLoginPage() }
                >
                {pageTitle == 'null' ?
                  <View>
                    <Image source={ logo } resizeMode="center" style={ styles.logo } >
                    </Image>
                    <TouchableOpacity
                      activeOpacity={ .5 }
                      style={ styles.menu }
                      onPress={ () => this.onChangeMenuState() }
                    >
                      <Image source={ menu } resizeMode="contain" style={styles.menuIcon} />  
                    </TouchableOpacity>
                  </View>
                : <View>
                    <Text style={styles.logoText} >{language[pageTitle][currentLanguage].toUpperCase()}</Text>
                    <TouchableOpacity
                      activeOpacity={ .5 }
                      style={ styles.menu }
                      onPress={ () => this.onChangeMenuState() }
                    >
                      <Image source={ menu } resizeMode="contain" style={styles.menuIcon} />  
                    </TouchableOpacity>
                    {(pageTitle === 'ourServicesDetail' || pageTitle === 'offersDetail' || serviceDetail == "true") && (
                      <TouchableOpacity
                        activeOpacity={ .5 }
                        style={ styles.back }
                        onPress={ () => this.onBack() }
                      >
                        <View >
                          <Image source={ back } resizeMode="contain" style={styles.backIcon} />  
                        </View>
                      </TouchableOpacity>
                    )}
                    {(pageTitle == "startProject" || pageTitle == "services") && (
                      <TouchableOpacity
                        activeOpacity={ .5 }
                        style={ styles.back }
                        onPress={ () => this.onBackMain() }
                      >
                        <View >
                          <Image source={ back } resizeMode="contain" style={styles.backIcon} />  
                        </View>
                      </TouchableOpacity>
                    )}
                  </View>
                }
                </TouchableOpacity>
              </View>
              <View style={styles.border} />
              {this.props.children}
            </View>
          </Drawer>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  navBar: {
    backgroundColor: commonColors.title,
    flexDirection: 'row',
    paddingTop: statusBar,
    height: navBar-2,
    width: screenWidth,
  },
  border: {
    height: 2,
    width: screenWidth,
    backgroundColor: commonColors.separateGray,
  },
  logo: {
    width: screenWidth,
    alignItems: 'center',
  },
  logoText: {
    width: screenWidth,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 19,
    marginTop: 20,
  },
  menu: {
    right: 0,
    paddingRight: 20,
    paddingTop: 20,
    position: 'absolute',
    width: 50,
    height: 50,
  },
  back: {
    left: 0,
    paddingLeft: 20,
    paddingTop: 20,
    position: 'absolute',
    width: 50,
    height: 50,
  },
});

export default connect(state => ({
  userInfoResult: state.auth.userInfoResult,
}),{ saveMenuSelectedID })(Container);