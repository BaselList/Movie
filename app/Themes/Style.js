import Colors from './../Constants/Colors'
const React = require("react-native");
const { Platform } = React;

export default {

    // *** row *** //
    layout: {
        marginLeft: 20,
        marginRight: 20,
    },
    layoutInner: {
        width: '100%',
    },
    layoutCenter: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    layoutStart: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    layoutEnd: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    listView: {
        width: '100%',
    },

    row1: {
        flexDirection: 'row'
    },

    // *** status and action bar *** //

    navigation: {
        shadowOpacity: 0,
        elevation: 0,
        shadowOffset: {
            height: 0,
        },
        shadowRadius: 0,
        backgroundColor: 'transparent',
        width: '100%',
        borderBottomWidth: 0,
        borderColor: Colors.mainColor,
        backgroundColor: Colors.mainColor,
    },
    navigationTransparent: {
        backgroundColor: 'transparent',
        shadowOpacity: 0,
        elevation: 0,
        shadowOffset: {
            height: 0,
        },
        shadowRadius: 0,
        backgroundColor: 'transparent',
        width: '100%',
        borderBottomWidth: 0,
    },


    // *** row *** //
    row: {
        marginLeft: -5,
        marginRight: -5,
        flexDirection: 'row'
    },
    row1: {
        flexDirection: 'row'
    },

    // *** grid *** //
    col1: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5
    },
    col2: {
        flex: 2,
        marginLeft: 10,
        marginRight: 10
    },
    col3: {
        flex: 3,
        marginLeft: 10,
        marginRight: 10
    },
    col4: {
        flex: 4,
        marginLeft: 10,
        marginRight: 10
    },

    // *** text alignment *** //
    textLeft: {
        textAlign: 'left'
    },
    textCenter: {
        textAlign: 'center',
    },
    textRight: {
        textAlign: 'right'
    },

    // *** space ***//
    spaceTint: {
        height: 8,
    },
    spaceSmall: {
        height: 12,
    },
    spaceMedium: {
        height: 16,
    },
    spaceLarge: {
        height: 24,
    },
    spaceExtraLarge: {
        height: 36,
    },

    // *** font size *** //
    textTint: {
        fontSize: 8,
    },
    textSmall: {
        fontSize: 9,
    },
    textMedium: {
        fontSize: 16,
    },
    textLarge: {
        fontSize: 24,
    },
    textExtraLarge: {
        fontSize: 36,
    },

    // *** position *** //
    positionLeft: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    positionCenter: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    positionRight: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },


    // *** button *** //
    btnPrimary: {
        backgroundColor: '#b78fc3',
        color: '#FFF',
        marginTop: 10,
        marginBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
        minWidth: '60%',
        alignItems: 'center',
        textAlign: 'center',
    },
    btnPink: {
        backgroundColor: '#b78fc3',
        color: '#FFF',
        marginTop: 10,
        marginBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
        alignItems: 'center',
        textAlign: 'center',
    },
    btnCancel: {
        backgroundColor: '#CCC',
        color: '#999',
        borderWidth: 0,
        borderRadius: 5,
    },
    btnTransparent: {
        backgroundColor: 'transparent',
        color: '#666',
    },
    btnFacebook: {
        backgroundColor: '#26497f',
        color: '#FFF',
        marginBottom: 50,
        paddingLeft: 30,
        paddingRight: 30,
    },


    // *** background colors *** //

    bgMainIntro: {
        backgroundColor: Colors.mainColor,
    },
    bgMain: {
        backgroundColor: Colors.mainColor,
    },
    bgWhite: {
        backgroundColor: '#fceae5',
    },
    bgBlack: {
        backgroundColor: '#433c3a',
    },
    bgGreen: {
        backgroundColor: '#006837',
    },
    bgYellow: {
        backgroundColor: '#F7941E',
    },
    bgYellowDark: {
        backgroundColor: '#e4932a',
    },
    bgPink: {
        backgroundColor: '#EC87C0',
    },
    bgBot: {
        backgroundColor: Colors.txtDark,
        borderTopWidth: 0.5,
        borderColor: Colors.txtDark,
    },
    bgFilter: {
        backgroundColor: '#FFF',
        borderTopWidth: 0.5,
        borderColor: '#DDD',
        flexDirection: 'row',
    },
    bgButtonBottom: {
        backgroundColor: '#e4932a',
        borderTopWidth: 0.5,
        borderColor: '#DDD',
        flexDirection: 'row',
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },

    // *** text colors *** //
    textWhite: {
        color: '#FFFFFF',
    },
    textBlack: {
        color: '#3f3b38',
    },
    textGreyLight: {
        color: '#999',
    },
    textGrey: {
        color: '#666',
    },
    textGreyDark: {
        color: '#333',
    },
    textYellow: {
        color: '#ffffff',
    },
    textBlue: {
        color: '#999',
    },
    textBlueActive: {
        color: '#FCC300',
    },

    textActive: {
        ...Platform.select({
            ios: {
                color: Colors.mainColor,
                backgroundColor: 'transparent',
                fontSize: 24,
            },
            android: {
                backgroundColor: Colors.mainColor,
                color: '#FFF',
                fontSize: 18,
                borderRadius: 30,
                paddingVertical: 10,
                paddingHorizontal: 13,

            },
        }),
    },

    // *** flex *** //
    flex1: {
        flex: 1,
    },

    // *** row *** //
    logo: {
        marginTop: 15,
        marginBottom: 15,
        alignItems: 'center',
    },

    // *** text header *** //
    actionBarLeft: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        flex: 2,
    },
    actionBarMiddle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 6,
    },
    actionBarRight: {
        justifyContent: 'center',
        flex: 2,
        alignItems: 'flex-end',
    },
    actionBarText: {
        color: '#FFFFFF',
        fontSize: 14,
        textAlign: 'center',
    },
    actionBarBtn: {
        alignSelf: 'flex-start',
        marginLeft: -10,
    },
    actionMenu: {
        marginLeft: 10,
    },
    actionBtn: {
        alignSelf: 'center',
    },
    actionIcon: {
        fontSize: 18,
        color: '#FFF',
    },
    actionBtnRight: {
        alignSelf: 'flex-end'
    },
    actionBarIn: {
        ...Platform.select({
            ios: {
                marginTop: 20,
            },
        }),
    },

    textHeader: {
        fontSize: 24,
        color: '#FFF'
    },
    textDesc: {
        fontSize: 16,
        color: '#FFF'
    },

    // *** inputText *** //
    inputText: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        borderRadius: 0,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 5,
        fontFamily: 'Roboto',
        color: '#FFF',
        borderBottomWidth: 0,
        borderColor: '#746f76',
        fontSize: 14,
        placeholderTextColor: '#FFF'
    },
    input: {
        fontSize: 12,
    },
    textarea: {
        textAlignVertical: 'top',
    },

    // *** line *** //
    blueTopLine: {
        borderTopWidth: 1,
        borderColor: '#2A3C54'
    },
    greyBottomLine: {
        borderTopWidth: 0.5,
        borderColor: '#DDD',
        marginLeft: 0,
    },
    borderWhite: {
        borderBottomColor: '#FFF',
    },
    spinnerTextStyle: {
        color: Colors.mainColor
    },
}