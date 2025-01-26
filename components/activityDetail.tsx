import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import WeatherCard from "../components/home-page/weatherCard";
import Map from "../components/map";

interface Activity {
  id: string;
  title: string;
  description: string;
  location: {
    lat: number;
    lng: number;
  };
}

interface ActivityDetailProps {
  activity: Activity; // `activity` is passed as a prop
}

const ActivityDetail = ({ activity }: ActivityDetailProps) => {
  // If no activity is found, display a message
  if (!activity) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Activity not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer} // Ensure content expands
        showsVerticalScrollIndicator={false} // Hide scroll indicator (optional)
      >
      <View
          style={{
            marginRight: -35,
          }}
        >
          <WeatherCard />
        </View>

        {/* Activity Title */}
        <Text style={styles.title}>{activity.title}</Text>

        {/* Activity Description */}
        <Text style={styles.description}>{activity.description}</Text>

        {/* Location Map */}
        <View style={styles.mapContainer}>
          <Map location={activity.location} />
        </View>

        {/* Additional Content Section */}
        <View style={styles.additionalContent}>
          {/* What to Bring */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>What to Bring</Text>
            <View style={styles.list}>
              <Text style={styles.listItem}>- Comfortable hiking shoes</Text>
              <Text style={styles.listItem}>
                - Water bottle (2L recommended)
              </Text>
              <Text style={styles.listItem}>- Sunscreen and hat</Text>
            </View>
          </View>

          {/* Meeting Point */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Meeting Point</Text>
            <Text style={styles.sectionText}>
              Mountain Base Camp, North Entrance
            </Text>
            <Text style={styles.sectionText}>
              Arrive 30 minutes before departure
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the container takes up the full screen height
    backgroundColor: "#FFFFFF", // Set the background color to white
  },
  scrollContainer: {
    flexGrow: 1, // Ensure the ScrollView content expands
    padding: 16,
    paddingBottom: 32,
  },
  weatherCardContainer: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
    color: "#333",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    marginBottom: 24,
  },
  mapContainer: {
    height: 300,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 24,
  },
  additionalContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  section: {
    width: "48%", // Two columns with a small gap
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  list: {
    marginLeft: 16,
  },
  listItem: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
});

export default ActivityDetail;
