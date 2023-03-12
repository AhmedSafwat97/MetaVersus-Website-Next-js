import Head from "next/head";
import React from "react";
import About from "./About";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Layout = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title ? title + "-MetaVerses" : "Metaverses"}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-primary-black overflow-hidden">
        <Navbar/>
        <Hero/>
        <About/>
        <div>The websitebody</div>
        <div>Footer</div>
        <div>Footer</div>
        <div>Footer</div>
        <div>Footer</div>
        <div>Footer</div>
        <div>Footer</div>
        <div>Footer</div>
        <div>Footer</div>
        <div>Footer</div>

      </div>
    </>
  );
};

export default Layout;