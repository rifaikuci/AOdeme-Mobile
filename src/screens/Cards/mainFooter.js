import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { icons, images } from "../../../constants";
import React from "react";


const MainFooter = () => {

  return (

    <View style={styles.mainFooterContent}>
      <View
        style={[styles.flatListMainContent, styles.homeContent]}>
        <Image source={icons.lock}
               style={styles.flatListLockImage}
        />
        <Text style={styles.flatListLockText}>
          Go premium to enjoy Spaces
        </Text>
      </View>
      <TouchableOpacity>
        <View>

          <ImageBackground source={images.bgDark}
                           resizeMode={"cover"}
                           style={styles.flatListFooterBackground}
                           imageStyle={styles.flatListFooterBackgroundImageStyle}>

            <View style={styles.flatListFooterMainContent}>
              <Text style={styles.flatListFooterMainText}>
                18-gram metal card ?
              </Text>
              <Image source={icons.next}
                     style={styles.flatListFooterLeftImage} />
            </View>

            <Text style={styles.flatListFooterSubText}>
              {"Explore N26 METAL and experienec the ultimate in premium banking"}
            </Text>

          </ImageBackground>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MainFooter;
