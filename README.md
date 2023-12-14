# Overview


# Personal Notes

Documentations 
- https://www.tensorflow.org/js/models


-TFJS automatically chooes the backend model based on your hardware
  - to force backend: `tf.setBackend('webgl')`
  - to check what is set `console.log(tf.getBackend())`

These are the main dependencies: 
```json
    "@tensorflow-models/mobilenet": "^2.1.1",
    "@tensorflow/tfjs": "^4.15.0",
    "@tensorflow/tfjs-backend-cpu": "^4.15.0",
    "@tensorflow/tfjs-backend-webgl": "^4.15.0",
    "@tensorflow/tfjs-converter": "^4.15.0",
    "@tensorflow/tfjs-core": "^4.15.0",
```
