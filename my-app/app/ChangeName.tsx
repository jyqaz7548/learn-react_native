import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // 아이콘 사용

export default function ProfileEditScreen() {
  const [nickname, setNickname] = useState('');

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="close" size={24} color="#000" /> {/* 'X' 아이콘 */}
        </TouchableOpacity>
        <Text style={styles.headerTitle}>프로필 수정</Text>
        <TouchableOpacity>
          <Text style={styles.headerAction}>완료</Text>
        </TouchableOpacity>
      </View>
      {/* 이미지와 입력 필드 */}
      <View style={styles.content}>
        <Image 
          source={require('@/assets/images/profile.png')} 
          style={styles.image}
        />
        <View style={styles.inputContainer}>
          <Text style={styles.nicknameLabel}>닉네임</Text>
          <TextInput
            style={styles.input}
            placeholder="변경할 닉네임을 적어주세요."
            value={nickname}
            onChangeText={setNickname}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // 흰색 배경
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd', // 헤더 아래 윤곽선
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  headerAction: {
    fontSize: 16,
    color: '#007AFF', // 파란색 텍스트
  },
  content: {
    alignItems: 'center',
    marginTop: 32, // 헤더 아래 여백
  },
  image: {
    width: 84,
    height: 84,
    borderRadius: 42, // 둥근 이미지
    marginBottom: 32,
  },
  inputContainer: {
    width: '90%', // 입력 필드의 넓이를 화면 비율에 맞춤
    alignItems: 'flex-start', // 왼쪽 정렬
  },
  nicknameLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    paddingHorizontal: 8,
    fontSize: 14,
    color: '#7C7C7C',
  },
});
