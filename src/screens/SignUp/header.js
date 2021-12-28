import { Image, Text, TouchableOpacity } from "react-native";
import { icons } from "../../../constants";
import React from "react";
import styles from "./styles";


const Header = (props) => {
  return (
    <TouchableOpacity
      style={styles.headerContent}
      onPress={() => props.navigation.navigate("SignIn")}
    >
      <Image
        source={icons.back}
        resizeMode="contain"
        style={styles.headerImage}
      />

      <Text style={styles.headerText}>Sign In</Text>
    </TouchableOpacity>
  );

};

export default Header;
