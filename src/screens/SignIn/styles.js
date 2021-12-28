import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../../constants";


export default StyleSheet.create({

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

  forgetPasswordText: {
    color: "#0000FF",
    fontWeight: "bold",
    padding: 5,
    ...FONTS.body3,
  },

  modalBody: {
    alignItems: "center",
    marginTop: SIZES.height / 4
  },

  modalContent: {
    height: 200,
    width: SIZES.width * 0.9,
    backgroundColor: COLORS.lightpurple,
    borderRadius: SIZES.radius,
    margin: 5,
  },

  modalForgetContentView : {
      margin: SIZES.padding * 2,
      marginTop: SIZES.padding * 5,
  },


  forgetPasswordTextInputModal : {
    marginTop: SIZES.padding,
    borderColor: COLORS.black,
    borderWidth: 1,
    padding: 10,
    borderRadius: 25
  },

  forgetPasswordModalButtonText : {
    ...FONTS.body3,
    color: COLORS.white

  },

  forgetPasswordModalButton : {
    borderRadius: SIZES.radius / 1.5,
    padding: SIZES.padding,
    margin: SIZES.padding * 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.orange
  },

  signUpText: {
    color: COLORS.lightGray,
    fontWeight: "bold",
    padding: 5,
    ...FONTS.body3,
  },
});
