import React from "react";
import AboutMe from "./components/AboutMe";
import Layout from "./components/Layout";
import ProfileOverview from "./components/ProfileOverview";

export default function App() {
  return (
    <div
      data-theme="light"
      className="flex justify-center items-center py-20 p-1"
    >
      <Layout>
        <AboutMe />
        <ProfileOverview />
      </Layout>
    </div>
  );
}
