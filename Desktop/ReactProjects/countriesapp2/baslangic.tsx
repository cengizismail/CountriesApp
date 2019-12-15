import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home/home';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import {createLogger  } from "redux-logger";
import Countries from './src/reducers/countries';
import {store  } from "./src/config/store";


  export default class Baslangic  extends React.Component{

    render(){
      return (
        <Provider store={store}>
        <View style={{flex:1}}>
          <Home/>
        </View>
        </Provider>
      );
    }

}  
