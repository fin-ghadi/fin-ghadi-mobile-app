import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons from expo vector icons
import VerticalScrollActivities from "@/components/home-page/verticalScrollActivities";
import HorizantalScrollActivities from "@/components/home-page/HorizantalScrollActivities";
import WeatherCard from "@/components/home-page/weatherCard";

export default function HomeScreen() {
  const navigation = useNavigation();
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
          <HorizantalScrollActivities
            activities={[
              {
                id: "1",
                image: undefined,
                title: "Activity 1",
                description: "Description 1",
              },
              {
                id: "2",
                image: undefined,
                title: "Activity 2",
                description: "Description 2",
              },
              {
                id: "3",
                image: undefined,
                title: "Activity 3",
                description: "Description 3",
              },
              {
                id: "4",
                image: undefined,
                title: "Activity 4",
                description: "Description 4",
              },
            ]}
          />
        </View>

        {/* Other Recommended Activities */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Other Recommended Activities</Text>
          <VerticalScrollActivities
            activities={[
              {
                id: "1",
                image: undefined,
                title: "Activity 1",
                description: "Description 1",
              },
              {
                id: "2",
                image: undefined,
                title: "Activity 2",
                description: "Description 2",
              },
              {
                id: "3",
                image: undefined,
                title: "Activity 3",
                description: "Description 3",
              },
              {
                id: "4",
                image: undefined,
                title: "Activity 4",
                description: "Description 4",
              },
            ]}
          />
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
    marginBottom: 16, // Removed elevation for shadow
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
    marginBottom: 24, // Adds space between sections
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#333333",
    marginBottom: 16, // Adds space below the title
    paddingLeft: 8, // Adds padding to the left of the title
  },
});
