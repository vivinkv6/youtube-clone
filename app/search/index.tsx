import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  StatusBar,
  Pressable,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { useSearchStore } from "@/store/searchStore";
import { router } from "expo-router";
function search() {
  const searchList = useSearchStore((state) => state.searchList);
  const addSearch = useSearchStore((state) => state.addSearch);
  const [query, setQuery] = useState<string>("");
  console.log("correct");

  const searching = () => {
    addSearch(query);
    router.navigate(`/search/${query}`)
      console.log("end");
      
  };



  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Pressable onPress={() => router.back()}>
          <Feather name="arrow-left" size={24} color="black" />
        </Pressable>
        <TextInput
          placeholder="Search Youtube"
          style={{
            borderRadius: 15,
            backgroundColor: "#e6e8e6",
            width: "60%",
            padding: 5,
          }}
          autoCorrect={true}
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={searching}
        />
        <MaterialCommunityIcons
          name="microphone"
          size={24}
          style={{ borderRadius: 50, backgroundColor: "#e6e8e6", padding: 5 }}
          color="black"
        />
      </View>
      <View style={styles.recentContainer}>
        {searchList.length == 0 ? (
          <Text
            style={{
              fontWeight: "600",
              fontSize: 20,
              textAlign: "center",
              marginTop: 10,
            }}
          >
            No Recent Search
          </Text>
        ) : (
          <>
            <FlatList
              data={searchList}
              showsVerticalScrollIndicator={true}
              renderItem={({ item }) => {
                return (
                  <View style={styles.historyContainer}>
                    <FontAwesome6
                      name="clock-rotate-left"
                      size={24}
                      color="black"
                    />
                    <Text style={{ fontWeight: "600", fontSize: 20 }}>
                      {item.query}
                    </Text>
                    <Pressable
                      onPress={() => router.navigate(`/search/${item.query}`)}
                    >
                      <Feather name="arrow-up-left" size={24} color="black" />
                    </Pressable>
                  </View>
                );
              }}
            />
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: StatusBar.currentHeight,
  },
  recentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  historyContainer: {
    width:'100%',
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding:15,
    marginTop:20
  },
});

export default search;
