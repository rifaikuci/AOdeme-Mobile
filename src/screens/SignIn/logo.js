import { Image, View } from "react-native";
import { images } from "../../../constants";
import React from "react";
import styles from "./styles";


const Logo = () => {

  return (
    <View
      style={styles.logoContent}
    >
      <Image
        source={images.wallieLogo}
        resizeMode="contain"
        style={{
          width: "60%",
        }}
      />
    </View>
  );
};

export default Logo;
