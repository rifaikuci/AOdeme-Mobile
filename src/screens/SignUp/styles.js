import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../../constants";


export default StyleSheet.create({

  renderItem: {
    padding: SIZES.padding,
    flexDirection: "row",
  },

  renderItemImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },

  renderItemText: {
    ...FONTS.body4,
  },

  modalBody: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  modalContent: {
    height: 400,
    width: SIZES.width * 0.8,
    backgroundColor: COLORS.lightGreen,
    borderRadius: SIZES.radius,
  },

  modalFlatList: {
    padding: SIZES.padding * 2,
    marginBottom: SIZES.padding * 2,
  },

  signUpContent: {
    margin: SIZES.padding * 3,
  },

  signUpButtom: {
    height: 60,
    backgroundColor: COLORS.black,
    borderRadius: SIZES.radius / 1.5,
    alignItems: "center",
    justifyContent: "center",
  },

  signUpButtomText: {
    color: COLORS.white,
    ...FONTS.h3,
  },

  signUpFormContent: {
    marginTop: SIZES.padding * 3,
    marginHorizontal: SIZES.padding * 3,
  },

  signUpFormItem: {
    marginTop: SIZES.padding * 3,
  },

  signUpFormText: {
    color: COLORS.lightGreen,
    ...FONTS.body3,
  },

  signUpFormTextInput: {
    marginVertical: SIZES.padding,
    borderBottomColor: COLORS.white,
    borderBottomWidth: 1,
    height: 40,
    color: COLORS.white,
    ...FONTS.body3,
    flex: 1,
  },

  signUpPhoneSelect: {
    width: 100,
    height: 50,
    marginHorizontal: 5,
    borderBottomColor: COLORS.white,
    borderBottomWidth: 1,
    flexDirection: "row",
    ...FONTS.body2,
  },

  signUpImageDown: {
    width: 10,
    height: 10,
    tintColor: COLORS.white,
  },

  signUpImageDownFlag: {
    width: 30,
    height: 30,
  },


  signUpPhoneSelectContent: {
    justifyContent: "center",
    marginLeft: 5,
  },

  signUpEyeContent: {
    position: "absolute",
    right: 0,
    bottom: 10,
    height: 30,
    width: 30,
  },

  signUpEyeImage: {
    height: 20,
    width: 20,
    tintColor: COLORS.white,
  },

  marketingPermissionText: {
    color: COLORS.white,
    ...FONTS.body4,
    marginLeft: 10,
    paddingTop: 2,
  },

  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SIZES.padding * 6,
    paddingHorizontal: SIZES.padding * 2,
  },

  headerImage: {
    width: 20,
    height: 20,
    tintColor: COLORS.white,
  },

  headerText: {
    marginLeft: SIZES.padding * 1.5,
    color: COLORS.white,
    ...FONTS.h4,
  },

  logoContent: {
    marginTop: SIZES.padding * 5,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  
});
