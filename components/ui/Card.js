import { View,Text,StyleSheet } from "react-native";
function Card({children}){
    return(
    <View style={styles.card}>
       {children}
    
    
    </View>
    )
}
export default Card;
const styles=StyleSheet.create({
    card:{
        justifyContent:'center',
        alignItems:'center',
        padding:16,
        marginTop:20,
        backgroundColor:'#FFBE98' ,
         marginHorizontal:16,
         borderRadius:8,
         elevation:10,
         shadowColor:'black',
         shadowOffset:{width:2,height:2},
         shadowRadius:6,
         shadowOpacity:0.50 
    }
   
})