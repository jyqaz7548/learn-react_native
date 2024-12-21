import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import { RootStackParamList } from '@/navigaation/types';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  // 로그인 버튼 클릭 시 다음 화면으로 이동
  const goToNextScreen = () => {
    navigation.navigate('Name'); // 'Name' 화면으로 이동
  };

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        navigation.navigate('Name');
      }
    });

    return () => unsubscribe();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('@/assets/images/image.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.subText}>크라우드 펀딩 서비스</Text>
      </View>

      <TouchableOpacity style={styles.googleButton} onPress={goToNextScreen}>
        <Text style={styles.buttonText}>다음 화면으로 이동하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 60,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 140,
  },
  logo: {
    width: '100%',
    height: 250,
    aspectRatio: 1,
    marginBottom: 10,
  },
  subText: {
    fontSize: 32,
    fontWeight: '900',
    color: '#3D5C0B',
    textAlign: 'center',
    letterSpacing: -1,
  },
  googleButton: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginHorizontal: 20,
    elevation: 0,
    shadowColor: 'transparent',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
});

export default LoginScreen;