import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { CameraView, CameraType, useCameraPermissions, BarcodeScanningResult } from 'expo-camera';
import {useRef, useState} from 'react';

export default function App() {
  
  const [facing, setFacing] = useState<CameraType>('front');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View>
        <Text>Você precisa dar permissão para exibir a camera </Text>
        <Button onPress={requestPermission} title="Pedir permissão" />
      </View>
    );
  }

  const handleChangeCamera = () => {
    setFacing(facing === 'front' ? 'back' : 'front');
  }
  
  return (

    <View style={styles.container}>
      <CameraView
        style={styles.camera}
      >
      </CameraView>
      <View>
        <Button title='Virar Camera' onPress={handleChangeCamera}></Button>
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
  }
});
