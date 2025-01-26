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
      {/* Header */}
      <View style={styles.header}>
        {/* Drawer Toggle Button (Icon Only) */}
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          style={styles.drawerButton}
        >
          <Ionicons name="menu" size={28} color="#FFFFFF" />
        </TouchableOpacity>

        {/* Logo and Title */}
        <Image
          source={require("@/assets/images/FG-logo.png")}
          style={styles.logo}
        />
        <Text style={styles.headerTitle}>FIN GHADI</Text>
      </View>

      {/* Content wrapped in ScrollView */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Weather Card */}
        <WeatherCard />

        {/* Most Recommended Activities Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Most Recommended Activities</Text>
          <HorizantalScrollActivities
            activities={[
              {
                image: undefined,
                title: "Activity 1",
                description: "Description 1",
              },
              {
                image: undefined,
                title: "Activity 2",
                description: "Description 2",
              },
              {
                image: undefined,
                title: "Activity 3",
                description: "Description 3",
              },
              {
                image: undefined,
                title: "Activity 4",
                description: "Description 4",
              },
            ]}
          />
        </View>

        {/* Other Recommended Activities Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Other Recommended Activities</Text>
          <VerticalScrollActivities
            activities={[
              {
                image: undefined,
                title: "Activity 1",
                description: "Description 1",
              },
              {
                image: undefined,
                title: "Activity 2",
                description: "Description 2",
              },
              {
                image: undefined,
                title: "Activity 3",
                description: "Description 3",
              },
              {
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
  header: {
    backgroundColor: "#0096FF",
    height: Platform.OS === "ios" ? 120 : 100,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 40 : 20,
    flexDirection: "row", // Aligns the logo and title horizontally
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Adds shadow on Android
  },
  drawerButton: {
    position: "absolute",
    left: 16, // Position the button on the left side
    top: 45, // Adjust position based on platform
    zIndex: 1, // Ensure the button is above other elements
  },
  logo: {
    width: 60,
    height: 60,
    marginRight: 8, // Adds space between logo and title
  },
  headerTitle: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#FFFFFF",
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