import React from "react";
import { View, StyleSheet } from "react-native";
import Login from "@/components/login/login"; // Import the Login component

export default function SignInScreen() {
  return (
    <View style={styles.container}>
      <Login /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f8ff", // Light blue background
  },
});
