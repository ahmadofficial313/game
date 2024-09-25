import { View,StyleSheet ,Dimensions} from "react-native";
function Card({children}){
    return(
    <View style={styles.card}>
       {children}
    
    
    </View>
    )
}
export default Card;
const deviceWidth=Dimensions.get('window').width
const styles=StyleSheet.create({
    card:{
        justifyContent:'center',
        alignItems:'center',
        padding:16,
        marginTop:deviceWidth <380 ? 15: 20,
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