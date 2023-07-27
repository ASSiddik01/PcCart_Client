import React from "react";
import RootLayout from "@/components/Layouts/RootLayout";

const About = () => {
  return <div>About</div>;
};

export default About;

About.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
