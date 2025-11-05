// import { Ionicons } from "@expo/vector-icons";
// import { LinearGradient } from "expo-linear-gradient";
// import { styled } from "nativewind";
// import React, { useState } from "react";
// import {
//     SafeAreaView,
//     ScrollView,
//     StatusBar,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     View,
// } from "react-native";

// const StyledView = styled(View);
// const StyledText = styled(Text);
// const StyledTouchableOpacity = styled(TouchableOpacity);
// const StyledScrollView = styled(ScrollView);
// const StyledSafeAreaView = styled(SafeAreaView);
// const StyledTextInput = styled(TextInput);
// const StyledLinearGradient = styled(LinearGradient);

// type PaymentMethod = "mobile" | "card";

// export default function CheckoutScreen() {
//   const [quantity, setQuantity] = useState(2);
//   const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("mobile");
//   const [provider, setProvider] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [pin, setPin] = useState("");
//   const [address, setAddress] = useState("");
//   const [location, setLocation] = useState("");

//   const pricePerItem = 330;
//   const totalPrice = quantity * pricePerItem;

//   const updateQuantity = (delta: number) => {
//     setQuantity(Math.max(1, quantity + delta));
//   };

//   const handlePay = () => {
//     console.log("Processing payment:", {
//       quantity,
//       paymentMethod,
//       totalPrice,
//       provider,
//       phoneNumber,
//       address,
//     });
//     // Process payment logic
//   };

//   return (
//     <StyledSafeAreaView className="flex-1 bg-white">
//       <StatusBar barStyle="dark-content" />

//       {/* Header */}
//       <StyledView className="flex-row items-center px-6 py-4 border-b border-gray-100">
//         <StyledTouchableOpacity className="mr-4">
//           <Ionicons name="chevron-back" size={24} color="#1a1a2e" />
//         </StyledTouchableOpacity>
//         <StyledText className="text-xl font-semibold text-gray-900">
//           Packages
//         </StyledText>
//       </StyledView>

//       <StyledScrollView className="flex-1" showsVerticalScrollIndicator={false}>
//         {/* Quantity Section */}
//         <StyledView className="px-6 py-6">
//           <StyledText className="text-xl font-bold text-gray-900 mb-4">
//             Quantity
//           </StyledText>

//           <StyledView className="flex-row items-center justify-between">
//             <StyledView className="flex-row items-center">
//               <StyledTouchableOpacity
//                 className="w-12 h-12 bg-gray-100 rounded-full items-center justify-center"
//                 onPress={() => updateQuantity(-1)}
//               >
//                 <Ionicons name="remove" size={20} color="#4a1942" />
//               </StyledTouchableOpacity>

//               <StyledText className="text-3xl font-bold text-gray-900 mx-6">
//                 {quantity}
//               </StyledText>

//               <StyledTouchableOpacity
//                 className="w-12 h-12 bg-gray-100 rounded-full items-center justify-center"
//                 onPress={() => updateQuantity(1)}
//               >
//                 <Ionicons name="add" size={20} color="#4a1942" />
//               </StyledTouchableOpacity>
//             </StyledView>

//             <StyledView className="bg-[#e8a598] px-6 py-3 rounded-xl">
//               <StyledText className="text-[#4a1942] text-lg font-bold">
//                 Le {totalPrice.toFixed(2)}
//               </StyledText>
//             </StyledView>
//           </StyledView>
//         </StyledView>

//         {/* Payment Methods */}
//         <StyledView className="px-6 py-4">
//           <StyledText className="text-xl font-bold text-gray-900 mb-4">
//             Payment Methods
//           </StyledText>

//           {/* Mobile Money Option */}
//           <StyledTouchableOpacity
//             className={`rounded-2xl p-5 mb-4 flex-row items-center justify-between ${
//               paymentMethod === "mobile"
//                 ? "bg-[#4a1942]"
//                 : "bg-white border-2 border-gray-200"
//             }`}
//             onPress={() => setPaymentMethod("mobile")}
//           >
//             <StyledView className="flex-1">
//               <StyledText
//                 className={`text-lg font-bold mb-1 ${
//                   paymentMethod === "mobile" ? "text-white" : "text-gray-900"
//                 }`}
//               >
//                 Mobile Money
//               </StyledText>
//               <StyledText
//                 className={`text-sm ${
//                   paymentMethod === "mobile" ? "text-white/70" : "text-gray-500"
//                 }`}
//               >
//                 Orange Money, Afrimoney
//               </StyledText>
//             </StyledView>

//             <StyledView
//               className={`w-12 h-12 rounded-xl items-center justify-center ${
//                 paymentMethod === "mobile" ? "bg-white/20" : "bg-gray-100"
//               }`}
//             >
//               {paymentMethod === "mobile" ? (
//                 <Ionicons name="checkmark" size={24} color="#ffffff" />
//               ) : (
//                 <Ionicons
//                   name="phone-portrait-outline"
//                   size={24}
//                   color="#4a1942"
//                 />
//               )}
//             </StyledView>
//           </StyledTouchableOpacity>

//           {/* Card Payment Option */}
//           <StyledTouchableOpacity
//             className={`rounded-2xl p-5 flex-row items-center justify-between ${
//               paymentMethod === "card"
//                 ? "bg-[#4a1942]"
//                 : "bg-white border-2 border-gray-200"
//             }`}
//             onPress={() => setPaymentMethod("card")}
//           >
//             <StyledView className="flex-1">
//               <StyledText
//                 className={`text-lg font-bold mb-1 ${
//                   paymentMethod === "card" ? "text-white" : "text-gray-900"
//                 }`}
//               >
//                 Card Payment
//               </StyledText>
//               <StyledText
//                 className={`text-sm ${
//                   paymentMethod === "card" ? "text-white/70" : "text-gray-500"
//                 }`}
//               >
//                 Orange Money, Afrimoney
//               </StyledText>
//             </StyledView>

