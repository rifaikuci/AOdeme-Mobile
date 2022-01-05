import React, { useEffect, useState } from "react";
import {
  Image, LogBox, SafeAreaView, Text, TouchableOpacity, View,
} from "react-native";
import { icons } from "../../../constants";
import Header from "./header";
import styles from "./styles";
import Main from "./main";

const Spaces = () => {

  const [eyeClose, setEyeClose] = useState(true);
  const [icon, setIcon] = useState(icons.eye);

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);
  const onClickEye = () => {
    setEyeClose(!eyeClose);
    if (eyeClose) setIcon(icons.closedEye); else setIcon(icons.eye);
  };


  return (
    <SafeAreaView style={styles.homeView}>
      <View style={styles.homeContent}>

        <Header />
        <View>
          <Text style={styles.amountText}>€ 668,02</Text>
        </View>

        <View style={styles.imageIconEyeContent}>
          <TouchableOpacity
            onPress={onClickEye}
            style={styles.imageIconEyeTouchableOpacity}>
            <Image
              source={eyeClose ? icons.eye : icons.closedEye}
              style={styles.imageIcon} />
          </TouchableOpacity>

          <Text style={styles.amountSubText}>
            Current Balance
          </Text>
        </View>
      </View>
      <View style={styles.homeSubContent}>

        <Main />

      </View>
    </SafeAreaView>);
};

export default Spaces;
