/*  Youssef Selkani 2019   */

import React, { Component } from "react";
import {
	View,
	Text,
	StatusBar,
	ScrollView,
	ImageBackground,
	TouchableOpacity
} from "react-native";
import styles from "./styles";
import List from "./List";
import ListVertical from "./ListVertical";
import {
	PublisherBanner,
} from 'expo';
import { getStatusBarHeight, ifIphoneX } from "react-native-iphone-x-helper";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
		this.state = {
			loading: false,
			loaded: true
		};
	}

	forceUpdateHandler() {
		this.forceUpdate();
	};


	render() {
		return (

			<ImageBackground
				style={{ width: "100%", height: "100%" }}
				source={{ uri: 'https://source.unsplash.com/random/' + Math.random() }}
				resizeMode="cover"
			>
				<StatusBar barStyle="light-content" />
				<View style={{
					...ifIphoneX(
						{ height: getStatusBarHeight() + 15 },
						{ height: getStatusBarHeight() }
					)
				}} />

				<View style={{
					flexDirection: 'row', justifyContent: 'center', marginVertical: 15
				}}>
					<PublisherBanner
						bannerSize="banner"
						adUnitID="ca-app-pub-8573101599140905/2580991187"
					/>
				</View>

				<ScrollView style={styles.container}>
					{this.state.loaded ? (
						<View>

							<View style={styles.headingContainer} >
								<Text style={styles.headingText}>Hot</Text>
							</View>

							<List option="hot" url={this.state.shuffle1} />

							<View style={styles.headingContainer} >
								<Text style={styles.headingText}>Trending</Text>
							</View>

							<ListVertical option="new" url={this.state.shuffle3} />

						</View>
					) : null}
				</ScrollView>
			</ImageBackground >

		);
	}
}