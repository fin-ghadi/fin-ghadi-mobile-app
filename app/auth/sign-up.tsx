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
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import RNPickerSelect from "react-native-picker-select";
// Import environment variables

import { useRouter } from "expo-router"; // Updated import for navigation

const SignUpScreen = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const router = useRouter();

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSignUp = async () => {
    if (formData.password !== formData.confirmPassword) {
      Alert.alert("Error", "Passwords do not match. Please try again.");
      return;
    }

    const userData = {
      fullName: formData.fullName,
      age: formData.age,
      email: formData.email,
      password: formData.password,
      gender: formData.gender,
    };

    try {
      router.push("/auth/sign-in");
    } catch (error) {
      console.error("Registration failed:", error);
      Alert.alert("Error", "Registration failed. Please try again.");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.logo}>SignUp</Text>

        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#888"
          value={formData.fullName}
          onChangeText={(value) => handleChange("fullName", value)}
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

        <View style={styles.row}>
          <TextInput
            style={[styles.input, { flex: 1, marginRight: 10 }]}
            placeholder="Age"
            placeholderTextColor="#888"
            keyboardType="numeric"
            value={formData.age}
            onChangeText={(value) => handleChange("age", value)}
          />
          <View style={[styles.input, { flex: 1 }]}>
            <RNPickerSelect
              onValueChange={(value) => handleChange("gender", value)}
              items={[
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
              ]}
              value={formData.gender}
              placeholder={{ label: "Select Gender", value: null }}
              style={{
                inputIOS: { color: "#888", fontSize: 16 },
                inputAndroid: { color: "#888", fontSize: 16 },
              }}
            />
          </View>
        </View>

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

        <View style={styles.signInContainer}>
          <Text style={styles.signInText}>
            Already have an account?{" "}
            <Text
              style={styles.signInLink}
              onPress={() => router.push("/auth/sign-in")}
            >
              Sign In
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SignUpScreen;

const styles = StyleSheet.create({
  signInLink: { color: "#4CAF50", fontWeight: "bold" },
  safeArea: {
    flex: 1,
    backgroundColor: "#f0f8ff",
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: -80,
  },
  title: {
    fontSize: 28,
    color: "#2c3e50",
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
  },
  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  selectPlaceholder: {
    color: "#888",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#2563EB", // bg-blue-600
    paddingVertical: 16, // py-4 (16px)
    paddingHorizontal: 60, // px-10 (40px)
    borderRadius: 30, // rounded-2xl
    alignSelf: "center", // Center the button horizontally
    elevation: 6, // shadow-lg equivalent (Android only)
    shadowColor: "#000", // shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // shadow offset for iOS
    shadowOpacity: 0.1, // shadow opacity for iOS
    shadowRadius: 5, // shadow radius for iOS\
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  signInContainer: {
    marginTop: 20,
  },
  signInText: {
    fontSize: 14,
    color: "#666",
  },
  signInLinkText: {
    color: "#0096FF",
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 20,
  },
  modalCloseButton: {
    marginTop: 20,
    backgroundColor: "#0096FF",
    padding: 10,
    borderRadius: 10,
  },
  modalCloseText: {
    color: "#fff",
  },
});
