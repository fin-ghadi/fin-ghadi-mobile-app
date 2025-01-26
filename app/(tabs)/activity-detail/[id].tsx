import React from "react";
import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
import ActivityDetail from "../../../components/activityDetail"; // Adjust the import path as needed

// Static activity data
const activities = [
  {
    id: "1",
    title: "Hiking Adventure",
    description:
      "Join us for an exciting hiking adventure through the scenic trails of the mountains. Suitable for all skill levels.",
    location: {
      lat: 37.78825,
      lng: -122.4324,
    },
  },
  {
    id: "2",
    title: "Beach Yoga",
    description:
      "Relax and rejuvenate with a yoga session on the beach. Perfect for beginners and experienced yogis alike.",
    location: {
      lat: 34.0195,
      lng: -118.4912,
    },
  },
];

const ActivityDetailScreen = () => {
  // Get the `id` from the URL params
  const { id } = useLocalSearchParams<{ id: string }>();

  // Find the activity with the matching ID
  const activity = activities.find((act) => act.id === id);

  

  // If no activity is found, display a message
  if (!activity) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Activity not found</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {/* Pass `id` and `activity` as props to the `ActivityDetail` component */}
      <ActivityDetail  activity={activity} />
    </View>
  );
};

export default ActivityDetailScreen;