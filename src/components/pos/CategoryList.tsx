import { Pressable, StyleSheet, Text, View } from "react-native";

import { colors } from "@/src/theme";

const categories = [
  "All",
  "Food",
  "Drinks",
  "Coffee",
  "Desserts",
];

export function CategoryList() {
  return (
    <View style={styles.container}>
      {categories.map((category, index) => (
        <Pressable
          key={category}
          style={[
            styles.category,
            index === 0 && styles.active,
          ]}
        >
          <Text
            style={[
              styles.text,
              index === 0 && styles.activeText,
            ]}
          >
            {category}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 20,
  },

  category: {
    paddingHorizontal: 20,
    height: 44,
    borderRadius: 12,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },

  active: {
    backgroundColor: colors.primary,
  },

  text: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text,
  },

  activeText: {
    color: "#FFFFFF",
  },
});