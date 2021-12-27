import { Image, Text, TouchableOpacity } from "react-native";
import { icons } from "../../../constants";
import React from "react";
import styles from "./styles";


const Header = () => {
  return (
    <TouchableOpacity
      style={styles.headerContent}
      onPress={() => console.log("Sign Up")}
    >
      <Image
        source={icons.back}
        resizeMode="contain"
        style={styles.headerImage}
      />

      <Text style={styles.headerText}>Sign Up</Text>
    </TouchableOpacity>
  );

};

export default Header;
