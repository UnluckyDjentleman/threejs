import {create} from "zustand"
import { colors } from "../components/colorPicker/data/colors"

export const useColorStore=create((set)=>({
    color: colors[0],
    setColor: (newColor)=>set({color:newColor})
}))