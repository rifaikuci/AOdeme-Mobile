import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import React from "react";

const Button = ({navigation}) => {
  return (
    <View style={styles.signUpContent}>

      <TouchableOpacity
        style={styles.signUpButtom}
        onPress={() => navigation.navigate("Home")}>
        <Text style={styles.signUpButtomText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Button;
