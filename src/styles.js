import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		backgroundColor: "transparent",
		flex: 1,
		height: "100%"
	},
	smalldivider: {
		marginBottom: 10
	},
	largedivider: {
		marginBottom: 20
	},
	spinner: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "transparent",
		marginTop: 50,
		marginLeft: 25
	},
	loadingText: {
		color: "#fff",
		fontWeight: "200",
		fontSize: 10,
	},
	headingText: {
		color: "#fff",
		textAlign: "center",
		paddingVertical: 10,
		fontWeight: "900",
		fontSize: 30,
	},
	outerList: {
		backgroundColor: "transparent", 
		flex: 1,
		marginLeft: 25,
		marginTop: 25,
		borderBottomLeftRadius: 15,
		borderTopLeftRadius: 15
	},
	card: {
		height: 350,
		width: 250,
		marginLeft: 25,
		marginVertical: 25
	},
	innerCard: {
		backgroundColor: "rgba(0,0,0,0.5)", 
		alignItems: "center",
		borderRadius: 10,
		height: 350,
		width: 250,
		paddingHorizontal: 25,
		justifyContent: "center"
	},
	innerCardVertical: {
		backgroundColor: "rgba(0,0,0,0.5)", 
		borderColor: '#515151',
		borderRadius: 10,
		height: 150,
		width:'100%',
		paddingHorizontal: 25,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: 'row',
		flexWrap: 'nowrap'

	},
	outerListVertical : {
		backgroundColor: "transparent",
		flex: 1,
		marginTop: 25,
		marginHorizontal: 25,
	},
	cardVertical: {
		height: 150,
		width: '100%',
		marginRight: 25,
		marginBottom: 25
	},
	quote: {
		fontSize: 14,
		fontWeight: "200",
		color: "#fff",
		marginHorizontal: 25,
	},
	button: {
		paddingVertical: 10,
		paddingHorizontal: 10,
	  },
	  coffee: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 15,
		justifyContent: 'flex-end',
	  },
	  adfree: {
		fontSize: 10,
		textAlign: 'center',
		marginTop: 5,
		color: "#fff",
	  },
	
});
