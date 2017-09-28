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
const arrow_ar = require('../../../assets/imgs/my_services/arrow_ar.png');
const scrollArrowDown = require('../../../assets/imgs/my_services/scroll_arrow.png');
const scrollArrowUp = require('../../../assets/imgs/my_services/scroll_arrow_up.png');
const addService = require('../../../assets/imgs/my_services/add_service.png');
const hosting = require('../../../assets/imgs/my_services/hosting.png');
const hosting_select = require('../../../assets/imgs/my_services/hosting_select.png');
const domain = require('../../../assets/imgs/my_services/domain.png');
const domain_select = require('../../../assets/imgs/my_services/domain_select.png');
const sms = require('../../../assets/imgs/my_services/sms.png');
const sms_select = require('../../../assets/imgs/my_services/sms_select.png');
const ssl = require('../../../assets/imgs/my_services/ssl.png');
const ssl_select = require('../../../assets/imgs/my_services/ssl_select.png');
const chat = require('../../../assets/imgs/my_services/chat.png');
const chat_select = require('../../../assets/imgs/my_services/chat_select.png');
const amc = require('../../../assets/imgs/my_services/amc.png');
const amc_select = require('../../../assets/imgs/my_services/amc_select.png');
const kentico = require('../../../assets/imgs/my_services/kentico.png');
const kentico_select = require('../../../assets/imgs/my_services/kentico_select.png');

