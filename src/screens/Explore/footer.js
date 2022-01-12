import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./styles";
import { dummyData } from "../../../constants";


const Footer = ({data}) => {

  const renderCard = ({ item }) => (
    <TouchableOpacity
      style={styles.renderCardFooterView}
    >
      <View  style={styles.contentViewFooter}>
        <View style={styles.contentViewSubFooter}>
          <Image
            source={item.image}
            resizeMode={"cover"}
            style={styles.renderCardViewImageFooter}
          />
          <View>
            <Text style={styles.contentViewFooterText}>
              {item.text1}
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
    <View style={{marginBottom: 70}}>
      <Text style={styles.renderCardViewH1}>
        Perks
      </Text>

      <View style={styles.renderCardViewContentFlat}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={renderCard}
        />
      </View>
    </View>
  )
}

export default Footer;
