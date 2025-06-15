/// <reference types="react/canary" />
import { BodyScrollView } from "@/components/ui/BodyScrollView";
import { renderTrendingMedia } from "@/functions/render-search";
import React from "react";
import { ScrollView, useWindowDimensions, View } from "react-native";

export function SearchPlaceholder() {
  const { width } = useWindowDimensions();
  const cardWidth = 140;
  const cardHeight = 210;
  const gap = 8;
  const numCards = Math.floor((width * 2) / (cardWidth + gap));

  function SkeletonRow() {
    return (
      <View style={{ paddingLeft: 16 }}>
        <View
          style={{
            width: 200,
            height: 24,
            backgroundColor: "rgba(120,120,128,0.12)",
            borderRadius: 4,
            marginBottom: 12,
          }}
        />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[...Array(numCards)].map((_, i) => (
            <View
              key={i}
              style={{
                width: cardWidth,
                marginRight: gap,
              }}
            >
              <View
                style={{
                  width: cardWidth,
                  height: cardHeight,
                  backgroundColor: "rgba(120,120,128,0.12)",
                  borderRadius: 8,
                  marginBottom: 8,
                }}
              />
              <View
                style={{
                  width: "100%",
                  height: 16,
                  backgroundColor: "rgba(120,120,128,0.12)",
                  borderRadius: 4,
                  marginBottom: 4,
                }}
              />
              <View
                style={{
                  width: "30%",
                  height: 14,
                  backgroundColor: "rgba(120,120,128,0.12)",
                  borderRadius: 4,
                }}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }

  const numItems = process.env.EXPO_OS === "web" ? 9 : 6;

  return (
    <BodyScrollView contentContainerStyle={{ paddingVertical: 16, gap: 24 }}>
      {/* Trending Movies */}
      <React.Suspense fallback={<SkeletonRow />}>
        {renderTrendingMedia({
          type: "movie",
          timeWindow: "day",
          size: numItems,
        })}
      </React.Suspense>

      {/* Trending TV Shows */}
      <React.Suspense fallback={<SkeletonRow />}>
        {renderTrendingMedia({
          type: "tv",
          timeWindow: "day",
          size: numItems,
        })}
      </React.Suspense>
    </BodyScrollView>
  );
}
