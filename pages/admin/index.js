import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";
import Panel from "../../components/Panel/Panel";
import React, { useRef, useEffect, useState } from "react";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toast, { Toaster } from "react-hot-toast";
function Home({ apiData }) {
  // console.log(apiData)
  const { data: session } = useSession();
  const router = useRouter();

  const [newTechnology, setNewTechnology] = useState("");
  const [description, setDescription] = useState(apiData.description);
  const [technologies, setTechnologies] = useState(apiData.technologies);

  const addNewTechnologyHandler = () => {
    if (newTechnology !== "") {
    }
  };

  const sendMessage = async () => {
    const current = new Date();
    const date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;
    const response = await axios.post("http://localhost:3000/api/messages", {
      name,
      email,
      phone,
      text,
      date,
    });
    return Response;
  };
  const notify = (e) => {
    const sendMessageFunction = sendMessage();
    toast.promise(sendMessageFunction, {
      loading: "Sending",
      success: <b>Your Message Sent!</b>,
      error: <b>Could not send your message.</b>,
    });
  };
  // console.log(technologies)
  return (
    <>
      {session && (
        <Panel activeItem="home">
          <h1>Here is main Settings</h1>
          <div className="w-full mt-3">
            <label htmlFor="description mb-3">Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="description"
              type="number"
              className="form-input py-2 rounded-md w-full mt-3"
              placeholder="Your message here"
            ></textarea>
          </div>
          <div className="mt-3 flex flex-col">
            <div>Technologies:</div>
            <div className="flex flex-col">
              <input
                placeholder=" new technology name"
                value={newTechnology}
                className=" form-input w-full rounded py-2 px-2"
                onChange={(e) => setNewTechnology(e.target.value)}
              />
              <button
                className="mt-3 mb-3 border-black border rounded py-2"
                onClick={() => addNewTechnologyHandler()}
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap mt-3">
              {technologies.map((technology) => (
                <div
                  className="bg-slate-300 px-5 py-3 flex items-center mr-5 rounded-md mb-3"
                  key={technology._id}
                >
                  <FontAwesomeIcon
                    icon={faX}
                    style={{ width: "15px", marginRight: "5px" }}
                  />
                  <span>{technology.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Panel>
      )}
      <Toaster />
    </>
  );
}

export async function getStaticProps() {
  try {
    const res = await axios.get(process.env.URL + "/api/admin/setting");
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
