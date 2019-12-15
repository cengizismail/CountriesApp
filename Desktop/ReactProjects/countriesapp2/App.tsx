import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Baslangic from './baslangic';
import countryDetail from "./src/screens/Details/countryDetail";
import CountryObject from "./src/screens/Home/countryObject";
const AppNavigator = createStackNavigator(
   {
    Home: Baslangic,
    Detay:countryDetail,
  },
  {
    initialRouteName: 'Home',
    headerMode:'none',
    navigationOptions:{
      headerVisible:false
    }
  }

);

export default createAppContainer(AppNavigator);