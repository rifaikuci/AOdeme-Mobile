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
    flex: 1,
  },

  homeSubContent: {
    flex: 4,
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
    margin: SIZES.padding,
    flexDirection: "row",
    paddingHorizontal: SIZES.padding,
  },

  itemImageBackground: {
    height: 150,
    width: 200,
    paddingVertical: 24,
    paddingHorizontal: 12,
    justifyContent: "flex-end",
  },

  itemImageBackgroundStyle: {
    borderRadius: 6,
  },

  itemMainText: {
    color: COLORS.black,
    fontWeight: "bold", ...FONTS.body1OpenSans,
    marginTop: 10,
    paddingHorizontal: 30,
  },

  itemAmountText: {
    color: COLORS.black,
    ...FONTS.body1OpenSans,
    paddingHorizontal: 30,
    marginTop: 5,
    marginBottom: 20,
  },

  flatListMainContent: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  flatListLockImage: {
    width: SIZES.width / 15,
    height: SIZES.width / 15,
    tintColor: COLORS.black,
  },

  flatListLockText: {
    marginLeft: 10,
    ...FONTS.body4,
    fontWeight: "bold",
  },

  flatListFooterBackground: {
    height: 200,
    paddingHorizontal: SIZES.padding * 2,
    margin: SIZES.padding * 2,
    marginBottom: 80

  },

  flatListFooterBackgroundImageStyle: {
    borderRadius: 12,

  },

  flatListFooterMainContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  flatListFooterMainText: {
    margin: 10,
    ...FONTS.body2,
    color: COLORS.white,
  },

  flatListFooterLeftImage: {
    width: SIZES.width / 15,
    height: SIZES.width / 15,
    tintColor: COLORS.white,
    marginTop: 10,
  },

  flatListFooterSubText: {
    marginLeft: 10,
    ...FONTS.body4, color: COLORS.white,
  },


});
