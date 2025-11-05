// import { Ionicons } from "@expo/vector-icons";
// import { LinearGradient } from "expo-linear-gradient";
// import { styled } from "nativewind";
// import React, { useState } from "react";
// import {
//   Dimensions,
//   Image,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";

// const StyledView = styled(View);
// const StyledText = styled(Text);
// const StyledTouchableOpacity = styled(TouchableOpacity);
// const StyledScrollView = styled(ScrollView);
// const StyledSafeAreaView = styled(SafeAreaView);
// const StyledImage = styled(Image);
// const StyledLinearGradient = styled(LinearGradient);

// const { width } = Dimensions.get("window");

// export default function ProductDetailScreen() {
//   const [quantity, setQuantity] = useState(1);
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);
//   const [isFavorite, setIsFavorite] = useState(false);
//   const [showFullDescription, setShowFullDescription] = useState(false);

//   const productImages = [
//     // require("./assets/package-1.jpg"), // Replace with actual images
//     // require("./assets/package-2.jpg"),
//     // require("./assets/package-3.jpg"),
//     // require("./assets/package-4.jpg"),
//     "", "", "", ""
//   ];

//   const items = [
//     "Pads & Tampons",
//     "Heating Patch",
//     "Sucks",
//     "Snacks",
//     "Scent Candles",
//     "Lip Gloss",
//     "Face Sheets",
//     "Lip Gloss",
//   ];

//   const updateQuantity = (delta: number) => {
//     setQuantity(Math.max(1, quantity + delta));
//   };

//   const handleAddToCart = () => {
//     console.log("Add to cart:", quantity);
//     // Add to cart logic
//   };

//   return (
//     <StyledSafeAreaView className="flex-1 bg-white">
//       <StatusBar barStyle="light-content" />

//       {/* Product Image Section */}
//       <StyledView className="relative">
//         <StyledImage
//           source={productImages[selectedImageIndex]}
//           className="w-full h-96"
//           resizeMode="cover"
//         />

//         {/* Overlay Buttons */}
//         <StyledView className="absolute top-12 left-0 right-0 flex-row justify-between px-6">
//           <StyledTouchableOpacity className="w-12 h-12 bg-gray-800/50 rounded-full items-center justify-center">
//             <Ionicons name="chevron-back" size={24} color="#ffffff" />
//           </StyledTouchableOpacity>

//           <StyledTouchableOpacity
//             className="w-12 h-12 bg-gray-800/50 rounded-full items-center justify-center"
//             onPress={() => setIsFavorite(!isFavorite)}
//           >
//             <Ionicons
//               name={isFavorite ? "heart" : "heart-outline"}
//               size={24}
//               color="#ff6b9d"
//             />
//           </StyledTouchableOpacity>
//         </StyledView>
//       </StyledView>

//       <StyledScrollView
//         className="flex-1 bg-white"
//         showsVerticalScrollIndicator={false}
//       >
//         {/* Image Thumbnails */}
//         <StyledView className="px-6 py-6 flex-row gap-3">
//           {productImages.map((_, index) => (
//             <StyledTouchableOpacity
//               key={index}
//               className={`w-16 h-16 rounded-2xl overflow-hidden ${
//                 selectedImageIndex === index
//                   ? "border-3 border-[#c2185b]"
//                   : "border border-gray-200"
//               }`}
//               onPress={() => setSelectedImageIndex(index)}
//             >
//               <StyledView className="w-full h-full bg-gray-200" />
//             </StyledTouchableOpacity>
//           ))}
//         </StyledView>

//         {/* Product Info */}
//         <StyledView className="px-6">
//           <StyledView className="flex-row items-start justify-between mb-3">
//             <StyledText className="text-3xl font-bold text-[#4a1942] flex-1">
//               REGULAR PACK
//             </StyledText>
//             <StyledText className="text-2xl font-bold text-[#c2185b] ml-4">
//               LE 600.00
//             </StyledText>
//           </StyledView>

//           {/* Rating */}
//           <StyledView className="flex-row items-center mb-6">
//             {[1, 2, 3, 4, 5].map((star) => (
//               <Ionicons
//                 key={star}
//                 name={star <= 4 ? "star" : "star-outline"}
//                 size={20}
//                 color={star <= 4 ? "#fbbf24" : "#d1d5db"}
//                 style={{ marginRight: 4 }}
//               />
//             ))}
//             <StyledText className="text-gray-400 ml-2">(4.5)</StyledText>
//           </StyledView>

//           {/* Quantity and Share */}
//           <StyledView className="flex-row items-center justify-between mb-8">
//             <StyledView className="flex-row items-center border border-gray-200 rounded-xl">
//               <StyledTouchableOpacity
//                 className="w-12 h-12 items-center justify-center"
//                 onPress={() => updateQuantity(-1)}
//               >
//                 <Ionicons name="remove" size={20} color="#4a1942" />
//               </StyledTouchableOpacity>

//               <StyledText className="text-xl font-bold text-gray-900 px-6">
//                 {quantity}
//               </StyledText>

//               <StyledTouchableOpacity
//                 className="w-12 h-12 items-center justify-center"
//                 onPress={() => updateQuantity(1)}
//               >
//                 <Ionicons name="add" size={20} color="#4a1942" />
//               </StyledTouchableOpacity>
//             </StyledView>

//             <StyledTouchableOpacity className="w-12 h-12 items-center justify-center">
//               <Ionicons name="share-outline" size={28} color="#4a1942" />
//             </StyledTouchableOpacity>
//           </StyledView>

//           {/* Description */}
//           <StyledView className="mb-8">
//             <StyledText className="text-lg font-bold text-gray-900 mb-3">
//               DESCRIPTION
//             </StyledText>
//             <StyledText className="text-gray-500 text-base leading-6">
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry. Lorem Ipsum has been the industry's book
//               {!showFullDescription && "..."}
//               <StyledText
//                 className="text-gray-900 font-semibold underline"
//                 onPress={() => setShowFullDescription(!showFullDescription)}
//               >
//                 detail
//               </StyledText>
//             </StyledText>
//           </StyledView>

//           {/* Items */}
//           <StyledView className="mb-8">
//             <StyledText className="text-2xl font-bold text-gray-900 mb-4">
//               Items
//             </StyledText>
//             <StyledView className="flex-row flex-wrap gap-3">
//               {items.map((item, index) => (
//                 <StyledView
//                   key={index}
//                   className="bg-[#e8a598] px-6 py-3 rounded-full"
//                 >
//                   <StyledText className="text-[#4a1942] text-base font-medium">
//                     {item}
//                   </StyledText>
//                 </StyledView>
//               ))}
//             </StyledView>
//           </StyledView>
//         </StyledView>
//       </StyledScrollView>

//       {/* Add to Cart Button */}
//       <StyledView className="px-6 pb-8 pt-4 bg-white">
//         <StyledTouchableOpacity
//           className="rounded-2xl overflow-hidden"
//           onPress={handleAddToCart}
//         >
//           <StyledLinearGradient
//             colors={["#ff6b9d", "#e91e63", "#c2185b"]}
//             start={{ x: 0, y: 0 }}
//             end={{ x: 1, y: 1 }}
//             className="py-5 flex-row items-center justify-center"
//           >
//             <Ionicons
//               name="bag-outline"
//               size={24}
//               color="#ffffff"
//               style={{ marginRight: 12 }}
//             />
//             <StyledText className="text-white text-lg font-bold">
//               ADD TO
//             </StyledText>
//           </StyledLinearGradient>
//         </StyledTouchableOpacity>
//       </StyledView>
//     </StyledSafeAreaView>
//   );
// }
