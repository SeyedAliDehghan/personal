import Head from "next/head";
import Header from "../../components/Header/Header";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Prism from "prismjs";
import React, { useEffect } from "react";

function Home({ apiData }) {
  // console.log(apiData);
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <Head>
        <title>Projects - Seyed Ali Dehghan</title>
        <meta name="description" content={apiData.description} />
      </Head>
      <Header />
      <div className="container flex flex-col lg:flex-row mx-auto mt-5">
        <div className="w-full lg:w-2/3 py-6 px-5 border-r lg:border-gray-300">
          <div className="flex flex-col justify-center w-full ">
            <img src="/img/mock.jpg" className="w-full rounded-md" />
            <h1 className="my-5 text-3xl">{apiData.title}</h1>
            <p>{apiData.publicDate}</p>
            <div
              className="mt-5"
              dangerouslySetInnerHTML={{ __html: apiData.content }}
            ></div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 py-6 px-5">
          <div className="flex flex-col space-y-5">
            <Link href={`${apiData.githubLink}`}>
              <a className="w-100 py-3 rounded flex items-center justify-center bg-black text-white">
              <FontAwesomeIcon
                  className="flex mr-2"
                  icon={faGithub}
                  style={{ width: "15px", marginRight: "5px" }}
                />
                <span className="mr-2">|</span>
                <span>On Github</span>
              </a>
            </Link>
            <Link href={`${apiData.previewLink}`}>
              <a className="w-100 py-3 rounded flex items-center justify-center bg-orange-600  text-white">
                <FontAwesomeIcon
                  className="flex mr-2"
                  icon={faEye}
                  style={{ width: "15px", marginRight: "5px" }}
                />
                <span className="mr-2">|</span>
                <span>Watch Live</span>
              </a>
            </Link>
          </div>
        </div>

        {/* <img src="http://localhost:3000/_next/image?url=%2Fimg%2Fmock.jpg&w=1920&q=75" alt=""/> */}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { pid } = context.query;
  // console.log("===================");
  // console.log(pid);
  try {
    const res = await axios.get(process.env.URL + "/api/posts/" + pid);
    return {
      props: {
        apiData: res.data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default Home;
