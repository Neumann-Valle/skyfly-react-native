import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  ImageBackground,
  StyleProp,
  ViewStyle,
  StyleSheet,
} from "react-native";
import background from "./assets/clever-visuals-78owYIt_neU-unsplash.jpg";

type DottedProps = {
  numberofdots: number;
  backgroundColor: string;
  style?: {};
};

const Dotted = (props: DottedProps) => {
  const usestyles = {
    ...styles,
    ...props.style,
    container: {
      ...styles.container,
      backgroundColor: "lightgrey",
    },
  };

  const views = [];
  for (let i = 0; i <= props.numberofdots; i++) {
    views.push(<View key={i} style={styles.container}></View>);
  }
  return (
    <>
      <View style={styles.arrContainer}>
        {views.map((item, index) => {
          return item;
        })}
      </View>
    </>
  );
};

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "flex-end", height: "60%" }}
      >
        <View
          style={{
            backgroundColor: "#F7F1E5",
            height: "60%",
            borderTopEndRadius: 30,
            borderTopLeftRadius: 30,
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              borderRadius: 26,
              backgroundColor: "lightgrey",
              marginTop: 15,
            }}
          >
            <View
              style={{ backgroundColor: "red", padding: 15, borderRadius: 20 }}
            >
              <Text style={{ color: "white" }}>Button1</Text>
            </View>
            <View style={{ padding: 15 }}>
              <Text>Button2</Text>
            </View>
            <View style={{ padding: 15 }}>
              <Text>Button3</Text>
            </View>
          </View>
          <Text style={{ padding: 10, fontSize: 30, fontWeight: "bold" }}>
            2 tickets
          </Text>

          <View
            style={{
              backgroundColor: "#fff",
              width: "90%",
              height: "30%",
              borderTopEndRadius: 16,
              borderTopLeftRadius: 16,
              borderBottomEndRadius: 35,
              borderBottomLeftRadius: 35,
            }}
          >
            <Dotted numberofdots={10} backgroundColor="lightgrey" />
          </View>
          <Dotted numberofdots={9} backgroundColor="lightgrey" />
          <View
            style={{
              backgroundColor: "#fff",
              width: "90%",
              height: "30%",
              borderBottomEndRadius: 16,
              borderBottomLeftRadius: 16,
              borderTopEndRadius: 35,
              borderTopLeftRadius: 35,
            }}
          >
            {}
          </View>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey",
    height: 1,
    width: "5%",
  },
  arrContainer: {
    width: "70%",
    flexDirection: "row",
    gap: 15,
  },
});
