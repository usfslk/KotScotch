/*  Youssef Selkani 2018  */

import React, { Component } from "react";
import {
	View,
	Text,
	StatusBar,
	ScrollView,
	ImageBackground
} from "react-native";
import styles from "./styles";
import List from "./List";
import ListVertical from "./ListVertical";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			loaded: true
		};
	}
	componentDidMount() {
		this.setState({
			shuffle1:
				"https://picsum.photos/250/" +
				(Math.floor(Math.random() * 300) + 200) +
				"/",
			shuffle2:
				"https://source.unsplash.com/random?a=" +
				(Math.floor(Math.random() * 300) + 200),
			shuffle3:
				"https://source.unsplash.com/random?a=" +
				(Math.floor(Math.random() * 300) + 200)
		});
	}
	render() {
		return (
			<ImageBackground
				style={{ width: "100%", height: "100%" }}
				source={require("../assets/bg.jpg")}
				resizeMode="cover"
			>
				<StatusBar />

				<View style={styles.header}>
					<View style={styles.innerHeader} />
				</View>

				<ScrollView style={styles.container}>
					{this.state.loaded ? (
						<View>
							<View style={styles.largedivider} />

							<Text style={styles.headingText}>Hot</Text>
							<List option="hot" url={this.state.shuffle1} />

							<Text style={styles.headingText}>Trending</Text>
							<List option="controversial" url={this.state.shuffle2} />

							<Text style={styles.headingText}>New</Text>
							<ListVertical option="new" url={this.state.shuffle3} />
						</View>
					) : null}
				</ScrollView>
			</ImageBackground>
		);
	}
}
