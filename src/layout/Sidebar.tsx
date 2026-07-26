import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import { NumaLogo } from "@/src/components/common/NumaLogo";
import { colors } from "@/src/theme";

const categories = [
  "All",
  "Food",
  "Drinks",
  "Coffee",
  "Desserts",
];

export function Sidebar() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <View style={styles.container}>
      <NumaLogo width={120} height={120} />

      <View style={styles.userCard}>
        <Text style={styles.userName}>
          Sven
        </Text>

        <Text style={styles.userRole}>
          Cashier
        </Text>

        <Pressable>
          <Text style={styles.logout}>
            Log out
          </Text>
        </Pressable>
      </View>

      <View style={styles.categories}>
        {categories.map((category) => {
          const active = category === activeCategory;

          return (
            <Pressable
              key={category}
              style={[
                styles.category,
                active && styles.activeCategory,
              ]}
              onPress={() => setActiveCategory(category)}
            >
              <Text
                style={[
                  styles.categoryText,
                  active && styles.activeCategoryText,
                ]}
              >
                {category}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <Pressable style={styles.settings}>
        <Text style={styles.settingsIcon}>
          ⚙
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 220,
    padding: 20,
    backgroundColor: "#FFF",
    borderRightWidth: 1,
    borderRightColor: "#ECECEC",
  },

  userCard: {
    marginTop: 24,
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#F8F8FA",
  },

  userName: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.text,
  },

  userRole: {
    marginTop: 4,
    color: colors.secondary,
  },

  logout: {
    marginTop: 12,
    color: colors.primary,
    fontWeight: "600",
  },

  categories: {
    marginTop: 32,
    gap: 12,
  },

  category: {
    height: 52,
    justifyContent: "center",
    paddingHorizontal: 16,
    borderRadius: 12,
  },

  activeCategory: {
    backgroundColor: colors.primary,
  },

  categoryText: {
    fontSize: 17,
    fontWeight: "600",
    color: colors.text,
  },

  activeCategoryText: {
    color: "#FFF",
  },

  settings: {
    marginTop: "auto",
    alignItems: "center",
    justifyContent: "center",
    height: 56,
  },

  settingsIcon: {
    fontSize: 28,
    color: colors.secondary,
  },
});