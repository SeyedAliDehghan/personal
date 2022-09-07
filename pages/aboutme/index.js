
import Head from "next/head";
import Header from "../../components/Header/Header";
import AboutMe from '../../components/AboutMe/AboutMe'
import axios from "axios";


function Home( {apiData} ) {

  return (
    <>
      <Head>
        <title>Projects - Seyed Ali Dehghan</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <AboutMe technologies={apiData}/>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const res = await axios.get(process.env.URL+"/api/technologies")
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

export default Home;