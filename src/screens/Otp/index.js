import React, { useEffect, useRef, useState } from "react";
import {
  KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View,
} from "react-native";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import { COLORS } from "../../../constants";


const Otp = ({ navigation }) => {

  function countDown(value) {
    deger = value;
    oneSecInterval = setInterval(() => {
        setCount(deger);
        deger--;
        if (deger < 0) {
          clearInterval(oneSecInterval);
        }
      },
      1000);
  }

  let deger = 4;

  let textInput = useRef(null);
  let lengthInput = 6;
  const [internalVal, setInternalVal] = useState("");
  const [count, setCount] = useState(deger);
  let oneSecInterval = null;

  const onChangeText = (val) => {
      setInternalVal(val)
    if (val && val.length === 6) {
      navigation.navigate("SignIn");
    }
  };


  useEffect(() => {
    textInput.focus();
  }, []);


  useEffect(() => {
    countDown(count);

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
          <View style={styles.btnContent}>
            <View style={styles.btnCancelContent}>
              <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <Text style={styles.btnCancel}>
                  Vazgeç
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.btnResSendContent(count)}>
              <TouchableOpacity disabled={0 < count}
                                onPress={() => {
                                  countDown(5);
                                }}
              >
                <Text style={styles.btnResend}>
                  Tekrar Gönder ( {count} )
                </Text>
              </TouchableOpacity>
            </View>

          </View>

        </KeyboardAvoidingView>

      </LinearGradient>

    </View>

  );
};

export default Otp;
