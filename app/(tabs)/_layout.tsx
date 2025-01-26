import { Drawer } from "expo-router/drawer";
import React from "react";
import { Platform } from "react-native";

import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import CustomHeader from "@/components/customHeader"; // Adjust the import path as needed

export default function DrawerLayout() {
  const colorScheme = useColorScheme();

  return (
    <Drawer
      screenOptions={{
        drawerActiveTintColor: Colors[colorScheme ?? "light"].tint,
        drawerInactiveTintColor: Colors[colorScheme ?? "light"].text,
        drawerStyle: {
          backgroundColor: Colors[colorScheme ?? "light"].background,
        },
        header: ({ navigation }) => <CustomHeader navigation={navigation} />, // Use the custom header here
      }}
    >
      <Drawer.Screen
        name="index" // This corresponds to the home screen
        options={{
          title: "Home",
          drawerIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="explore" // This corresponds to the explore screen
        options={{
          title: "Explore",
          drawerIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      />
    </Drawer>
  );
}