import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";
import Svg, { Path } from "react-native-svg";
import { isIphoneX } from "react-native-iphone-x-helper";

import { Explore, Home, Spaces } from "../../src/screens";
import { COLORS, icons } from "../../constants";
import styles from "./styles";

const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {

  var isSelected = accessibilityState.selected;

  if (isSelected) {
    return (
      <View style={styles.bottomTabViewContent}>
        <View style={styles.bottomTabViewContent}>
          <View style={styles.bottomTabBackgroundColor}></View>
          <Svg
            width={75}
            height={61}
            viewBox="0 0 75 61">
            <Path
              d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
              fill={COLORS.white}
            />
          </Svg>
          <View style={styles.bottomTabBackgroundColor}></View>
        </View>

        <TouchableOpacity
          style={styles.tabsActiveStyle}
          onPress={onPress}>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        style={styles.tabsInActive}
        activeOpacity={1}
        onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  }
};

const CustomTabBar = (props) => {
  if (isIphoneX()) {
    return (
      <View>
        <View style={styles.styleCustomTab}></View>
        <BottomTabBar {...props.props} />
      </View>
    );
  } else {
    return (
      <BottomTabBar {...props.props} />
    );
  }
};

const Index = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        headerShown: false,
        tabBarStyle: styles.tabNavigation,
      }}
      tabBar={(props) => (
        <CustomTabBar props={props} />
      )}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.home}
              resizeMode="contain"
              style={styles.bottomTabStyle(focused)}
            />
          ),
          tabBarButton: (props) => (
            <TabBarCustomButton
              {...props}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Spaces"
        component={Spaces}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.more}
              resizeMode="contain"
              style={styles.bottomTabStyle(focused)}
            />
          ),
          tabBarButton: (props) => (
            <TabBarCustomButton
              {...props}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.explore}
              resizeMode="contain"
              style={styles.bottomTabStyle(focused)}
            />
          ),
          tabBarButton: (props) => (
            <TabBarCustomButton
              {...props}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cards"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.creditCard}
              resizeMode="contain"
              style={styles.bottomTabStyle(focused)}

            />
          ),
          tabBarButton: (props) => (
            <TabBarCustomButton
              {...props}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};


export default Index;
