
import Head from "next/head";
import Header from "../../components/Header/Header";
import ContactMe from "../../components/ContactMe/ContactMe";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react"
import { useRouter } from "next/router";
import axios from "axios";

function Home() {
  // console.log(apiData)
  const { data: session } = useSession();
  const router = useRouter();
  console.log("session: ", session);

  return (
    <>
      <Head>
        <title>Projects - Seyed Ali Dehghan</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <ContactMe/>
    </>
  );
}

export default Home;