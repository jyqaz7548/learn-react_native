import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemedText } from '@/components/ThemedText';

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState('전체');

  const handleTabPress = (tabName: React.SetStateAction<string>) => {
    setActiveTab(tabName);
    console.log(`Navigating to ${tabName}`);
  };

  return (
    <View style={styles.container}>
      {/* 헤더 영역 */}
      <View style={styles.headerContainer}>
        <ThemedText style={styles.text}>파인딩</ThemedText>
        <Icon name="search" size={24} color="#000" style={styles.icon} />
      </View>
      {/* TabBar 영역 */}
      <View style={styles.tabBarContainer}>
        {['전체', 'HOT', 'AI 추천', '테크/가전', '패션', '뷰티'].map((tabName) => (
          <TouchableOpacity
            key={tabName}
            style={[styles.tabItem, activeTab === tabName && styles.activeTab]}
            onPress={() => handleTabPress(tabName)}
          >
            <Text
              style={[
                styles.tabLabel,
                activeTab === tabName ? styles.activeLabel : styles.inactiveLabel,
              ]}
            >
              {tabName}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 첫 번째 BodyContainer */}
      <View style={styles.BodyContainer}>
        <Image
          source={require('@/assets/images/san.png')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <View style={styles.row}>
            <ThemedText style={styles.producttitle}>프로젝트 산나비 게임 펀딩</ThemedText>
            <Image source={require('@/assets/images/favorite.png')} style={styles.iconImage} />
          </View>
          <View style={styles.row}>
            <ThemedText style={styles.percent}>86%</ThemedText>
            <ThemedText style={styles.achieve}>달성</ThemedText>
          </View>
          <ThemedText style={styles.gebalja}>산나비 개발자</ThemedText>
          <View style={styles.row}>
            <View style={[styles.box, styles.grayBox]}>
              <ThemedText style={styles.goal}>목표 1000만원</ThemedText>
            </View>
            <View style={[styles.box, styles.greenBox]}>
              <ThemedText style={styles.expect}>5000만+ 예상</ThemedText>
            </View>
            <View style={[styles.box, styles.redBox]}>
              <ThemedText style={styles.magam}>마감임박</ThemedText>
            </View>
          </View>
        </View>
      </View>

      {/* 두 번째 BodyContainer */}
      <View style={styles.BodyContainer}>
        <Image
          source={require('@/assets/images/san.png')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <View style={styles.row}>
            <ThemedText style={styles.producttitle}>프로젝트 산나비 게임 펀딩</ThemedText>
            <Image source={require('@/assets/images/favorite.png')} style={styles.iconImage} />
          </View>
          <View style={styles.row}>
            <ThemedText style={styles.percent}>86%</ThemedText>
            <ThemedText style={styles.achieve}>달성</ThemedText>
          </View>
          <ThemedText style={styles.gebalja}>산나비 개발자</ThemedText>
          <View style={styles.row}>
            <View style={[styles.box, styles.grayBox]}>
              <ThemedText style={styles.goal}>목표 1000만원</ThemedText>
            </View>
            <View style={[styles.box, styles.greenBox]}>
              <ThemedText style={styles.expect}>5000만+ 예상</ThemedText>
            </View>
            <View style={[styles.box, styles.redBox]}>
              <ThemedText style={styles.magam}>마감임박</ThemedText>
            </View>
          </View>
        </View>
      </View>

      {/* 세 번째 BodyContainer */}
      <View style={styles.BodyContainer}>
        <Image
          source={require('@/assets/images/san.png')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <View style={styles.row}>
            <ThemedText style={styles.producttitle}>프로젝트 산나비 게임 펀딩</ThemedText>
            <Image source={require('@/assets/images/favorite.png')} style={styles.iconImage} />
          </View>
          <View style={styles.row}>
            <ThemedText style={styles.percent}>86%</ThemedText>
            <ThemedText style={styles.achieve}>달성</ThemedText>
          </View>
          <ThemedText style={styles.gebalja}>산나비 개발자</ThemedText>
          <View style={styles.row}>
            <View style={[styles.box, styles.grayBox]}>
              <ThemedText style={styles.goal}>목표 1000만원</ThemedText>
            </View>
            <View style={[styles.box, styles.greenBox]}>
              <ThemedText style={styles.expect}>5000만+ 예상</ThemedText>
            </View>
            <View style={[styles.box, styles.redBox]}>
              <ThemedText style={styles.magam}>마감임박</ThemedText>
            </View>
          </View>
        </View>
      </View>

      {/* 네 번째 BodyContainer */}
      <View style={styles.BodyContainer}>
        <Image
          source={require('@/assets/images/san.png')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <View style={styles.row}>
            <ThemedText style={styles.producttitle}>프로젝트 산나비 게임 펀딩</ThemedText>
            <Image source={require('@/assets/images/favorite.png')} style={styles.iconImage} />
          </View>
          <View style={styles.row}>
            <ThemedText style={styles.percent}>86%</ThemedText>
            <ThemedText style={styles.achieve}>달성</ThemedText>
          </View>
          <ThemedText style={styles.gebalja}>산나비 개발자</ThemedText>
          <View style={styles.row}>
            <View style={[styles.box, styles.grayBox]}>
              <ThemedText style={styles.goal}>목표 1000만원</ThemedText>
            </View>
            <View style={[styles.box, styles.greenBox]}>
              <ThemedText style={styles.expect}>5000만+ 예상</ThemedText>
            </View>
            <View style={[styles.box, styles.redBox]}>
              <ThemedText style={styles.magam}>마감임박</ThemedText>
            </View>
          </View>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: 60,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  icon: {
    marginLeft: 8,
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  tabItem: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  tabLabel: {
    fontSize: 20,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  activeLabel: {
    fontWeight: 'bold',
    color: '#000',
  },
  inactiveLabel: {
    color: '#aaa',
  },
  BodyContainer: {
    flexDirection: 'row', // 이미지와 텍스트를 가로로 배치
    padding: 16,
    alignItems: 'center', // 이미지와 텍스트를 세로로 맞춤
    marginBottom: -4  , // 각 BodyContainer 사이에 간격 추가
  },
  image: {
    width: 116,
    height: 116,
    marginRight: 16,
  },
  textContainer: {
    flex: 1, // 텍스트는 나머지 공간을 차지
    justifyContent: 'space-between',
  },
  producttitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  iconImage: {
    width: 20,
    height: 20,
    marginLeft: 52, // 이미지와 텍스트 사이에 여백을 추가
  },
  percent: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#78B800',
    marginRight: 8,
  },
  achieve: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  gebalja: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8, // '산나비 개발자' 아래에 여백 추가
  },
  goal: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#383838',
    marginRight: 8,
  },
  expect: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#486D07',
    marginRight: 8,
  },
  magam: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#B91C1C',
  },
  // 박스 스타일
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  grayBox: {
    backgroundColor: '#EFEFEF', // 회색
  },
  greenBox: {
    backgroundColor: '#F3FFC4', // 연두색
  },
  redBox: {
    backgroundColor: '#FEE2E2', // 빨간색
  },
});
