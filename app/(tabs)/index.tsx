import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import Categories from "@/components/home/Categories";
import Card from "@/components/home/Card";
import useFetch from "@/hooks/useFetch";
import { useCategoryStore } from "@/store/categoryStore";

export default function TabOneScreen() {


  const categoryId = useCategoryStore((state) => state.categoryId);

  const { data, loading, error } = useFetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${categoryId}&key=${process.env.EXPO_PUBLIC_API_KEY}`
  );


  return (
    <View style={styles.container}>
      <Categories />
      <Card data={data} error={error} loading={loading}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
