import { Redirect } from "expo-router";
import React from "react";

// Mock authentication state (replace with your actual authentication logic)
const isAuthenticated = false; // Change this to `true` to simulate authenticated state

export default function Index() {
  // Redirect based on authentication state
  if (isAuthenticated) {
    return <Redirect href="/(tabs)" />; // Redirect to the home screen in (tabs)
  } else {
    return <Redirect href="/auth/sign-in/page" />; // Redirect to the login screen in auth/sign-in
  }
}