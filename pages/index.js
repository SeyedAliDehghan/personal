import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Header from "../components/Header/Header";
import Projects from '../components/Projects/Projects'
import ContactMe from "../components/ContactMe/ContactMe";
import AboutMe from "../components/AboutMe/Aboutme";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";
import Posts from '../components/Posts/Posts'
function Home( {apiData} ) {
  const { data: session } = useSession();
  const router = useRouter();
  // console.log("session: ", session);
  // console.log("main: ", apiData.setting.technologies);
  
  return (
    <>
      <Head>
        <title>Seyed Ali Dehghan</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Hero description={apiData.setting.description} socials={apiData.social}/>
      <AboutMe  technologies={apiData.setting.technologies}/>
      <Projects projects={apiData.projects}/>
      <Posts posts={apiData.posts}/>
      <ContactMe/>
    </>
  );
}

export async function getServerSideProps() {
  // try {
    
  // } catch (error) {
  //   console.log(error)
  // }
  const res = await axios.get(process.env.URL+"/api")
  // console.log(res.data)
    return {
      props: {
        apiData:res.data
      },
    }
  // console.log(res.data,"===================")
  // const res = await fetch("http://localhost:3000/api")
  // const data = await res.json()
  
}

export default Home;



// {session ? (
//   <button onClick={() => signOut()}>logout</button>
// ) : (
//   <button
//     onClick={() => {
//       router.push("/api/auth/signin");
//     }}
//   >
//     login
//   </button>
// )}