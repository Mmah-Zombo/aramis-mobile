import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

type SubscriptionDuration = "3" | "6" | "12";
type PackageType = "regular" | "customize";

interface SubscriptionPlanScreenProps {
  hasTrackerSetup?: boolean;
  navigation?: any;
}

export default function SubscriptionPlanScreen({
  hasTrackerSetup = false,
  navigation,
}: SubscriptionPlanScreenProps) {
  const [selectedDuration, setSelectedDuration] =
    useState<SubscriptionDuration>("3");
  const [selectedPackage, setSelectedPackage] =
    useState<PackageType>("regular");

  const handleProceedToCheckout = () => {
    navigation?.navigate("Checkout");
  };

  const handleSetupTracker = () => {
    navigation?.navigate("SetupTrackerStep1");
  };

  const handleEditDates = () => {
    navigation?.navigate("SetupTrackerStep1");
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View className="flex-row items-center px-6 py-4 bg-white shadow-sm">
        <TouchableOpacity
          onPress={() => navigation?.goBack()}
          className="p-2 -ml-2"
        >
          <Ionicons name="chevron-back" size={24} color="#1a1a2e" />
        </TouchableOpacity>
        <Text className="text-2xl font-bold text-gray-900">
          Subscription Plan
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32"
      >
        {/* Duration Tabs */}
        <View className="px-6 py-6">
          <View className="bg-pink-100 rounded-full p-2 flex-row shadow-md">
            {(["3", "6", "12"] as const).map((d) => {
              const isSelected = selectedDuration === d;
              const bg = isSelected
                ? d === "3" && hasTrackerSetup
                  ? "bg-rose-400"
                  : "bg-pink-500"
                : "bg-transparent";

              return (
                <TouchableOpacity
                  key={d}
                  onPress={() => setSelectedDuration(d)}
                  className={`flex-1 py-4 rounded-full ${bg}`}
                >
                  <Text
                    className={`text-center font-bold text-lg ${isSelected ? "text-white" : "text-[#4a1942]"}`}
                  >
                    {d === "3" ? "3 Months" : `${d} months`}
                  </Text>
                  <Text
                    className={`text-center text-sm ${isSelected ? "text-white/80" : "text-pink-400"}`}
                  >
                    5% Off
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Tracker Setup or Dates */}
        {hasTrackerSetup ? (
          <View className="px-6 mb-6">
            <View className="bg-[#4a1942] rounded-3xl p-6 flex-row items-center shadow-lg overflow-hidden">
              <View className="flex-1">
                <Text className="text-white text-2xl font-bold">
                  19 September
                </Text>
                <Text className="text-pink-200 text-sm">Period start date</Text>
              </View>
              <View className="w-12 h-12 bg-pink-100 rounded-full items-center justify-center mx-4">
                <Ionicons name="water" size={24} color="#ff6b9d" />
              </View>
              <View className="flex-1 items-end">
                <Text className="text-white text-2xl font-bold">
                  23 September
                </Text>
                <Text className="text-pink-200 text-sm">Period end date</Text>
              </View>
            </View>

            <View className="items-center mt-4">
              <TouchableOpacity
                onPress={handleEditDates}
                className="bg-white rounded-full px-6 py-3 flex-row items-center shadow-md border border-[#4a1942]"
              >
                <Ionicons name="create-outline" size={20} color="#4a1942" />
                <Text className="text-[#4a1942] font-semibold ml-2">
                  Edit dates
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View className="px-6 mb-6">
            <View className="bg-white rounded-3xl p-8 items-center shadow-lg">
              <Text className="text-gray-900 text-2xl font-bold mb-6 text-center">
                Setup your tracker
              </Text>
              <TouchableOpacity
                onPress={handleSetupTracker}
                className="w-20 h-20 rounded-full overflow-hidden shadow-xl"
              >
                <LinearGradient
                  colors={["#ff8a95", "#c2185b"]}
                  className="w-full h-full items-center justify-center"
                >
                  <Ionicons name="add" size={40} color="white" />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Package Selection */}
        <View className="px-6 mb-6">
          <View className="flex-row gap-4">
            {(["regular", "customize"] as const).map((type) => {
              const isSelected = selectedPackage === type;
              return (
                <TouchableOpacity
                  key={type}
                  onPress={() => setSelectedPackage(type)}
                  className={`flex-1 rounded-3xl p-5 ${
                    isSelected
                      ? "bg-pink-500"
                      : "bg-pink-50 border-2 border-pink-200"
                  }`}
                >
                  <View className="flex-row items-center mb-2">
                    <View
                      className={`w-6 h-6 rounded-md mr-3 items-center justify-center ${
                        isSelected
                          ? "bg-[#4a1942]"
                          : "bg-white border-2 border-gray-300"
                      }`}
                    >
                      {isSelected && (
                        <Ionicons name="checkmark" size={16} color="white" />
                      )}
                    </View>
                    <Text
                      className={`font-bold text-base ${
                        isSelected ? "text-white" : "text-pink-500"
                      }`}
                    >
                      {type === "regular" ? "REGULAR PACK" : "CUSTOMIZE PACK"}
                    </Text>
                  </View>
                  <Text
                    className={`text-sm ${isSelected ? "text-white/80" : "text-gray-500"}`}
                  >
                    Recommended
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Pricing Card */}
        <View className="px-6 mb-8">
          <View className="rounded-3xl overflow-hidden shadow-2xl">
            <LinearGradient
              colors={["#4a1942", "#3d1538", "#2f112d"]}
              className="p-8"
            >
              <View className="absolute -right-12 -top-12 w-40 h-40 bg-white/5 rounded-full" />
              <View className="absolute right-8 -bottom-8 w-32 h-32 bg-black/10 rounded-full" />

              <View className="flex-row items-start">
                <View className="w-20 h-20 bg-white/10 rounded-full items-center justify-center mr-6">
                  <Text className="text-white text-2xl font-bold">5%</Text>
                  <Text className="text-white/70 text-xs">discount</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-white text-5xl font-bold mb-2">
                    Le 575.00
                  </Text>
                  <Text className="text-white/80 text-base">
                    Pick what you need to get you through
                  </Text>
                </View>
              </View>
            </LinearGradient>
          </View>
        </View>
      </ScrollView>

      {/* Checkout Button */}
      <View className="px-6 pb-8 pt-4 bg-white shadow-2xl">
        <TouchableOpacity
          onPress={handleProceedToCheckout}
          className="rounded-3xl overflow-hidden shadow-lg"
        >
          <LinearGradient
            colors={["#ff8a95", "#e8a598", "#c2185b", "#4a1942"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="py-5 items-center"
          >
            <Text className="text-white text-xl font-bold tracking-wider">
              Proceed to Checkout
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
