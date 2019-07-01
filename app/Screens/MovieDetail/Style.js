const React = require("react-native");
const { Platform } = React;

export default {
	textStyle: {
		color: 'white',
		paddingTop: 10,
		fontSize: 12,
		fontWeight: 'bold'
	},
	underlineStyle: {
		backgroundColor: '#EA0000'
	},
	tabBar: {
		backgroundColor: '#131313'
	},
	contentContainer: {
		flex: 1,
		marginTop: 160
	},
	progressBar: {
		backgroundColor: '#0a0a0a',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	container: {
		backgroundColor: '#0a0a0a'
	},
	swiper: {
		// position: 'absolute',
		// flex: 1
	},
	linearGradient: {
		top: 0,
		left: 0,
		right: 0,
		height: 248,
		position: 'absolute'
	},
	imageBackdrop: {
		// flex: 1,
		height: 248,
		backgroundColor: 'black'
	},
	cardContainer: {
		flex: 1,
		position: 'absolute',
		top: 200,
		right: 16,
		left: 16,
		flexDirection: 'row'
	},
	cardImage: {
		height: 184,
		width: 135,
		borderRadius: 3
	},
	cardDetails: {
		paddingLeft: 10,
		flex: 1,
		paddingTop: 50
	},
	cardTitle: {
		color: 'white',
		fontSize: 19,
		fontWeight: '500',
		paddingTop: 10
	},
	cardTagline: {
		color: 'white',
		fontSize: 15
	},
	cardGenre: {
		flexDirection: 'row'
	},
	cardGenreItem: {
		textAlign: 'left',
		fontSize: 11,
		marginRight: 5,
		color: 'white'
	},
	cardNumbers: {
		flexDirection: 'row',
		marginTop: 5
	},
	cardStar: {
		flexDirection: 'row'
	},
	cardStarRatings: {
		marginLeft: 5,
		fontSize: 12,
		color: 'white'
	},
	cardRunningHours: {
		marginLeft: 5,
		fontSize: 12
	},
	overview: {
		flex: 1,
		paddingHorizontal: 20,
	},
	overviewTitle: {
		flex: 1,
		color: '#ffffff',
	},
	overviewText: {
		color: '#d2d2d2',
		fontSize: 14,
		paddingTop: 10,
		lineHeight: 22
	},
	overviewDesc: {
		flex: 1,
		color: '#ffffff',
		lineHeight: 20,
		fontSize: 13,
	},
	label: {
		color: 'white',
		fontSize: 16,
		fontWeight: '500'
	},
	value: {
		color: '#d2d2d2',
		fontSize: 14
	},
	labelRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 10
	},
	section: {
        flex: 1,
        paddingTop: 30,
        paddingBottom: 30,
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
        width: 72,
        height: 72,
        borderRadius: 35,
    },
    itemAgentName: {
        color: '#ffffff',
        fontSize: 12,
        textAlign: 'center',
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
	itemLocation: {
        color: '#999',
        fontSize: 11,
        marginBottom: 10,
        paddingHorizontal: 20,
	},
	flatList: {
        paddingLeft: 10,
    },
}
