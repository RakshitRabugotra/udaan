import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { Colors } from "./Colors";

type NamedStyles<T> = {[P in keyof T]: ViewStyle | TextStyle | ImageStyle};

const gStyles: NamedStyles<any> = {
  boxWithShadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },

  // Border utilities
  border2: {
    borderColor: Colors.surface[300] + "33",
    borderWidth: 1,
    borderStyle: 'solid'
  },
}
export default gStyles;