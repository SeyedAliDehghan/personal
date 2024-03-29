
import Head from "next/head";
import Header from "../../components/Header/Header";
import Projects from '../../components/Projects/Projects'
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react"
import { useRouter } from "next/router";
import axios from "axios";

function Home( {apiData} ) {
  // console.log(apiData)
  const { data: session } = useSession();
  const router = useRouter();
  // console.log("session: ", session);

  return (
    <>
      <Head>
        <title>Projects - Seyed Ali Dehghan</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Projects projects={apiData}/>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const res = await axios.get(process.env.URL+"/api/projects")
    return {
      props: {
        apiData:res.data
      },
    }
  } catch (error) {
    return {
      props: {
        apiData:[]
      },
    }
  }
}


export default Home