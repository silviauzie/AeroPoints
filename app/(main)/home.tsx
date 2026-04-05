import {
  BedDouble,
  CreditCard,
  Gift,
  Grid3X3,
  HeartPulse,
  HelpCircle,
  Plane,
  ShieldCheck,
  SunMedium,
} from "lucide-react-native";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function home() {
  const menuItems = [
    { label: "Flights", Icon: Plane },
    { label: "Hotels", Icon: BedDouble },
    { label: "Holidays", Icon: SunMedium },
    { label: "Travel Insurance", Icon: ShieldCheck },
    { label: "Credit Cards", Icon: CreditCard },
    { label: "Marketplace", Icon: Gift },
    { label: "Health Insurance", Icon: HeartPulse },
    { label: "All products", Icon: Grid3X3 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.helpBtn}>
            <HelpCircle size={20} color="#111" />
            <Text style={{ marginLeft: 5 }}>Help</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardBtn}>
            <Image
              source={require("../../assets/images/WhiteLogoForReactProject.png")}
              style={styles.cardBtnImg}
            />

            <Text style={styles.cardBtnText}>Card</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.greeting}>Hi Silvia</Text>

        <View style={styles.pointsCard}>
          <View>
            <Text style={styles.small}>Points</Text>
            <Text style={styles.big}>9,538</Text>
          </View>

          <View style={styles.divider} />

          <View>
            <Text style={styles.small}>Status</Text>
            <Text style={styles.big}>90</Text>
          </View>

          <TouchableOpacity style={styles.cardBtn2}>
            <Image
              source={require("../../assets/images/WhiteLogoForReactProject.png")}
              style={styles.cardBtnImg}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.section}>Book and explore</Text>

        <View style={styles.grid}>
          {menuItems.map(({ label, Icon }, index) => (
            <TouchableOpacity
              key={`${label}-${index}`}
              style={[
                styles.gridItemWrapper,
                index % 4 === 3 && styles.gridItemWrapperLastInRow,
              ]}
            >
              <View style={styles.gridItem}>
                <Icon size={28} color="#111" />
              </View>
              <Text style={styles.gridText}>{label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.section}>5 days until your next trip</Text>

        <View style={styles.tripCard}>
          <View>
            <Text style={styles.small}>Sydney to</Text>
            <Text style={styles.tripTitle}>Dallas Fort Worth</Text>
            <Text style={styles.small}>Departs 14:05</Text>
          </View>

          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1720884413532-59289875c3e1?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={styles.tripImage}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
  },

  helpBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  cardBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E40100",
    paddingHorizontal: 25,
    paddingVertical: 5,
    borderRadius: 30,
  },
  cardBtn2: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E40100",
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 30,
  },
  cardBtnImg: {
    width: 32,
    height: 32,
  },
  cardBtnText: {
    color: "#FFFFFF",
  },

  greeting: {
    fontSize: 26,
    fontWeight: "600",
    paddingHorizontal: 20,
  },

  pointsCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    margin: 20,
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },

  divider: {
    width: 1,
    height: 40,
    backgroundColor: "#eee",
  },

  small: {
    color: "#777",
  },

  big: {
    fontSize: 22,
    fontWeight: "600",
  },

  section: {
    fontSize: 18,
    fontWeight: "600",
    marginHorizontal: 20,
    marginBottom: 10,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 20,
  },

  gridItemWrapper: {
    width: "23.5%",
    marginRight: "2%",
    marginBottom: 12,
    alignItems: "center",
  },

  gridItemWrapperLastInRow: {
    marginRight: 0,
  },

  gridItem: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  gridText: {
    marginTop: 8,
    textAlign: "center",
    fontSize: 12,
  },

  tripCard: {
    backgroundColor: "#fff",
    margin: 20,
    padding: 20,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  tripTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 5,
  },

  tripImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
});
