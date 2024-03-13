import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav>
      {navlinks.map((nav) => (
        <Link href={nav.link} key={nav.title}>
          <a>{nav.title}</a>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
