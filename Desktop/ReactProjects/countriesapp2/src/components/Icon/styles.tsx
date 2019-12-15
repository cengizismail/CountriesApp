import {StyleSheet} from 'react-native';
import {colors}  from '../../config/color'

export const headerStyles =StyleSheet.create({
    container:{
        backgroundColor:'red',
        flex:1,
        alignItems:'center',
        paddingTop:60,
        paddingHorizontal:30,
        paddingBottom:10,
    },
    title:{
         fontSize:36,
         fontWeight:"700",
         color:colors.accent,
    },
    subtitle:{
        fontSize:18,
        color:colors.text_color
    },

    line:{
        width:90,
        height:1,
        backgroundColor:colors.gray,
        marginBottom:5,
        marginTop:5,
    }


})