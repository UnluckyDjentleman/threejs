import { Canvas } from "@react-three/fiber/native"
import { OrbitControls } from "@react-three/drei/native"
import { Suspense } from "react"
import TShirt from "../tshirt/tshirt"

export default function CanvasTShirt(){
    return (
        <Canvas style={{height:"200%"}} shadows camera={{position: [0, 50, 0], fov: 30}}>
            <directionalLight position={[5, 10, 15]} intensity={1} castShadow />
            <directionalLight position={[-10, 10, 15]} intensity={1} />
            <directionalLight position={[10, 10, 15]} intensity={1} />
            <Suspense fallback={null}>
                <TShirt position={[0, -3, 0]} scale={3}/>
                <mesh
                    receiveShadow
                    rotation={[-Math.PI / 2, 0, 0]}
                    position={[0, -1, 0]}>
                    <planeGeometry args={[10, 10]} />
                    <shadowMaterial opacity={0.5} />
                </mesh>
            </Suspense>
            <OrbitControls enableZoom={true} />
        </Canvas>
    )
}