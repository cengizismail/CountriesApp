import * as React from 'react';
import {View ,Text, TextInput ,TouchableOpacity } from 'react-native';
import {searchInputStyles} from './styles'
import PropTypes from 'prop-types';
import Icons from '../Icon/Icons';

export default class SearchInput extends React.Component {
    render (){
       // const { placeholder, onPress, onChangeText, style } = this.props;
        return(
           <View  style={searchInputStyles.container}>
              <TextInput style={searchInputStyles.input} onChangeText={this.props.onChangeText}/>
              <TouchableOpacity onPress={this.props.onPress}>
					<View style={searchInputStyles.button}>
						<Icons />
					</View>
				</TouchableOpacity>
         </View>
        )
    }
};
