import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";
import Panel from "../../../components/Panel/Panel";
import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faEdit } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import toast, { Toaster } from "react-hot-toast";
function Home({ apiData }) {
  // console.log(apiData)
  const { data: session } = useSession();
  const router = useRouter();
  const [posts, setPosts] = useState(apiData);
  // console.log(posts);
  // console.log(technologies)\

  const fetchProjectsAgain = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/projects");
      console.log(res)
      setPosts(res.data)
    } catch (error) {
      console.log(error)
    }
  };
  const deletePostReq = async (id) => {
    const response = await axios.get(
      "http://localhost:3000/api/admin/projects/" + id
    );
    fetchProjectsAgain();
    return response;
  };
  const projectDeleteHandler = (id) => {
    if (confirm("are you sure?") == true) {
      const deletePostReqFunction = deletePostReq(id);
      toast.promise(deletePostReqFunction, {
        loading: "deleting",
        success: <b>Post deleted!</b>,
        error: <b>Could not delete Post.</b>,
      });
    }
  };
  return (
    <>
      {session && (
        <Panel activeItem="projects">
          <Link href="/admin/projects/create">
            <a>
              <button>Add new Project</button>
            </a>
          </Link>

          <div className="flex flex-col mb-3 mt-5">
            <div className="mb-3">All Projects</div>
            {posts.map((post) => (
              <div
                className="w-full border border-black rounded px-3 py-2 mb-3 flex justify-between items-center"
                key={post._id}
              >
                <span>{post.title}</span>
                <span className="flex space-x-3">
                  <FontAwesomeIcon
                    icon={faEdit}
                    style={{ width: "15px", marginRight: "5px" }}
                  />
                  <FontAwesomeIcon
                    onClick={() => projectDeleteHandler(post._id)}
                    icon={faX}
                    style={{ width: "15px", marginRight: "5px" }}
                  />
                </span>
              </div>
            ))}
          </div>
        </Panel>
      )}
      <Toaster />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const res = await axios.get(process.env.URL + "/api/projects");
    return {
      props: {
        apiData: res.data,
      },
    };
  } catch (error) {
    return {
      props: {
        apiData: [],
      },
    };
  }
}

export default Home;
