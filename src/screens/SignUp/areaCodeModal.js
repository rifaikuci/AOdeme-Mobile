import { FlatList, Image, Modal, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import styles from "./styles";
import React from "react";

const AreaCodeModal = (props) => {

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.renderItem}
                        onPress={() => {
                          props.setSelectedArea(item);
                          props.setModalVisible(false);
                        }}>

        <Image source={{ uri: item.flag }}
               style={styles.renderItemImage} />

        <Text style={styles.renderItemText}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <Modal animationType="slide"
           transparent={true}
           visible={props.modalVisible}>

      <TouchableWithoutFeedback onPress={() => props.setModalVisible(false)}>
        <View style={styles.modalBody}>

          <View style={styles.modalContent}>
            <FlatList data={props.areas}
                      renderItem={renderItem}
                      keyExtractor={(item) => item.code}
                      showsVerticalScrollIndicator={false}
                      style={styles.modalFlatList}
            />
          </View>

        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
export default AreaCodeModal;
