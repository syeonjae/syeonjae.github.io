import Head from "next/head";
import React from "react";
import Nav from "./Nav";

const Container = (props: React.PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>내 블로그</title>
      </Head>
      <header>
        <Nav></Nav>
      </header>
      <main>{props.children}</main>
    </>
  );
};

export default Container;
