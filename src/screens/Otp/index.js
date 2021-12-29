import React, { useEffect, useRef, useState } from "react";
import {
  KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View,
} from "react-native";
import styles from "./styles";

const Otp = ({ navigation }) => {

  let textInput = useRef(null);
  let clockCall = null;
  let lengthInput = 6;
  let defaultCountDown = 30;
  const [internalVal, setInternalVal] = useState("");
  const [countDown, setCountDown] = useState(defaultCountDown);
  const [enableResend, setEnableResend] = useState(false);

  const onChangeText = (val) => {
    setInternalVal(val)
  };

  useEffect(() => {
    textInput.focus()
  }, [])

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.containerAvoiddingView}
                            behavior={"padding"}
                            keyboardVerticalOffset={50}>
        <Text style={styles.textTile}>Input your OTP code sent via SMS</Text>
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
            {
              Array(lengthInput).fill().map((data, index) => (
                <View key = {index}
                  style={styles.cellView }>
                  <Text style={styles.cellText}
                        onPress={() => textInput.focus()}>
                    {internalVal && internalVal.length > 0 ? internalVal[index] : ""}
                  </Text>
                </View>
              ))
            }

          </View>
        </View>

      </KeyboardAvoidingView>
    </View>
  );
};

export default Otp;
