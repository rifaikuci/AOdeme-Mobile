import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../../constants";


export default StyleSheet.create({

  container: {
    flex: 1,
  },

  headerContent: {
    flexDirection: "row",
    marginVertical: SIZES.padding * 2,
  },

  homeText: {
    ...FONTS.h2,
  },

  homeUserName: {
    ...FONTS.body5,
    color: COLORS.gray,
  },

  centerStyle: {
    alignItems: "center",
    justifyContent: "center",
  },

  homeLeftBackground: {
    height: 30,
    width: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.lightGray,
  },

  homeIconOpacityHeader: (backgroundColor) => ({
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: backgroundColor ? backgroundColor : COLORS.lightGray,
  }),

  homeIconImageHeader : (tintColor) => ({
    width: 15,
    height: 15,
    tintColor: tintColor ? tintColor : COLORS.secondary,
  })


});
