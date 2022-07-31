import Image from "next/image";
import axios from "axios";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header({ projects }) {
  const [project, setProject] = useState(projects);
  const router = useRouter();

  // console.log(router.pathname);

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
      {router.pathname===("/") && (
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
      { project.length!==0 && (
        <div className="flex flex-wrap">
        {project.map((project) => (
          <div className="p-4 w-full sm:w-1/2 lg:w-1/3 relative" key={project._id}>
            {project.tag==="mini" && (
              <div className="ribbon ribbon-top-left z-20"><span>{project.tag}</span></div>
              // <div className="absolute z-30 top-7 px-7 py-1 bg-primaryColor text-white rounded-r-md labelShaddow font-bold">Mini</div>
            )}
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <div className="projectImageCcontainer">
                <Image
                  src="/img/mock.jpg"
                  alt={projects.title}
                  layout="fill"
                  className="projectImage"
                />
              </div>
              <div className="p-6 transition duration-300 ease-in">
                <div className="text-base font-medium text-primaryColor mb-1">
                  {project.publicDate}
                </div>
                <div className="text-2xl font-semibold mb-3">
                  {project.title}
                </div>
                <div className="leading-relaxed mb-3">
                  {project.description}
                </div>
                <div className="flex items-center flex-wrap ">
                  <Link href={"/projects/" + project.slug}>
                    <a className="text-primaryColor inline-flex items-center md:mb-2 lg:mb-0">
                      Read More
                    </a>
                  </Link>
                  <div className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    {/* <FontAwesomeIcon icon={faGithub} style={{width:"15px",marginRight:"5px"}}/> */}
                  </div>
                  <div className="text-gray-400 inline-flex items-center leading-none text-sm">
                    <FontAwesomeIcon
                      icon={faMessage}
                      style={{ width: "15px", marginRight: "5px" }}
                    />
                    <span>{project.commentCount}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      )}
      {project.length===0 && (<p>No project published yet</p>)}
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