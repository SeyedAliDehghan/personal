import Head from "next/head";
import Header from "../../components/Header/Header";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";

function Home({ apiData }) {
  console.log(apiData);
  return (
    <>
      <Head>
        <title>Projects - Seyed Ali Dehghan</title>
        <meta name="description" content={apiData.description} />
      </Head>
      <Header />
      <div className="container mx-auto mt-5">
        <div className="flex flex-col justify-center w-full ">
          <img src="/img/cover.png" className="w-full rounded-md" />
          <div className="mt-5" dangerouslySetInnerHTML={{ __html: apiData.content }}></div>
        </div>

        {/* <img src="http://localhost:3000/_next/image?url=%2Fimg%2Fmock.jpg&w=1920&q=75" alt=""/> */}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { pid } = context.query;
  console.log("===================");
  console.log(pid);
  try {
    const res = await axios.get(process.env.URL + "/api/projects/" + pid);
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
