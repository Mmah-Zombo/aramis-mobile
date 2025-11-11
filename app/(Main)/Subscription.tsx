"use client";
import { useState } from "react";
import {
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import Svg, { Path } from "react-native-svg";

// Icons
const ChevronLeft = ({ size = 24, color = "#000" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M15 18l-6-6 6-6"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const Edit2 = ({ size = 24, color = "#000" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const DropletIcon = ({ size = 32, color = "#FFB3BA" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <Path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
  </Svg>
);

// Main Component
export default function SubscriptionPlanScreen() {
  const [selectedDuration, setSelectedDuration] = useState<"3" | "6" | "12">(
    "3"
  );
  const [selectedPack, setSelectedPack] = useState<"regular" | "customize">(
    "regular"
  );

  return (
    <View className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" />

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="flex-row items-center px-4 pt-12 pb-6 bg-gray-50">
          <TouchableOpacity className="mr-4">
            <ChevronLeft size={24} color="#000" />
          </TouchableOpacity>
          <Text className="text-2xl font-bold">Subscription Plan</Text>
        </View>

        {/* Duration Selection */}
        <View className="px-4 mb-6">
          <View className="bg-pink-100 rounded-full p-1 flex-row">
            <TouchableOpacity
              onPress={() => setSelectedDuration("3")}
              className={`flex-1 py-3 rounded-full items-center ${
                selectedDuration === "3"
                  ? "bg-coral shadow-sm"
                  : "bg-transparent"
              }`}
            >
              <Text
                className={`font-bold ${selectedDuration === "3" ? "text-white" : "text-gray-700"}`}
              >
                3 Months
              </Text>
              <Text
                className={`text-xs ${selectedDuration === "3" ? "text-white" : "text-gray-500"}`}
              >
                5% Off
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setSelectedDuration("6")}
              className={`flex-1 py-3 rounded-full items-center ${
                selectedDuration === "6"
                  ? "bg-coral shadow-sm"
                  : "bg-transparent"
              }`}
            >
              <Text
                className={`font-bold ${selectedDuration === "6" ? "text-white" : "text-gray-700"}`}
              >
                6 months
              </Text>
              <Text
                className={`text-xs ${selectedDuration === "6" ? "text-white" : "text-gray-500"}`}
              >
                5% Off
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setSelectedDuration("12")}
              className={`flex-1 py-3 rounded-full items-center ${
                selectedDuration === "12"
                  ? "bg-coral shadow-sm"
                  : "bg-transparent"
              }`}
            >
              <Text
                className={`font-bold ${selectedDuration === "12" ? "text-white" : "text-gray-700"}`}
              >
                12 months
              </Text>
              <Text
                className={`text-xs ${selectedDuration === "12" ? "text-white" : "text-gray-500"}`}
              >
                5% Off
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Period Date Card */}
        <View className="px-4 mb-6">
          <View className="bg-primary rounded-3xl p-6 flex-row items-center justify-between relative">
            <View className="flex-1">
              <Text className="text-white text-xl font-bold">19 September</Text>
              <Text className="text-white/60 text-sm mt-1">
                Period start date
              </Text>
            </View>

            {/* Droplet Icon in Center */}
            <View className="absolute left-1/2 -translate-x-1/2 w-14 h-14 bg-white/20 rounded-full items-center justify-center">
              <DropletIcon size={28} color="#FFB3BA" />
            </View>

            <View className="flex-1 items-end">
              <Text className="text-white text-xl font-bold">23 September</Text>
              <Text className="text-white/60 text-sm mt-1">
                Period end date
              </Text>
            </View>
          </View>
        </View>

        {/* Edit Dates Button */}
        <View className="items-center mb-6">
          <TouchableOpacity className="bg-white rounded-full px-6 py-3 flex-row items-center shadow-sm">
            <View className="w-8 h-8 bg-primary rounded-full items-center justify-center mr-2">
              <Edit2 size={16} color="#FFF" />
            </View>
            <Text className="font-semibold text-base">Edit dates</Text>
          </TouchableOpacity>
        </View>

        {/* Pack Selection */}
        <View className="px-4 mb-6 flex-row gap-3">
          <TouchableOpacity
            onPress={() => setSelectedPack("regular")}
            className={`flex-1 rounded-3xl p-4 ${
              selectedPack === "regular"
                ? "bg-coral"
                : "bg-pink-100 border-2 border-pink-200"
            }`}
          >
            <View className="flex-row items-center mb-1">
              <View
                className={`w-5 h-5 rounded ${
                  selectedPack === "regular"
                    ? "bg-primary"
                    : "bg-white border-2 border-gray-300"
                } mr-2`}
              />
              <Text
                className={`font-bold ${selectedPack === "regular" ? "text-white" : "text-coral"}`}
              >
                REGULAR PACK
              </Text>
            </View>
            <Text
              className={`text-sm ml-7 ${selectedPack === "regular" ? "text-white" : "text-gray-600"}`}
            >
              Recommended
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setSelectedPack("customize")}
            className={`flex-1 rounded-3xl p-4 ${
              selectedPack === "customize"
                ? "bg-coral"
                : "bg-pink-100 border-2 border-pink-200"
            }`}
          >
            <View className="flex-row items-center mb-1">
              <View
                className={`w-5 h-5 rounded ${
                  selectedPack === "customize"
                    ? "bg-primary"
                    : "bg-white border-2 border-gray-300"
                } mr-2`}
              />
              <Text
                className={`font-bold ${selectedPack === "customize" ? "text-white" : "text-coral"}`}
              >
                CUSTOMIZE PACK
              </Text>
            </View>
            <Text
              className={`text-sm ml-7 ${selectedPack === "customize" ? "text-white" : "text-gray-600"}`}
            >
              Recommended
            </Text>
          </TouchableOpacity>
        </View>

        {/* Price Card */}
        <View className="px-4 mb-8">
          <View className="bg-primary rounded-3xl p-6 relative overflow-hidden">
            {/* Decorative circles */}
            <View className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full" />
            <View className="absolute -left-12 -bottom-12 w-40 h-40 bg-black/20 rounded-full" />

            <View className="relative z-10">
              <View className="flex-row items-start mb-4">
                <View className="bg-black/30 rounded-full px-4 py-2 mr-4">
                  <Text className="text-white text-lg font-bold">5%</Text>
                  <Text className="text-white/80 text-xs">discount</Text>
                </View>

                <View>
                  <Text className="text-white text-5xl font-bold">
                    Le 575.00
                  </Text>
                </View>
              </View>

              <Text className="text-white/90 text-base">
                Pick what you need to get you though
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Checkout Button */}
      <View className="px-4 pb-8 pt-4 bg-gray-50">
        <TouchableOpacity className="bg-gradient-to-b from-coral to-primary rounded-full py-4 items-center shadow-lg">
          <Text className="text-white text-lg font-bold">
            Proceed to Checkout
          </Text>
        </TouchableOpacity>
      </View>

      {/* Home Indicator */}
      <View
        className="h-1 bg-black mx-auto mb-2"
        style={{ width: 134, borderRadius: 100 }}
      />
    </View>
  );
}
