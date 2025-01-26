// components/WeatherCard.tsx
import React, { Suspense } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import moment from "moment";

// List of weather types and their corresponding PNG files and descriptions
const weatherTypes = [
  {
    name: "Sunny Day",
    image: require("@/assets/weather-icons/sun.png"),
    description: "Clear and bright",
  },
  {
    name: "Rainy Day",
    image: require("@/assets/weather-icons/rainy-day.png"),
    description: "Rain showers",
  },
  {
    name: "Cloudy-Sunny",
    image: require("@/assets/weather-icons/cloudy-sunny.png"),
    description: "Partly cloudy",
  },
  {
    name: "Cloudy",
    image: require("@/assets/weather-icons/clouds.png"),
    description: "Overcast",
  },
  {
    name: "Cloudy-Sunny-Rainy",
    image: require("@/assets/weather-icons/cloudy-sunny-rainy.png"),
    description: "Mixed weather",
  },
];

// Function to get random weather
const getRandomWeather = () => {
  const randomIndex = Math.floor(Math.random() * weatherTypes.length);
  return weatherTypes[randomIndex];
};

const WeatherCard: React.FC = () => {
  const weather = getRandomWeather(); // Get a random weather
  const { name, image, description } = weather;

  return (
    <View style={styles.card}>
      <View style={styles.leftSection}>
        <Text style={styles.dateText}>
          {moment().format("MMMM Do YYYY, h:mm:ss a")}
        </Text>
        <Text style={styles.cardTitle}>Tangier, Morocco</Text>
        <Text style={styles.cardText}>26°</Text>
      </View>

      <View style={styles.rightSection}>
        <Image source={image} style={styles.weatherIcon} />
        <Text style={styles.weatherDescription}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  leftSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  rightSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#0096FF",
  },
  cardText: {
    fontSize: 30,
    color: "#333333",
    fontWeight: "bold",
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
  weatherDescription: {
    fontSize: 16,
    color: "#FFDD00",
    fontWeight: "500",
    marginTop: 8,
  },
  dateText: {
    fontSize: 12,
    color: "#333333",
    textAlign: "center",
    marginBottom: 16,
  },
});

export default WeatherCard;
