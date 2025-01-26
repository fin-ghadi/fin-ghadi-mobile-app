import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { Link, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUpScreen() {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSignUp = () => {
    if (formData.password !== formData.confirmPassword) {
      Alert.alert("Error", "Passwords do not match!");
      return;
    }
    // Add sign-up logic here
    Alert.alert("Success", "You have signed up successfully!");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Sign Up</Text>

        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#888"
          value={formData.fullName}
          onChangeText={(value) => handleChange("fullName", value)}
        />

        <TextInput
          style={styles.input}
          placeholder="Age"
          placeholderTextColor="#888"
          keyboardType="numeric"
          value={formData.age}
          onChangeText={(value) => handleChange("age", value)}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          keyboardType="email-address"
          autoCapitalize="none"
          value={formData.email}
          onChangeText={(value) => handleChange("email", value)}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
          autoCapitalize="none"
          value={formData.password}
          onChangeText={(value) => handleChange("password", value)}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#888"
          secureTextEntry
          autoCapitalize="none"
          value={formData.confirmPassword}
          onChangeText={(value) => handleChange("confirmPassword", value)}
        />

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <Link screen="auth/sign-in/page" style={styles.signUpContainer}>
          <Text style={styles.signUpText}>
            {" "}
            Already have an account?{" "}
            <Text style={styles.signInLinkText}>Sign In</Text>
          </Text>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f0f8ff", // Light blue background
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: "outfit-Bold", // Ensure this font is loaded
    color: "#2c3e50", // Dark blue color
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    backgroundColor: "#fff",
    fontSize: 16,
    color: "#34495e", // Dark gray-blue color
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  signUpContainer: {
    marginTop: 20,
  },
  signUpText: {
    fontFamily: "outfit-Medium", // Ensure this font is loaded in your app
    fontSize: 16,
    color: "#0096FF", // Fin Ghadi's primary color
  },
  button: {
    width: "100%",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#0096FF", // Fin Ghadi's primary color
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "outfit-Bold", // Ensure this font is loaded
    fontWeight: "900",
  },
  signInLink: {
    marginTop: 15,
  },
  signInText: {
    fontSize: 14,
    fontFamily: "outfit-Medium", // Ensure this font is loaded
    color: "#666",
  },
  signInLinkText: {
    color: "#0096FF", // Fin Ghadi's primary color
    fontWeight: "bold",
  },
});
