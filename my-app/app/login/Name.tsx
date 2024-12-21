import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigaation/types';

type NameScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Name'>;

const NameScreen = () => {
  const [nickname, setNickname] = useState('');
  const navigation = useNavigation<NameScreenNavigationProp>();

  const handleNext = () => {
    if (nickname.trim()) {
      navigation.navigate('Main', { nickname });
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>{'<'}</Text>
      </TouchableOpacity>

      <Text style={styles.title}>
        파인딩에서 사용하실{'\n'}닉네임을 입력해주세요.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="닉네임 설정"
        placeholderTextColor="#999"
        value={nickname}
        onChangeText={setNickname}
      />

      <TouchableOpacity
        style={[styles.nextButton, nickname.trim() ? styles.activeButton : styles.inactiveButton]}
        onPress={handleNext}
        disabled={!nickname.trim()}
      >
        <Text style={styles.nextButtonText}>다음으로 넘어가기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  backButton: {
    marginTop: 50,
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 30,
    color: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 40,
    lineHeight: 36,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 20,
  },
  nextButton: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 70,
    left: 20,
    right: 20,
  },
  activeButton: {
    backgroundColor: '#9BE600',
  },
  inactiveButton: {
    backgroundColor: '#E0E0E0',
  },
  nextButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default NameScreen;