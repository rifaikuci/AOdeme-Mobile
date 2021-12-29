import React, { useEffect, useRef, useState } from "react";
import {
  KeyboardAvoidingView, Platform, Text, TextInput, View,
} from "react-native";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "../../../constants";

const Otp = ({ navigation }) => {

  let textInput = useRef(null);
  let lengthInput = 6;
  const [internalVal, setInternalVal] = useState("");

  const onChangeText = (val) => {
    setInternalVal(val);
    debugger;
    if (val && val.length === 6) {
      navigation.navigate("SignIn");
    }
  };

  useEffect(() => {
    textInput.focus();
  }, []);

  return (

    <View style={styles.container}>
      <LinearGradient
        style={{ flex: 1 }}
        colors={[COLORS.darkgray, COLORS.black]}>

        <KeyboardAvoidingView style={styles.containerAvoiddingView}
                              behavior={Platform.OS === "ios" ? "padding" : null}
                              keyboardVerticalOffset={50}>

          <Text style={styles.textTile}>
            0 535 233 4747 Numaranıza gönderilen OTP şifresini giriniz.
          </Text>

          <View>
            <TextInput
              ref={(input) => textInput = input}
              onChangeText={onChangeText}
              style={{ width: 0, height: 0 }}
              value={internalVal}
              maxLength={lengthInput}
              returnKeyType={"done"}
              keyboardType={"numeric"}
            />

            <View style={styles.containerInput}>
              {Array(lengthInput).fill().map((data, index) => (
                <View key={index}
                      style={[styles.cellView, {
                        borderBottomColor: index === internalVal.length ? "#FB6C6A" : "#234DB7",
                      }]}>
                  <Text style={styles.cellText}
                        onPress={() => textInput.focus()}>
                    {internalVal && internalVal.length > 0 ? internalVal[index] : ""}
                  </Text>
                </View>))}
            </View>
          </View>

        </KeyboardAvoidingView>

      </LinearGradient>

    </View>

  );
};

export default Otp;
