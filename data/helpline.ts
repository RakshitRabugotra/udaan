import Images from "@/constants/Images";

export type HelplineCategory =
  | "Emergency Services"
  | "General Assistance"
  | "Women & Children"
  | "Transport & Traffic"
  | "Cyber & Vigilance"
  | "Health Services";

/**
 * The categories for the helpline numbers, the order of
 * categories decides the order of appearance in the app
 */
export const categories = [
  "Women & Children",
  "Emergency Services",
  "General Assistance",
  "Health Services",
  "Cyber & Vigilance",
  "Transport & Traffic",
];

export const categoryIcons: Record<HelplineCategory, string> = {
  "Women & Children": Images.shield,
  "Emergency Services": Images.emergency,
  "General Assistance": Images.floater,
  "Health Services": Images.ambulance,
  "Cyber & Vigilance": Images.cloudAlert,
  "Transport & Traffic": Images.warningTriangle,
};

export interface HelplineContact {
  territory: string | "national";
  name: string;
  tel: string[];
  type: "HELPLINE" | string;
  category: HelplineCategory;
}

const helplineContacts: HelplineContact[] = [
  {
    territory: "delhi",
    name: "PCR",
    tel: ["112", "011-27491106", "011-27491115"],
    type: "HELPLINE",
    category: "Emergency Services",
  },
  {
    territory: "delhi",
    name: "Eyes and Ears",
    tel: ["14547"],
    type: "HELPLINE",
    category: "General Assistance",
  },
  {
    territory: "delhi",
    name: "Women in distress",
    tel: ["1091"],
    type: "HELPLINE",
    category: "Women & Children",
  },
  {
    territory: "delhi",
    name: "Special Cell (North-Eastern States)",
    tel: ["1093"],
    type: "HELPLINE",
    category: "Women & Children",
  },
  {
    territory: "delhi",
    name: "Missing Persons",
    tel: ["1094", "23241210"],
    type: "HELPLINE",
    category: "Transport & Traffic",
  },
  {
    territory: "delhi",
    name: "Traffic",
    tel: ["1095", "25844444"],
    type: "HELPLINE",
    category: "Transport & Traffic",
  },
  {
    territory: "delhi",
    name: "Vigilance (Anti Corruption Helpline)",
    tel: ["1064"],
    type: "HELPLINE",
    category: "Cyber & Vigilance",
  },
  {
    territory: "delhi",
    name: "For uploading Audio and Video Clips",
    tel: ["9910641064"],
    type: "HELPLINE",
    category: "General Assistance",
  },
  {
    territory: "delhi",
    name: "Railways",
    tel: ["1512"],
    type: "HELPLINE",
    category: "Transport & Traffic",
  },
  {
    territory: "delhi",
    name: "Senior Citizen",
    tel: ["1291"],
    type: "HELPLINE",
    category: "General Assistance",
  },
  {
    territory: "delhi",
    name: "Cyber Complaints",
    tel: ["1930"],
    type: "HELPLINE",
    category: "Cyber & Vigilance",
  },
  {
    territory: "Delhi",
    name: "COVID Helpline Delhi",
    tel: ["011-22307145"],
    type: "HELPLINE",
    category: "Health Services",
  },
  {
    territory: "national",
    name: "Disaster Helpline",
    tel: ["1077"],
    type: "HELPLINE",
    category: "Emergency Services",
  },
  {
    territory: "national",
    name: "Women Helpline",
    tel: ["1091"],
    type: "HELPLINE",
    category: "Women & Children",
  },
  {
    territory: "national",
    name: "Child Helpline",
    tel: ["1098"],
    type: "HELPLINE",
    category: "Women & Children",
  },
  {
    territory: "national",
    name: "Doorstep Delivery",
    tel: ["1076"],
    type: "HELPLINE",
    category: "General Assistance",
  },
  {
    territory: "national",
    name: "Police",
    tel: ["100"],
    type: "HELPLINE",
    category: "Emergency Services",
  },
  {
    territory: "national",
    name: "Fire & Rescue",
    tel: ["101"],
    type: "HELPLINE",
    category: "Emergency Services",
  },
  {
    territory: "national",
    name: "Ambulance",
    tel: ["102"],
    type: "HELPLINE",
    category: "Emergency Services",
  },
  {
    territory: "national",
    name: "NGMS",
    tel: ["155271"],
    type: "HELPLINE",
    category: "General Assistance",
  },
  {
    territory: "national",
    name: "COVID Helpline Toll Free",
    tel: ["1075"],
    type: "HELPLINE",
    category: "Health Services",
  },
];

export default helplineContacts;
