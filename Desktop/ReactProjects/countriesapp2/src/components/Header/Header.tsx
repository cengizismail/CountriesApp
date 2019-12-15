import * as React from 'react';
import {View ,Text } from 'react-native';
import {headerStyles as styles} from './styles'

 export default class Header extends React.Component {

    render(){
        return(
            <View  style={styles.container}>
                <Text style={styles.title}>
                    Hangi ülkeyi merak ediyorsunuz?
                </Text>
                <View style={styles.line}/>
               <Text  style={styles.subtitle}>
                 Countries
               </Text>
            </View>
        )
    }
}
