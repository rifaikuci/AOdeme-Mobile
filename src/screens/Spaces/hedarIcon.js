import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { icons } from "../../../constants";
import styles from "./styles";

const HeaderIcon = ({ backgroundColor, tintColor, icon }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity
        style={styles.homeIconOpacityHeader(backgroundColor)}>
        <Image
          source={icon ? icon : icons.bell}
          style={styles.homeIconImageHeader(tintColor)} />
        {/* bildirim olacaksa kullanılmalı
            <View
              style={{
                position: 'absolute',
                top: -5,
                right: -5,
                height: 7.5,
                width: 7.5,
                backgroundColor: COLORS.red,
                borderRadius: 3.75
              }}>
              </View>
              */}

      </TouchableOpacity>
    </View>
  );

};


export default HeaderIcon;
