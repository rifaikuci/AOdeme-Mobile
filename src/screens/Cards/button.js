import React from "react";
import {
  View, Text, TouchableOpacity, TextInput, Image,
} from "react-native";
import { COLORS, icons, images } from "../../../constants";
import HeaderIcon from "./hedarIcon";
import styles from "./styles";

const Button = () => {
  return (
    <View style={styles.headerContent}>

      <TouchableOpacity style={styles.addtoWalletContent}>
        <View  style={styles.addtoWalletBody}>
          <View>
            <Image source={require("../../../assets/icons/debit-card.png")} style={styles.debitCard} />
          </View>
        <View>
          <Text style={styles.addtoWalletText}> Add to Apple Wallet</Text>
        </View>
        </View>

      </TouchableOpacity>
    </View>
  );
};

export default Button;
