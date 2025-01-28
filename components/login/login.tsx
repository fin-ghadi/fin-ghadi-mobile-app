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
 import Logo from '@/components/logo'
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
             <Logo width={250} height={250}  />
            <View style={styles.content}>
              <TouchableOpacity
                style={ styles.button }
                onPress={() => setShowLoginForm(true)} // Show login form on button press
              >
                <Text style={styles.buttonText}>Get Started</Text>
              </TouchableOpacity>
              <Text
                style={{
                  textAlign: "center",
                  color: "#6B7280", // This is the gray-500 color from Tailwind CSS
                  marginTop: 32, // 8 * 4px = 32px
                  maxWidth: 400, // This is a common max width for "max-w-md"
                }}
              >
                Explore your city, discover hidden gems, and make every journey
                an adventure!
              </Text>
            </View>
          </>
        )}

        {showLoginForm && (
          <View style={styles.loginFormContainer}>
             <Logo width={150} height={150}  />

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

            <TouchableOpacity
              style={styles.signUpContainer}
              onPress={() => router.push("/auth/sign-up")}
            >
              <Text style={styles.signUpText}>
                Don't have an account? Sign Up
              </Text>
            </TouchableOpacity>
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
    padding: 20,
    marginTop:-80,
  },
  logoContainer: {
    marginTop: 50,
    alignItems: "center",
  },
  logo: {
    width: 250, // Adjust the size of your logo
    height: 250, // Adjust the size of your logo
    marginTop: -150, // Adjust the top margin for better placement
  },
  content: {
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 30,
  },
  button: {
    backgroundColor: "#2563EB", // bg-blue-600
    paddingVertical: 16, // py-4 (16px)
    paddingHorizontal: 40, // px-10 (40px)
    borderRadius: 30, // rounded-2xl
    alignSelf: "center", // Center the button horizontally
    elevation: 6, // shadow-lg equivalent (Android only)
    shadowColor: "#000", // shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // shadow offset for iOS
    shadowOpacity: 0.1, // shadow opacity for iOS
    shadowRadius: 5, // shadow radius for iOS\
   
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
