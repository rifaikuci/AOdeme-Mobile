import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import Header from "./header";
import styles from "./styles";
import ImageCard from "./imageCard";
import HeaderTopBar from "./headerTopBar";
import Button from "./button";
import AdditionalCard from "./additionalCard";
import AtmLocatorCard from "./atmLocatorCard";
import MainFooter from "./mainFooter";

const Cards = () => {

  return (
    <SafeAreaView style={styles.homeView}>
      <View style={styles.homeContent}>
        <Header />

        <ScrollView showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}>
          <ImageCard />
          <HeaderTopBar />
          <Button />
          <AdditionalCard />
          <AtmLocatorCard />
          <MainFooter />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Cards;


