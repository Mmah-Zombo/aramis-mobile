import type React from "react";
import {
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import "../global.css";

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

const ChevronRight = ({ size = 24, color = "#000" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M9 18l6-6-6-6"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const Plus = ({ size = 24, color = "#000" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 5v14M5 12h14"
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

const DropletIcon = ({ size = 24, color = "#FF6B7A" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <Path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
  </Svg>
);

const ShieldIcon = ({ size = 24, color = "#5DADE2" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <Path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </Svg>
);

const PillIcon = ({ size = 24, color = "#F39C12" }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Circle cx="12" cy="12" r="9" fill={color} />
    <Path
      d="M8 12h8M12 8v8"
      stroke="#FFF"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);

interface SymptomIconProps {
  type: "cramps" | "protected" | "light" | "pms";
  label: string;
}

const SymptomIcon: React.FC<SymptomIconProps> = ({ type, label }) => {
  const getIcon = () => {
    switch (type) {
      case "cramps":
        return (
          <View className="w-12 h-12 bg-coral rounded-full items-center justify-center">
            <Text className="text-white text-2xl font-bold italic">n</Text>
          </View>
        );
      case "protected":
        return (
          <View className="w-12 h-12 bg-sky rounded-full items-center justify-center">
            <ShieldIcon size={24} color="#FFF" />
          </View>
        );
      case "light":
        return (
          <View className="w-12 h-12 bg-coral rounded-full items-center justify-center">
            <DropletIcon size={24} color="#FFF" />
          </View>
        );
      case "pms":
        return (
          <View className="w-12 h-12 bg-amber rounded-full items-center justify-center">
            <PillIcon size={24} color="#FFF" />
          </View>
        );
    }
  };

  return (
    <View className="items-center">
      {getIcon()}
      <Text className="text-xs text-gray-600 mt-1">{label}</Text>
    </View>
  );
};

const CycleVisualization = () => {
  const centerX = 150;
  const centerY = 150;
  const radius = 100;
  const dotRadius = 4;
  const totalDots = 28;

  const getDotColor = (index: number) => {
    if (index >= 0 && index < 5) return "#5DADE2"; // Blue - fertile
    if (index >= 5 && index < 10) return "#D1D5DB"; // Gray - neutral
    if (index >= 10 && index < 15) return "#6B1B3D"; // Primary - period
    if (index >= 15 && index < 20) return "#D1D5DB"; // Gray - neutral
    if (index >= 20 && index < 25) return "#A4D65E"; // Green - ovulation
    return "#D1D5DB"; // Gray
  };

  return (
    <View className="items-center">
      <View className="relative">
        <Svg width={300} height={300}>
          {/* Dotted circle */}
          {Array.from({ length: totalDots }).map((_, index) => {
            const angle = (index / totalDots) * 2 * Math.PI - Math.PI / 2;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);

            return (
              <Circle
                key={index}
                cx={x}
                cy={y}
                r={dotRadius}
                fill={getDotColor(index)}
              />
            );
          })}
        </Svg>

        {/* Center content */}
        <View className="absolute inset-0 items-center justify-center">
          <View className="w-48 h-48 bg-primary rounded-full items-center justify-center">
            <Text className="text-white/70 text-sm">Period Day</Text>
            <Text className="text-white text-xl font-bold mt-1">
              22 September
            </Text>
          </View>
        </View>

        {/* Day indicator */}
        <View className="absolute top-12 right-12 w-10 h-10 bg-primary rounded-full items-center justify-center border-2 border-white">
          <Text className="text-white font-bold">22</Text>
        </View>
      </View>
    </View>
  );
};

interface CycleProgressBarProps {
  day: number;
  total?: number;
}

const CycleProgressBar: React.FC<CycleProgressBarProps> = ({
  day,
  total = 28,
}) => {
  return (
    <View className="relative">
      <View className="flex-row h-3 rounded-full overflow-hidden bg-gray-200">
        <View
          className="bg-primary h-full"
          style={{ width: `${(5 / total) * 100}%` }}
        />
        <View
          className="bg-lime h-full"
          style={{ width: `${(9 / total) * 100}%` }}
        />
        <View
          className="bg-sky h-full"
          style={{ width: `${(14 / total) * 100}%` }}
        />
      </View>

      {/* Day marker */}
      <View
        className="absolute -top-1 w-8 h-8 bg-primary rounded-full items-center justify-center border-2 border-white"
        style={{ left: `${(day / total) * 100}%`, marginLeft: -16 }}
      >
        <Text className="text-white text-xs font-bold">
          {String(day).padStart(2, "0")}
        </Text>
      </View>
    </View>
  );
};

// Main component
export default function PeriodTrackerScreen() {
  return (
    <View className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" />

      <ScrollView className="flex-1">
        {/* Header */}
        <View className="flex-row items-center px-4 pt-12 pb-4 bg-white">
          <TouchableOpacity className="mr-4">
            <ChevronLeft size={24} color="#000" />
          </TouchableOpacity>
          <Text className="text-xl font-bold">Period Tracker</Text>
        </View>

        {/* Date Range Card */}
        <View className="px-4 py-6">
          <View className="bg-primary rounded-3xl p-6 flex-row items-center justify-between">
            <View className="flex-1">
              <Text className="text-white text-2xl font-bold">
                19 September
              </Text>
              <Text className="text-white/70 text-sm mt-1">
                Period start date
              </Text>
            </View>

            <View className="w-12 h-12 bg-white/20 rounded-full items-center justify-center">
              <View
                className="w-8 h-10 bg-coral rounded-full rounded-t-full"
                style={{
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                }}
              />
            </View>

            <View className="flex-1 items-end">
              <Text className="text-white text-2xl font-bold">
                23 September
              </Text>
              <Text className="text-white/70 text-sm mt-1">
                Period end date
              </Text>
            </View>
          </View>
        </View>

        {/* Cycle Visualization */}
        <View className="items-center py-6">
          <CycleVisualization />
        </View>

        {/* Period Logs Button */}
        <View className="items-center pb-6">
          <TouchableOpacity className="bg-white rounded-full px-6 py-3 flex-row items-center shadow-sm">
            <View className="w-6 h-6 bg-coral rounded-full items-center justify-center mr-2">
              <Plus size={16} color="#FFF" />
            </View>
            <Text className="text-coral font-semibold">Period Logs</Text>
          </TouchableOpacity>
        </View>

        {/* Past Cycles Section */}
        <View className="px-4 pb-6">
          <Text className="text-2xl font-bold mb-1">Past Cycles</Text>
          <Text className="text-gray-500 text-sm mb-4">
            Track your previous cycles
          </Text>

          {/* Current Cycle Card */}
          <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
            <View className="flex-row items-center justify-between mb-4">
              <Text className="text-lg font-semibold">Current Cycle</Text>
              <TouchableOpacity className="flex-row items-center">
                <Edit2 size={16} color="#666" />
                <Text className="text-gray-600 ml-1">Edit Dates</Text>
              </TouchableOpacity>
            </View>

            <CycleProgressBar day={4} />

            <View className="mt-4">
              <Text className="font-semibold mb-3">Period Logs</Text>

              {/* Log Entry 1 */}
              <View className="mb-4">
                <View className="flex-row items-center mb-2">
                  <View className="w-2 h-2 bg-black rounded-full mr-2" />
                  <Text className="text-sm text-gray-700">23 Sep, 2025</Text>
                </View>
                <View className="flex-row gap-3">
                  <SymptomIcon type="cramps" label="Cramps" />
                  <SymptomIcon type="protected" label="Protected" />
                  <SymptomIcon type="light" label="Light" />
                </View>
              </View>

              {/* Log Entry 2 */}
              <View>
                <View className="flex-row items-center mb-2">
                  <View className="w-2 h-2 bg-black rounded-full mr-2" />
                  <Text className="text-sm text-gray-700">27 Sep, 2025</Text>
                </View>
                <View className="flex-row gap-3">
                  <SymptomIcon type="cramps" label="Cramps" />
                  <SymptomIcon type="protected" label="Protected" />
                  <SymptomIcon type="light" label="Light" />
                  <SymptomIcon type="pms" label="PMS" />
                </View>
              </View>
            </View>
          </View>

          {/* Past Cycle Card */}
          <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
            <View className="flex-row items-center justify-between mb-4">
              <Text className="text-sm text-primary font-medium">
                22 Nov, 2020 - 23 Dec, 2020
              </Text>
              <TouchableOpacity className="flex-row items-center">
                <Edit2 size={16} color="#666" />
                <Text className="text-gray-600 ml-1">Edit Dates</Text>
              </TouchableOpacity>
            </View>

            <CycleProgressBar day={15} total={31} />

            <View className="mt-4">
              <Text className="font-semibold mb-3">Period Logs</Text>

              {/* Log Entry 1 */}
              <View className="mb-4">
                <View className="flex-row items-center mb-2">
                  <View className="w-2 h-2 bg-black rounded-full mr-2" />
                  <Text className="text-sm text-gray-700">23 Dec, 2020</Text>
                </View>
                <View className="flex-row gap-3">
                  <SymptomIcon type="cramps" label="Cramps" />
                  <SymptomIcon type="protected" label="Protected" />
                  <SymptomIcon type="light" label="Light" />
                </View>
              </View>

              {/* Log Entry 2 */}
              <View>
                <View className="flex-row items-center mb-2">
                  <View className="w-2 h-2 bg-black rounded-full mr-2" />
                  <Text className="text-sm text-gray-700">27 Dec, 2020</Text>
                </View>
                <View className="flex-row gap-3">
                  <SymptomIcon type="cramps" label="Cramps" />
                  <SymptomIcon type="pms" label="PMS" />
                </View>
              </View>
            </View>
          </View>

          {/* View All History Button */}
          <TouchableOpacity className="flex-row items-center justify-center py-4">
            <Text className="font-semibold mr-2">View All History</Text>
            <ChevronRight size={20} color="#000" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
