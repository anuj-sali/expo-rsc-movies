import { Image, Platform, Text, TouchableOpacity, View } from "react-native";

import * as Form from "@/components/ui/Form";
import * as AC from "@bacons/apple-colors";
import React from "react";

import Constants from "expo-constants";

import { IconSymbol } from "@/components/ui/IconSymbol";
import * as App from "expo-application";
import { BlurView } from "expo-blur";
import { router } from "expo-router";

const backgroundImage =
  process.env.EXPO_OS === "web"
    ? `backgroundImage`
    : `experimental_backgroundImage`;

export default function SettingsScreen() {
  return (
    <Form.List>
      <Form.Section>
        <View
          custom
          style={{
            flex: 1,
            gap: 16,
            borderCurve: "circular",
            borderWidth: 0.5,
            borderColor: "rgba(0,0,0,0.1)",

            [backgroundImage]: `linear-gradient(90deg,rgb(248, 242, 253) 0%,rgb(237, 230, 251) 12.5%,rgb(252, 249, 255) 38.86%,rgb(192, 183, 247) 62.45%,rgb(234, 225, 251) 83.82%,rgb(234, 231, 252) 100%)`,
          }}
        >
          <Image
            pointerEvents="none"
            style={{
              width: "100%",
              transform: [{ scale: process.env.EXPO_OS === "web" ? 1 : 2 }],
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              zIndex: 999,
              resizeMode: "repeat",
              opacity: 0.3,
              mixBlendMode: "soft-light",
            }}
            source={require("@/assets/images/texture.png")}
          />
          <TouchableOpacity
            onPress={() => {
              router.push("https://github.com/EvanBacon/expo-rsc-movies");
            }}
            activeOpacity={0.6}
            style={{
              flex: 1,
              gap: 8,
              padding: 16,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                gap: 8,
                flexDirection: "row",
                flex: 1,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ flex: 1 }}>
                <Form.Text
                  style={{
                    fontSize: 20,
                    color: "black",
                    fontWeight: "600",
                  }}
                >
                  Expo Movies
                </Form.Text>
                <Form.Text style={{ fontSize: 14, color: "black" }}>
                  Beautiful movies app with modern data fetching and security.
                </Form.Text>
              </View>

              <BlurView
                tint="extraLight"
                intensity={100}
                style={{
                  flexDirection: "row",
                  gap: 8,
                  marginLeft: 8,
                  borderWidth: 0.5,
                  borderColor: AC.separator,
                  overflow: "hidden",

                  borderCurve: "continuous",
                  borderRadius: 12,
                  padding: 8,
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <IconSymbol name="app.gift" color={"black"} />
                <Text
                  style={{
                    fontWeight: "600",
                    lineHeight: 16,
                  }}
                >
                  Clone
                </Text>
              </BlurView>
            </View>
          </TouchableOpacity>
        </View>
      </Form.Section>

      <Form.Section>
        <Form.Link href="https://docs.expo.dev/guides/server-components/">
          Expo Server Components
        </Form.Link>
        <Form.Link
          href="https://evanbacon.dev"
          hintImage="person"
          target="_blank"
        >
          Evan Bacon
        </Form.Link>
      </Form.Section>

      <Form.Section>
        <Form.Text systemImage={{ name: "iphone" }}>
          Expo{" "}
          {Constants.expoConfig?.sdkVersion?.split(".").shift() ?? "(Latest)"}
        </Form.Text>
      </Form.Section>

      <View
        style={{ padding: 12, alignItems: "center", justifyContent: "center" }}
      >
        <Form.Text
          style={{
            textAlign: "center",
            fontSize: 12,
            color: AC.secondaryLabel,
          }}
        >
          Expo Movies for{" "}
          {Platform.select({
            web: "Web",
            ios: `iOS v${App.nativeApplicationVersion} (${App.nativeBuildVersion})`,
            android: `Android v${App.nativeApplicationVersion} (${App.nativeBuildVersion})`,
          })}
        </Form.Text>
      </View>
    </Form.List>
  );
}
