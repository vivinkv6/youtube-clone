import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import useFetch from "@/hooks/useFetch";
import { useCategoryStore } from "@/store/categoryStore";
function Categories() {
  const addCategory = useCategoryStore((state) => state.addCategory);
  const {
    data: categories,
    loading,
    error,
  } = useFetch(
    `https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=${process.env.EXPO_PUBLIC_API_KEY}`
  );

  console.log(categories);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color="black" />
      </View>
    );
  }

  return (
    <View style={styles.categoriesContainer}>
      <FontAwesome5 name="compass" size={35} color="black" />
      <FlatList
        data={categories?.items}
        horizontal={true}
        scrollEnabled={true}
        renderItem={({ item }) => {
          console.log(item);

          return (
            <Pressable onPress={() => addCategory(item.id)}>
              <Text style={styles.category}>{item?.snippet.title}</Text>
            </Pressable>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  categoriesContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
  },
  category: {
    color: "black",
    backgroundColor: "#ebe8e8",
    padding: 10,
    margin: 10,
    borderRadius: 6,
    fontWeight: "bold",
  },
});

export default Categories;
