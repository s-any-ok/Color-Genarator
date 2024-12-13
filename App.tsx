import { StatusBar } from "expo-status-bar";
import { BottomTab } from "./src/navigation/Root.navigation";
import React from "react";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <BottomTab />
    </>
  );
}
