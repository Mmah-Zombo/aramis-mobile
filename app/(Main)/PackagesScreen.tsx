import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

// Package Card Component
interface PackageCardProps {
  title: string;
  description: string;
  buttonText: string;
  price?: string;
  colors: string[];
  onPress: () => void;
}

const gradientColors = ['#FF6B6B', '#4ECDC4'] as const; // Making it readonly

const PackageCard = ({
  title,
  description,
  buttonText,
  price,
  colors,
  onPress,
}: PackageCardProps) => {
  return (
    <View className="mb-6 mx-6">
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="rounded-3xl p-6 relative overflow-hidden"
      >
        {/* Decorative circles */}
        <View className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full" />
        <View className="absolute -right-4 top-20 w-24 h-24 bg-white/5 rounded-full" />
        <View className="absolute right-12 -bottom-6 w-28 h-28 bg-black/10 rounded-full" />

        {/* Content */}
        <View className="flex-row items-start mb-4">
          <View className="w-16 h-16 bg-white/20 rounded-full items-center justify-center mr-4">
            <Ionicons name="water" size={32} color="#ffffff" />
          </View>
          <View className="flex-1">
            <Text className="text-white text-2xl font-bold">{title}</Text>
          </View>
        </View>

        <Text className="text-white/90 text-base mb-6">{description}</Text>

        <View className="flex-row items-center justify-between">
          <TouchableOpacity
            className="bg-white rounded-full px-6 py-3 flex-row items-center"
            onPress={onPress}
          >
            <Text className="text-gray-700 font-semibold mr-2">
              {buttonText}
            </Text>
            <Ionicons name="arrow-forward" size={18} color="#4b5563" />
          </TouchableOpacity>

          {price && (
            <Text className="text-gray-900 text-2xl font-bold">{price}</Text>
          )}
        </View>
      </LinearGradient>
    </View>
  );
};

export default function PackagesScreen() {
  const handleOneTimePurchase = () => {
    console.log("One Time Purchase selected");
  };

  const handleMonthlySubscription = () => {
    console.log("Monthly Subscription selected");
  };

  const handleCarePackages = () => {
    console.log("Care Packages selected");
  };

  const handleCustomizePackages = () => {
    console.log("Customize Packages selected");
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View className="flex-row items-center px-6 py-4 bg-white">
        <TouchableOpacity className="mr-4">
          <Ionicons name="chevron-back" size={24} color="#1a1a2e" />
        </TouchableOpacity>
        <Text className="text-2xl font-bold text-gray-900">Packages</Text>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Title Section */}
        <View className="px-6 py-8">
          <Text className="text-3xl font-bold text-[#4a1942] mb-3">
            Package Plans
          </Text>
          <Text className="text-gray-500 text-base">
            These are the packages we have for you
          </Text>
        </View>

        {/* One Time Purchase Card */}
        <PackageCard
          title="One Time Purchase"
          description="Pads, sucks, pocket tissues, snacks.."
          buttonText="Buy Now"
          price="Le 600.00"
          colors={["#ff9a9e", "#fad0c4", "#fbc2a8"]}
          onPress={handleOneTimePurchase}
        />

        {/* Monthly Subscription Card */}
        <PackageCard
          title="Monthly Subscription"
          description="Checkout our monthly subscription plans"
          buttonText="Subscribe Now"
          colors={["#ff6b9d", "#c94b7d", "#a8385d"]}
          onPress={handleMonthlySubscription}
        />

        {/* Care Packages Card */}
        <PackageCard
          title="Care Packages"
          description="Everything in Regular and Customize"
          buttonText="Check Out"
          colors={["#4a1942", "#3d1538", "#2f112d"]}
          onPress={handleCarePackages}
        />

        {/* Customize Packages Card */}
        <PackageCard
          title="Customize Packages"
          description="Pick what you need to get you though"
          buttonText="Customize"
          colors={["#5a1f52", "#4a1942", "#3a1335"]}
          onPress={handleCustomizePackages}
        />

        {/* Bottom Spacer */}
        <View className="h-8" />
      </ScrollView>
    </SafeAreaView>
  );
}
