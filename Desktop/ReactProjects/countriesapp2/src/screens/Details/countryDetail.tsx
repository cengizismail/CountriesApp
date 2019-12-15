import * as React from "react";
import { View ,Text} from "react-native";

export default class countryDetail extends React.Component {

    render(){
        return(
            <View>
                <Text>
                </Text>
                <Text>
                    Country Detail Page
                </Text>
                <Text>
                 {JSON.stringify(this.props)}
                </Text>
            </View>
        )
    }
}