import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./styles";

const CategoryCard = ({ category, containerStyle }) => {

  return (
    <TouchableOpacity>
      <View>
        <ImageBackground source={category?.thumbnail}
                         resizeMode={"cover"}
                         style={[styles.itemImageBackground, containerStyle]}
                         imageStyle={styles.itemImageBackgroundStyle} />

        <Text style={styles.itemMainText}>
          {category?.title}
        </Text>
        <Text style={styles.itemAmountText}>
          € 668,02
        </Text>

      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
