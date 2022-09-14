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
  const [messages, setMessages] = useState(apiData);
  // console.log(posts);
  // console.log(technologies)\

  const fetchProjectsAgain = async () => {
    try {
      const res = await axios.get(process.env.NEXT_PUBLIC_URL + "/api/messages");
      setMessages(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const deletePostReq = async (id) => {
    console.log(process.env.MONGO_URL);
    const response = await axios.delete(
      process.env.NEXT_PUBLIC_URL + "/api/messages/" + id
    );
    fetchProjectsAgain();
    return response;
  };
  const messageDeleteHandler = (id) => {
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
        <Panel activeItem="messages">
          <div className="flex flex-col mb-3 mt-5">
            <div className="mb-3">All messages</div>
            {messages.map((message) => (
              <div
                className="w-full border border-black rounded px-3 py-2 mb-3 flex justify-between items-center"
                key={message._id}
              >
                <div className="flex flex-col">
                  <div className="flex flex-col">
                    <div className="font-bold">{message.name}</div>
                    <div className="text-sm">{message.email} , {message.phone}</div>
                  </div>
                  <div className="py-3">{message.text}</div>
                  <div className="w-full border-t border-gray-400 text-sm">{message.date}</div>
                </div>
                <span className="flex space-x-3 items-center">
                  {/* <Link href={`/admin/posts/edit/${message.slug}`}>
                    <a>
                      <FontAwesomeIcon
                        className="flex"
                        icon={faEdit}
                        style={{ width: "15px", marginRight: "5px" }}
                      />
                    </a>
                  </Link> */}
                  <FontAwesomeIcon
                    className="flex"
                    onClick={() => messageDeleteHandler(message._id)}
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
    const res = await axios.get(process.env.URL + "/api/messages");
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
