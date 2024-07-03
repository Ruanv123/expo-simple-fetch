import { CheckBox } from "@rneui/base";
import axios from "axios";
import { createRef, useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

export default function Index() {
  const input = createRef<any>();
  const [data, setData] = useState<any>([]);
  const getData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        margin: 10,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Lista de Tarefas (API Placeholder)
      </Text>
      <FlatList
        style={{ marginTop: 10, paddingRight: 5 }}
        data={data}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 10,
              borderWidth: 1,
              borderRadius: 10,
              flexDirection: "row",
              // marginHorizontal: 5,
              marginVertical: 5,
              // flex: 1,
              width: "100%",
              marginRight: 10,
              backgroundColor: "white",
              overflow: "hidden",
              // flexWrap: "wrap",
            }}
          >
            <CheckBox checked={item.completed} />
            <Text style={{ fontSize: 15 }}>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
