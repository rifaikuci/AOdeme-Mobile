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

  homeIconImageHeader: (tintColor) => ({
    width: 15,
    height: 15,
    tintColor: tintColor ? tintColor : COLORS.secondary,
  }),

  imageIconEyeTouchableOpacity: {
    height: 23,
    width: 23,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },

  imageIconEyeContent: {
    marginTop: 5,
    flexDirection: "row",
  },

  imageIcon: {
    width: 23,
    height: 23,
    tintColor: COLORS.black,
  },

  homeView: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  homeContent: {
    paddingHorizontal: SIZES.padding * 2,
  },

  amountText: {
    ...FONTS.h1OpenSans,
    alignSelf: "flex-start",
  },

  amountSubText: {
    ...FONTS.body5,
    color: "rgba(0,0,0,0.4)",
    marginLeft: SIZES.padding * 2,
  },

  headerTabIconBarContent: {
    justifyContent: "space-between",
    marginLeft: SIZES.padding,
    margin: SIZES.padding * 2,
    flexDirection: "row",
    paddingHorizontal: SIZES.padding,
  },

  headerTabIconBarTouchOpacityPassive: {
    width: SIZES.width / 6,
    height: SIZES.width / 6,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: SIZES.width / 12,
    backgroundColor: COLORS.lightGray,
    borderWidth: 0.5,
    borderColor: COLORS.black,
  },

  headerTabIconBarImagePassive: {
    width: SIZES.width / 12,
    height: SIZES.width / 12,
    resizeMode: "contain",
    tintColor: COLORS.black,
  },


  headerTabIconBarTouchOpacityActive: {
    width: SIZES.width / 6,
    height: SIZES.width / 6,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: SIZES.width / 12,
    backgroundColor: COLORS.primary,
    borderWidth: 0.5,
    borderColor: COLORS.white,
  },

  headerTabIconBarImageActive: {
    width: SIZES.width / 12,
    height: SIZES.width / 12,
    resizeMode: "contain",
    tintColor: COLORS.white,
  },
});
