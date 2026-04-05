import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#FFFFFF",
        //gap: 30,
      }}
    >
      <Image
        source={require("../assets/images/RedLogoForReactProject.png")}
        style={{ width: 200, height: 200 }}
      />
      <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 10 }}>
        Welcome!
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontWeight: "300",
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        To get started, log in to your Quantas frequent flyer account or join
        now for free
      </Text>
      {/* Linking the pressable button to the settings screen */}
      <Link href="/Trips" asChild>
        <Pressable style={styles.button1}>
          <Text style={styles.text1}>LOG IN</Text>
        </Pressable>
      </Link>
      <Link href="/home" asChild>
        <Pressable style={styles.button2}>
          <Text style={styles.text2}>JOIN QFF FOR FREE</Text>
        </Pressable>
      </Link>
      <Link href="/home" asChild>
        <Text style={styles.text2}>CONTINUE AS GUEST</Text>
      </Link>
      <Text
        style={{
          fontSize: 12,
          fontWeight: "300",
          lineHeight: 20,
          textAlign: "center",
          marginTop: 10,
        }}
      >
        by logging in or continuing as a guest,{"\n"} you agree with our Terms
        of use
      </Text>

      {/* <Text>
        Hii.. just a friendly reminder that you are in an unfamilar territory,
        that is why you are confused
      </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  button1: {
    backgroundColor: "#E40100",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
    marginBottom: 20,
  },
  button2: {
    //backgroundColor: "#E40100",
    borderWidth: 2,
    borderColor: "#E40100",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 50,
    marginBottom: 100,
  },
  text1: {
    color: "white",
    fontWeight: "500",
  },
  text2: {
    color: "#E40100",
    fontWeight: "500",
  },
});
