import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import React from "react";

const ForgetPasswordText = (props) => {
  return (
    <View style={{alignItems: "center"}}>

      <TouchableOpacity onPress={() =>  props.setModalVisible(true)}>
        <Text style={styles.forgetPasswordText}>Şifrenizi mi Unuttunuz ? </Text>
      </TouchableOpacity>
    </View>);
};
export default ForgetPasswordText;
