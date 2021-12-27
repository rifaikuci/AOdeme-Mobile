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
      {/* Ad */}
      <View style={styles.signUpFormItem}>
        <Text style={styles.signUpFormText}>Ad</Text>
        <TextInput
          style={styles.signUpFormText}
          placeholder="Adınızı Giriniz"
          placeholderTextColor={COLORS.white}
          selectionColor={COLORS.white}
        />
      </View>

      {/* Soyad */}
      <View style={styles.signUpFormItem}>
        <Text style={styles.signUpFormText}>Soyad</Text>
        <TextInput
          style={styles.signUpFormTextInput}
          placeholder="Soyadınızı Giriniz"
          placeholderTextColor={COLORS.white}
          selectionColor={COLORS.white}
        />
      </View>

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

      {/* Phone Number */}
      <View style={styles.signUpFormItem}>
        <Text style={styles.signUpFormText}>Phone Number</Text>

        <View style={{ flexDirection: "row" }}>
          {/* Country Code */}
          <TouchableOpacity
            style={styles.signUpPhoneSelect}
            onPress={() => props.setModalVisible(true)}
          >
            <View style={{ justifyContent: "center" }}>
              <Image
                source={icons.down}
                style={styles.signUpImageDown}
              />
            </View>
            <View style={styles.signUpPhoneSelectContent}>
              <Image
                source={{ uri: props.selectedArea?.flag }}
                resizeMode="contain"
                style={styles.signUpImageDownFlag}
              />
            </View>

            <View style={styles.signUpPhoneSelectContent}>
              <Text style={styles.signUpFormText}>{props.selectedArea?.callingCode}</Text>
            </View>
          </TouchableOpacity>

          {/* Phone Number */}
          <TextInput
            style={[styles.signUpFormTextInput]}
            placeholder="Enter Phone Number"
            placeholderTextColor={COLORS.white}
            selectionColor={COLORS.white}
            keyboardType={"numeric"}
          />
        </View>
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

      <View style={styles.signUpFormItem}>
        <Text style={{ color: "blue" }}
              onPress={() => Linking.openURL("http://google.com")}>
          Gizlilik Anlaşmasını giriniz.
        </Text>
      </View>

      <View style={styles.signUpFormItem}>
        <View style={{ flexDirection: "row" }}>
          <CheckBox
            value={false}
            onCheckColor={COLORS.lime}
            onTintColor={COLORS.lime}
            tintColor={COLORS.white}
          />

          <Text style={styles.marketingPermissionText}
                onPress={() => console.log("deneme")}>
            Pazarlama Bildirimleri almak ister misiniz ?
          </Text>
        </View>

      </View>
    </View>
  );
};

export default Form;
