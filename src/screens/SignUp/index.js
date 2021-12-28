import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

import { COLORS } from "../../../constants";
import Header from "./header";
import Logo from "./logo";
import Form from "./form";
import Button from "./button";
import AreaCodeModal from "./areaCodeModal";


const SignUp = ({navigation}) => {

  const [areas, setAreas] = React.useState([]);
  const [selectedArea, setSelectedArea] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);

  React.useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then(response => response.json())
      .then(data => {
        let areaData = data.map(item => {
          return {
            code: item.alpha2Code,
            name: item.name,
            callingCode: `+${item.callingCodes[0]}`,
            flag: item.flags.png,
          };
        });

        setAreas(areaData);

        if (areaData.length > 0) {
          let defaultData = areaData.filter(a => a.code == "US");

          if (defaultData.length > 0) {
            setSelectedArea(defaultData[0]);
          }
        }
      });
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      <LinearGradient
        colors={[COLORS.orange, COLORS.lightOrange]}
        style={{ flex: 1 }}
      >
        <Header navigation = {navigation} />
        <Logo />
        <ScrollView>

          <Form setModalVisible={setModalVisible}
                selectedArea={selectedArea} />
          <Button />
        </ScrollView>


      </LinearGradient>
      <AreaCodeModal areas={areas}
                     setModalVisible={setModalVisible}
                     modalVisible={modalVisible}
                     selectedArea={selectedArea}
                     setSelectedArea={setSelectedArea} />
    </KeyboardAvoidingView>
  );
};

export default SignUp;
