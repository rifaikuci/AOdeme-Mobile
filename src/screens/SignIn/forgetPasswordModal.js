import {
  FlatList,
  Image,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import styles from "./styles";
import React from "react";
import { COLORS } from "../../../constants";

const ForgetPasswordModal = (props) => {


  return (
    <Modal animationType="slide"
           transparent={true}
           visible={props.modalVisible}>

      <TouchableWithoutFeedback onPress={() => props.setModalVisible(false)}>
        <View style={styles.modalBody}>

          <View style={styles.modalContent}>
            <View style={styles.modalForgetContentView}>
              <TextInput
                style={styles.forgetPasswordTextInputModal}
                placeholder="Mailinizi Giriniz Lütfen"
                placeholderTextColor={COLORS.lightOrange}
                selectionColor={COLORS.black}
                keyboardType={"email-address"}
              />
            </View>

            <View>

              <TouchableOpacity
                style={styles.forgetPasswordModalButton}
                onPress={() =>  {
                  console.log("Şifreniz Gönderildi")
                  props.setModalVisible(false)
                }}>
                <Text style={styles.forgetPasswordModalButtonText}>Şifrenizi Sıfırlayın</Text>
              </TouchableOpacity>
            </View>

          </View>

        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
export default ForgetPasswordModal;
