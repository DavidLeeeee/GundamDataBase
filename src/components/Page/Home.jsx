import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

const Home = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      5000
    );
    camera.position.z = 2000;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    const loader = new FontLoader();
    loader.load(
      "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
      function (font) {
        const geometry = new TextGeometry("G . P L A Z A", {
          font: font,
          size: 150,
          height: 1, // 더 얇은 텍스트를 위해 깊이 값을 줄임
          curveSegments: 4,
          bevelEnabled: true,
          bevelThickness: 0.1, // 베벨 두께를 줄임
          bevelSize: 8,
          bevelOffset: 0,
          bevelSegments: 10,
        });
        geometry.center();

        const material = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          metalness: 0.8, // 메탈릭한 정도를 조정합니다 (0 ~ 1 사이의 값)
          roughness: 0.1, // 표면의 거칠기를 조정합니다 (낮을수록 더 반짝임)
        });
        const material2 = new THREE.MeshStandardMaterial({
          color: 0xff0000,
          metalness: 0.8, // 메탈릭한 정도를 조정합니다 (0 ~ 1 사이의 값)
          roughness: 0.1, // 표면의 거칠기를 조정합니다 (낮을수록 더 반짝임)
        });
        const material3 = new THREE.MeshStandardMaterial({
          color: 0x0000ff,
          metalness: 0.8, // 메탈릭한 정도를 조정합니다 (0 ~ 1 사이의 값)
          roughness: 0.1, // 표면의 거칠기를 조정합니다 (낮을수록 더 반짝임)
        });
        // 첫 번째 텍스트 형상
        const textMesh1 = new THREE.Mesh(geometry, material);
        textMesh1.position.z = 100; // Z축으로 100만큼 이동
        scene.add(textMesh1);

        // 두 번째 텍스트 형상 생성 (복제)
        const textMesh2 = new THREE.Mesh(geometry, material2);
        textMesh2.scale.multiplyScalar(1.02);
        textMesh2.position.z = 50; // Z축으로 100만큼 이동
        scene.add(textMesh2);
        // 세 번째 텍스트 형상 생성 (복제)
        const textMesh3 = new THREE.Mesh(geometry, material3);
        textMesh3.scale.multiplyScalar(1.04);
        textMesh3.position.z = 0; // Z축으로 100만큼 이동
        scene.add(textMesh3);
      }
    );

    const pointLight = new THREE.PointLight(0xffffff, 200000, 1000); // 색상, 강도, 거리
    pointLight.position.set(600, -100, 150); // 광원 위치 설정
    scene.add(pointLight);
    const pointLight2 = new THREE.PointLight(0xffffff, 200000, 1000); // 색상, 강도, 거리
    pointLight2.position.set(-600, -100, 150); // 광원 위치 설정
    scene.add(pointLight2);
    const pointLight3 = new THREE.PointLight(0xffffff, 200000, 100000); // 색상, 강도, 거리
    pointLight3.position.set(0, 50, 400); // 광원 위치 설정
    scene.add(pointLight3);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 0, 1); // 빛의 방향 설정
    scene.add(directionalLight);

    // GridHelper 생성
    const size = 55000; // 그리드의 크기
    const divisions = 1000; // 그리드를 구성하는 선의 수
    const gridHelper = new THREE.GridHelper(size, divisions);
    gridHelper.rotation.x = Math.PI / 2; // XZ 평면에 평행하게 회전
    //scene.add(gridHelper);

    const controls = new OrbitControls(camera, renderer.domElement);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onWindowResize);

    return () => {
      window.removeEventListener("resize", onWindowResize);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100vh" }} />;
};

export default Home;
