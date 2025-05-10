"use client";

import React, { useEffect } from "react";
import { StyleSheet, useColorScheme, ViewStyle } from "react-native";

import { BlurView } from "expo-blur";
import { Stack } from "expo-router";
import Animated, {
  AnimatedRef,
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";
import { useReanimatedHeaderHeight } from "react-native-screens/reanimated";
import { BodyScrollView } from "./ui/BodyScrollView";

import * as AC from "@bacons/apple-colors";

export const ScrollContext =
  React.createContext<AnimatedRef<Animated.ScrollView> | null>(null);

const ABlurView = Animated.createAnimatedComponent(BlurView);

export function ShowPageBody({ children }: { children: React.ReactNode }) {
  const ref = useAnimatedRef<Animated.ScrollView>();

  const headerHeight = useReanimatedHeaderHeight();
  const scroll = useScrollViewOffset(ref, headerHeight);
  const style = useAnimatedStyle(() => {
    console.log("scroll.value", scroll.value);

    if (process.env.EXPO_OS === "ios") {
      const inputRange = [0, 10];
      //   const inputRange = [-100, 200];
      return {
        opacity: interpolate(scroll.value, inputRange, [0, 1], "clamp"),

        // borderBottomColor: `rgba(84.15, 84.15, 89.25,${interpolate(
        //   scroll.value,
        //   inputRange,
        //   [0, 0.5],
        //   "clamp"
        // )})`,
      };
    }

    return {
      opacity: interpolate(scroll.value, [100, 150], [0, 1], "clamp"),

      borderBottomColor: `rgba(84.15, 84.15, 89.25,${interpolate(
        scroll.value,
        [100, 150],
        [0, 0.5],
        "clamp"
      )})`,
    };
  });
  const titleStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scroll.value, [-100, 100], [0, 1], "clamp"),
    };
  });

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo();
    }
  }, [ref]);

  return (
    <BodyScrollView ref={ref}>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerLargeTitle: false,
          headerLargeStyle: {
            backgroundColor: undefined,
          },
          headerBackButtonDisplayMode: "minimal",
          headerTintColor: AC.label,
          headerBackground:
            process.env.EXPO_OS === "web"
              ? () => {
                  return <AnimatedShowHeaderBackground style={style} />;
                }
              : undefined,
          headerTitle(props) {
            return (
              <Animated.Text
                style={[
                  {
                    width: "100%",
                    color: AC.label,
                    fontSize: 16,
                    fontWeight: "600",
                  },
                  titleStyle,
                ]}
              >
                {props.children}
              </Animated.Text>
            );
          },
        }}
      />

      <ScrollContext.Provider value={ref}>{children}</ScrollContext.Provider>
    </BodyScrollView>
  );
}
const HEADER_HEIGHT = 300;

export function ParallaxImageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  "use no memo";
  const ref = React.use(ScrollContext);
  const scrollOffset = useScrollViewOffset(ref);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    console.log("scrollOffset.value", scrollOffset.value);
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
            "clamp"
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        {
          height: HEADER_HEIGHT,
        },
        headerAnimatedStyle,
      ]}
    >
      {children}
    </Animated.View>
  );
}

export function useAnimatedShowHeaderStyle(
  ref: AnimatedRef<Animated.ScrollView>
) {
  const scroll = useScrollViewOffset(ref);
  return useAnimatedStyle(() => {
    return {
      opacity: interpolate(scroll.value, [100, 150], [0, 1], "clamp"),

      borderBottomColor: `rgba(84.15, 84.15, 89.25,${interpolate(
        scroll.value,
        [100, 150],
        [0, 0.5],
        "clamp"
      )})`,
    };
  });
}

export function AnimatedShowHeaderBackground({ style }: { style: ViewStyle }) {
  const theme = useColorScheme();

  return (
    <ABlurView
      intensity={100}
      tint={
        theme === "dark" ? "systemChromeMaterialDark" : "systemChromeMaterial"
      }
      style={[
        StyleSheet.absoluteFill,
        {
          borderBottomWidth: 0.5,
        },
        style,
      ]}
    />
  );
}
