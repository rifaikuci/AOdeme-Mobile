import React from "react";
import {
  Image, Text, TouchableOpacity, View,
} from "react-native";
import styles from "./styles";

const HeaderTopBarItem = ({ icon, onPress, styleContent, styleImage, cardDetails }) => {

  return (

    <View>
      <TouchableOpacity
        onPress={onPress}
        style={styleContent}>
        <Image source={icon}
               style={styleImage} />
      </TouchableOpacity>
      <Text style={styles.headerTopIconText}>
        {cardDetails}
      </Text>
    </View>
  );
};

export default HeaderTopBarItem;
