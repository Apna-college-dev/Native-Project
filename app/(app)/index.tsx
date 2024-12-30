import { useNavigation } from "expo-router";
import { StyleSheet, View, FlatList, Text, TextInput } from "react-native";
import { ListItem, Button, Card } from "@rneui/themed";
import React from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";
export default function Home() {
  const navigation = useNavigation();

  const data = [
    {
      date: "27-11-2024",
      name: "Asim",
      cnic: "37409-2015388-1",
      passportNumber: "HVD58903",
      contact: "0334 090078601",
    },
    {
      date: "28-11-2024",
      name: "Ali",
      cnic: "37409-1234567-8",
      passportNumber: "XYZ12345",
      contact: "0333 1234567",
    },
    {
      date: "29-11-2024",
      name: "Sara",
      cnic: "37409-7654321-9",
      passportNumber: "ABC67890",
      contact: "0332 9876543",
    },
  ];

  const renderList2Item = ({ item }) => {
    return (
      <>
        <ListItem
          containerStyle={{
            flex: 1,
            marginHorizontal: 0,
            marginVertical: 10,
            padding: 0,
          }}
        >
          <Card
            containerStyle={{
              flex: 1,
              margin: 0,
              padding: 5,
              borderRadius: 12,
              borderColor: "#CAC4D0",
              backgroundColor: "#FEF7FF",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 4,
            }}
          >
            {Object.entries(item).map(([key, value]) => (
              <View style={styles.row}>
                <View style={styles.key}>
                  <Text style={styles.text}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </Text>
                </View>
                <View style={styles.value}>
                  <Text style={[styles.text, { color: "gray" }]}>{value}</Text>
                </View>
              </View>
            ))}
          </Card>
        </ListItem>
      </>
    );
  };
  const renderFooter = () => {
    return (
      <View style={styles.footer}>
        <Button
          title="New Entry"
          onPress={() => navigation.navigate("Page")}
          buttonStyle={styles.button}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Summary</Text>
      <View>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#9C9C9C"
        />
        <EvilIcons style={styles.searchIcon} name="search" size={20} />
      </View>
      <Text style={styles.heading}>Previous Data</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderList2Item}
        contentContainerStyle={styles.listContainer}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
  heading: {
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: 600,
    marginVertical: 10,
    lineHeight: 38.4,
  },
  listContainer: {
    marginVertical: 15,
  },
  homeButton: {
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
  },
  key: {
    flex: 1,
  },
  value: {
    flex: 1,
    alignItems: "flex-end",
  },
  text: {
    fontFamily: "Roboto",
    fontSize: 17,
    fontWeight: 600,
    lineHeight: 27.2,
    color: "#000000",
  },
  searchInput: {
    position: "relative",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 25,
    padding: 15,
    marginBottom: 16,
    backgroundColor: "#ECE6F0",
    marginTop: 16,
    fontSize: 20,
    textAlign: "left",
  },
  searchIcon: {
    color: "#9C9C9C",
    fontSize: 35,
    position: "absolute",
    right: 15,
    top: "30%",
  },

  footer: {
    alignItems: "center",
    marginVertical: 20,
  },
  button: {
    backgroundColor: "#FD8269",
    borderRadius: 100,
    width: 307,
    height: 40,
    color: "white",
    fontStyle: "italic",
    gap: 8,
  },
});
