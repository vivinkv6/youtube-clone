import React from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
// icons
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import { router } from "expo-router";
function NavBar() {
  return (
    <View style={styles.navContainer}>
      <View>
        <Image
          style={styles.logo}
          source={require("@/assets/images/homelogo.jpg")}
        />
      </View>
      <View style={styles.icons}>
        <View style={styles.icon}>
          <FontAwesome5 name="chromecast" size={24} color="black" />
        </View>
        <View style={styles.icon}>
          <Ionicons name="notifications-outline" size={24} color="black" />
        </View>
        <View style={styles.icon}>
          <Pressable onPress={()=>router.navigate('/search')}>
        <Feather name="search" size={24} color="black" />
        </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    display: "flex",
    width: "100%",
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    height: 50,
    width: 100,
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    padding: 15,
  },
});

export default NavBar;
