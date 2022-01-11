import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../../constants";


export default StyleSheet.create({

  container: {
    flex: 1,
  },

  containerAvoiddingView: {
    flex: 3,
    alignItems: "center",
    marginVertical: SIZES.height / 5,
    padding: 10,
  },

  textTile: {
    marginTop: 50,
    marginBottom: 50,
    fontSize: 16,
  },

  otpItemText: {
    width: 0,
    height: 0,
    color: "#FFF",
  },

  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  cellView: {
    paddingVertical: 11,
    width: 40,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1.5,
  },

  cellText: {
    textAlign: "center",
    fontSize: 15,
  },

  bottomView: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    marginBottom: 50,
    alignItems: "center",
  },

  btnChangeNumber: {
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: "flex-start",
    justifyContent: "center",
  },

  textChange: {
    color: "#234db7",
    alignItems: "center",
    fontSize: 15,
  },

  btnResend: {
    alignItems: "flex-end",
    justifyContent: "center",
    ...FONTS.body4,
    padding: 20,
    color: "white"
  },

  btnCancel: {
    alignItems: "flex-end",
    ...FONTS.body4,
    padding: 20,
    color: "white",
    fontWeight: "bold"
  },

  btnContent: {
    flexDirection: "row",
    marginTop: 30,
  },

  btnCancelContent: {
    margin: 20,
    borderWidth: 1,
    borderColor: COLORS.lightOrange,
    borderRadius: 15,
    fontWeight: "bold"

  },

  btnResSendContent : (value) => ({
    margin: 20,
    borderWidth: 1,
    borderColor: value > 0  ?  COLORS.black: COLORS.lightOrange,
    borderRadius: 15
  }),


});
