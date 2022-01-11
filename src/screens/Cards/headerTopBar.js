import React, { useState } from "react";
import { View } from "react-native";
import styles from "./styles";
import { icons } from "../../../constants";
import HeaderTopBarItem from "./headerTopBarItem";

const HeaderTopBar = () => {
  const [active, setActive] = useState("eye");
  return (

    <View style={styles.headerTabIconBarContent}>
      <HeaderTopBarItem
        styleContent={active == "eye" ? styles.headerTabIconBarTouchOpacityActive : styles.headerTabIconBarTouchOpacityPassive}
        styleImage={active == "eye" ? styles.headerTabIconBarImagePassive : styles.headerTabIconBarImageActive}
        icon={icons.eye}
        cardDetails={"Card details"}
        onPress={() => setActive("eye")} />

      <HeaderTopBarItem
        styleContent={active == "lock" ? styles.headerTabIconBarTouchOpacityActive : styles.headerTabIconBarTouchOpacityPassive}
        styleImage={active == "lock" ? styles.headerTabIconBarImagePassive : styles.headerTabIconBarImageActive}
        icon={icons.lock}
        cardDetails={"Lock card"}
        onPress={() => setActive("lock")} />

      <HeaderTopBarItem
        styleContent={active == "settings" ? styles.headerTabIconBarTouchOpacityActive : styles.headerTabIconBarTouchOpacityPassive}
        styleImage={active == "settings" ? styles.headerTabIconBarImagePassive : styles.headerTabIconBarImageActive}
        icon={icons.settings}
        cardDetails={"Card Settings"}
        onPress={() => setActive("settings")} />

    </View>
  );
};

export default HeaderTopBar;
