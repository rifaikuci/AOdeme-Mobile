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
    flex: 1,
    backgroundColor: COLORS.white,
  },

  homeContent: {
    paddingLeft: SIZES.padding,
    flex: 1,
  },

  renderCardView :{
    width: SIZES.width * 4 / 5,
    marginBottom:10
  },

  renderCardViewImage : {
    width: "96%",
    height: SIZES.height / 5,
    borderRadius: 10
  },

  renderCardViewContent : {
    position: "absolute"
  },

  renderCardViewText1 : {
    marginTop: SIZES.base,
    color: COLORS.black,
    ...FONTS.h2OpenSans,
    marginLeft: 5,
    fontWeight: "bold"
  },

  renderCardViewText2 : {
    color: COLORS.black,
    ...FONTS.body4, marginLeft: 5
  },

  renderCardViewText3 : {
    color: COLORS.black,
    ...FONTS.h3OpenSans,
    marginLeft: 5,
    marginRight: 10
  },

  renderCardViewH1: {
    ...FONTS.h2OpenSans,
    color: COLORS.black,
    fontWeight: "bold"
  },

  renderCardViewContentFlat : {
    marginTop: 5,
  },

  renderCardFooterView :{
    width: SIZES.width /4,
    backgroundColor: COLORS.transparent,
    borderWidth: 1,
    borderColor: COLORS.lightpurple,
    margin: 3,
    borderRadius: 6
  },

  renderCardViewImageFooter : {
    width: SIZES.width /7,
    height: SIZES.height /15,
    margin: 10,
    borderRadius: 50,
  },

  contentViewSubFooter : {
    justifyContent: "center",
    alignItems: "center",

  },

  contentViewFooter   : {
    flexDirection: "column"
  },

  contentViewFooterText:  {
    ...FONTS.body5,
    marginBottom :4
  },

  contentViewFooterSubText:  {
    ...FONTS.body5,
    color: COLORS.gray,
    marginBottom :10
  },







});
