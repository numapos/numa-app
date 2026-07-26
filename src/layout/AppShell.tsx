import { ReactNode } from "react";
import { View, StyleSheet } from "react-native";

import { Screen } from "@/src/components/common/Screen";
import { Sidebar } from "./Sidebar";
import { colors } from "@/src/theme";

type Props = {
  children: ReactNode;
  activeCategory: string;
  onCategoryChange: (category: string) => void;
};

export function AppShell({
  children,
  activeCategory,
  onCategoryChange,
}: Props) {
  return (
    <Screen>
      <View style={styles.container}>
        <Sidebar
          activeCategory={activeCategory}
          onCategoryChange={onCategoryChange}
        />

        <View style={styles.content}>
          {children}
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.background,
  },

  content: {
    flex: 1,
  },
});