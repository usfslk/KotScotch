/**
 * Youssef Selkani
 * https://usfslk.github.io
 */

import React, {Component} from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {Platform, StyleSheet, View, Alert, FlatList, StatusBar} from 'react-native';
import { Container, Header, H1, H2, H3, Title, Item, Label, Card, CardItem, CheckBox, Input, Content, Footer, FooterTab, Button, ListItem, Left, Right, Body, Icon, Text } from 'native-base';
import Spinner from 'react-native-spinkit';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

/*apiCall() {
    let url = "https://talaikis.com/api/quotes/"
      fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            data: responseJson,
            loading: false,
            loaded: true,
          });
          
        }) 
     }

componentDidMount() {
  this.apiCall();
  const data = this.state;  
}
*/
render() {
  return ( 
      <Container>
      <StatusBar backgroundColor={'#a31f34'} hidden/>
        <Header noShadow noLeft style={styles.header} >
          <Body>
            <Title>Kot.js</Title>
          </Body>
          <Right />
        </Header>

         {this.state.loading ? <View style={styles.spinner}>
        <Spinner size={50} type={'Wave'} color={'#423A47'}/>
        </View> : null }

        <Content style={styles.container}>

{/*        {this.state.loaded ?
        <View>
        <FlatList
        data={this.state.data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item.author}
        renderItem={({ item, index }) => (

        <View style={styles.card} >
          <Text style={styles.quote}>{item.quote}</Text>
          <Text style={styles.author}>{item.author}</Text>
        </View>

         )}/>
        </View>
        : null }*/}

        <View style={styles.smalldivider}></View>

        <View style={styles.card} >
          <Text style={styles.quote}>I want to host a religious show. I'm sure nobody will be wanting the 11 o'clock spot on Sunday morning. I think we should really get some of our own preachers and preach that gay is good. And we'd have a great choir.</Text>
          <Text style={styles.author}>Martin Luther King, Jr.</Text>
        </View>

        <View style={styles.card} >
          <Text style={styles.quote}>he means by which we live have outdistanced the ends for which we live. Our scientific power has outrun our spiritual power. We have guided missiles and misguided men.</Text>
          <Text style={styles.author}>John Doe</Text>
        </View>

        <View style={styles.card} >
          <Text style={styles.quote}>I lived the true American dream, because I was able to pursue what I set as my goals at a very young age.</Text>
          <Text style={styles.author}>Russell Crowe"</Text>
        </View>

        <View style={styles.card} >
          <Text style={styles.quote}>he means by which we live have outdistanced the ends for which we live. Our scientific power has outrun our spiritual power. We have guided missiles and misguided men.</Text>
          <Text style={styles.author}>John Doe</Text>
        </View>

        <View style={styles.card} >
          <Text style={styles.quote}>I lived the true American dream, because I was able to pursue what I set as my goals at a very young age.</Text>
          <Text style={styles.author}>Russell Crowe"</Text>
        </View>

        <View style={styles.card} >
          <Text style={styles.quote}>I want to host a religious show. I'm sure nobody will be wanting the 11 o'clock spot on Sunday morning. I think we should really get some of our own preachers and preach that gay is good. And we'd have a great choir.</Text>
          <Text style={styles.author}>Martin Luther King, Jr.</Text>
        </View>

        <View style={styles.smalldivider}></View>
                        
        </Content>

        <Footer>
          <FooterTab style={styles.footer}>
              <Text style={styles.white}>usfslk.github.io</Text>
          </FooterTab>
        </Footer>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
container: {
 backgroundColor: '#7E474C'
},
 progress: {
  height: 200,
},
  header: {
    paddingTop: getStatusBarHeight(),
    height: 54 + getStatusBarHeight(),
    backgroundColor: '#7E474C'
  },
  footer: {
    backgroundColor: '#7E474C',
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
  },
  card: {
    backgroundColor: '#423A47',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 7,
    marginVertical: 5,
    marginHorizontal: 15
  },
  quote: {
    fontWeight: '600',
    fontSize: 16,
    color: '#E9E9CD'
   },
   author: {
    fontWeight: '200',
    fontSize: 12,
    color: '#D0D0AE',
   },
   white: {
    color: '#E9E9CD',

   }
});
