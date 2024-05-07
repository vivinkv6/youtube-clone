import useFetch from "@/hooks/useFetch";
import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

type VideoProp = {
  uri: string;
  title: string;
};
function YoutubeVideo({ uri, title }: VideoProp) {
  return (
    <View>
      <Image source={{ uri: uri }} style={{ width: "100%", height: 230 }} />
      <Text style={{ fontWeight: "600", fontSize: 20, margin: 10 }}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  video: {
    width: "100%",
    height: 300,
  },
});

export default YoutubeVideo;
