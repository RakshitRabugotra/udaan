import { Stack } from "expo-router";
import { Tabs } from "react-native-collapsible-tab-view";
import { useState } from "react";
import {
  Linking,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
// Custom Components
import { ThemedView } from "@/components/ThemedView";
// Constants/Configs
import { Colors } from "@/constants/Colors";
import helplineContacts, { HelplineContact } from "@/data/helpline";
// Custom Utility
import { groupBy } from "@/util/array";

/**
 * The height of header in the tabs container
 */
const HEADER_HEIGHT = 250;

/**
 * Group the helpline contacts by the
 * category to show in the tabs
 */
const groupedData = groupBy(helplineContacts, "category");

export default function App() {
  const [selectedContact, setSelectedContact] =
    useState<HelplineContact | null>(null);

  const handleCall = (number: string) => {
    const phoneURL = `tel:${number}`;
    Linking.openURL(phoneURL).catch((err) =>
      console.error("Error opening dialer:", err)
    );
    setSelectedContact(null);
  };

  const handleContactClick = (selected: HelplineContact) => {
    // If the item only contains 1 contact, dial right away
    if (selected.tel.length === 1) return handleCall(selected.tel[0]);
    else {
      // Open the selection modal
      setSelectedContact((prev) => selected);
    }
  };

  const renderContact = ({ item }: { item: HelplineContact }) => (
    <TouchableOpacity
      style={styles.contactItem}
      onPress={() => handleContactClick(item)}
    >
      {/* <Avatar name={item.name} useInitials /> */}
      <Text style={styles.contactName}>{item.name}</Text>
      <Text style={styles.contactTel}>Tel: {item.tel.join(", ")}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: "Helpline Directory",
        }}
      />
      <ThemedView style={styles.container}>
        <Tabs.Container
          containerStyle={{
            padding: 0,
            margin: 0,
          }}
          headerContainerStyle={{
            margin: 0,
            paddingVertical: 12,
          }}
          tabBarHeight={HEADER_HEIGHT}
        >
          {Object.entries(groupedData)
            .slice(0, 3)
            .map(([category, contacts], index) => (
              <Tabs.Tab
                label={({ label }) => (
                  <View
                    style={{
                      flex: 1,
                      minHeight: 100,
                      borderRadius: 999,
                      aspectRatio: "1/1",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {/* <Image
                style={{
                  width: 64,
                  height: 64
                }}
                source={categoryIcons[category as HelplineCategory]}
                contentFit="cover"
                transition={1000}
              /> */}
                    <Text
                      style={{
                        color: Colors.light.text,
                        fontSize: 16,
                        fontWeight: 500,
                      }}
                    >
                      {category}
                    </Text>
                  </View>
                )}
                name={category[0].toUpperCase() + category.slice(1)}
                key={index + category}
              >
                <Tabs.FlatList
                  contentContainerStyle={{
                    marginTop: 24,
                  }}
                  data={contacts}
                  renderItem={renderContact}
                  keyExtractor={(contact, index) => `${contact.name}-${index}`}
                />
              </Tabs.Tab>
            ))}
        </Tabs.Container>

        {/* <Modal
        visible={!!selectedContact}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setSelectedContact(null)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{selectedContact?.name}</Text>
              <Button title="Close" onPress={() => setSelectedContact(null)} />
            </View>
            {selectedContact?.tel.map((number, index) => (
              <TouchableOpacity
                key={index}
                style={styles.numberButton}
                onPress={() => handleCall(number)}
              >
                <Text style={styles.numberText}>{number}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal> */}
      </ThemedView>
    </>
  );
}

// const Avatar = ({name, useInitials, } :{ name: string, useInitials?: boolean}) => {
//   return <Vi
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  territorySection: {
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  territoryTitle: {
    marginLeft: -12,
    borderLeftColor: Colors.primary[600],
    paddingLeft: 4,
    borderLeftWidth: 10,
    borderRadius: 8,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: Colors.tonalSurface[600],
  },
  contactItem: {
    margin: 8,
    width: "auto",
    padding: 12,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    marginBottom: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  contactName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  contactTel: {
    fontSize: 14,
    color: "gray",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: 300,
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 12,
    padding: 24,
  },
  modalTitle: {
    width: "100%",
    textAlign: "left",
    fontSize: 18,
    fontWeight: 500,
    marginBottom: 15,
  },
  modalHeader: {
    padding: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  numberButton: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#007BFF",
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  numberText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});
