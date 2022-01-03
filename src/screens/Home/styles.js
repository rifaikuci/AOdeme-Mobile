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
    flex: 1,
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
    margin: SIZES.padding ,
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
    tintColor: COLORS.white,
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
    tintColor: COLORS.black,
  },

  notificationLabel: {
    ...FONTS.h2OpenSans,
    fontWeight: "bold",
    marginLeft: SIZES.padding,
  },

  notificationContent: {
    height: 90,
    borderRadius: 15,
    backgroundColor: COLORS.lightOrange,
    paddingLeft: 20,
    paddingRight: 20,
  },

  notificationContentHeaderText: {
    color: COLORS.black,
    ...FONTS.body3,
    marginBottom: 5,
    marginTop: 15,
  },

  notifactionBodyText: {
    color: COLORS.white,
    ...FONTS.body5,
    lineHeight: 14,
  },

  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
  },

  flatListItemContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: SIZES.padding,
  },

  flatListItemImage: {
    width: 20,
    height: 20,
    tintColor: COLORS.darkgray,
  },

  flatListItemTextContext: {
    flex: 1,
    marginLeft: 10,
  },

  flatListItemTextName: {
    ...FONTS.body3,
  },

  flatListItemTextDate: {
    color: COLORS.gray,
    ...FONTS.body4,
  },

  flatListItemView: {
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
  },

  flatListItemAmountPush: {
    color: COLORS.primary,
    ...FONTS.body4,
    marginRight: 5,
  },

  flatListItemAmountPull: {
    color: COLORS.black,
    ...FONTS.body4,
    marginRight: 5,
  },

  flatListArroundImage: {
    width: 15,
    height: 15,
    tintColor: COLORS.gray,
  },

  flatListBody: {
    marginTop: 6,
    padding: 10,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    flex: 1,
    marginBottom: 60,
  },

  listItemSeperator: {
    width: "100%",
    height: 1,
    backgroundColor: COLORS.lightGray,
  },


});
