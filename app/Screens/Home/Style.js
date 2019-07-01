import Colors from "../../Constants/Colors";

const React = require("react-native");
const { Platform } = React;

export default {
    layoutContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnLayout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7E8BF5',
        paddingBottom: 10,
        paddingHorizontal: 20,
    },
    btnBg: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#FFF',
        borderRadius: 3,
        padding: 2,
    },
    btn: {
        color: '#FFF',
        paddingHorizontal: 5,
        paddingVertical: 15,
        fontSize: 10,
    },
    btnActive: {
        color: '#7E8BF5',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 5,
        fontSize: 10,
        borderRadius: 3,
    },
    search: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 5,
        paddingBottom: 20,
        backgroundColor: '#7E8BF5',
        flexDirection: 'row',
    },
    textInput: {
        flex: 8,
        paddingHorizontal: 20,
        backgroundColor: '#FFF',
        fontSize: 12,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        height: 50,
    },
    searchBtn: {
        flex: 2,
        backgroundColor: '#FFF',
        fontSize: 12,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        justifyContent: 'center',
        height: 50,
    },
    searchBtnIcon: {
        color: '#999',
        fontSize: 18,
    },


    /* -- Slider -- */
    slider: {
        flex: 1,
        paddingBottom: 10,
    },

    /* -- Featured -- */
    section: {
        flex: 1,
        paddingTop: 30,
        paddingBottom: 30,
    },
    sectionGrey: {
        flex: 1,
        paddingVertical: 30,
        backgroundColor: '#f0f0f0',
    },
    flatList: {
        paddingLeft: 10,
    },
    headerBg: {
        flexDirection: 'row',
        marginBottom: 15,
        paddingHorizontal: 20,
    },
    headerIcon: {
        fontSize: 24,
        color: '#ffffff',
    },
    sHeader: {
        color: '#ffffff',
        marginLeft: 3,
        fontSize: 14,
        marginTop: 5,
    },
    sBtn: {
        padding: 1,
        backgroundColor: '#e7e7e7',
        color: '#FFF',
    },
    sLink: {
        color: '#666',
        fontSize: 10,
    },

    itemList: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: 10,
    },
    itemBig: {
        width: 300,
        backgroundColor: '#FFF',
        borderRadius: 5,
        elevation: 10,
        shadowOffset: {
            width: 15,
            height: 15
        },
        shadowColor: '#999',
        shadowOpacity: 0.1,
        shadowRadius: 0,
        margin: 10,
        marginBottom: 20,
    },
    itemImgBig: {
        marginBottom: 10,
        width: '100%',
        height: 150,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        ...Platform.select({
            ios: {
                borderRadius: 5,
            },
        }),
    },
    itemNoCrv: {
        ...Platform.select({
            ios: {
                width: '100%',
                height: 5,
                backgroundColor: '#FFF',
                bottom: 10,
                position: 'absolute',
            },
        }),
    },
    itemBg: {
        ...Platform.select({
            ios: {
                
            },
        }),
    },

    item: {
        width: 200,
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#FFF',
        borderRadius: 5,
        elevation: 10,
        shadowOffset: {
            width: 15,
            height: 15
        },
        shadowColor: "grey",
        shadowOpacity: 0.1,
        shadowRadius: 0,
    },
    itemImg: {
        marginBottom: 10,
        width: 200,
        height: 100,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        ...Platform.select({
            ios: {
                borderRadius: 5,
            },
        }),
    },
    itemFavorite: {
        position: 'absolute',
        alignSelf: 'flex-end',
        color: '#FCC300',
        marginTop: 10,
        paddingRight: 10,
    },
    itemPrice: {
        color: '#333',
        fontSize: 16,
        paddingHorizontal: 20,
    },
    itemPriceSm: {
        color: '#333',
        fontSize: 14,
        paddingHorizontal: 20,
    },
    itemLocation: {
        color: '#999',
        fontSize: 11,
        marginBottom: 10,
        paddingHorizontal: 20,
    },
    crv: {
        borderRadius: 8,
    },
    itemRow: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingBottom: 15,
    },
    itemOverview: {
        flexGrow: 1,
        flexDirection: 'row',
    },
    itemIcon: {
        color: '#999',
        marginRight: 5,
        fontSize: 24,
    },
    itemNo: {
        color: '#333',
        marginRight: 5,
        marginTop: 5,
        fontSize: 14,
    },
    city: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 20,
        justifyContent: 'space-between'
    },
    btnCity: {
        width: '48%',
        height: 100,
        marginBottom: 10,
    },
    btnCityImg: {
        flex: 1,
        borderRadius: 5,
    },
    btnCityLocation: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnCityText: {
        color: '#FFF',
        fontSize: 12,
    },


    flatCity: {
        paddingLeft: 20,
    },
    itemCity: {
        width: 150,
        marginLeft: 5,
        marginRight: 5,
    },
    itemCityCount: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 64,
    },
    itemCityLocation: {
        color: '#FFF',
        fontSize: 13,
    },
    itemCityImg: {
        marginBottom: 10,
        width: 150,
        height: 64,
        borderRadius: 5,
        textAlign: 'center'
    },

    agents: {
        paddingHorizontal: 15,
    },
    itemAgent: {
        width: 72,
        marginLeft: 5,
        marginRight: 5,
    },
    itemAgentImg: {
        marginBottom: 10,
        borderRadius: 35,
        textAlign: 'center',
        color: '#ffff'
    },
    itemAgentName: {
        color: '#ffffff',
        fontSize: 12,
        textAlign: 'center',
    },


    typeBg: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#FFF',
        width: '70%',
    },
    typeBtn: {
        flex: 1,
        borderWidth: 0,
        borderRadius: 0,
    },
    typeBtnText: {
        color: '#999',
        fontSize: 12,
    },

    typeBtnActive: {
        backgroundColor: '#FFF',
        paddingVertical: 8,
        paddingHorizontal: 5,
    },
    typeBtnInactive: {
        backgroundColor: 'transparent',
        paddingVertical: 8,
        paddingHorizontal: 5,
    },
    typeActiveText: {
        color: '#333',
        fontSize: 10,
    },
    typeInactiveText: {
        color: '#FFF',
        fontSize: 10,
    },
	progressBar: {
		backgroundColor: '#0a0a0a',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
}