import * as React from 'react';
import {View, Text,ScrollView,Button, FlatList} from 'react-native';
import {Header,Icons,SearchInput} from '../../components/index';
import { connect } from 'react-redux';
import Countries from '../../reducers/countries';
import { fetchCountries} from "../../actions/countries";
import CountryObject from "./countryObject";

class Home  extends React.Component{
//call this action by dispatch
constructor(props){
  super(props);
  this.state={
    searcQuery:""
  }
}
componentDidMount(){
  this.props.butunUlkeleriGetir();
 
}
onSearchButtonTouched = () => {
  this.props.butunUlkeleriGetir(this.state.searcQuery);
};

onChangeSearchQuery = (text) => {
 this.setState({searcQuery:text})
};
    render (){
      let sayi=0;
const renderCountriesObject =({item})=><CountryObject country={item}/>
        return(
         <View>
         
           <ScrollView>
           <Header/>
           <SearchInput onPress={this.onSearchButtonTouched} onChangeText={this.onChangeSearchQuery}/>
           <View style={{height:1, backgroundColor:'black',  marginTop:30} } key="111"/>
           <FlatList data={this.props.countries} renderItem={renderCountriesObject} keyExtractor={item=>{
           if(item.name==undefined){
             return "2";
           }
             return item.name;
           }}/>
           </ScrollView>
         
         </View>
        );
    }
}
const mapStateToProps =(state)=>{
  return  {countries:state.countries}
}

const mapDipatchToProps=dispatch=>{
 
return {
  
  butunUlkeleriGetir:(searcQuery)=>dispatch(fetchCountries(searcQuery))


}
}
export default connect(mapStateToProps,mapDipatchToProps)(Home);