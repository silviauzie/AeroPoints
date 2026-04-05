import type { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import { PlatformPressable } from "@react-navigation/elements";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Earth, House, Search, ShoppingBag, User } from "lucide-react-native";
import React from "react";
import { Platform, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ACTIVE_RED = "#CD0100";
const INACTIVE_ICON = "#1C1C1E";
const INACTIVE_LABEL = "#8E8E93";
const ACTIVE_PILL_BG = "#EBEBEB";

const TAB_BAR_HEIGHT = 57;
/** Inset from each horizontal edge. Use `start`/`end` on the tab bar so it overrides React Navigation’s `start`/`end`: 0. */
const TAB_HORIZONTAL_INSET = 20;
const ICON_STROKE_WIDTH = 2;

function TabBarButton(props: BottomTabBarButtonProps) {
  const { style, ...rest } = props;
  return <PlatformPressable {...rest} style={[style, styles.tabItemOuter]} />;
}

export default function RootLayout() {
  const insets = useSafeAreaInsets();

  return (
    <React.Fragment>
      <StatusBar style="auto" />
      <Tabs
        screenOptions={{
          // Keep icon + label stacked; otherwise landscape uses "beside icon" and labels often clip in a short bar.
          tabBarLabelPosition: "below-icon",
          tabBarActiveTintColor: ACTIVE_RED,
          tabBarInactiveTintColor: INACTIVE_LABEL,
          tabBarActiveBackgroundColor: ACTIVE_PILL_BG,
          tabBarShowLabel: true,
          tabBarLabelStyle: styles.tabLabel,
          tabBarButton: (props) => <TabBarButton {...props} />,
          tabBarItemStyle: styles.tabItem,
          tabBarStyle: [
            styles.tabBarFloating,
            {
              bottom: insets.bottom + 10,
              height: TAB_BAR_HEIGHT,
              borderRadius: TAB_BAR_HEIGHT / 2,
            },
          ],
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            //href: null,
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ focused }) => (
              <House
                size={22}
                color={focused ? ACTIVE_RED : INACTIVE_ICON}
                fill="transparent"
                strokeWidth={ICON_STROKE_WIDTH}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="Trips"
          options={{
            headerShown: false,
            title: "Trips",
            tabBarIcon: ({ focused }) => (
              <Earth
                size={22}
                color={focused ? ACTIVE_RED : INACTIVE_ICON}
                fill="transparent"
                strokeWidth={ICON_STROKE_WIDTH}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="book"
          options={{
            headerShown: false,
            title: "Book",
            tabBarIcon: ({ focused }) => (
              <Search
                size={22}
                color={focused ? ACTIVE_RED : INACTIVE_ICON}
                fill="transparent"
                strokeWidth={ICON_STROKE_WIDTH}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="shop"
          options={{
            headerShown: false,
            title: "Shop",
            tabBarIcon: ({ focused }) => (
              <ShoppingBag
                size={22}
                color={focused ? ACTIVE_RED : INACTIVE_ICON}
                fill="transparent"
                strokeWidth={ICON_STROKE_WIDTH}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="qff"
          options={{
            headerShown: false,
            title: "My Qff",
            tabBarIcon: ({ focused }) => (
              <User
                size={22}
                color={focused ? ACTIVE_RED : INACTIVE_ICON}
                fill="transparent"
                strokeWidth={ICON_STROKE_WIDTH}
              />
            ),
          }}
        />
      </Tabs>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  tabBarFloating: {
    position: "absolute",
    start: TAB_HORIZONTAL_INSET,
    end: TAB_HORIZONTAL_INSET,
    paddingHorizontal: 6,
    paddingTop: 4,
    paddingBottom: 4,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 0,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.12,
        shadowRadius: 24,
      },
      android: {
        elevation: 10,
      },
      default: {},
    }),
  },
  tabItemOuter: {
    borderRadius: 22,
    borderCurve: "continuous",
  },
  tabItem: {
    borderRadius: 22,
  },
  tabLabel: {
    fontSize: 10,
    fontWeight: "500",
    marginBottom: 2,
  },
});
