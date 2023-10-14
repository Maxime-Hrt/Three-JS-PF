import * as THREE from 'three'
import {MeshStandardMaterial, TorusGeometry} from 'three'

function Torus() {
    const geometry: TorusGeometry = new THREE.TorusGeometry(10, 3, 16, 100)
    const material: MeshStandardMaterial = new THREE.MeshStandardMaterial({color: 0xffff00})
    return new THREE.Mesh(geometry, material)
}

export default Torus