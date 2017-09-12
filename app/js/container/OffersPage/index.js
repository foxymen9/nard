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
import { screenWidth, screenHeight, statusBar, navBar } from '../../styles/commonStyles';
import language from '../../utils/language/language';
import Container from '../Container';

import { saveMenuSelectedID } from '../Menu/actions';

const arrow = require('../../../assets/imgs/my_services/arrow.png');
const scrollArrowDown = require('../../../assets/imgs/my_services/scroll_arrow.png');
const scrollArrowUp = require('../../../assets/imgs/my_services/scroll_arrow_up.png');

class Offers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: null,
      rowID: null,
      backColors: [commonColors.lightYellow, '#1C92D0', '#474747', commonColors.lightYellow],
    };
  }

  componentWillMount() {
    this.props.saveMenuSelectedID(1);
  }

  componentWillReceiveProps(nextProps) {
  }

  onAddService() {
    Actions.StartProject();
  }

  onEndReached() {
    // this.setState({endList: true});
  }

  onItemSelect(data, rowID) {
    Actions.OffersDetail();
  }

  handleScroll(event) {
  }

 _renderRow (rowData, sectionID, rowID, highlightRow) {
    return (
      <View style={{
                  backgroundColor: this.state.backColors[rowID],
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: screenWidth,
                  height: (screenHeight-12-navBar) / 4,}}
      >
        <TouchableOpacity onPress={()=>{this.onItemSelect(rowData, rowID)}}>
          <View style={styles.listView}>
            <View style={styles.titleWrapper}>
              <Text  style={styles.offerTitle}>{rowData.title}</Text>
              <Text  style={styles.offerSubTitle}>{rowData.subTitle}</Text>
            </View>
            <Image source={ arrow } style={ styles.arrow } />
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  _renderSeparator (sectionID, rowID, adjacentRowHighlighted) {
      return (
          rowID != 3 && (
          <View
              key={`${sectionID}-${rowID}`}
              style={{ height: 4, backgroundColor: '#fff', flex:1}}
          />
          )
      );
  }

  render() {
    const { currentLanguage } = this.props;

    /* ** data for ListView ** */
    const serviceItems = [
      {id: 1, title: language.offerTitle[currentLanguage], subTitle: language.offerSubTitle[currentLanguage]},
      {id: 2, title: language.offerTitle[currentLanguage], subTitle: language.offerSubTitle[currentLanguage]},
      {id: 3, title: language.offerTitle[currentLanguage], subTitle: language.offerSubTitle[currentLanguage]},
      {id: 4, title: language.offerTitle[currentLanguage], subTitle: language.offerSubTitle[currentLanguage]},
    ];
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource = ds.cloneWithRows(serviceItems);
    /* ************************ */

    return (
      <Container currentLanguage={currentLanguage} pageTitle="offers">
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
    height: screenHeight - navBar,
    backgroundColor: commonColors.lightYellow,
  },
  listView: {
    width: screenWidth * 0.85,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleWrapper: {
    paddingRight: 40,
  },
  offerTitle: {
    color: commonColors.title,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginBottom: 5,
  },
  offerSubTitle: {
    color: commonColors.title,
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  arrow: {
  },
  scrollArrow: {
    position: 'absolute',
    bottom: 0,
  },
});

export default connect(state => ({
  currentLanguage: state.login.currentLanguage,
}),{ saveMenuSelectedID })(Offers);