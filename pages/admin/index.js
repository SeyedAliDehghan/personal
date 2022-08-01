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
      addNotify();
    }
  };

  const addTechnology = async () => {
    const response = await axios.post(
      "http://localhost:3000/api/admin/technologies",
      {
        name: newTechnology,
      }
    );
    const responseSec = await axios.get(
      "http://localhost:3000/api/admin/technologies"
    );
    setTechnologies(responseSec.data);
    return response;
  };

  const deleteTechnology = async (id) => {
    // console.log(id)
    const response = await axios.delete(
      "http://localhost:3000/api/admin/technologies",{data:{id}}
    );
    const responseSec = await axios.get(
      "http://localhost:3000/api/admin/technologies"
    );
    setTechnologies(responseSec.data);
    return response;
  };

  const saveDescription = async () => {
    const response = await axios.post(
      "http://localhost:3000/api/admin/setting",
      {
        description,
      }
    );
    console.log(response.data)
    setDescription(response.data.description);
    return response;
  };

  const addNotify = (e) => {
    const addTechnologyFunction = addTechnology();
    toast.promise(addTechnologyFunction, {
      loading: "Sending",
      success: <b>New Technology Added</b>,
      error: <b>Could not add new technology</b>,
    });
  };
  const deleteNotify = (id) => {
    const deleteTechnologyFunction = deleteTechnology(id);
    toast.promise(deleteTechnologyFunction, {
      loading: "Deleting",
      success: <b>Technology deleted</b>,
      error: <b>Could not delete technology</b>,
    });
  };
  const saveNotify = (id) => {
    const saveDescriptionFunction = saveDescription();
    toast.promise(saveDescriptionFunction, {
      loading: "Saving",
      success: <b>description saved</b>,
      error: <b>Could not save description</b>,
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
          <button
                className="mt-3 mb-3 w-full border-black border rounded py-2"
                onClick={() => saveNotify()}
              >
                Save
              </button>
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
                    onClick={() => deleteNotify(technology._id)}
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

export async function getServerSideProps() {
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
