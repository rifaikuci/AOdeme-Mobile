import { COLORS, icons } from "../../../constants";
import { Image, Linking, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./styles";

import CheckBox from "@react-native-community/checkbox";


const Form = (props) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <View
      style={styles.signUpFormContent}
    >

      {/* Mail */}
      <View style={styles.signUpFormItem}>
        <Text style={styles.signUpFormText}>Mail</Text>
        <TextInput
          style={styles.signUpFormTextInput}
          placeholder="Mailinizi Giriniz Giriniz"
          placeholderTextColor={COLORS.white}
          selectionColor={COLORS.white}
          keyboardType={"email-address"}
        />
      </View>

      {/* Password */}
      <View style={styles.signUpFormItem}>
        <Text style={styles.signUpFormText}>Password</Text>
        <TextInput
          style={[styles.signUpFormTextInput]}
          placeholder="Enter Password"
          placeholderTextColor={COLORS.white}
          selectionColor={COLORS.white}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity
          style={styles.signUpEyeContent}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Image
            source={showPassword ? icons.disable_eye : icons.eye}
            style={styles.signUpEyeImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Form;
