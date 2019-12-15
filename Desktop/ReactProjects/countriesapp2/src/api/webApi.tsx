import axios from "axios";
export const fetch_countries_api=  async (searchQuery)=>{
  console.log("searchQuery",searchQuery)
    const fetch_url='https://restcountries.eu/rest/v2/all';
    const fetch_countries_by_name_url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

    const url = searchQuery?fetch_countries_by_name_url:fetch_url
console.log(url);
 //  const response =await  fetch(url);
  //  const sonuc=await response.json();
   // console.log("myJson",myJson);
 return axios.get(url);
}