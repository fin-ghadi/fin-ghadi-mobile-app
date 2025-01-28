import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import WeatherCard from "@/components/home-page/weatherCard";
import VerticalScrollActivities from "@/components/home-page/verticalScrollActivities";
import HorizantalScrollActivities from "@/components/home-page/HorizantalScrollActivities";

type ActivityCardProps = {
  id: string; // The ID of the activity (used for navigation)
  name: string; // The name of the activity
  address: string; // The address of the activity
  rating: number; // The rating of the activity (e.g., 4.5)
};

export default function HomeScreen() {
  const navigation = useNavigation();

  const recommendedActivities: ActivityCardProps[] = [
    {
      id: "1",
      name: "Hiking Adventure",
      address: "Mountain Peak, Nature Valley",
      rating: 4.8,
    },
    {
      id: "2",
      name: "City Museum",
      address: "Downtown Avenue, City Center",
      rating: 4.5,
    },
    {
      id: "3",
      name: "Art Gallery Tour",
      address: "Art District, Street 12",
      rating: 4.7,
    },
    {
      id: "4",
      name: "Beach Volleyball",
      address: "Sunny Beach, Coastline Road",
      rating: 4.9,
    },
  ];

  const otherActivities: ActivityCardProps[] = [
    {
      id: "5",
      name: "Cooking Workshop",
      address: "Chef's Hub, Gourmet Lane",
      rating: 4.6,
    },
    {
      id: "6",
      name: "Yoga Retreat",
      address: "Zen Gardens, Peace Boulevard",
      rating: 4.4,
    },
    {
      id: "7",
      name: "Rock Climbing",
      address: "Adventure Park, Hill Top",
      rating: 4.8,
    },
    {
      id: "8",
      name: "Photography Walk",
      address: "Historic Town, Old Street",
      rating: 4.7,
    },
  ];

  return (
    <View style={styles.container}>
      {/* Greeting Section */}
      <View style={styles.greetingContainer}>
        <Text style={styles.greetingTitle}>Welcome Back, Simo! 🌟</Text>
        <Text style={styles.greetingQuote}>
          "Adventure is worthwhile in itself. Every journey opens new horizons."
        </Text>
        <Text style={styles.greetingAuthor}>- Amelia Earhart</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Weather Card */}
        <View style={{ marginRight: -35 }}>
          <WeatherCard />
        </View>

        {/* Most Recommended Activities */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Most Recommended Activities</Text>
          <HorizantalScrollActivities activities={recommendedActivities} />
        </View>

        {/* Other Recommended Activities */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Other Recommended Activities</Text>
          <VerticalScrollActivities activities={otherActivities} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  greetingContainer: {
    padding: 16,
    paddingTop: Platform.OS === "ios" ? 40 : 20,
    backgroundColor: "#F5F5F5",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 16,
  },
  greetingTitle: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginBottom: 8,
  },
  greetingQuote: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    fontStyle: "italic",
    marginBottom: 4,
  },
  greetingAuthor: {
    fontSize: 14,
    textAlign: "center",
    color: "#666",
  },
  content: {
    flexDirection: "column",
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#333333",
    marginBottom: 16,
    paddingLeft: 8,
  },
});
