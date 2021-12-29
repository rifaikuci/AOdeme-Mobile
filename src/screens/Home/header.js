import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { COLORS, icons } from "../../../constants";
import HeaderIcon from "./hedarIcon";
import styles from "./styles";

const Header = () => {
  return (
    <View style={styles.headerContent}>

      <View style={styles.container}>
        <Text style={styles.homeText}>Home</Text>
        <Text style={styles.homeUserName}>User Name</Text>
      </View>

      <HeaderIcon
        backgroundColor={COLORS.lightGray}
        tintColor={COLORS.secondary}
        icon={icons.search}
      />

      <HeaderIcon
        backgroundColor={COLORS.lightGray}
        tintColor={COLORS.secondary}
        icon={icons.list}
      />

      <View style={styles.centerStyle}>
        <TouchableOpacity
          style={styles.homeLeftBackground}>
          <Text style={{ color: COLORS.secondary }}> | </Text>
        </TouchableOpacity>
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
    </View>
  );
};

export default Header;
