import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

type ActivityCardProps = {
  id: string; // The ID of the activity (used for navigation)
  name: string; // The name of the activity
  address: string; // The address of the activity
  rating: number; // The rating of the activity (e.g., 4.5)
};

const ActivityCard: React.FC<ActivityCardProps> = ({
  id,
  name,
  address,
  rating,
}) => {
  const router = useRouter();

  // Handle card press
  const handlePress = () => {
    router.push(`/activity-detail/${id}`); // Navigate to the activity detail page
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.card}>
      {/* Activity Name */}
      <Text style={styles.name}>{name}</Text>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Activity Address */}
      <Text style={styles.address}>{address}</Text>

      {/* Activity Rating */}
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>{rating}</Text>
        <Text style={styles.ratingLabel}>/5</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "45%", // Set the card to take up 45% of the width (to fit 2 cards per row)
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    marginBottom: 16,
    marginHorizontal: "2.5%", // Space between cards
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    padding: 16, // Add padding inside the card
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
    marginBottom: 8, // Space between name and divider
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#DDDDDD", // Light gray color for the divider
    marginVertical: 8, // Space between the name and address
  },
  address: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    marginBottom: 8, // Space between address and rating
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  ratingText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFA500", // Orange color for the rating
  },
  ratingLabel: {
    fontSize: 14,
    color: "#777",
    marginLeft: 4, // Space between rating and "/5"
  },
});

export default ActivityCard;
