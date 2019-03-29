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
	AdMobBanner,
	AdMobInterstitial,
	PublisherBanner,
	AdMobRewarded
} from 'expo';
import { getStatusBarHeight, ifIphoneX, getBottomSpace } from "react-native-iphone-x-helper";
import * as Animatable from 'react-native-animatable';

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
				source={require('../assets/bg.jpg')}
				resizeMode="cover"
			>
				<StatusBar barStyle="light-content" />
				<View style={{
					...ifIphoneX(
						{ height: getStatusBarHeight() + 15 },
						{ height: getStatusBarHeight() }
					) }} />

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

							<Text style={styles.headingText}>Hot</Text>
							<List option="hot" url={this.state.shuffle1} />

							<Text style={styles.headingText}>New</Text>
							<ListVertical option="new" url={this.state.shuffle3} />
						</View>
					) : null}
				</ScrollView>
			</ImageBackground >

		);
	}
}