import React from "react";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <div className="relative w-full"></div>
      <div
        className="w-full h-[500px] md:h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('/rock_cover.jpg')` }}
      ></div>
    </Layout>
  );
}
