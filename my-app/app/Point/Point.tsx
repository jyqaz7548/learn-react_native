import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { Camera, useCameraDevices, CameraPermissionStatus } from 'react-native-vision-camera';

const Point = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [cameraPermission, setCameraPermission] = useState<CameraPermissionStatus>('not-determined');
  const devices = useCameraDevices();
  const cameraRef = useRef<Camera>(null);
  const device = devices.find(d => d.position === 'back'); // 후면 카메라 장치 선택

  useEffect(() => {
    const requestCameraPermission = async () => {
      const status = await Camera.requestCameraPermission();
      setCameraPermission(status);
      
      // 권한이 허용된 경우 알림을 통해 안내
      if (status === 'authorized') {
        Alert.alert("권한 허용", "카메라 권한이 허용되었습니다.");
      } else {
        Alert.alert(
          "권한 필요",
          "이 앱은 카메라 사용을 위해 권한이 필요합니다. 설정에서 허용해 주세요.",
          [{ text: "확인" }]
        );
      }
    };

    // 권한 요청
    requestCameraPermission();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePhoto();
      setImageUri(photo.path); // 'uri' 대신 'path' 사용
    } else {
      Alert.alert("카메라 참조가 없습니다.");
    }
  };

  // 카메라 권한 상태 확인
  const isCameraAuthorized = cameraPermission === 'authorized';

  return (
    <View style={styles.container}>
      {isCameraAuthorized ? (
        <>
          <Text style={styles.title}>포인트 수집</Text>
          <View style={styles.cameraContainer}>
            {device ? (
              <Camera
                style={styles.camera}
                device={device}
                isActive={true}
                ref={cameraRef} // 카메라 참조 설정
              />
            ) : (
              <Text>카메라를 찾을 수 없습니다.</Text>
            )}
          </View>
          <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
            <Text style={styles.captureText}>촬영</Text>
          </TouchableOpacity>
          {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
        </>
      ) : (
        <Text style={styles.title}>카메라 권한이 필요합니다.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
  },
  cameraContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    width: '100%',
    height: 400,
  },
  captureButton: {
    padding: 20,
    backgroundColor: '#007AFF',
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom: 20,
  },
  captureText: {
    color: '#fff',
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
});

export default Point;
