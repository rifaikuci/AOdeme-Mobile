import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../constants";


export default StyleSheet.create({

  bottomTabViewContent: {
    flex: 1,
    alignItems: "center",
  },

  bottomTabViewSubContent: {
    flexDirection: "row",
    position: "absolute",
    top: 0,
  },

  bottomTabBackgroundColor: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  tabsActiveStyle: {
    top: -22.5,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.orange,
    shadow: {
      shadowColor: COLORS.primary,
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
  },

  tabsInActive: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    backgroundColor: COLORS.white,
  },

  styleCustomTab : {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 30,
    backgroundColor: COLORS.white
  },

  tabNavigation : {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "transparent",
    elevation: 0,
  },

  bottomTabStyle : (focused)  => ({
    width: 25,
    height: 25,
    tintColor: focused ? COLORS.white : COLORS.secondary,
  }),




});
