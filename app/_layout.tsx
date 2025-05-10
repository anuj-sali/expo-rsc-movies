import Tabs from "@/components/ui/Tabs";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import ThemeProvider from "@/components/ui/ThemeProvider";
import { ReanimatedScreenProvider } from "react-native-screens/reanimated";

import React from "react";

export { ErrorBoundary } from "expo-router";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <ReanimatedScreenProvider>
        <Tabs>
          <Tabs.Screen
            name="(index)"
            title="Search"
            systemImage="magnifyingglass"
          />
        </Tabs>
      </ReanimatedScreenProvider>
      {process.env.EXPO_OS === "android" && <StatusBar style="auto" />}
    </ThemeProvider>
  );
}
