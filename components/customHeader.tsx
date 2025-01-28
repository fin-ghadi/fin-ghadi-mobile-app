import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";

import { NavigationProp } from "@react-navigation/native";

const CustomHeader = ({ navigation }: { navigation: NavigationProp<any> }) => {
  return (
    <View style={styles.header}>
      {/* Drawer Toggle Button */}
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        style={styles.drawerButton}
      >
        <Ionicons name="menu" size={28} color="#FFFFFF" />
      </TouchableOpacity>

      {/* Logo */}
      <Image
        source={require("@/assets/images/FG-logo.png")}
        style={styles.logo}
      />

      {/* Title */}
      <Text style={styles.headerTitle}>FIN GHADI</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0096FF",
    height: Platform.OS === "ios" ? 120 : 100,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 40 : 20,
    flexDirection: "row", // Aligns the logo and title horizontally
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
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});

export default CustomHeader;