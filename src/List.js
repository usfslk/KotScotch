/**
 * Youssef Selkani
 * https://usfslk.github.io
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View, FlatList, Dimensions } from 'react-native';
import { Container, Content, Body, Icon, Text } from 'native-base';

const bottom_initial = 0;

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentInsetBottom: bottom_initial
    };
  }

render() {
  return ( 
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

        <View style={styles.smalldivider}/>
        </Content>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   backgroundColor: '#680021'
  },
  smalldivider: {
    marginBottom: 10,
  },
  largedivider: {
    marginBottom: 20,
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
   }
});
