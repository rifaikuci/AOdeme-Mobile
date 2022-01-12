import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import Header from "./header";
import styles from "./styles";
import ScrollableCard from "./scrollableCard";
import Footer from "./footer";
import { dummyData } from "../../../constants";

const Explore = () => {

  return (
    <SafeAreaView style={styles.homeView}>
      <View style={styles.homeContent}>
        <Header />

        <ScrollView showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}>

          <ScrollableCard data={dummyData.tecnologies} headerLabel={"Teknolojiler"}/>
          <ScrollableCard data={dummyData.electronics} headerLabel={"Elektronikler"}/>
          <ScrollableCard data={dummyData.trendler} headerLabel={"Trendler"}/>
          <Footer data={dummyData.perks}/>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Explore;
