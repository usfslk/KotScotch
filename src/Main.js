/*  Youssef Selkani 2019   */

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
import {
	PublisherBanner,
} from 'expo';
import { getStatusBarHeight, ifIphoneX } from "react-native-iphone-x-helper";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			loaded: true
		};
	}

	render() {
		return (

			<ImageBackground
				style={{ width: "100%", height: "100%" }}
				source={{uri: 'https://source.unsplash.com/random/1920x1080'}}
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
						testDeviceID="EMULATOR"
					/>
				</View>

				<ScrollView style={styles.container}>
					{this.state.loaded ? (
						<View>
							<View style={styles.largedivider} />

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