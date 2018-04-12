'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
const tag_icon = require('../../../../assets/imgs/services_detail/tag_icon.png');
import { NORMAL_FONT } from '../../../styles/commonStyles';

class MobilePage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }
  
  render() {
    const { currentLanguage } = this.props;

    const data_en = (
        <View>
          <Text style={styles.content}>
            Kentico Software helps clients create successful websites, online stores, community sites and intranets using Kentico integrated marketing solution. With offices in the United States, United Kingdom and Czech Republic and more than 1,000 partners in 80 countries, Kentico is one of the industry leaders worldwide.
          </Text>
          <Text style={styles.content}>
            NARD also offers services like highly personalized Content Management Solutions (CMS), comprehensive Web site maintaining contracts, tracking usage and compiling strategic reports for facilitating smart business decisions making, and more.
          </Text>
        </View>
    );

    const data_ar = (
        <View>
          <Text style={styles.content_ar}>
            Kentico Software helps clients create successful websites, online stores, community sites and intranets using Kentico integrated marketing solution. With offices in the United States, United Kingdom and Czech Republic and more than 1,000 partners in 80 countries, Kentico is one of the industry leaders worldwide.
          </Text>
          <Text style={styles.content_ar}>
            NARD also offers services like highly personalized Content Management Solutions (CMS), comprehensive Web site maintaining contracts, tracking usage and compiling strategic reports for facilitating smart business decisions making, and more.
          </Text>
        </View>
    );

    return (
      <View>
        {currentLanguage == 'EN' ? data_en : data_ar }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    fontSize: 13,
    color: '#848484',
    lineHeight: 20,
    marginBottom: 20,
  },
  content_ar: {
    flex: 1,
    fontSize: 13,
    color: '#848484',
    lineHeight: 20,
    marginBottom: 20,
    textAlign: 'right',
  },
  title: {
    flex: 1,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1C92D0',
    lineHeight: 20,
    marginBottom: 10,
    fontFamily: NORMAL_FONT,
  },
  title_ar: {
    flex: 1,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1C92D0',
    lineHeight: 20,
    marginBottom: 10,
    textAlign: 'right',
    fontFamily: NORMAL_FONT,
  },
  tag: {
    flexDirection: 'row',
  },
  tag_ar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  icon: {
    marginRight: 10,
    marginTop: 3,
    width: 15,
    height: 15,
  },
  icon_ar: {
    marginLeft: 10,
    marginTop: 3,
    width: 15,
    height: 15,
  }
});

export default connect(state => ({
  currentLanguage: state.language.currentLanguage,
}),{ })(MobilePage);