import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./styles";
import { dummyData } from "../../../constants";


const Footer = () => {

  const renderCard = ({ item }) => (
    <TouchableOpacity
      style={styles.renderCardFooterView}
    >
      <View  style={styles.contentViewFooter}>
        <View style={styles.contentViewSubFooter}>
          <Image
            source={item.image}
            resizeMode={"stretch"}
            style={styles.renderCardViewImageFooter}
          />
          <View>
            <Text style={styles.contentViewFooterText}>
              Reebok Reebok
            </Text>
          </View>
          <View>
            <Text style={styles.contentViewFooterSubText}>
             30% off
            </Text>
          </View>
        </View>

      </View>
    </TouchableOpacity>
  );

  return(
    <View>
      <Text style={styles.renderCardViewH1}>
        Perks
      </Text>

      <View style={styles.renderCardViewContentFlat}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={dummyData.productList}
          renderItem={renderCard}
        />
      </View>
    </View>
  )
}

export default Footer;
