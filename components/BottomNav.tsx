// components/BottomNav.tsx
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface BottomNavProps {
  activeTab: "home" | "packages" | "tracker" | "profile";
}

export default function BottomNav({ activeTab }: BottomNavProps) {
  const iconColor = (tab: string) =>
    activeTab === tab ? "#4a1942" : "#9ca3af";

  const textColor = (tab: string) =>
    activeTab === tab ? "#4a1942" : "#gray-400";

  return (
    <View className="bg-white border-t border-gray-200 pb-6">
      <View className="flex-row items-center justify-around pt-3">
        {/* Home */}
        <TouchableOpacity
          onPress={(e) => {
            e.preventDefault();
            router.push("/(Main)/HomeScreen");
          }}
          className="items-center"
        >
          <Ionicons name="home" size={24} color={iconColor("home")} />
          <Text className={`text-xs font-medium mt-1 ${textColor("home")}`}>
            Home
          </Text>
          {activeTab === "home" && (
            <View className="w-12 h-1 bg-[#4a1942] rounded-full mt-1" />
          )}
        </TouchableOpacity>

        {/* Packages */}
        <TouchableOpacity
          onPress={(e) => {
            e.preventDefault();
            router.push("/(Main)/PackagesScreen");
          }}
          className="items-center"
        >
          <Ionicons
            name="grid-outline"
            size={24}
            color={iconColor("packages")}
          />
          <Text className={`text-xs font-medium mt-1 ${textColor("packages")}`}>
            Packages
          </Text>
        </TouchableOpacity>

        {/* Tracker */}
        <TouchableOpacity
          onPress={(e) => {
            e.preventDefault();
            router.push("/(Main)/SetupTrackerStep1");
          }}
          className="items-center"
        >
          <Ionicons
            name="stats-chart-outline"
            size={24}
            color={iconColor("tracker")}
          />
          <Text className={`text-xs font-medium mt-1 ${textColor("tracker")}`}>
            Tracker
          </Text>
        </TouchableOpacity>

        {/* Profile */}
        <TouchableOpacity
          onPress={(e) => {
            e.preventDefault();
            router.push("/(Main)/(Profile)/ProfileScreen");
          }}
          className="items-center"
        >
          <Ionicons
            name="person-outline"
            size={24}
            color={iconColor("profile")}
          />
          <Text className={`text-xs font-medium mt-1 ${textColor("profile")}`}>
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
