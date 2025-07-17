import { colors } from "./data/colors";
import PickerItem from "./item/pickerItem";
import { View } from 'react-native';

export default function ColorPicker(){
    return(
        <View style={{zIndex:2, top:30, left:6, display:"flex", flexDirection: "row"}}>
            {
                colors.map(el=>(
                    <PickerItem key={el} bg={el}/>
                ))
            }
        </View>
    )
}