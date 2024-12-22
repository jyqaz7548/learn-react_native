import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemedText } from '@/components/ThemedText';

export default function HomeScreen() {
  const handleIconPress = () => {
    console.log("... 아이콘이 클릭되었습니다!");
    // 여기에 클릭 시 원하는 동작을 추가하세요
  };

  return (
    <View style={styles.container}>
      {/* 헤더 영역 */}
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Icon name="close" size={24} color="#000" style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <ThemedText style={styles.text}>내 펀딩 프로젝트</ThemedText>
        </View>
        <View style={styles.icon} /> {/* 여백을 위한 빈 View */}
      </View>

      {/* 첫 번째 BodyContainer */}
      <View style={styles.BodyContainer}>
        <Image source={require('@/assets/images/san.png')} style={styles.image} />
        <View style={styles.textContainer}>
          <View style={styles.row}>
            <ThemedText style={styles.producttitle}>프로젝트 산나비 게임 펀딩</ThemedText>
            <TouchableOpacity onPress={handleIconPress}>
              <Icon name="ellipsis-horizontal" size={24} color="#000" style={styles.iconImage} /> {/* ... 아이콘 */}
            </TouchableOpacity>
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
        <Image source={require('@/assets/images/san.png')} style={styles.image} />
        <View style={styles.textContainer}>
          <View style={styles.row}>
            <ThemedText style={styles.producttitle}>프로젝트 산나비 게임 펀딩</ThemedText>
            <TouchableOpacity onPress={handleIconPress}>
              <Icon name="ellipsis-horizontal" size={24} color="#000" style={styles.iconImage} /> {/* ... 아이콘 */}
            </TouchableOpacity>
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
        <Image source={require('@/assets/images/san.png')} style={styles.image} />
        <View style={styles.textContainer}>
          <View style={styles.row}>
            <ThemedText style={styles.producttitle}>프로젝트 산나비 게임 펀딩</ThemedText>
            <TouchableOpacity onPress={handleIconPress}>
              <Icon name="ellipsis-horizontal" size={24} color="#000" style={styles.iconImage} /> {/* ... 아이콘 */}
            </TouchableOpacity>
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
        <Image source={require('@/assets/images/san.png')} style={styles.image} />
        <View style={styles.textContainer}>
          <View style={styles.row}>
            <ThemedText style={styles.producttitle}>프로젝트 산나비 게임 펀딩</ThemedText>
            <TouchableOpacity onPress={handleIconPress}>
              <Icon name="ellipsis-horizontal" size={24} color="#000" style={styles.iconImage} /> {/* ... 아이콘 */}
            </TouchableOpacity>
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
    borderBottomWidth: 1,
    borderBottomColor: '#000', // 검은색 윤곽선 추가
  },
  headerTitleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  icon: {
    marginLeft: 8,
  },
  BodyContainer: {
    flexDirection: 'row',
    paddingVertical: 12, // 간격 줄이기
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: -4,
  },
  image: {
    width: 116,
    height: 116,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
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
    width: 24,
    height: 24,
    marginLeft: 52,
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
    marginBottom: 8,
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
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  grayBox: {
    backgroundColor: '#EFEFEF',
  },
  greenBox: {
    backgroundColor: '#F3FFC4',
  },
  redBox: {
    backgroundColor: '#FEE2E2',
  },
});
