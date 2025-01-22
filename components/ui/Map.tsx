import gStyles from "@/constants/Styles";
import { View } from "react-native";
import { StyleSheet, ViewStyle } from "react-native";
import MapView, { Region } from "react-native-maps";

import ConstMap from "@/constants/Map";

export default function Map({
  initialRegion = ConstMap.initialRegion,
  styles,
}: {
  initialRegion?: Region;
  styles?: { base?: ViewStyle; map?: ViewStyle };
}) {
  return (
    <View style={[lStyles.mapContainer, styles?.base]}>
      <MapView
        initialRegion={initialRegion}
        userLocationAnnotationTitle={"me"}
        showsUserLocation={true}
        showsMyLocationButton
        provider={"google"}
        //loader
        loadingEnabled={true}
        loadingIndicatorColor={"#606060"}
        style={[lStyles.map, styles?.map]}
      />
    </View>
  );
}

const lStyles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    overflow: "hidden",
    borderRadius: 16,
    ...gStyles.border2,
  } as ViewStyle,
  map: {
    flex: 1,
  },
});
