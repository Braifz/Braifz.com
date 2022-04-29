import React from "react";
import Layout from "./Layout/Layout";
import PresentationCard from "./PresentationCard/PresentationCard";
import Projects from "./Proyects/Projects";
import Contact from "./Contact/Contact";
import MyStack from "./MyStack/MyStack";

function App() {
  return (
    <Layout>
      <PresentationCard />
      <div>
        <MyStack />
        <Projects />
      </div>
      <Contact />
    </Layout>
  );
}

export default App;
