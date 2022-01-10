import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import Header from "./header";
import styles from "./styles";
import ScrollableCard from "./scrollableCard";
import Footer from "./footer";

const Explore = () => {

  return (
    <SafeAreaView style={styles.homeView}>
      <View style={styles.homeContent}>
        <Header />

        <ScrollView showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}>

          <ScrollableCard headerLabel={"Teknolojiler"}/>
          <ScrollableCard headerLabel={"Elektronikler"}/>
          <ScrollableCard headerLabel={"Trendler"}/>
          <Footer />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Explore;
