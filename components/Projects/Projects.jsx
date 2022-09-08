import Image from "next/image";
import axios from "axios";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Projects({ projects }) {
  const [project, setProject] = useState(projects);
  const router = useRouter();

  // console.log(projects);

  // const likeHandler=async (projectId)=>{
  //   try{
  //     const res = await axios.get("/api/projects/like/"+projectId)
  //     await setProject(project.map((pro)=>pro._id===projectId?({...pro,isLiked:res.data.isLiked,likeCount:res.data.likeCount}):pro))
  //   }catch(e){
  //     console.log(e)
  //   }
  // }

  return (
    <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0">
      {router.pathname === "/" && (
        <Link href="/projects/">
          <a>
            <div className="flex justify-between">
              <h2 className="text-4xl font-bold text-center md:text-left mb-5">
                Projects
              </h2>
              <FontAwesomeIcon
                icon={faAngleRight}
                style={{ width: "15px", marginRight: "5px" }}
              />
            </div>
          </a>
        </Link>
      )}
      {router.pathname.includes("/projects") && (
        <Link href="/projects/">
          <a>
            <h1 className="text-4xl font-bold text-center md:text-left mb-5">
              Projects
            </h1>
          </a>
        </Link>
      )}
      {project.length !== 0 && (
        <div className="flex flex-wrap">
          {project.map((project) => (
            <div
              className="p-4 w-full sm:w-1/2 lg:w-1/3 relative  rounded-lg"
              key={project._id}
            >
              {/* h-full */}
              <div className=" border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div className="projectImageCcontainer">
                  <Image
                    // src="/img/mock.jpg"
                    src={"/uploads/"+project.img}
                    alt={project.title}
                    layout="fill"
                    className="projectImage"
                  />
                </div>
              </div>
              <div className="px-4 relative  -mt-16">
                <div className="bg-white rounded-lg px-4 py-3 shadow-lg d-flex space-x-3">
                  <span className="bg-orange-200 text-orange-900 font-medium rounded-full px-2 inline-block uppercase tracking-wide text-xs">
                    {project.publicDate}
                  </span>
                  {project.tag==="mini" && <span className="bg-orange-200 text-orange-900 font-medium rounded-full px-2 inline-block uppercase tracking-wide text-xs">
                    Mini
                  </span>}
                  <h2 className="mt-2 text-gray-900 font-semibold text-lg">
                    {project.title}
                  </h2>
                  <div className="mt-2 text-sm text-gray-600">
                    {project.description}
                  </div>
                  <div className="mt-3">
                    <Link href={"/projects/" + project.slug}>
                      <a className="text-primaryColor rounded-lg">
                        Read More
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {project.length === 0 && <p>No project published yet</p>}
    </div>
  );
}

{
  /* <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0">
<h2 className="text-4xl font-bold text-center md:text-left mb-5">
  Projects
</h2>
{projects.length === 0 && (
  <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
    There is no project released yet
  </p>
)}
{projects.length !== 0 && (
  {projects.map((project) => ())}
)}
</div> */
}
