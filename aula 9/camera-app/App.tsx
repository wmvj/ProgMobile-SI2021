import {Button, Image, StyleSheet, Text, View } from 'react-native';
import { CameraView, CameraType, useCameraPermissions, BarcodeScanningResult } from 'expo-camera';
import { useRef, useState } from 'react';


type CameraFlash = 'on' | 'off' | 'auto';

export default function App() {

  const cameraRef = useRef<CameraView>(null);
  
  const [photoFile, setPhotoFile] = useState<string | null>(null);
  const [cameraReady, setCameraReady] = useState(false);
  const [cameraZoom, setCameraZoom] = useState<number>(0);
  const [barcode, setBarcode] = useState("");
  const [flash, setFlash] = useState<CameraFlash>("off");
  const [facing, setFacing] = useState<CameraType>('front');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View>
        <Text>Você precisa dar permissão para exibir a camera</Text>
        <Button onPress={requestPermission} title="Pedir permissão" />
      </View>
    );
  }

  const handleChangeCamera = () => {
    setFacing(facing === 'front' ? 'back' : 'front');
  }

  const handleCameraFlash = () => {
    switch (flash) {
      case 'off':
        setFlash('on');
        break;
      case 'on':
        setFlash('auto');
        break;
      case 'auto':
        setFlash('off');
        break;
    }
  }

  const handleBarCode = (result: BarcodeScanningResult) => {
    setBarcode(result.data);
  }

  const handleCameraReady = () => {
    setCameraReady(true);
  }

  const handleTakePicture = async () => {
      if (cameraReady && cameraRef.current) {
        const option ={
          quality: 0.7,
          base64: true,
          // skipProcessing: true,
        }
        const photo = await cameraRef.current.takePictureAsync(option);
        if(photo){
          setPhotoFile(photo.uri);
        }
      }
  }

  return (
    <View style={styles.container}>
      <CameraView 
        style={styles.camera} 
        facing={facing}
        flash={flash}
        zoom={cameraZoom}
        onBarcodeScanned={handleBarCode}
        onCameraReady={handleCameraReady}
        ref={cameraRef}
      >  

      </CameraView>
      
      <View>
        <Button title='Virar Camera' onPress={handleChangeCamera}></Button>
          <View>
            <Text>Flash:{flash}</Text>
            <Button title='Ligar Flash' onPress={handleCameraFlash}></Button>
          </View>
          <View>
            <Text>QR: {barcode}</Text>
          </View>
          <View style={styles.zoomContainer}>
            <Button title='0%' onPress={() => setCameraZoom(0)}></Button>
            <Button title='25%' onPress={() => setCameraZoom(0.25)}></Button>
            <Button title='50%' onPress={() => setCameraZoom(0.5)}></Button>
            <Button title='75%' onPress={() => setCameraZoom(0.75)}></Button>
            <Button title='100%' onPress={() => setCameraZoom(1)}></Button>
          </View>
          <View style={{marginTop: 10}}>
            <Button title='Tirar foto' onPress={handleTakePicture}/>
          </View>
          {photoFile && 
            <Image source={{uri: photoFile}} style={styles.photo} />
          }
          
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera:{
    width: '100%',
    height: '45%',
  },
  zoomContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  photo:{
    marginTop: 10,
    width: 150,
    height: 150
  }
});
