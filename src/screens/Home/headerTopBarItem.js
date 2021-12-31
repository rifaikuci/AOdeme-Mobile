import React from "react";
import {
  Image, TouchableOpacity, View,
} from "react-native";
import styles from "./styles";

const HeaderTopBarItem = ({ icon, onPress, styleContent, styleImage }) => {

  return (

    <View style={styles.screen}>
      <TouchableOpacity
        onPress={onPress}
        style={styleContent}>
        <Image source={icon}
               style={styleImage} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderTopBarItem;
