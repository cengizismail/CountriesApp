import * as React from 'react'
import {View , Text} from  'react-native'
import {headerStyles as styles} from './styles'
import {Search} from '../../assets/icons/index'
class Icons extends React.Component{
    render(){
        return(
            <View >
            <Search/>
            </View>
         
        );
    }
}

export default Icons;
