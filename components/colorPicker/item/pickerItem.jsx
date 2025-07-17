import { useColorStore } from "../../../store/store";
import { StyleSheet, View, TouchableOpacity } from 'react-native';

export default function PickerItem({bg}){
    const {color,setColor}=useColorStore()
    return(
        <TouchableOpacity onPress={()=>{
            setColor(bg)
            console.log(color);
        }} style={{margin:5}}>
            <View style={[
                styles.container, 
                { backgroundColor: bg },
                color === bg && styles.active
            ]}></View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  container: {
    width:30,
    height:30,
    borderRadius:50,
    borderWidth:2,
    borderColor:"black",
  },
  active:{
    borderColor:"white"
  }
});