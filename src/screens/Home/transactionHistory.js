import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, icons } from "../../../constants";
import styles from "./styles";


const TransactionHistory = ({ history }) => {

  const renderItem = ({ item }) => (

    <TouchableOpacity
      style={styles.flatListItemContent}
      onPress={() => console.log(item)}>

      <Image source={icons.exchange} style={styles.flatListItemImage} />

      <View style={styles.flatListItemTextContext}>
        <Text style={styles.flatListItemTextName}>{item.description}</Text>
        <Text style={styles.flatListItemTextDate}>{item.date}</Text>
      </View>

      <View style={styles.flatListItemView}>
        <Text style={item.type == "B" ? styles.flatListItemAmountPush : styles.flatListItemAmountPull}>
          {item.currency} {item.amount}
        </Text>
        <Image source={icons.arroundRight} style={styles.flatListArroundImage} />
      </View>
    </TouchableOpacity>
  );

  return (

    <View style={[styles.flatListBody, styles.shadow]}>
      <Text style={{ ...FONTS.h4, color: COLORS.emerald, marginBottom: 2 }}>Transaction History</Text>

      <FlatList data={history}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => {
                  return (
                    <View style={styles.listItemSeperator} />
                  );
                }}
      />
    </View>
  );
};


export default TransactionHistory;
