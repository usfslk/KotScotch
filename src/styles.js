import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
	container: {
		backgroundColor: "transparent",
		flex: 1,
		height: "100%"
	},
	header: {
		backgroundColor: "#000"
	},
	innerHeader: {
		paddingTop: StatusBar.currentHeight,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	},
	headertext: {
		color: "#fff",
		fontWeight: "bold",
		fontSize: 30,
		marginLeft: 25
	},
	logo: {
		height: 25,
		width: 25,
		marginRight: 25
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
		fontWeight: "bold",
		fontSize: 30,
		paddingHorizontal: 25
	},
	outerList: {
		backgroundColor: "transparent", 
		flex: 1,
		elevation: 0.5,
		marginLeft: 25,
		marginVertical: 25,
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
		borderRadius: 15,
		height: 350,
		width: 250,
		paddingHorizontal: 25,
		justifyContent: "center"
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
	innerCardVertical: {
		backgroundColor: "rgba(0,0,0,0.75)", 
		borderColor: '#515151',
		alignItems: "center",
		borderRadius: 15,
		height: 150,
		width:'100%',
		paddingHorizontal: 25,
		justifyContent: "center"
	},
	quote: {
		fontSize: 15,
		color: "#fff"
	},
});
