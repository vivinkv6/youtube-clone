import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
function Tab() {
  return (
    <View style={styles.tabContainer}>
      <View style={styles.tab}>
        <Entypo name="home" size={24} color="black" />
        <Text style={styles.label}>Home</Text>
      </View>
      <View style={styles.tab}>
        <Image
          source={require("@/assets/images/shorts.jpeg")}
          style={{ height: 30, width: 30 }}
        />
        <Text style={styles.label}>Shorts</Text>
      </View>
      <AntDesign name="pluscircleo" size={35} color="black" />
      <View style={styles.tab}>
        <MaterialIcons name="subscriptions" size={24} color="black" />
        <Text style={styles.label}>Subscriptions</Text>
      </View>
      <View style={styles.tab}>
        <Ionicons name="person-circle-outline" size={24} color="black" />
        <Text style={styles.label}>You</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  tab: {
    display: "flex",
    flexDirection: "column",
    alignItems:'center'
  },
  label:{
    fontSize:7,
    fontWeight:'400'
  }
});

export default Tab;
