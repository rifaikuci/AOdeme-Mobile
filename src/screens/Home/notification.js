import React from "react";
import {
  View, Text,
} from "react-native";
import styles from "./styles";

const Notification = () => {
  return (
    <View>
      <Text
        style={styles.notificationLabel}
      >
        Yesterday
      </Text>

      <View
        style={styles.notificationContent}>
        <Text style={styles.notificationContentHeaderText}>
          We're Planting 200k trees with Mas
        </Text>

        <Text style={styles.notifactionBodyText}>
          We're Planting 200k trees with Mas We're Planting 200k trees with Mas

        </Text>

      </View>
    </View>
  );
};

export default Notification;
