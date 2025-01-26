import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

type ActivityCardProps = {
  image: any; // The image for the activity
  title: string; // The activity title
  description: string; // A short description of the activity
};

const ActivityCard: React.FC<ActivityCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <View style={styles.card}>
      {/* Activity Image */}
      <Image source={image} style={styles.image} />

      {/* Divider between the image and the bottom content */}
      <View style={styles.divider} />

      {/* Activity Title and Description */}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
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
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 120, // Adjust the height of the image
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    resizeMode: "cover", // Adjust the image size properly
  },
  // Divider style
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#DDDDDD", // Light gray color for the divider
    marginVertical: 8, // Space between the image and the content
  },
  content: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 16, // Slightly smaller font size
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
  },
  description: {
    fontSize: 12, // Smaller font size for description
    color: "#777",
    textAlign: "center",
  },
});

export default ActivityCard;
