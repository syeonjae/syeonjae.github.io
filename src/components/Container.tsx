import React from "react";
import Nav from "./Nav";

const Container = (props: React.PropsWithChildren) => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>{props.children}</main>
    </>
  );
};

export default Container;
