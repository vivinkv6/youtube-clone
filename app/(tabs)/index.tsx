import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import Categories from "@/components/home/Categories";
import Card from "@/components/home/Card";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Categories />
      <Card/>
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
