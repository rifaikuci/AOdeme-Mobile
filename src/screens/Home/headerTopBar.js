import React, { useState } from "react";
import { View } from "react-native";
import styles from "./styles";
import { icons } from "../../../constants";
import HeaderTopBarItem from "./headerTopBarItem";

const HeaderTopBar = () => {
  const [active, setActive] = useState("plus");
  return (

    <View style={styles.headerTabIconBarContent}>
      <HeaderTopBarItem
        styleContent={active == "plus" ? styles.headerTabIconBarTouchOpacityActive : styles.headerTabIconBarTouchOpacityPassive}
        styleImage={active == "plus" ? styles.headerTabIconBarImagePassive : styles.headerTabIconBarImageActive}
        icon={icons.plus}
        onPress={() => setActive("plus")} />

      <HeaderTopBarItem
        styleContent={active == "next" ? styles.headerTabIconBarTouchOpacityActive : styles.headerTabIconBarTouchOpacityPassive}
        styleImage={active == "next" ? styles.headerTabIconBarImagePassive : styles.headerTabIconBarImageActive}
        icon={icons.next}
        onPress={() => setActive("next")} />

      <HeaderTopBarItem
        styleContent={active == "scheduling" ? styles.headerTabIconBarTouchOpacityActive : styles.headerTabIconBarTouchOpacityPassive}
        styleImage={active == "scheduling" ? styles.headerTabIconBarImagePassive : styles.headerTabIconBarImageActive}
        icon={icons.scheduling}
        onPress={() => setActive("scheduling")} />


      <HeaderTopBarItem
        styleContent={active == "charts" ? styles.headerTabIconBarTouchOpacityActive : styles.headerTabIconBarTouchOpacityPassive}
        styleImage={active == "charts" ? styles.headerTabIconBarImagePassive : styles.headerTabIconBarImageActive}
        icon={icons.charts}
        onPress={() => setActive("charts")} />
    </View>
  );
};

export default HeaderTopBar;
