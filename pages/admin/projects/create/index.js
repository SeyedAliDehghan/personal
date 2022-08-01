import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";
import Panel from "../../../../components/Panel/Panel";
import React, { useRef, useEffect, useState, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faEdit } from "@fortawesome/free-solid-svg-icons";
import toast, { Toaster } from "react-hot-toast";
function Home() {
  // console.log(apiData)
  const { data: session } = useSession();
  const router = useRouter();


  return (
    <>
      {session && (
        <Panel activeItem="projects">
          <form>
            <label htmlFor="title" className="text-xl required">
              Name:
            </label>
            <input
              required
              //   value={name}
              onChange={(e) => setName(e.target.value)}
              id="title"
              type="text"
              className="form-input py-2 rounded-md w-full focus:shadow-lg"
              placeholder="Name"
            />
            <label htmlFor="description" className="text-xl required">
              description:
            </label>
            <input
              required
              // value={name}
              onChange={(e) => setName(e.target.value)}
              id="description"
              type="text"
              className="form-input py-2 rounded-md w-full focus:shadow-lg mb-3"
              placeholder="Name"
            />
          </form>
        </Panel>
      )}
      <Toaster />
    </>
  );
}

export default Home;
