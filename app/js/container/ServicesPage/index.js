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
  TouchableHighlight,
  ListView,
  Keyboard,
  findNodeHandle,  
  RecyclerViewBackedScrollView
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Spinner from 'react-native-loading-spinner-overlay';

import * as commonColors from '../../styles/commonColors';
import { screenWidth, screenHeight, statusBar, navBar, subWidth } from '../../styles/commonStyles';
import language from '../../utils/language/language';
import Container from '../Container';

import { saveMenuSelectedID } from '../Menu/actions';

const content = require('../../../assets/imgs/services/content.png');
const eCommerce = require('../../../assets/imgs/services/cart.png');
const kentico = require('../../../assets/imgs/services/kentico.png');
const logoDesign = require('../../../assets/imgs/services/logo.png');
const maintenance = require('../../../assets/imgs/services/maintenance.png');
const media = require('../../../assets/imgs/services/media.png');
const mobile = require('../../../assets/imgs/services/mobile.png');
const seo = require('../../../assets/imgs/services/seo.png');
const web = require('../../../assets/imgs/services/web.png');
const arrow = require('../../../assets/imgs/services/arrow.png');

const lists = [web, eCommerce, logoDesign, media, content, seo, maintenance, kentico, mobile];

class Services extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: null,
      rowID: null,
    };
  }

  componentWillMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  onEndReached() {
  }

  onItemSelect(data, rowID) {
    Actions.ServicesDetail({rowID: rowID, titleKey: data.titleKey});
  }

  handleScroll(event) {
  }

 _renderRow (rowData, sectionID, rowID, highlightRow) {
    return (
      <TouchableOpacity onPress={()=>{this.onItemSelect(rowData, rowID)}} style={styles.listWrapper}>
        <View style={styles.listView}>
          <View style={styles.leftView}>
            <Image source={ lists[rowID] } style={ styles.avatar} />
            <Text  style={styles.title}>{rowData.title}</Text>
          </View>
          <Image source={ arrow } style={ styles.arrow} />
        </View>
      </TouchableOpacity>
    )
  }

  _renderSeparator (sectionID, rowID, adjacentRowHighlighted) {
    return (
      rowID != 8 && (
      <View
        key={`${sectionID}-${rowID}`}
        style={{ height: 1, backgroundColor: commonColors.separateGray, flex:1}}
      />
      )
    );
  }

  render() {
    const { currentLanguage } = this.props;

    /* **** data for ListView **** */
    const serviceItems = [
      {id: 1, title: language.sWebsite[currentLanguage], titleKey: "sWebsite"},
      {id: 2, title: language.sEcommerce[currentLanguage], titleKey: "sEcommerce"},
      {id: 3, title: language.sLogoDesign[currentLanguage], titleKey: "sLogoDesign"},
      {id: 4, title: language.sMultimediaCD[currentLanguage], titleKey: "sMultimediaCD"},
      {id: 5, title: language.sContentSolution[currentLanguage], titleKey: "sContentSolution"},
      {id: 6, title: language.sSeo[currentLanguage], titleKey: "sSeo"},
      {id: 7, title: language.sMaintanence[currentLanguage], titleKey: "sMaintanence"},
      {id: 8, title: language.sKentico[currentLanguage], titleKey: "sKentico"},
      {id: 9, title: language.sMobile[currentLanguage], titleKey: "sMobile"},
    ];
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource = ds.cloneWithRows(serviceItems);
    /* **************************** */

    return (
      <Container currentLanguage={currentLanguage} pageTitle="services">
        <View style={ styles.container } >
          <ListView
            ref='listview'
            dataSource={dataSource}
            renderRow={this._renderRow.bind(this)}
            renderSeparator={this._renderSeparator}
            onScroll = {(event)=>this.handleScroll(event)}
            onEndReached={()=>this.onEndReached()}
          />
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
  },
  listWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth,
    height: (screenHeight-8-navBar) / 9,
    backgroundColor: commonColors.title,
  },
  listView: {
    width: subWidth,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  leftView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#000',
    fontSize: 16,
    backgroundColor: 'transparent',
    marginLeft: 20,
  },
});

export default connect(state => ({
  currentLanguage: state.login.currentLanguage,
}),{ saveMenuSelectedID })(Services);