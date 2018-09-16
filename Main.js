/**
 * Youssef Selkani
 * https://usfslk.github.io
 */

import React, {Component} from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {Platform, StyleSheet, View, Alert, FlatList, Dimensions, StatusBar, Image, TouchableOpacity, Linking, TouchableHighlight} from 'react-native';
import { Container, Header, H1, H2, H3, Title, Item, Label, Card, CardItem, CheckBox, Input, Content, Footer, FooterTab, Button, ListItem, Left, Right, Body, Icon, Text } from 'native-base';
import Spinner from 'react-native-spinkit';

var logo = require ('./assets/logo.png');
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const bottom_initial = 0;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      contentInsetBottom: bottom_initial
    };
  }


apiCall() {
    this.setState({ loaded:false, loading:true });
    let url = "https://talaikis.com/api/quotes/"
      fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            data: responseJson,
            loading: false,
            loaded: true,
            contentInsetBottom: bottom_initial
          });
          
        }) 
     }

componentDidMount() {
  this.apiCall();
  const data = this.state;

}

render() {
  return ( 
      <Container style={{backgroundColor: '#000'}} >
        <Header noShadow noLeft style={styles.header} >
      <StatusBar backgroundColor={'#000'} />

        <View>
          <Text style={styles.headertext}>
          KotScotch
          </Text>
        </View>

        <View>
        <TouchableHighlight
          onPress={this.apiCall.bind(this)} >          
          <Image style={styles.logo}
            source={logo}
          />
        </TouchableHighlight>
        </View>

        </Header>

         {this.state.loading ? <View style={styles.spinner}>
        <Spinner size={50} type={'FadingCircleAlt'} color={'#fffaec'}/>
        </View> : null }

        <Content style={styles.container}>
           <View style={styles.smalldivider}></View>

        {this.state.loaded ? <View>
        <FlatList 
        automaticallyAdjustContentInsets={false}        
        contentInset={{top:0, bottom: this.state.contentInsetBottom }}
        data={this.state.data} 
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={this.noItemDisplay} 
        keyExtractor={(item, index) => item.author}
        renderItem={({ item, index }) => (

        <View style={styles.card} >
          <Text style={styles.quote}>
            {item.quote}
          </Text>
          <Text style={styles.author}>
            {item.author}
          </Text>
        </View>

         )}/></View> : null }

        <View style={styles.smalldivider}></View>
        </Content>

        <Footer>
          <FooterTab style={styles.footer}>
              <TouchableOpacity
              onPress={ ()=>{ Linking.openURL('https://protobulb.io')}}>
                <Text style={styles.footertext}>
                  usfslk © 2018
                </Text>
              </TouchableOpacity>
          </FooterTab>
        </Footer>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   backgroundColor: '#680021'
  },
  header: {
    height: 54 ,
    backgroundColor: '#000',
    flexDirection: 'row' ,
    alignItems: 'center',
    justifyContent: 'space-between' ,
    paddingHorizontal: 25
  },
  footer: {
    backgroundColor: '#000',
    alignItems:  'center',
    justifyContent:  'center',  
  }, 
  smalldivider: {
    marginBottom: 10,
  },
  largedivider: {
    marginBottom: 20,
  },
    spinner: {
    flex: 1,
    alignItems: 'center',
    justifyContent:  'center',
    backgroundColor: '#680021',
    height: height
  },
  card: {
    backgroundColor: 'rgba(0,0,0, 0.2)',
    paddingVertical: 12.5,
    paddingHorizontal: 12.5,
    borderRadius: 7,
    marginVertical: 5,
    marginHorizontal: 15
  },
  quote: {
    fontSize: 18,
    color: '#fffaec',
    fontFamily: 'reg',
    marginBottom: 5
   },
   author: {
    fontSize: 14,
    color: '#fffaec',
    fontFamily: 'light'
   },
   footertext: {
    color: '#fffaec',
    fontFamily: 'reg'
   },
   headertext: {
    fontFamily: 'blk', 
    color: '#fffaec'
   }, 
   logo: {
    height: 25,
    width: 25,
    marginRight: 5
   }
});
