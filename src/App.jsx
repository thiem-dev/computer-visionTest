import './App.css'
import { useState, useEffect, useRef } from 'react';
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as tf from '@tensorflow/tfjs';


function App() {
  tf.setBackend('webgl');

  const [isModelLoading, setIsModelLoading] = useState(false)
  const [model, setModel] = useState(null)
  const [imageURL, setImageURL] = useState(null);
  const [results, setResults] = useState([])
  const [history, setHistory] = useState([])

  const imageRef = useRef()
  const textInputRef = useRef()
  const fileInputRef = useRef()

  const loadModel = async () => {
      setIsModelLoading(true)
      try {
          const model = await mobilenet.load()
          setModel(model)
          setIsModelLoading(false)
      } catch (error) {
          console.log(error)
          setIsModelLoading(false)
      }
  }

  const uploadImage = (e) => {
    const {files} = e.target
    if(files.length > 0){
      const url = URL.createObjectURL(files[0])
      setImageURL(url)
    } else {
      setImageURL(null)
    }
  }

  
  const identify = async () => {
    // textInputRef.current.value = ''
    const results = await model.classify(imageRef.current)
    console.log(results)
    setResults(results)
}

  useEffect(() => {
      loadModel()
  }, [])

  if (isModelLoading) {
      return <h2>Model Loading...</h2>
  }

  console.log(imageURL)

  return (
      <div className='App'>
        <h1 className='header'>Image ID</h1>
        <div className='inputHolder'>
                <input type='file' accept='image/*' capture='camera' className='uploadInput' onChange={uploadImage}  ref={fileInputRef} />
                {/* <button className='uploadImage' >Upload Image</button> */}
            </div>
            <div className="mainWrapper">
                <div className="mainContent">
                    <div className="imageHolder">
                        {imageURL && <img src={imageURL} alt="Upload Preview" crossOrigin="anonymous" ref={imageRef} />}
                    </div>
                </div>
                {imageURL && <button className='button' onClick={identify}>Identify Image</button>}
            </div>
      </div>
  );
}

export default App
