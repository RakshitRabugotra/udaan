import * as Location from "expo-location";
import { Share } from "react-native";

// Simplify the type
export type LocationObject = Location.LocationObject

interface LocationCallbacks {
  onSuccess?: <T,>(payload: T) => void;
  onError?: (error: Error) => void;
}

// Function to fetch the user's location
export const fetchLocation = async ({
  options,
  onSuccess,
  onError,
}: {
  options?: Location.LocationOptions;
} & LocationCallbacks) => {
  let result = null;
  try {
    // Request foreground location permissions
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      throw new Error("Location permission not granted");
    }

    // Get the current position
    result = await Location.getCurrentPositionAsync(options);

    // Execute the success callback with the location data
    if(onSuccess) onSuccess(result);
  } catch (error) {
    // Execute the error callback with the error object
    if(onError) onError(error as Error);
  } finally {
    return result;
  }
};

// Function to share the user's location
export const shareLocation = async ({
  location,
  onSuccess,
  onError,
}: { location: Location.LocationObject | null } & LocationCallbacks) => {
  try {
    // If the location is null, then fetch the location
    const location = await fetchLocation({});
    if(!location) throw new Error("Location couldn't be found");
    
    // Share the Google Maps link using the user's location
    const result = await Share.share({
      message: `Check out my location: https://www.google.com/maps/search/?api=1&query=${location.coords.latitude},${location.coords.longitude}`,
    });

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        console.log("Shared with activity type of", result.activityType);
      } else {
        console.log("Shared successfully");
      }
      // Invoke the success callback
      if (onSuccess) onSuccess(null);
    } else if (result.action === Share.dismissedAction) {
      console.log("Share dismissed");
    }
  } catch (error) {
    console.error("Error sharing location:", error);
    // Invoke the error callback
    if (onError) onError(error as Error);
  }
};
