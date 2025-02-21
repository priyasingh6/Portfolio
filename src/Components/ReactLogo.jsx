
import {Float, useGLTF} from '@react-three/drei'

export function ReactLogo(props) {
    const { nodes, materials } = useGLTF('/models/react.glb')
    return (
        <Float floatIntensity={2}  rotationIntensity={0.2}>
            <group position={[-0.102, 5.5, 1]} scale={0.4} {...props} dispose={null}>

                <mesh

                    geometry={nodes['React-Logo_Material002_0'].geometry}
                    material={materials['Material.002']}
                    position={[0, 0.079, 0.181]}
                    // position={[0 ,0 ,0]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[0.39, 0.39, 0.5]}
                />
            </group>
        </Float>
    )
}

useGLTF.preload('/models/react.glb')

export default ReactLogo