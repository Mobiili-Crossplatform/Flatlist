import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, SafeAreaView } from "react-native";
import { DATA } from "./Data";
import Row from "./Row";
import Search from "./components/Search";

export default function App() {
  const [items, setItems] = useState();
  useEffect(() => {
    setItems(DATA);
  }, []);
  const executeSearch = (search) => {
    const searchArray = DATA.filter((item) => item.lastname.startsWith(search));
    setItems(searchArray);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Search executeSearch={executeSearch} />
      <FlatList data={items} renderItem={({ item }) => <Row person={item} />} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
