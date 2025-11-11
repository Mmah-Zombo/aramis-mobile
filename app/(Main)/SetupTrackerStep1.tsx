import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
interface DateRange {
  start: number | null;
  end: number | null;
}

export default function SetupTrackerStep1({ navigation }: any) {
  const [currentMonth, setCurrentMonth] = useState("Sep - 2025");
  const [selectedRange, setSelectedRange] = useState<DateRange>({
    start: 19,
    end: 23,
  });

  const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  // September 2025 starts on Monday
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  const nextMonthDays = [1, 2, 3, 4];

  const handleDatePress = (day: number) => {
    if (!selectedRange.start) {
      setSelectedRange({ start: day, end: null });
    } else if (!selectedRange.end) {
      if (day > selectedRange.start) {
        setSelectedRange({ ...selectedRange, end: day });
      } else {
        setSelectedRange({ start: day, end: null });
      }
    } else {
      setSelectedRange({ start: day, end: null });
    }
  };

  const isInRange = (day: number) => {
    if (!selectedRange.start || !selectedRange.end) return false;
    return day >= selectedRange.start && day <= selectedRange.end;
  };

  const isRangeStart = (day: number) => day === selectedRange.start;
  const isRangeEnd = (day: number) => day === selectedRange.end;

  const handleSave = () => {
    console.log("Selected range:", selectedRange);
    navigation.navigate("SetupTrackerStep2");
  };

  const handlePreviousMonth = () => {
    console.log("Previous month");
  };

  const handleNextMonth = () => {
    console.log("Next month");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View className="flex-row items-center justify-between px-6 py-4">
        <View className="flex-row items-center flex-1">
          <TouchableOpacity
            className="mr-4"
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={28} color="#1a1a2e" />
          </TouchableOpacity>
          <Text className="text-xl font-semibold text-gray-900">
            Setup Tracker
          </Text>
        </View>
        <Text className="text-[#c2185b] text-lg font-semibold">
          Step 1 of 2
        </Text>
      </View>

      {/* Main Content */}
      <View className="flex-1 px-6 py-8">
        {/* Question */}
        <Text className="text-4xl font-bold text-[#4a1942] mb-12">
          When did your cycle begin?
        </Text>

        {/* Month Selector */}
        <View className="flex-row items-center justify-center mb-8">
          <TouchableOpacity onPress={handlePreviousMonth}>
            <Ionicons name="chevron-back" size={24} color="#ff8a95" />
          </TouchableOpacity>

          <Text className="text-[#ff8a95] text-xl font-semibold mx-8">
            {currentMonth}
          </Text>

          <TouchableOpacity onPress={handleNextMonth}>
            <Ionicons name="chevron-forward" size={24} color="#ff8a95" />
          </TouchableOpacity>
        </View>

        {/* Calendar */}
        <View>
          {/* Day Headers */}
          <View className="flex-row mb-6">
            {daysOfWeek.map((day) => (
              <View key={day} className="flex-1 items-center">
                <Text className="text-gray-400 text-xs font-medium">{day}</Text>
              </View>
            ))}
          </View>

          {/* Calendar Grid */}
          <View>
            {/* Week 1 */}
            <View className="flex-row mb-4">
              {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                <TouchableOpacity
                  key={day}
                  className="flex-1 items-center py-3"
                  onPress={() => handleDatePress(day)}
                >
                  <Text className="text-gray-900 text-lg">{day}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Week 2 */}
            <View className="flex-row mb-4">
              {[8, 9, 10, 11, 12, 13, 14].map((day) => (
                <TouchableOpacity
                  key={day}
                  className="flex-1 items-center py-3"
                  onPress={() => handleDatePress(day)}
                >
                  <Text className="text-gray-900 text-lg">{day}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Week 3 with range selection */}
            <View className="flex-row mb-4">
              {[15, 16, 17, 18, 19, 20, 21].map((day) => {
                const inRange = isInRange(day);
                const isStart = isRangeStart(day);
                const isEnd = isRangeEnd(day);

                return (
                  <View key={day} className="flex-1 relative">
                    {/* Background for middle of range */}
                    {inRange && !isStart && (
                      <View className="absolute inset-0 bg-[#c2185b]" />
                    )}

                    {/* Gradient for start */}
                    {isStart && (
                      <LinearGradient
                        colors={["#ffffff", "#ff8a95", "#c2185b"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        className="absolute inset-0"
                      />
                    )}

                    <TouchableOpacity
                      className="items-center py-3 relative z-10"
                      onPress={() => handleDatePress(day)}
                    >
                      {/* Circle border for start/end */}
                      {(isStart || isEnd) && (
                        <View className="absolute inset-0 items-center justify-center">
                          <View className="w-12 h-12 border-2 border-[#4a1942] rounded-full" />
                        </View>
                      )}

                      <Text
                        className={`text-lg ${
                          inRange && !isStart ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {day}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>

            {/* Week 4 with range selection */}
            <View className="flex-row mb-4">
              {[22, 23, 24, 25, 26, 27, 28].map((day) => {
                const inRange = isInRange(day);
                const isStart = isRangeStart(day);
                const isEnd = isRangeEnd(day);

                return (
                  <View key={day} className="flex-1 relative">
                    {/* Gradient background for middle of range */}
                    {inRange && !isEnd && (
                      <LinearGradient
                        colors={["#4a1942", "#6a2562"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        className="absolute inset-0"
                      />
                    )}

                    {/* Gradient for end */}
                    {isEnd && (
                      <LinearGradient
                        colors={["#4a1942", "#ffffff"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        className="absolute inset-0"
                      />
                    )}

                    <TouchableOpacity
                      className="items-center py-3 relative z-10"
                      onPress={() => handleDatePress(day)}
                    >
                      {/* Circle border for start/end */}
                      {(isStart || isEnd) && (
                        <View className="absolute inset-0 items-center justify-center">
                          <View className="w-12 h-12 border-2 border-[#4a1942] rounded-full bg-white" />
                        </View>
                      )}

                      <Text
                        className={`text-lg ${
                          inRange && !isEnd ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {day}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>

            {/* Week 5 */}
            <View className="flex-row mb-4">
              {[29, 30, 31].map((day) => (
                <TouchableOpacity
                  key={day}
                  className="flex-1 items-center py-3"
                  onPress={() => handleDatePress(day)}
                >
                  <Text className="text-gray-900 text-lg">{day}</Text>
                </TouchableOpacity>
              ))}
              {nextMonthDays.map((day) => (
                <View key={`next-${day}`} className="flex-1 items-center py-3">
                  <Text className="text-gray-300 text-lg">{day}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>

      {/* Save Button */}
      <View className="px-6 pb-8">
        <TouchableOpacity
          className="rounded-3xl overflow-hidden"
          onPress={handleSave}
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
