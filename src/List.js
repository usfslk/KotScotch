import React, { Component } from "react";
import { View, Text, FlatList, ImageBackground, Clipboard, Alert, TouchableOpacity } from "react-native";
import styles from "./styles";
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true
		};
	}

	apiCall() {
		this.setState({ loaded: false, loading: true });
		let url = `https://www.reddit.com/r/quotes/${
			this.props.option
			}.json?limit=25`;
		console.log(url);
		fetch(url)
			.then(response => response.json())
			.then(responseJson => {
				this.setState({
					data: responseJson.data.children,
					loading: false,
					loaded: true
				});
			});
	}

	componentDidMount() {
		this.apiCall();
	}

	copyQuote = (quote) => {
		Clipboard.setString(quote);
		Alert.alert(
			'Copied to clipboard!',
		);
	}

	render() {
		return (
			<View style={{ flex: 1 }}>

				{this.state.loading ? (
					<View style={styles.spinner}>
						<Text style={styles.loadingText}>Loading ...</Text>
					</View>
				) : null}

				<View style={styles.outerList}>
					<FlatList
						showsHorizontalScrollIndicator={false}
						automaticallyAdjustContentInsets={false}
						horizontal={true}
						contentInset={{ top: 0, bottom: 0 }}
						data={this.state.data}
						showsVerticalScrollIndicator={false}
						ListEmptyComponent={this.noItemDisplay}
						keyExtractor={(item, index) => item.data.title}
						renderItem={({ item, index }) => (
							<View style={styles.card}>
								<ImageBackground
									style={{ width: "100%", height: "100%" }}
									borderRadius={15}
									source={{ uri: this.props.url }}
									resizeMode="cover"
								>
									<Animatable.View animation="fadeIn" easing="ease-in" duration={1000} style={styles.innerCard}>
										<Text style={styles.quote}>
											{item.data.title}
										</Text>

										<View style={styles.largedivider} />

										<TouchableOpacity
											style={styles.button}
											onPress={() => this.copyQuote(item.data.title)}>
											<Ionicons name="ios-copy" size={20} color="white" />
										</TouchableOpacity>

									</Animatable.View>
								</ImageBackground>
							</View>
						)}
					/>
				</View>
			</View>
		);
	}
}
export default List;
