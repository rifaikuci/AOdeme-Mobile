import React from "react";
import {
  SafeAreaView,
  View,
} from "react-native";
import { COLORS, SIZES } from "../../../constants";
import Header from "./header";

const Home = () => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ paddingHorizontal: SIZES.padding * 2 }}>
        <Header />
      </View>
    </SafeAreaView>
  );
};

export default Home;
