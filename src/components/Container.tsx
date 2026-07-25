import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

import { spacing } from "@/src/theme";

type Props = {
  children: ReactNode;
};

export function Container({ children }: Props) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
  },
});