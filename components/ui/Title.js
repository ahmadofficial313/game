import { Text, StyleSheet } from "react-native";

function Title({children, style}){
    return (
    <Text style={[styles.title, style]}>{children}</Text>
    )
}
export default Title;
const styles=StyleSheet.create({
    
    title:{
        fontSize:24,
        fontFamily:'open-sans-bold',
        color:'white',
        textAlign:'center',
        borderWidth:2,
    
        borderColor:'white' ,
        padding:12,
        borderRadius:10
    }
    })