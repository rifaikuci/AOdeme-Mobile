import React from "react";
import {
  View, Text, Image, TouchableOpacity,
} from "react-native";
import { COLORS, icons, images } from "../../../constants";
import HeaderIcon from "./hedarIcon";
import styles from "./styles";

const imageCard = () => {
  return (
    <View style={styles.imageCardContent}>
      <TouchableOpacity style={styles.touchableOpacityCard}>
        <Image source={images.creditCard}
               style={styles.imageCardImage} />
      </TouchableOpacity>
      <Text style={styles.imageCardText}>
        Transparent
      </Text>
      <Text style={styles.imageCardSubText}>
        Active
      </Text>
    </View>
  );
};

export default imageCard;
