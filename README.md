# KotScotch
![CI](https://forthebadge.com/images/badges/winter-is-coming.svg)

### Unlimited quotes for daily inspiration
 
![Logo](https://i.imgur.com/ye5U7A4.png)

The ability to write one app for both iOS and Android can save significant time and effort for your company and team. There have been various tools released to achieve that goal but each toolset have met with varying degrees of success in the mobile industry. If you already know what React  Native is and why it is awesome, keep reading.

## Live Demo

With your mobile phone, you can scan the QR code in the link below to load this project

https://expo.io/@usfslk/kotscotch

![Mockup](https://i.imgur.com/FSZnuJw.png)

## Getting Started


Dive into the React Native framework for building iOS and Android apps in a single codebase, by writing a cross-platform app using your favorite text editor. If you are familiar with object-oriented code and basic programming concepts such as variables, loops, and conditionals, you can complete this tutorial. You don’t need previous experience with mobile programming.

 ### Prerequisites
 
[Python 2.7](https://www.python.org/downloads/release/python-2715/)

[Node.js](https://nodejs.org/en/download/)

[React Native](https://facebook.github.io/react-native/docs/getting-started.html)
   
### What you’ll build in this tutorial

You’ll implement a simple mobile app that queries a third-party public API and display famous quotes in a scrollable list. In building out the app, you’ll learn the following about React Native:

-   Setting up your dev environment
-   Importing files and packages
-   Making API calls
-   Showing items in a list
-   Customizing the appearance



## Set up your RN environment

We suggest using [CRNA](https://github.com/react-community/create-react-native-app) for this project:

    $ npm install -g create-react-native-app
    $ create-react-native-app reciper
    $ cd reciper/
    $ npm start 
    
  You can run this codelab using any of the following:

-   A physical device (Android or iOS) connected via USB
-   The iOS simulator (Requires installing XCode tools.)
-   The Android emulator (Requires setup in Android Studio.)

## Building the user interface

For the sake of simplicity we only going to install one library to design the user interface, [NativeBase](https://nativebase.io/) is a free and open source UI component library, it make it easy to customize each component.

    yarn add native-base --save
    
    npm install @expo/vector-icons --save

### 1-  Main app scaffold

The first element you'll add is a simple app bar that shows a static title for the app and a footer

Replace the code in app.js with the following:

    import React, {Component} from 'react';
    import {Platform, StyleSheet, View, StatusBar, FlatList, Image } from 'react-native';
    import { Container, Header, Content, Footer, FooterTab, Body, Text } from 'native-base';
    
    export default class App extends Component {
    render() {
      return ( 
        
            <Container>
                <Header>
                  <StatusBar/>
                    <View>
                      <Text>
                        App Name
                      </Text>
                  </View>
                </Header>
              <Content>
                <View>
                  <Text>
                    This is content
                  </Text>
                </View>
              </Content> 
              <Footer>
                <FooterTab>
                  <Text>
                    Footer © 2018
                  </Text>
                </FooterTab>
              </Footer>
            </Container>
        );
      }
    }
        
### 2-  API Request
Each component has several “lifecycle methods” that you can override to run code at particular times in the process. In this app we're going to use **[componentDidMount()](https://reactjs.org/docs/react-component.html#componentdidmount)** This method is invoked immediately after a component is mounted (inserted into the tree). Using ES6 class syntax add the following before `render()`

    apiCall() {
      let url = "https://talaikis.com/api/quotes/"
      fetch(url)
      .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
          data: responseJson,
        });
      }) 
    }
To run this function on page load we have to wrap it inside the **componentDidMount()** method like so:

    componentDidMount() {
      this.apiCall();
    }
Now our [JSON](https://en.wikipedia.org/wiki/JSON) results are stored in a variable name `data`
To test your network request we may print it on the console by running this code:

    console.log{this.state.data}
Or you can try to display it on the `View`:

          <Text>
            {this.state.data.toString()}
          </Text>

Learn more about state and types of data in RN Framework:
https://facebook.github.io/react-native/docs/state
          
### 3 - Using a FlatList

Now that you have an array of quotes, authors, and categories you need a way to display them in a list in the UI. React Native provides a `FlatList` component that will let you show the data in a list.

Start by importing it from `'react-native'`

        <FlatList 
          data={this.state.data} 
          keyExtractor={(item, index) => item.author}
          renderItem={({ item, index }) => (

              <View>
                <Text>
                  {item.quote}
                </Text>
                <Text>
                  {item.author}
                </Text>
              </View>

         )}/>
         
**keyExtractor** is very important, we should implement it to avoid a warning when rendering our list view,  it tells the list to use the `id` for the react keys instead of the default `key` property.

### 4 - Customize the layout

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
        paddingHorizontal: 25,
        marginTop: 45,
      },
      footer: {
        backgroundColor: '#000',
        alignItems:  'center',
        justifyContent:  'center',  
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
As you can see we are using a custom fonts, to make it work copy the otf or ttf files in `assets/fonts/` and then using the **async** function and **componentWillMount()** method. Async functions let you express your intent sequentially and run your code concurrently. This is a simple example for our cool app:

      async componentWillMount() {
      await Expo.Font.loadAsync({
        blk: require("./assets/fonts/blk.otf"),
        reg: require("./assets/fonts/reg.otf"),
        light: require("./assets/fonts/light.otf"),
      });
      this.setState({ loading: false });
     }
    

>  Download [Brandon Grotesque Family Pack](https://www.dafontfree.co/brandon-grotesque-font-free-download/)

 ### 5 -  Apply finishing touches

We set the state to loading to false after the function to tell RN that it's now time to load our `render()` method by adding an **if statement**. 

      render() {
        if (this.state.loading) {
          return <Expo.AppLoading />;
        }
        return (
                 <Main/>
        );
      }

The [import](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/import) statement is used to import bindings which are exported by another module:

Basic syntax : `import _defaultExport_ from "_module-name_";`

Example used in our app : `import Main from './src/Main';`

If you liked this tutorial, recommend it to others. Thanks for reading!

## Author

Youssef Selkani
https://usfslk.github.io

## License
Copyright (c) [2018] MIT

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
