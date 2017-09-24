'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    RecyclerViewBackedScrollView,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';

import browser from 'react-native-browser';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { changeLanguage } from '../LoginPage/actions';
import { saveMenuSelectedID } from './actions';
import language from '../../utils/language/language';

import { screenWidth, screenHeight, statusBar } from '../../styles/commonStyles';
import * as commonColors from '../../styles/commonColors';

const avatar = require('../../../assets/imgs/menu/avatar.png');
const arrow = require('../../../assets/imgs/menu/arrow.png');
const menu = require('../../../assets/imgs/login/menu.png');

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
        firstName: 'K',
        userName: 'Khalid El Kamel',
        dataSource: null,
        rowID: null,
    }
  }

  componentWillMount() {
  }

  onItemSelect(data, rowID) {
    const {currentLanguage, menuSelectedID} = this.props;

    if (rowID == menuSelectedID) {
      //Hide menu when select the current page
      this.props.menuState();
    }
    
    switch (rowID) {
      case "0":
        this.props.saveMenuSelectedID(rowID);
        Actions.MyServices();
        return;
      case "1":
        this.props.saveMenuSelectedID(rowID);
        Actions.Offers();
        return;
      case "2":
        this.props.saveMenuSelectedID(rowID);
        Actions.Profile();
        return;
      case "3":
        this.props.saveMenuSelectedID(rowID);
        Actions.Ticket();
        return;
      case "4":
        const lang = currentLanguage == 'EN' ? 'AR' : 'EN';
        this.props.changeLanguage(lang);
        this.props.menuState();
        return;
      case "5":
        browser.open("https://www.nard.sa");
        this.props.menuState();
        return;
      case "6":
        this.props.saveMenuSelectedID('null');
        Actions.Login();
        return;
      default:
        return;
    }
  }

  onChangeMenuState() {
    this.props.menuState();
  }

 _renderRow (rowData, sectionID, rowID, highlightRow) {
   const { menuSelectedID } = this.props;
    return (
      <TouchableOpacity onPress={()=>{highlightRow(sectionID, rowID); this.onItemSelect(rowData, rowID)}}>
        <View style={rowID == menuSelectedID ? styles.listViewSelect : styles.listView}>
          <Text  style={styles.listViewText}>{rowData}</Text>
          <Image source={ arrow } style={ styles.listArrow } resizeMode="contain" />
        </View>
      </TouchableOpacity>
    )
  }
  _renderSeparator (sectionID, rowID, adjacentRowHighlighted) {
      return (
        <View
          key={`${sectionID}-${rowID}`}
          style={{ height: 1, backgroundColor: '#3A3A3A', flex:1}}
        />
      );
  }

  render() {
    const {currentLanguage} = this.props;
    const menuItems = [language.menuOurServices[currentLanguage], 
                        language.menuOffer[currentLanguage], 
                        language.menuEditProfile[currentLanguage],
                        language.menuTicket[currentLanguage],  
                        language.menuLanguage[currentLanguage],
                        language.menuVisitNard[currentLanguage], 
                        language.menuLogout[currentLanguage]];
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource = ds.cloneWithRows(menuItems);

    return (
      <View style={ styles.container } >
        <View style={styles.title}>
          <View>
            <Image source={ avatar } style={ styles.avatar } resizeMode="contain">
              <Text  style={ styles.avatarText }>{this.state.firstName}</Text>
            </Image>
            <Text  style={ styles.userNameText }>{this.state.userName}:</Text>
          </View>
          <TouchableOpacity
            activeOpacity={ .5 }
            style={ styles.menu }
            onPress={ () => this.onChangeMenuState() }
          >
            <Image source={ menu } resizeMode="contain" style={ styles.menuIcon } />  
          </TouchableOpacity>
        </View>
        <View style={ styles.body }>
          <ListView
            dataSource={dataSource}
            renderRow={this._renderRow.bind(this)}
            renderSeparator={this._renderSeparator}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: commonColors.lightYellow,
    height: 125,
    paddingTop: 5,
  },
  body: {
    backgroundColor: commonColors.grayTitleText,
    height: screenHeight - 125,
  },
  avatar: {
    marginLeft: 20,
    marginTop: statusBar,
    justifyContent: 'center',
    alignItems:'center',
  },
  avatarText: {
    color: commonColors.title,
    fontSize: 25,
    backgroundColor: 'transparent',
  },
  userNameText: {
    marginLeft: 18,
    marginTop: 10,
    color: commonColors.title,
    fontSize: 19,
  },
  listView: {
    height: 50,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  listViewSelect: {
    height: 50,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#414141',
  },
  listViewText: {
    color: commonColors.title,
  },
  menu: {
    right: 0,
    paddingRight: 20,
    paddingTop: 40,
    position: 'absolute',
  },
  menuIcon: {
    height: 30,
    width: 30,
  }
});

export default connect(state => ({
  menuSelectedID: state.menu.menuSelectedID,
}),{ changeLanguage, saveMenuSelectedID })(Menu);