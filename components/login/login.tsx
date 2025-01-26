import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Animated,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useNavigation } from "expo-router";
import { Link } from "@react-navigation/native";

export default function LandingPage() {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [showLoginForm, setShowLoginForm] = useState(false); // State to toggle login form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Hide the default header
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, // Hide the default header
    });
  }, [navigation]);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const handleSignIn = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    router.push("/(tabs)"); // Redirect to the sign-up screen
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {!showLoginForm && (
          <>
            <Animated.View
              style={[styles.logoContainer, { opacity: fadeAnim }]}
            >
              <Image
                source={require("@/assets/images/FG-logo2.png")} // Update the path to your logo
                style={styles.logo}
              />
            </Animated.View>
            <View style={styles.content}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setShowLoginForm(true)} // Show login form on button press
              >
                <Text style={styles.buttonText}>Get Started</Text>
              </TouchableOpacity>
              <Text style={styles.awarenessText}>
                Explore your city, discover hidden gems, and make every journey
                an adventure!
              </Text>
            </View>
          </>
        )}

        {showLoginForm && (
          <View style={styles.loginFormContainer}>
            <Text style={styles.subtitle}>Login</Text>

            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              autoCapitalize="none"
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.button} onPress={handleSignIn}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>

            <Link screen="auth/sign-up/page" style={styles.signUpContainer}>
              <Text style={styles.signUpText}>
                Don't have an account? Sign Up
              </Text>
            </Link>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f0f8ff", // Light blue background
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    marginTop: 50,
    alignItems: "center",
  },
  logo: {
    width: 250, // Adjust the size of your logo
    height: 250, // Adjust the size of your logo
    marginTop: -200,
  },
  content: {
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 30,
  },
  button: {
    backgroundColor: "#0096FF", // Fin Ghadi's primary color
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignSelf: "center", // Center the button
    marginTop: 20, // Add some margin
  },
  buttonText: {
    fontFamily: "outfit-Bold", // Ensure this font is loaded in your app
    fontSize: 18,
    fontWeight: "900",
    color: "#fff", // White text
    textAlign: "center",
  },
  awarenessText: {
    fontFamily: "outfit-Medium", // Ensure this font is loaded in your app
    fontSize: 16,
    color: "#e74c3c", // Red color for emphasis
    textAlign: "center",
    marginTop: 50,
    paddingHorizontal: 20,
  },
  loginFormContainer: {
    width: "80%",
    alignItems: "center",
  },
  subtitle: {
    fontFamily: "outfit-Medium", // Ensure this font is loaded in your app
    fontSize: 23,
    color: "#34495e", // Dark gray-blue color
    textAlign: "center",
    marginVertical: 10,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#34495e",
    marginBottom: 20,
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
    fontFamily: "outfit-Medium",
    fontSize: 16,
    color: "#3498db",
    textAlign: "center", // Center the sign-up text
  },
});