class MyServices extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: null,
      rowID: null,
      totalCount: [2, 3, 2, 4, 0, 0, 4],
      endList: false,
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

  onServiceSubItem() {
    Actions.MyServicesDetail();
  }

  onScrollDown() {
    this.refs.listview.scrollToEnd({animated: true});
    this.setState({endList: true});
  }
  onScrollUp() {
    this.refs.listview.scrollTo([0,0]);
    this.setState({endList: false});
  }

  onEndReached() {
    // this.setState({endList: true});
  }

  onItemSelect(data, rowID) {
    if (rowID == this.state.rowID)
      this.setState({rowID: null});
    else
      this.setState({rowID: rowID});
  }

  handleScroll(event) {
  }

 _renderRow (rowData, sectionID, rowID, highlightRow) {
    const listSubView = [];

    if (this.state.rowID == rowID) {
      for (let i = 0; i < this.state.totalCount[rowID]; i ++) {
        listSubView.push(
          <TouchableHighlight onPress={()=>this.onServiceSubItem()} key={i}>
            <View>
              <View
                style={{ height: 2, backgroundColor: '#D6811D'}}
              />
              <View style={ styles.listSubWrapper } >
                <View style={ styles.listSubView } >
                  <Text  style={styles.serviceSubTitle}>www.domain1.com</Text>
                  <View style={styles.rightSubWrapper}>
                    <Text  style={styles.serviceSubTitleDate}>03/02/2019</Text>
                    <Image source={ arrow } style={ styles.subArrow } />
                  </View>
                </View>
              </View>
            </View>
          </TouchableHighlight>
        );
      }
    }

    return (
      <View>
        <TouchableHighlight onPress={()=>{this.onItemSelect(rowData, rowID)}}>
          <Image source={ this.state.rowID == rowID ? rowData.image_select : rowData.image } style={ styles.serviceImage } >
            <View style={styles.listView}>
              <Text  style={[styles.serviceTitle, styles.titleStyle]}>{rowData.title}</Text>
              { this.state.rowID != rowID && (
              <View style={styles.rightWrapper}>
                <Text  style={styles.serviceTitle}>{this.state.totalCount[rowID]}</Text>
                <Image source={ arrow } style={ styles.arrow } />
              </View> )}
            </View>
          </Image>
        </TouchableHighlight>
        <View>
          {listSubView}
        </View>
      </View>
    )
  }

  _renderRow_ar (rowData, sectionID, rowID, highlightRow) {
    const listSubView = [];

    if (this.state.rowID == rowID) {
      for (let i = 0; i < this.state.totalCount[rowID]; i ++) {
        listSubView.push(
          <TouchableHighlight onPress={()=>this.onServiceSubItem()} key={i}>
            <View>
              <View
                style={{ height: 2, backgroundColor: '#D6811D'}}
              />
              <View style={ styles.listSubWrapper } >
                <View style={ styles.listSubView } >
                  <View style={styles.rightSubWrapper}>
                    <Image source={ arrow_ar } style={ styles.subArrow_ar } />
                    <Text  style={styles.serviceSubTitleDate}>03/02/2019</Text>
                  </View>
                  <Text  style={styles.serviceSubTitle}>www.domain1.com</Text>
                </View>
              </View>
            </View>
          </TouchableHighlight>
        );
      }
    }

    return (
      <View>
        <TouchableHighlight onPress={()=>{this.onItemSelect(rowData, rowID)}}>
          <Image source={ this.state.rowID == rowID ? rowData.image_select : rowData.image } style={ styles.serviceImage } >
            <View style={styles.listView}>
              { this.state.rowID != rowID ?
              <View style={styles.rightWrapper}>
                <Image source={ arrow_ar } style={ styles.arrow_ar } />
                <Text  style={styles.serviceTitle}>{this.state.totalCount[rowID]}</Text>
              </View>
              :<View style={{width: 50}} />}
              <Text  style={[styles.serviceTitle, styles.titleStyle_ar]}>{rowData.title}</Text>
            </View>
          </Image>
        </TouchableHighlight>
        <View>
          {listSubView}
        </View>
      </View>
    )
  }

  _renderSeparator (sectionID, rowID, adjacentRowHighlighted) {
      return (
          rowID != 6 && (
          <View
              key={`${sectionID}-${rowID}`}
              style={{ height: 4, backgroundColor: commonColors.title, flex:1}}
          />
          )
      );
  }

  render() {
    const { currentLanguage } = this.props;

    /* ** data for ListView ** */
    const serviceItems = [
      {id: 1, title: language.hostingText[currentLanguage], image: hosting, image_select: hosting_select},
      {id: 2, title: language.domainText[currentLanguage], image: domain, image_select: domain_select},
      {id: 3, title: language.smsText[currentLanguage], image: sms, image_select: sms_select},
      {id: 4, title: language.sslText[currentLanguage], image: ssl, image_select: ssl_select},
      {id: 5, title: language.amcText[currentLanguage], image: amc, image_select: amc_select},
      {id: 6, title: language.kenticoText[currentLanguage], image: kentico, image_select: kentico_select},
      {id: 7, title: language.chatText[currentLanguage], image: chat, image_select: chat_select},
    ];
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource = ds.cloneWithRows(serviceItems);
    /* ************************ */

    return (
      <Container currentLanguage={currentLanguage} pageTitle="ourServices">
        {currentLanguage == 'EN'
        ?<View style={ styles.container } >
          <View style={styles.titleWrapper}>
            <Text style={styles.titleText}>{language.serviceName[currentLanguage]}</Text>
            <Text style={styles.titleText}>{language.totalCount[currentLanguage]}</Text>
          </View>
          <ListView
            ref='listview'
            dataSource={dataSource}
            renderRow={this._renderRow.bind(this)}
            renderSeparator={this._renderSeparator}
            onScroll = {(event)=>this.handleScroll(event)}
            onEndReached={()=>this.onEndReached()}
          />
        </View>
        :<View style={ styles.container } >
          <View style={styles.titleWrapper}>
            <Text style={styles.titleText}>{language.totalCount[currentLanguage]}</Text>
            <Text style={styles.titleText}>{language.serviceName[currentLanguage]}</Text>
          </View>
          <ListView
            ref='listview'
            dataSource={dataSource}
            renderRow={this._renderRow_ar.bind(this)}
            renderSeparator={this._renderSeparator}
            onScroll = {(event)=>this.handleScroll(event)}
            onEndReached={()=>this.onEndReached()}
          />
        </View>
        }
        <View style={styles.scrollArrow}>
          {this.state.endList ?
            <TouchableOpacity onPress={()=>{this.onScrollUp()}}>
              <Image source={ scrollArrowUp } resizeMode="contain" />
            </TouchableOpacity>
          : <TouchableOpacity onPress={()=>{this.onScrollDown()}}>
              <Image source={ scrollArrowDown } resizeMode="contain" />
            </TouchableOpacity>
          }
        </View>
        <View style={styles.addService}>
          <TouchableOpacity activeOpacity={ .8 } onPress={()=>{this.onAddService()}}>
            <Image source={ addService } resizeMode="contain" />
          </TouchableOpacity>
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
    backgroundColor: commonColors.grayTitleText,
  },
  titleWrapper: {
    backgroundColor: commonColors.grayTitleText,
    alignItems: 'center',
    width: screenWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: screenWidth * 0.1,
    height: 30,
  },
  titleText: {
    color: commonColors.title,
  },
  serviceImage: {
    width: screenWidth,
    height: (screenHeight-30-16-navBar) / 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listView: {
    width: screenWidth * 0.85,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightWrapper: {
    flexDirection: 'row',
    width: 50,
  },
  rightSubWrapper: {
    flexDirection: 'row',
    width: 100,
  },
  serviceTitle: {
    color: commonColors.title,
    fontSize: 26,
    backgroundColor: 'transparent',
  },
  titleStyle: {
    width: screenWidth * 0.85 - 60,
  },
  titleStyle_ar: {
    width: screenWidth * 0.85 - 60,
    textAlign: 'right',
  },
  arrow: {
    marginLeft: 25,
    marginTop: 2,
  },
  arrow_ar: {
    marginRight: 25,
    marginTop: 2,
  },
  listSubWrapper: {
    backgroundColor: commonColors.lightYellow,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listSubView: {
    width: screenWidth * 0.85,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  serviceSubTitle: {
    color: commonColors.title,
    fontSize: 16,
    backgroundColor: 'transparent',
  },
  serviceSubTitleDate: {
    color: commonColors.title,
    fontSize: 14,
    marginTop:5,
    backgroundColor: 'transparent',
  },
  subArrow: {
    marginLeft: 25,
  },
  subArrow_ar: {
    marginRight: 25,
  },
  addService: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  scrollArrow: {
    position: 'absolute',
    bottom: 0,
  },
});

export default connect(state => ({
  currentLanguage: state.auth.currentLanguage,
}),{ saveMenuSelectedID })(MyServices);