import React, { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, ViewStyle, ImageStyle } from "react-native";

interface LogoProps {
  width?: number; // Optional width prop
  height?: number; // Optional height prop
}

const Logo: React.FC<LogoProps> = ({ width = 150, height = 150 }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity value: 0

  useEffect(() => {
    // Fade-in animation when the component mounts
    Animated.timing(fadeAnim, {
      toValue: 1, // Animate opacity to 1
      duration: 1000, // Animation duration in milliseconds
      useNativeDriver: true, // Use native driver for better performance
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={[styles.logoContainer, { opacity: fadeAnim }]}>
      <Image
        source={require("@/assets/images/FG-logo2.png")} // Update the path to your logo
        style={[styles.logo, { width, height }]} // Apply width and height from props
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    resizeMode: "contain", // Ensure the logo scales properly
  },
});

export default Logo;