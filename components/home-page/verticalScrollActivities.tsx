import React from "react";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import ActivityCard from "@/components/home-page/activityCard"; // Adjust the import path if needed

type Activity = {
    id: string; // Unique ID of the activity
  image: any; // Image for the activity
  title: string; // Title of the activity
  description: string; // Description of the activity
};

type VerticalScrollActivitiesProps = {
  activities: Activity[]; // Array of activity objects
};

const VerticalScrollActivities: React.FC<VerticalScrollActivitiesProps> = ({
  activities,
}) => {
  const screenWidth = Dimensions.get('window').width; // Get the screen width
  const cardWidth = screenWidth ; // Card width with padding (16px from both sides)

  return (
    <View style={styles.container}>
 
      <ScrollView showsVerticalScrollIndicator={false}>
        {activities.map((activity, index) => (
          <View key={index} style={styles.row}>
            <View style={[styles.cardContainer, { width: cardWidth }]}>
              <ActivityCard
                id={activity.id}
                image={activity.image}
                title={activity.title}
                description={activity.description}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    width: "100%", // Full width for the row
    alignItems: "center", // Center the card horizontally
    marginBottom: 16, // Add space between rows
    marginInlineStart:55
  },
  cardContainer: {
    width: "100%", // Card takes full width of the row (minus padding)
  },
});

export default VerticalScrollActivities;