import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import { NumaLogo } from "@/src/components/common/NumaLogo";
import { colors } from "@/src/theme";

const menuItems = [
  "All",
  "Food",
  "Drinks",
  "Coffee",
  "Desserts",
];

type Props = {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
};

export function Sidebar({
  activeCategory,
  onCategoryChange,
}: Props) {
  return (
    <View style={styles.container}>
      <NumaLogo width={64} height={64} />

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

      <View style={styles.menu}>
        {menuItems.map((item) => {
          const active = item === activeCategory;

          return (
            <Pressable
              key={item}
              onPress={() => onCategoryChange(item)}
              style={[
                styles.menuItem,
                active && styles.activeMenuItem,
              ]}
            >
              <Text
                style={[
                  styles.menuText,
                  active && styles.activeMenuText,
                ]}
              >
                {item}
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
    backgroundColor: colors.background,
    borderRightWidth: 1,
    borderRightColor: colors.border,
  },

  userCard: {
    marginTop: 24,
    padding: 16,
    borderRadius: 16,
    backgroundColor: colors.surface,
  },

  userName: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.text,
  },

  userRole: {
    marginTop: 4,
    color: colors.textSecondary,
  },

  logout: {
    marginTop: 12,
    color: colors.primary,
    fontWeight: "600",
  },

  menu: {
    marginTop: 32,
    gap: 12,
  },

  menuItem: {
    height: 52,
    justifyContent: "center",
    paddingHorizontal: 16,
    borderRadius: 12,
  },

  activeMenuItem: {
    backgroundColor: colors.primary,
  },

  menuText: {
    fontSize: 17,
    fontWeight: "600",
    color: colors.text,
  },

  activeMenuText: {
    color: "#FFFFFF",
  },

  settings: {
    marginTop: "auto",
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },

  settingsIcon: {
    fontSize: 28,
    color: colors.textSecondary,
  },
});