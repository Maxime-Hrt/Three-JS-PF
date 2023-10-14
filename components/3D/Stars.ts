import * as THREE from 'three'
import { Mesh, MeshStandardMaterial, SphereGeometry, Scene } from "three";

function addStar(scene: Scene) {
    const geometry: SphereGeometry = new THREE.SphereGeometry(0.25, 24, 24)
    const material: MeshStandardMaterial = new THREE.MeshStandardMaterial({color: 0xffffff})
    const star: Mesh = new THREE.Mesh(geometry, material)

    const [x, y, z] = Array(3).fill(0).map(() => THREE.MathUtils.randFloatSpread(100))
    star.position.set(x, y, z)
    scene.add(star)
}

export default addStar