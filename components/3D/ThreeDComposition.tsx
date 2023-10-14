"use client"

import * as THREE from 'three'
import Torus from '@/components/3D/Torus'
import { useEffect } from "react"
import {Camera, Mesh, MeshStandardMaterial, PointLight, Scene, SphereGeometry, WebGLRenderer} from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import addStar from "@/components/3D/Stars";

// npm i --save-dev @types/three

export default function ThreeDComposition() {
    useEffect(() => {
        const scene: Scene = new THREE.Scene()
        const camera: Camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        const renderer: WebGLRenderer = new THREE.WebGLRenderer({
            canvas: document.querySelector('#bg') as HTMLCanvasElement
        })

        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(window.innerWidth, window.innerHeight)
        camera.position.set(0, 0, 30)

        renderer.render(scene, camera)

        const torus: Mesh = Torus()
        Array(200).fill(0).forEach(() => addStar(scene))
        scene.add(torus)

        const pointLight: PointLight = new THREE.PointLight(0xffffff)
        pointLight.position.set(5, 5, 5)
        const ambientLight: THREE.AmbientLight = new THREE.AmbientLight(0xffffff)
        scene.add(pointLight, ambientLight)
        const gridHelper = new THREE.GridHelper(200, 50)
        scene.add(gridHelper)

        const controls: OrbitControls = new OrbitControls(camera, renderer.domElement)

        function animate() {
            requestAnimationFrame(animate)

            torus.rotation.x += 0.01
            torus.rotation.y += 0.005
            torus.rotation.z += 0.01

            controls.update()

            renderer.render(scene, camera)
        }
        animate()
    }, [])
    return (
        <canvas id="bg"></canvas>
    )
}
