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
		color: "#222"
	},
	headingText: {
		color: "#fff",
		textAlign: "center",
		paddingVertical: 10,
		fontWeight: "bold",
		fontSize: 30,
	},
	headingContainer: {
		backgroundColor: "rgba(0,0,0,0.75)",
		marginHorizontal: 25,
		borderRadius: 5
	},
	outerList: {
		backgroundColor: "transparent", 
		flex: 1,
		elevation: 0.5,
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
		backgroundColor: "rgba(0,0,0,0.75)", 
		alignItems: "center",
		borderRadius: 10,
		height: 350,
		width: 250,
		paddingHorizontal: 25,
		justifyContent: "center"
	},
	innerCardVertical: {
		backgroundColor: "rgba(0,0,0,0.75)", 
		borderColor: '#515151',
		alignItems: "center",
		borderRadius: 10,
		height: 200,
		width:'100%',
		paddingHorizontal: 25,
		justifyContent: "center",
	},
	outerListVertical : {
		backgroundColor: "transparent",
		flex: 1,
		marginTop: 25,
		marginHorizontal: 25,
	},
	cardVertical: {
		height: 200,
		width: '100%',
		marginRight: 25,
		marginBottom: 25
	},
	quote: {
		fontSize: 15,
		color: "#fff"
	},
	button: {
		paddingVertical: 10,
		paddingHorizontal: 10,
	  },
});
