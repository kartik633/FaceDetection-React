import { useEffect, useRef } from "react";
import "./app.css";
import * as faceapi from "face-api.js";

function App() {
  const imgRef = useRef();
  const canvasRef = useRef();

  useEffect(() => {
    const loadModels = () => {
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
        faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
        faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
        faceapi.nets.faceExpressionNet.loadFromUri("/models"),
      ])
        .then(console.log("its done"))
        .catch((e) => console.log(e));
    };

    imgRef.current && loadModels();

  }, []);
  return (
    <div className="App">
      <img
        ref={imgRef}
        src="https://images.pexels.com/photos/9371782/pexels-photo-9371782.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
        width="400"
        height="500"
      />
      <canvas ref={canvasRef} width="400" height="500" />
    </div>
  );
}

export default App;
