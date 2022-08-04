import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";


const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const  [QueryLive, channels, liveStreams, errorMessage] = useResults();

  return (
    <View style={{ flex: 1 }}>
      <SearchBar 
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => console.log("lol")}/>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>{liveStreams.length}</Text>
      <Text>{channels.length}</Text>
    </View>
  )
};

const styles = StyleSheet.create({

});

export default SearchScreen;