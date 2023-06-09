import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";


const Layout = ({ title , children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + "-MetaVersus" : "Metaversus"}</title>
        <meta name="description" content="MetaVersus App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-primary-black overflow-hidden">
        <Navbar/>
        <div>{children}</div>
        <Footer/>
      </div>
    </>
  );
};

export default Layout;
