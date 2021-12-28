import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  Platform, View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

import { COLORS, SIZES } from "../../../constants";
import Logo from "./logo";
import Form from "./form";
import Button from "./button";
import ForgetPasswordText from "./forgetPasswordText";
import ForgetPasswordModal from "./forgetPasswordModal";
import SignUpText from "./signUpText";

const SignIn = ({ navigation }) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (


    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      <LinearGradient
        colors={modalVisible == false ? [COLORS.orange, COLORS.lightOrange] : [COLORS.black, COLORS.white]}
        style={{ flex: 1 }}
      >

        <ScrollView>
          <Logo navigation={navigation} />
          {
            modalVisible == false && <Form />
          }
          {
            modalVisible == false && <Button />
          }
          {
            modalVisible == false && <ForgetPasswordText setModalVisible={setModalVisible} />
          }
          {
            modalVisible == false && <SignUpText navigation={navigation} />
          }


        </ScrollView>
      </LinearGradient>


      <ForgetPasswordModal modalVisible={modalVisible}
                           setModalVisible={setModalVisible} />
    </KeyboardAvoidingView>
  );
};

export default SignIn;
