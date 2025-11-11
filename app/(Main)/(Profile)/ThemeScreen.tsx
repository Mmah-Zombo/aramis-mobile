"use client";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ThemeOption = "light" | "dark" | "system";

export default function ThemeScreen() {
  const [selectedTheme, setSelectedTheme] = useState<ThemeOption>("light");

  const handleSaveChange = () => {
    console.log("Theme saved:", selectedTheme);
    // Navigate back or show success message
  };

  const themeOptions: { value: ThemeOption; label: string }[] = [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
    { value: "system", label: "System Default" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" />
      {/* Header */}
      <View className="flex-row items-center px-6 py-4 bg-white">
        <TouchableOpacity className="mr-4">
          <Ionicons name="chevron-back" size={24} color="#1a1a2e" />
        </TouchableOpacity>
        <Text className="text-2xl font-bold text-gray-900">Theme</Text>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-6 py-6">
          {/* Theme Options */}
          {themeOptions.map((option, index) => (
            <TouchableOpacity
              key={option.value}
              className={`flex-row items-center justify-between p-5 rounded-3xl mb-4 ${
                selectedTheme === option.value
                  ? "bg-white border-2 border-[#ff8a95]"
                  : "bg-white border-2 border-transparent"
              }`}
              onPress={() => setSelectedTheme(option.value)}
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.05,
                shadowRadius: 2,
                elevation: 1,
              }}
            >
              <Text className="text-lg text-gray-900 font-medium">
                {option.label}
              </Text>
              {selectedTheme === option.value && (
                <View className="w-8 h-8 rounded-full bg-[#c2185b] items-center justify-center">
                  <Ionicons name="checkmark" size={20} color="#ffffff" />
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Save Change Button */}
      <View className="px-6 pb-8 bg-white">
        <TouchableOpacity
          className="rounded-3xl overflow-hidden"
          onPress={handleSaveChange}
        >
          <LinearGradient
            colors={["#ff8a95", "#e8a598", "#c2185b", "#4a1942"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="py-5 items-center"
          >
            <Text className="text-white text-xl font-bold">Save Change</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
