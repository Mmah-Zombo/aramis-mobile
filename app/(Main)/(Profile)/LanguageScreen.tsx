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

type LanguageCode = "en" | "id" | "zh" | "ko";

interface LanguageOption {
  code: LanguageCode;
  label: string;
  flag: string;
}

export default function LanguageScreen() {
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageCode>("en");

  const handleSaveChange = () => {
    console.log("Language saved:", selectedLanguage);
    // Navigate back or show success message
  };

  const languageOptions: LanguageOption[] = [
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "id", label: "Bahasa Indonesia", flag: "🇮🇩" },
    { code: "zh", label: "中国人", flag: "🇨🇳" },
    { code: "ko", label: "한국어", flag: "🇰🇷" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" />
      {/* Header */}
      <View className="flex-row items-center px-6 py-4 bg-white">
        <TouchableOpacity className="mr-4">
          <Ionicons name="chevron-back" size={24} color="#1a1a2e" />
        </TouchableOpacity>
        <Text className="text-2xl font-bold text-gray-900">Language</Text>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-6 py-6">
          {/* Language Options */}
          {languageOptions.map((option) => (
            <TouchableOpacity
              key={option.code}
              className={`flex-row items-center justify-between p-5 rounded-3xl mb-4 ${
                selectedLanguage === option.code
                  ? "bg-white border-2 border-[#ff8a95]"
                  : "bg-white border-2 border-transparent"
              }`}
              onPress={() => setSelectedLanguage(option.code)}
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.05,
                shadowRadius: 2,
                elevation: 1,
              }}
            >
              <View className="flex-row items-center flex-1">
                <Text className="text-3xl mr-4">{option.flag}</Text>
                <Text className="text-lg text-gray-900 font-medium">
                  {option.label}
                </Text>
              </View>
              {selectedLanguage === option.code && (
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
