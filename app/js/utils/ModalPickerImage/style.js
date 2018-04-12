'use strict';

import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

const PADDING = 8;
const BORDER_RADIUS = 5;
const FONT_SIZE = 16;
const HIGHLIGHT_COLOR = 'rgba(0,118,255,0.9)';
const OPTION_CONTAINER_HEIGHT = 360;

export default StyleSheet.create({

    overlayStyle: {
        width: width,
        height: height,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    leftContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 0.25,
    },
    rightContent: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        flex: 0.6,
        alignItems: 'flex-start',
    },

    optionContainer: {
        borderRadius:BORDER_RADIUS,
        width:width*0.8,
        height:OPTION_CONTAINER_HEIGHT,
        backgroundColor:'rgba(255,255,255,0.8)',
        left:width*0.1,
        top:(height-OPTION_CONTAINER_HEIGHT)/2
    },

    cancelContainer: {
        left:width*0.1,
        top:(height-OPTION_CONTAINER_HEIGHT)/2 + 30
    },

    selectStyle: {
        flex: 1,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 8,
        borderRadius: BORDER_RADIUS
    },

    selectTextStyle: {
        textAlign: 'center',
        color: '#333',
        fontSize: FONT_SIZE,
        fontFamily: 'NotoKufiArabic-Regular',
    },

    cancelStyle: {
        borderRadius: BORDER_RADIUS,
        width: width * 0.8,
        backgroundColor: 'rgba(255,255,255,0.8)',
        padding: PADDING
    },

    cancelTextStyle: {
        textAlign: 'center',
        color: '#333',
        fontSize: FONT_SIZE,
        fontFamily: 'NotoKufiArabic-Regular',
    },

    optionStyle: {
        padding: PADDING,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },

    optionTextStyle: {
        textAlign: 'center',
        fontSize: FONT_SIZE,
        color: HIGHLIGHT_COLOR,
        fontFamily: 'NotoKufiArabic-Regular',
    },

    sectionStyle: {
        padding: PADDING * 2,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },

    sectionTextStyle: {
        textAlign: 'center',
        fontSize: FONT_SIZE,
        fontFamily: 'NotoKufiArabic-Regular',
    }
});