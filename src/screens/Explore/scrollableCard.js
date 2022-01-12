import styles from "./styles";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { dummyData } from "../../../constants";
import React from "react";


const ScrollableCard = ({headerLabel, data}) => {
  const renderCard = ({ item }) => (
    <TouchableOpacity
    >
      <View style={styles.renderCardView}>
        <Image
          source={item.image}
          resizeMode="stretch"
          style={styles.renderCardViewImage}
        />

        <View style={styles.renderCardViewContent}>
          <Text style={styles.renderCardViewText1}>{item.text1}</Text>
          <Text style={styles.renderCardViewText2}>{item.text2}</Text>
          <Text style={styles.renderCardViewText3}>{item.text3}</Text>
        </View>

      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{marginBottom: 5}}>
      <View>
        <Text style={styles.renderCardViewH1}>{headerLabel}</Text>
      </View>
      <View style={styles.renderCardViewContentFlat}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={renderCard}
        />
      </View>
    </View>
  );
};

export default ScrollableCard;