//             <StyledView className="flex-row gap-2">
//               <StyledView className="w-10 h-7 bg-blue-600 rounded items-center justify-center">
//                 <StyledText className="text-white text-xs font-bold">
//                   VISA
//                 </StyledText>
//               </StyledView>
//               <StyledView className="w-10 h-7 bg-red-600 rounded items-center justify-center">
//                 <StyledText className="text-white text-xs font-bold">
//                   MC
//                 </StyledText>
//               </StyledView>
//             </StyledView>
//           </StyledTouchableOpacity>
//         </StyledView>

//         {/* Mobile Money Form Fields */}
//         {paymentMethod === "mobile" && (
//           <StyledView className="px-6 py-4">
//             {/* Choose Provider */}
//             <StyledView className="mb-6">
//               <StyledText className="text-gray-600 text-sm mb-2">
//                 Choose Provider *
//               </StyledText>
//               <StyledView className="bg-gray-50 rounded-xl px-4 py-4 border border-gray-200">
//                 <StyledText className="text-gray-400">
//                   - Select Date -
//                 </StyledText>
//               </StyledView>
//             </StyledView>

//             {/* Phone Number */}
//             <StyledView className="mb-6">
//               <StyledText className="text-gray-600 text-sm mb-2">
//                 Phone Number *
//               </StyledText>
//               <StyledView className="bg-gray-50 rounded-xl px-4 py-4 border border-gray-200 flex-row items-center">
//                 <StyledText className="text-[#c2185b] font-semibold mr-3">
//                   +232
//                 </StyledText>
//                 <StyledTextInput
//                   className="flex-1 text-gray-900 text-base"
//                   placeholder="00 000 000"
//                   placeholderTextColor="#9ca3af"
//                   keyboardType="phone-pad"
//                   value={phoneNumber}
//                   onChangeText={setPhoneNumber}
//                 />
//               </StyledView>
//             </StyledView>

//             {/* Pin */}
//             <StyledView className="mb-6">
//               <StyledText className="text-gray-600 text-sm mb-2">
//                 Pin *
//               </StyledText>
//               <StyledTextInput
//                 className="bg-gray-50 rounded-xl px-4 py-4 border border-gray-200 text-gray-900 text-base tracking-widest"
//                 placeholder="0 0 0 0"
//                 placeholderTextColor="#9ca3af"
//                 keyboardType="number-pad"
//                 maxLength={4}
//                 secureTextEntry
//                 value={pin}
//                 onChangeText={setPin}
//               />
//             </StyledView>
//           </StyledView>
//         )}

//         {/* Contact Address */}
//         <StyledView className="px-6 py-4">
//           <StyledText className="text-xl font-bold text-[#4a1942] mb-4">
//             Contact Address
//           </StyledText>

//           {/* Address */}
//           <StyledView className="mb-6">
//             <StyledText className="text-gray-600 text-sm mb-2">
//               Address *
//             </StyledText>
//             <StyledTextInput
//               className="bg-gray-50 rounded-xl px-4 py-4 border border-gray-200 text-gray-900 text-base"
//               placeholder="#23 Wilkinson Road, Freetown"
//               placeholderTextColor="#9ca3af"
//               value={address}
//               onChangeText={setAddress}
//             />
//           </StyledView>

//           {/* Live Location */}
//           <StyledView className="mb-6">
//             <StyledText className="text-gray-600 text-sm mb-2">
//               Live Location (optional)
//             </StyledText>
//             <StyledView className="bg-gray-50 rounded-xl px-4 py-4 border border-gray-200 flex-row items-center">
//               <StyledTextInput
//                 className="flex-1 text-gray-900 text-base"
//                 placeholder="Lat, Long"
//                 placeholderTextColor="#9ca3af"
//                 value={location}
//                 onChangeText={setLocation}
//               />
//               <Ionicons name="location" size={24} color="#c2185b" />
//             </StyledView>
//           </StyledView>
//         </StyledView>

//         {/* Spacer for bottom button */}
//         <StyledView className="h-24" />
//       </StyledScrollView>

//       {/* Pay Button */}
//       <StyledView className="absolute bottom-0 left-0 right-0 bg-white px-6 py-6 border-t border-gray-100">
//         <StyledView className="flex-row items-center justify-between">
//           <StyledText className="text-2xl font-bold text-gray-900">
//             Le {totalPrice.toFixed(2)}
//           </StyledText>

//           <StyledTouchableOpacity
//             className="flex-1 ml-4 rounded-2xl overflow-hidden"
//             onPress={handlePay}
//           >
//             <StyledLinearGradient
//               colors={["#ff8a95", "#e8a598"]}
//               start={{ x: 0, y: 0 }}
//               end={{ x: 1, y: 0 }}
//               className="py-4 px-8 flex-row items-center justify-center"
//             >
//               <StyledText className="text-white text-lg font-bold mr-3">
//                 Pay
//               </StyledText>
//               <Ionicons name="arrow-forward" size={20} color="#ffffff" />
//             </StyledLinearGradient>
//           </StyledTouchableOpacity>
//         </StyledView>
//       </StyledView>
//     </StyledSafeAreaView>
//   );
// }
