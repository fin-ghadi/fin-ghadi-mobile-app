import React from "react";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import ActivityCard from "@/components/home-page/activityCard"; // Adjust the import path if needed

type ActivityCardProps = {
  id: string; // The ID of the activity (used for navigation)
  name: string; // The name of the activity
  address: string; // The address of the activity
  rating: number; // The rating of the activity (e.g., 4.5)
};

type HorizontalScrollActivitiesProps = {
  activities: ActivityCardProps[]; // Array of activity objects
};

const HorizontalScrollActivities: React.FC<HorizontalScrollActivitiesProps> = ({
  activities,
}) => {
  const screenWidth = Dimensions.get("window").width; // Get the screen width
  const cardWidth = screenWidth / 1.2; // Adjust card width as a percentage of the screen width

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false} // Remove the scroll indicator
        contentContainerStyle={styles.scrollContainer} // Optional: control the inner container's padding/margin
      >
        {activities.map((activity, index) => (
          <View
            key={index}
            style={[styles.cardContainer, { width: cardWidth }]}
          >
            <ActivityCard
              id={activity.id}
              address={activity.address}
              name={activity.name}
              rating={activity.rating}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Layout the activities horizontally
    justifyContent: "center",
    alignItems: "center", // Optional: Vertically align items in the center
  },
  scrollContainer: {
    paddingHorizontal: 0, // No padding on the sides
  },
  cardContainer: {
    justifyContent: "center", // Ensure the card is centered
    alignItems: "center", // Ensure the content is centered
    marginHorizontal: -70, // Control horizontal margin between cards
  },
});

export default HorizontalScrollActivities;
