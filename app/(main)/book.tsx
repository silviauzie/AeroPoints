import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function book() {
  return (
    <SafeAreaView style={styles.container1}>
      <View style={styles.header}>
        <View>
          <Image
            source={require("../../assets/images/Book.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.textcontainer}>
          <Text style={styles.heading}>Easily search, book and pay</Text>
          <Text style={styles.small}>
            Explore destinations and easily search and book flights, hotels and
            holidays
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    marginTop: 70,
  },

  header: {
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
    gap: 50,
  },

  textcontainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
    gap: 10,
  },

  image: {
    width: 300,
    height: 200,
    resizeMode: "contain",
  },

  heading: {
    fontSize: 18,
    fontWeight: "600",
    marginHorizontal: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  small: {
    color: "#777",
    textAlign: "center",
  },
});
