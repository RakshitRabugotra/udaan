import * as SMS from "expo-sms";
import { LocationObject } from "./location";

export interface UserData {
  name: string;
  email: string;
  emergency: string[];
}

export const sendSOS = async ({
  userData,
  location,
}: {
  userData: string;
  location: LocationObject;
}) => {
  try {
    // Parse the user data
    const transformedData = JSON.parse(userData);
    const { name, email, emergency } = transformedData as UserData;

    // Check if the SMS service is available
    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
      // Send the SMS to emergency contacts
      const { result } = await SMS.sendSMSAsync(
        emergency,
        fillSOSInfo(name, email, location),
        {}
      );

      if (result === "sent") {
        console.log("SOS message sent successfully.");
      } else {
        console.log("Failed to send SOS message. Result:", result);
      }
    } else {
      console.log("SMS service is not available on this device.");
    }
  } catch (error) {
    console.error("An error occurred while sending SOS:", error);
  }
};

const fillSOSInfo = (
  name: string,
  email: string,
  location: LocationObject
) => `🚨 SOS Alert 🚨
Hi, I am ${name} (${email}). I need immediate assistance. Please check my current location:
Google Maps: https://www.google.co.in/maps/@${location.coords.latitude},${location.coords.longitude},12z

Coordinates:
Latitude: ${location.coords.latitude}
Longitude: ${location.coords.longitude}`;
