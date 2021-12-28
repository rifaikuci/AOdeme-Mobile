import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import React from "react";

const SignUpText = ({navigation}) => {
  return (
    <View style={{alignItems: "center"}}>

      <TouchableOpacity onPress={() =>  navigation.navigate("SignUp")}>
        <Text style={styles.signUpText}>Daha kayıt olmadınız mı ? </Text>
      </TouchableOpacity>
    </View>);
};
export default SignUpText;

