import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FindingScreen from './Finding/Finding'; // Finding.tsx
import FundingScreen from './Funding/Funding'; // Funding.tsx
import ChatbotScreen from './Chatbot/Chatbot'; // Chatbot.tsx
import ProfileScreen from './Profile/Profile'; // Profile.tsx

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let imageSource;
            const imagePath = 'C:/Users/dyqaz/OneDrive/문서/GitHub/learn-react_native/my-app/assets/images'; // 절대 경로 지정

            switch (route.name) {
              case '파인딩':
                imageSource = focused
                  ? { uri: `${imagePath}/finding_on.png` }
                  : { uri: `${imagePath}/finding_off.png` }; 
                break;
              case '펀딩':
                imageSource = focused
                  ? { uri: `${imagePath}/funding_on.png` }
                  : { uri: `${imagePath}/funding_off.png` };
                break;
              case '챗봇':
                imageSource = focused
                  ? { uri: `${imagePath}/chatbot_on.png` }
                  : { uri: `${imagePath}/chatbot_off.png` };
                break;
              case '포인트 수집':
                imageSource = focused
                  ? { uri: `${imagePath}/point_on.png` }
                  : { uri: `${imagePath}/point_off.png` };
                break;
              case '프로필':
                imageSource = focused
                  ? { uri: `${imagePath}/profile_on.png` }
                  : { uri: `${imagePath}/profile_off.png` };
                break;
            }

            return <Image source={imageSource} style={styles.icon} />;
          },
          tabBarActiveTintColor: '#78B800',
          tabBarInactiveTintColor: '#D9D9D9',
        })}
      >
        <Tab.Screen name="파인딩" component={FindingScreen} />
        <Tab.Screen name="펀딩" component={FundingScreen} />
        <Tab.Screen name="챗봇" component={ChatbotScreen} />
        <Tab.Screen name="프로필" component={ProfileScreen} />
      </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export default BottomTabNavigator; 