import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Circle } from "react-native-svg";

// Period Tracker Circle Component
const PeriodTrackerCircle = () => {
  const dotPositions = [
    // Red dots (top right - period days)
    { angle: 10, color: "#ff6b6b", size: 8 },
    { angle: 30, color: "#ff8787", size: 6 },
    { angle: 50, color: "#ffa5a5", size: 10 },
    { angle: 70, color: "#ff6b6b", size: 7 },

    // Pink/Light dots (right side - follicular)
    { angle: 90, color: "#ffb3ba", size: 6 },
    { angle: 110, color: "#ffc9ce", size: 8 },
    { angle: 130, color: "#ffd4d8", size: 6 },
    { angle: 150, color: "#ffe0e3", size: 7 },

    // Gray dots (bottom - ovulation)
    { angle: 170, color: "#d1d1d1", size: 8 },
    { angle: 190, color: "#c0c0c0", size: 6 },
    { angle: 210, color: "#b8b8b8", size: 7 },
    { angle: 230, color: "#d1d1d1", size: 6 },

    // Green dots (left side - luteal)
    { angle: 250, color: "#a8d5a3", size: 8 },
    { angle: 270, color: "#b8e0b3", size: 10 },
    { angle: 290, color: "#c8ebc3", size: 7 },
    { angle: 310, color: "#a8d5a3", size: 6 },

    // Light dots completing circle
    { angle: 330, color: "#e8e8e8", size: 8 },
    { angle: 350, color: "#f0f0f0", size: 6 },
  ];
  const radius = 140;
  const centerX = 150;
  const centerY = 150;
  return (
    <View className="items-center justify-center my-6">
      <Svg width="300" height="300">
        {dotPositions.map((dot, index) => {
          const x = centerX + radius * Math.cos((dot.angle * Math.PI) / 180);
          const y = centerY + radius * Math.sin((dot.angle * Math.PI) / 180);
          return (
            <Circle key={index} cx={x} cy={y} r={dot.size} fill={dot.color} />
          );
        })}
      </Svg>

      {/* Center Circle */}
      <View className="absolute w-52 h-52 bg-[#4a1942] rounded-full items-center justify-center">
        <Text className="text-pink-300 text-base mb-2">Period Day</Text>
        <Text className="text-white text-2xl font-semibold">4 September</Text>
      </View>

      {/* Day Badge */}
      <View className="absolute top-8 right-12 bg-red-500 w-10 h-10 rounded-full items-center justify-center">
        <Text className="text-white font-bold text-sm">04</Text>
      </View>
    </View>
  );
};
export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View className="flex-row items-center justify-between px-6 py-4">
        <View className="flex-row items-center">
          <Ionicons name="water" size={24} color="#4a1942" />
          <Text className="text-2xl font-bold text-[#4a1942] ml-2">Amaris</Text>
        </View>

        <View className="flex-row gap-3">
          <TouchableOpacity className="w-10 h-10 bg-pink-100 rounded-full items-center justify-center">
            <Ionicons name="notifications-outline" size={20} color="#4a1942" />
            <View className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </TouchableOpacity>

          <TouchableOpacity className="w-10 h-10 bg-pink-100 rounded-full items-center justify-center">
            <Ionicons name="trash-outline" size={20} color="#4a1942" />
            <View className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </TouchableOpacity>

          <TouchableOpacity className="w-10 h-10 bg-pink-100 rounded-full items-center justify-center">
            <Ionicons name="search" size={20} color="#4a1942" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Welcome Card */}
        <View className="px-6 mb-6">
          <LinearGradient
            colors={["#ff8a80", "#ff6b6b", "#e85d5d"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="rounded-3xl p-6"
          >
            <View className="flex-row items-center mb-3">
              <View className="w-12 h-12 bg-white/30 rounded-full items-center justify-center mr-4">
                <Ionicons name="flame" size={28} color="#ffffff" />
              </View>
              <Text className="text-white text-2xl font-bold">
                Welcome Back!
              </Text>
            </View>

            <Text className="text-white/90 text-sm mb-4">
              You are currently on the 3M sub Plan
            </Text>

            <TouchableOpacity className="bg-white rounded-full px-6 py-3 self-start flex-row items-center">
              <Text className="text-[#ff6b6b] font-semibold mr-2">Upgrade</Text>
              <Ionicons name="arrow-forward" size={16} color="#ff6b6b" />
            </TouchableOpacity>
          </LinearGradient>
        </View>
        {/* Insight Section */}
        <View className="px-6 mb-6">
          <Text className="text-3xl font-bold text-gray-900 mb-4">Insight</Text>
          <PeriodTrackerCircle />
        </View>
        {/* My Daily Insights */}
        <View className="px-6 mb-6">
          <Text className="text-xl font-bold text-gray-900 mb-4">
            My Daily Insights
          </Text>

          <View className="flex-row gap-4">
            {/* Symptoms Card */}
            <View className="flex-1 bg-pink-100 rounded-3xl p-6 min-h-[180px]">
              <View className="flex-row items-center mb-4">
                <Text className="text-3xl mr-2">🔥</Text>
                <Text className="text-3xl mr-2">🤕</Text>
                <Text className="text-gray-700 font-semibold">+6</Text>
              </View>

              <View className="absolute bottom-6 left-6">
                <TouchableOpacity className="w-12 h-12 bg-[#4a1942] rounded-full items-center justify-center">
                  <Ionicons name="add" size={28} color="#ffffff" />
                </TouchableOpacity>
              </View>
            </View>
            {/* Cycle Day Card */}
            <View className="flex-1 bg-[#ff9b8a] rounded-3xl p-6 min-h-[180px] justify-between">
              <Text className="text-white text-base font-medium">
                {"Today's\nCycle Day"}
              </Text>
              <Text className="text-white text-6xl font-bold">04</Text>
            </View>
          </View>
        </View>
        {/* Helpful Tips */}
        <View className="px-6 mb-24">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-xl font-bold text-gray-900">
              Helpful Tips
            </Text>
            <Text className="text-red-500 font-semibold">Try AI</Text>
          </View>

          <View className="flex-row gap-4">
            {/* Tip Card 1 */}
            <View className="flex-1 bg-pink-50 rounded-3xl overflow-hidden">
              <View className="h-32 bg-pink-100 items-center justify-center p-4">
                <Ionicons name="heart" size={40} color="#ff6b9d" />
                <Ionicons
                  name="water"
                  size={24}
                  color="#ff8fab"
                  style={{ position: "absolute", top: 20, left: 20 }}
                />
                <MaterialCommunityIcons
                  name="gender-female"
                  size={24}
                  color="#ffb3c6"
                  style={{ position: "absolute", bottom: 20, right: 20 }}
                />
              </View>
              <View className="p-4">
                <Text className="text-gray-900 text-xs font-medium leading-5">
                  Blood clots during your period. What means
                </Text>
              </View>
            </View>
            {/* Tip Card 2 */}
            <View className="flex-1 bg-pink-50 rounded-3xl overflow-hidden">
              <View className="h-32 bg-gradient-to-br from-pink-100 to-orange-100">
                {/* Placeholder for illustration - you would use an actual image here */}
                <View className="flex-1 items-center justify-center">
                  <Ionicons name="fitness" size={48} color="#ff6b6b" />
                </View>
              </View>
              <View className="p-4">
                <Text className="text-gray-900 text-xs font-medium leading-5">
                  Blood clots during your period. What
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* Bottom Navigation */}
      <View className="left-0 right-0 bg-white border-t border-gray-200 pb-6">
        <View className="flex-row items-center justify-around pt-3">
          <TouchableOpacity className="items-center">
            <Ionicons name="home" size={24} color="#4a1942" />
            <Text className="text-[#4a1942] text-xs font-medium mt-1">
              Home
            </Text>
            <View className="w-12 h-1 bg-[#4a1942] rounded-full mt-1" />
          </TouchableOpacity>

          <TouchableOpacity className="items-center">
            <Ionicons name="grid-outline" size={24} color="#9ca3af" />
            <Text className="text-gray-400 text-xs font-medium mt-1">
              Packages
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-center">
            <Ionicons name="stats-chart-outline" size={24} color="#9ca3af" />
            <Text className="text-gray-400 text-xs font-medium mt-1">
              Tracker
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-center">
            <Ionicons name="person-outline" size={24} color="#9ca3af" />
            <Text className="text-gray-400 text-xs font-medium mt-1">
              Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
