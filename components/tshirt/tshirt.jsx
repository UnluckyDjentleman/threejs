import { Asset } from "expo-asset";
import { useGLTF } from "@react-three/drei";
import { useColorStore } from "../../store/store";
import { useFrame } from '@react-three/fiber/native';

export default function TShirt(props){
    const { scene, nodes, materials } = useGLTF(require("../../assets/t_shirt.glb"));
    const {color}=useColorStore()

    console.log(Object.keys(materials));

    useFrame(() => {
        if (materials.Body_FRONT_2664) {
            materials.Body_FRONT_2664.color.set(color);
        }
        if (materials.Sleeves_FRONT_2669) {
            materials.Sleeves_FRONT_2669.color.set(color);
        }
    });

    return <primitive object={scene} {...props} />;
}