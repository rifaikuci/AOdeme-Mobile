import React from "react";
import {
  View, Text
} from "react-native";
import { COLORS, icons } from "../../../constants";
import HeaderIcon from "./hedarIcon";
import styles from "./styles";

const Header = () => {
  return (<View style={styles.headerContent}>

    <View style={styles.container}>
      <Text style={styles.homeText}>Explore</Text>
    </View>

    <HeaderIcon
      backgroundColor={COLORS.lightGray}
      tintColor={COLORS.secondary}
      icon={icons.chat}
    />

    <HeaderIcon
      backgroundColor={COLORS.lightGray}
      tintColor={COLORS.secondary}
      icon={icons.account}
    />

  </View>);
};

export default Header;
