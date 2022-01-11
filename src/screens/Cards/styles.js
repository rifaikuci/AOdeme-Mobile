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

  homeView: {
    backgroundColor: COLORS.white,
  },

  homeContent: {
    paddingLeft: SIZES.padding,
    paddingRight: SIZES.padding,
  },

  imageCardContent: {
    width: SIZES.width,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: COLORS.transparent,
    marginRight: 200,
  },

  imageCardImage: {
    width: SIZES.width,
    height: SIZES.width / 2,
    resizeMode: "contain",
  },


  imageCardText: {
    margin: 10,
    ...FONTS.body2,
  },

  imageCardSubText: {
    ...FONTS.body3,
    marginBottom: 30,
  },

  headerTabIconBarContent: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: SIZES.padding,
    marginHorizontal: SIZES.padding * 2,
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

  headerTopIconText: {
    paddingVertical: 5,
    ...FONTS.body4,
  },

  touchableOpacityCard: {
    marginRight: SIZES.padding * 2,
  },

  addtoWalletContent: {
    width: "100%",
    padding:15,
    backgroundColor: "black",
    borderRadius: 7.5,
    alignItems: "center"
  },

  addtoWalletBody : {
    alignItems:"center",
    flexDirection: "row",
  },

  addtoWalletText : {
    color: "white",
    ...FONTS.body1OpenSans,
    fontSize: 15,
    paddingLeft: 5
  },

  debitCard: {
    height: 30,
    width: 30,
    resizeMode: "stretch"
  },

  additionalWalletContent: {
    width: "100%",
    padding:20,
    backgroundColor: COLORS.lightpurple,
    borderRadius: 10,
    alignItems: "flex-start",
    marginVertical: 10
  },

  additionalWalletBody : {
    alignItems:"center",
    flexDirection: "row",
  },

  additionalWalletText : {
    color: "black",
    ...FONTS.body1OpenSans,
    fontSize: 16,
    paddingLeft: 5,
    fontWeight: "200"
  },

  additionalCardImage: {
    height: 30,
    width: 30,
    resizeMode: "cover",
    marginRight: 30
  },

  atmWalletContent: {
    width: "100%",
    padding:20,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: COLORS.gray
  },

  atmWalletBody : {
    alignItems:"center",
    flexDirection: "row",
    flex:4
  },

  atmWalletText : {
    color: "black",
    ...FONTS.body1OpenSans,
    fontSize: 16,
    paddingLeft: 5,
    fontWeight: "500"
  },

  atmCardImage: {
    height: 30,
    width: 30,
    resizeMode: "cover",
    marginRight: 30
  },

  textsContentSubText: {
    color: "black",
    ...FONTS.body1OpenSans,
    fontSize: 12,
    paddingLeft: 5,
    fontWeight: "100"
  },

  atmImageNext : {
    height: 30,
    width: 30,
    resizeMode: "cover",
  },

  flatListMainContent: {
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
    marginTop: 20
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

  mainFooterContent :{
    marginTop: 20,
    marginBottom: 220
  }


});
