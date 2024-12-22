import AsyncStorage from '@react-native-async-storage/async-storage';

// 닉네임 저장
export const saveNickname = async (nickname: string) => {
  try {
    await AsyncStorage.setItem('nickname', nickname);
  } catch (error) {
    throw new Error('닉네임 저장 중 문제가 발생했습니다.');
  }
};

// 닉네임 로드
export const loadNickname = async (): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem('nickname');
  } catch (error) {
    throw new Error('닉네임 로드 중 문제가 발생했습니다.');
  }
};

// 프로필 이미지 저장
export const saveProfileImage = async (uri: string) => {
  try {
    await AsyncStorage.setItem('profileImage', uri);
  } catch (error) {
    throw new Error('프로필 이미지 저장 중 문제가 발생했습니다.');
  }
};

// 프로필 이미지 로드
export const loadProfileImage = async (): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem('profileImage');
  } catch (error) {
    throw new Error('프로필 이미지 로드 중 문제가 발생했습니다.');
  }
};