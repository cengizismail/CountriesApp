import * as React from 'react';
import { View, Text, Platform, TouchableOpacity, TouchableNativeFeedback, Image } from 'react-native';
import { countryObjectStyles as styles } from './styles';
import { withNavigation } from 'react-navigation';

class CountryObject extends React.Component{

    render(){
        


		return (
			<TouchableOpacity style={styles.container} onPress={()=>{this.props.navigation.navigate('Detay',{veri:this.props.country})}} >
				<View style={styles.contentContainer} >
					<Image
                    style={styles.countryFlag}
						resizeMode='cover'
						source={{ uri: `https://www.countryflags.io/${this.props.country.alpha2Code}/flat/64.png` }}
					/>
					<Text style={styles.countryName} >{`${this.props.country.name} ( ${this.props.country.nativeName} )`}</Text>

				</View>
			</TouchableOpacity>
		);
    }
}

export default withNavigation(CountryObject);