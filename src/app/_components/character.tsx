"use effect"

import { useAnimations, useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { FC, useRef, useEffect } from "react"
import { Group } from "three"

interface CharacterProps {}

useGLTF.preload("shaman.glb")
const Character: FC<CharacterProps> = ({}) => {
  const group = useRef<Group>(null)
  const { animations, scene } = useGLTF("shaman.glb")
  const { actions } = useAnimations(animations, scene)

  useEffect(() => {
    console.log("Available actions:", actions)
    for (const property in actions) {
      if (actions.hasOwnProperty(property)) {
        // @ts-ignore
        actions[property].play().paused = true
        // console.log("Playing action:", property);
      }
    }
  }, [actions])

  useFrame(() => {
    //@ts-ignore
    // (actions["NurbsPath.003Action.001"].time =
    //@ts-ignore
    // actions["NurbsPath.003Action.001"].getClip().duration * scroll.offset)

    // @ts-ignore
    for (const property in actions) {
      //@ts-ignore
      actions[property].time =
        //@ts-ignore
        actions[property].getClip().duration * scroll.offset
      // console.log(property)
    }
  })

  console.log(actions)
  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  )
}

export default Character
