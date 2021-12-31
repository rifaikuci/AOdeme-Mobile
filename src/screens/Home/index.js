import React, { useState } from "react";
import {
  Image, SafeAreaView, Text, TouchableOpacity, View,
} from "react-native";
import { icons } from "../../../constants";
import Header from "./header";
import styles from "./styles";
import HeaderTopBar from "./headerTopBar";

const Home = () => {

  const [eyeClose, setEyeClose] = useState(true);
  const [icon, setIcon] = useState(icons.eye);
  const onClickEye = () => {
    setEyeClose(!eyeClose);
    if (eyeClose) setIcon(icons.closedEye); else setIcon(icons.eye);
  };


  return (<SafeAreaView style={styles.homeView}>
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
      <HeaderTopBar />
    </View>
  </SafeAreaView>);
};

export default Home;
