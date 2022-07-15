import Image from "next/image";
import axios from "axios";
import React, { useState,useEffect } from 'react'


export default function Header({ projects }) {
  console.log(projects)
  const {project,setProjects}=useState(projects)
  console.log(project)
  const likeHandler=async (projectId)=>{
    try{
      const res = await axios.get("/api/projects/like/"+projectId)
      // console.log(res)
      setProjects(project.find(pro => pro._id == projectId).isLiked = res.data.isLiked)
    }catch(e){
      console.log(e)
    }
  }
  useEffect(()=>{

  },[projects])
  return (
    <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0">
      <h2 className="text-4xl font-bold text-center md:text-left mb-5">
        Projects
      </h2>
      <div className="flex flex-wrap">
        {project.map((project) => (
          <div className="p-4 w-full sm:w-1/2 lg:w-1/3" key={project._id}>
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
                  <a href="#" className="text-primaryColor inline-flex items-center md:mb-2 lg:mb-0">
                    Read More
                  </a>
                  <div className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <span>C:</span>
                    <span>{project.commentCount}</span>
                  </div>
                  <div className="text-gray-400 inline-flex items-center leading-none text-sm" onClick={()=>likeHandler(project._id)}>
                  <span>L:</span>
                  {project.isLiked && <span> T</span>}
                  {!project.isLiked && <span> F</span>}
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
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
