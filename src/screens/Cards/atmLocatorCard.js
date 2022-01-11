import React from "react";
import {
  View, Text, TouchableOpacity, TextInput, Image,
} from "react-native";
import { COLORS, icons, images } from "../../../constants";
import HeaderIcon from "./hedarIcon";
import styles from "./styles";

const ATMLocatorCard = () => {
  return (

    <TouchableOpacity style={styles.atmWalletContent}>
      <View style={styles.atmWalletBody}>
        <Image source={require("../../../assets/icons/credit-card.png")} style={styles.atmCardImage} />

        <View style={{ flexDirection: "row", width: "80%", justifyContent: "space-between" }}>
          <View>
            <Text style={styles.atmWalletText}> Atm Locator</Text>
            <Text style={styles.textsContentSubText}> Find ATMs nearby</Text>
          </View>
          <View>
            <TouchableOpacity style={{ alignItems: "flex-end" }}>
              <Image source={require("../../../assets/icons/arround-right.png")} style={styles.atmImageNext} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ATMLocatorCard;
