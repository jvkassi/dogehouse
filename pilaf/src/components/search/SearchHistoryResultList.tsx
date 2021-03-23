import React from "react";
import { ScrollView, StyleSheet, View, ViewProps } from "react-native";
import { colors, radius } from "../../constants/dogeStyle";

export const SearchHistoryResultList: React.FC<ViewProps> = ({
  children,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <ScrollView>{children}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary800,
    borderRadius: radius.m,
  },
});
