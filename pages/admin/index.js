import Head from "next/head";
import Header from "../../components/Header/Header";
import Projects from "../../components/Projects/Projects";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";
import Panel from "../../components/Panel/Panel";

function Home({ apiData }) {
  // console.log(apiData)
  const { data: session } = useSession();
  const router = useRouter();
  console.log("session: ", session);

  return (
    <Panel>
      <div>123</div>
    </Panel>
  );
}

// export async function getServerSideProps() {
//   try {
//     const res = await axios.get(process.env.URL+"/api/projects")
//     return {
//       props: {
//         apiData:res.data
//       },
//     }
//   } catch (error) {
//     return {
//       props: {
//         apiData:[]
//       },
//     }
//   }
// }

export default Home;
