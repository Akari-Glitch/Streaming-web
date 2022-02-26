import Navbar from "./Navbar";
import Head from "next/head";

function Container(props) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <div>{props.children}</div>
    </div>
  );
}

export default Container;
