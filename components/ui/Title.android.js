import { Text, StyleSheet,Platform } from "react-native";

function Title({children, style}){
    return (
    <Text style={[styles.title, style]}>{children}</Text>
    )
}
export default Title;
const styles=StyleSheet.create({
    
    title:{
        fontSize:20 ,
        fontFamily:'open-sans-bold',
        color:'white',
        textAlign:'center',
         
        // borderWidth:Platform.OS === 'android' ?2 :0,
        // borderWidth:Platform.select({ios: 0, android: 2}),
        borderWidth:2,
    
        borderColor:'white' ,
        padding:12, 
        borderRadius:10,
        maxWidth:'90%',
        width:300
       
    },
    })