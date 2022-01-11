import React from "react";
import {
  View, Text, TouchableOpacity, TextInput, Image,
} from "react-native";
import { COLORS, icons, images } from "../../../constants";
import HeaderIcon from "./hedarIcon";
import styles from "./styles";

const AdditionalCard = () => {
  return (
    <View>

      <TouchableOpacity style={styles.additionalWalletContent}>
        <View style={styles.additionalWalletBody}>
          <View>
            <Image source={require("../../../assets/icons/credit-card.png")} style={styles.additionalCardImage} />
          </View>
          <View>
            <Text style={styles.additionalWalletText}> Get an additional card</Text>
          </View>
        </View>

      </TouchableOpacity>
    </View>
  );
};

export default AdditionalCard;
