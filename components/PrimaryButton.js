import { View , Text, StyleSheet, Pressable} from "react-native";

function PrimaryButton({children, onPress, style}){
  
    return( 
        <View style={styles.outerContainer}>
        <Pressable
         onPress={onPress} 
         style={({pressed})=> pressed ? [styles.innerContainer,styles.buttonPress] :styles.innerContainer} 
         android_ripple={{color:'#A04747'}} 
         
         >
        
         <Text style={[styles.buttonText,style]}>{children}</Text>
   
        </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles=StyleSheet.create({
    outerContainer:{
        marginVertical:5,
        borderRadius:28,
        overflow:'hidden',
    
        
    },
    innerContainer:{
    backgroundColor:'#C96868',
    
    
    paddingVertical:8,
    paddingHorizontal:16,
    color:'#ddb52f',
    
    
     
},
buttonText:{
    color:'white',
    textAlign:'center'
},
buttonPress:{
    backgroundColor:'#A04747'
}


});