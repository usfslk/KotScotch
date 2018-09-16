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
/*
apiCall() {
    let url = "http://google.com"
    this.setState({ loading: true  });
      fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            data: responseJson,
            loading: false,
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
      <StatusBar backgroundColor={'#333'} hidden/>
        <Header noShadow noLeft style={styles.header} >
          <Body>
            <Title>Spacr.js</Title>
          </Body>
          <Right />
        </Header>

        <ListItem itemDivider>
          <Text>This is a simple app with must-have libraries pre installed. Feel free to use it for personal and commercial purposes. MIT License.</Text>
        </ListItem> 

        {this.state.loading ? <View style={styles.spinner}>
        <Spinner size={50} type={'Wave'} color={'#333'}/>
        </View> : null }

        <Content style={styles.container}>

        <View style={styles.largedivider}></View>

        <H1 style={styles.smalldivider}>Heading 1</H1>
        <H2 style={styles.smalldivider}>Heading 2</H2>
        <H3 style={styles.smalldivider}>Heading 3</H3>
        
{/*        {this.state.loaded ?
        <View><Text style={styles.smalldivider}>There are currently {this.state.peopledata.length} humans in space</Text>
        <FlatList
        data={this.state.peopledata}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item.name}
        renderItem={({ item, index }) => (

        <View style={styles.card} >
          <Text style={styles.craft}>({item.craft})</Text>
          <Text style={styles.name}>{item.name}</Text>
        </View>

         )}/>
        </View>
        : null }*/}
                        
        </Content>
        <Footer>
          <FooterTab style={styles.footer}>
            <Button block rounded>
              <Text >Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
container: {
 marginHorizontal: 25
},
 progress: {
  height: 200,
},
  header: {
    paddingTop: getStatusBarHeight(),
    height: 54 + getStatusBarHeight(),
    backgroundColor: '#333'
  },
  footer: {
    backgroundColor: '#222'
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
    flexDirection: 'row' ,
    alignItems: 'center',
    justifyContent: 'flex-start',   
  },
  craft: {
    fontWeight: '200',
    fontSize: 14,
    marginRight: 10,
   },
   name: {
    fontWeight: '400',
    fontSize: 16,
   }
});
