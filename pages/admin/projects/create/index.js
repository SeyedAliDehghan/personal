import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";
import Panel from "../../../../components/Panel/Panel";
import React, { useRef, useEffect, useState, Component } from "react";
import toast, { Toaster } from "react-hot-toast";
import dynamic from "next/dynamic";
import Input from "../../../../components/Input/Input";

function Home() {

  // console.log(apiData)
  // const ref = useRef(null);
  const { data: session } = useSession();
  const router = useRouter();
  const Editor = dynamic(() => import("../../../../components/Editor/Editor"), {
    ssr: false,
  });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [previewLink, setPreviewLink] = useState("");
  const [tag, setTag] = useState("full");
  const [githubLink, setGithubLink] = useState("");
  const [content, setContent] = useState("Foo");
  const [imgUpload, setImgUpload] = useState(false);
  const [imgUploadName, setImgUploadName] = useState("");

  const imageUploadeHandler = async (e) => {
    var formData = new FormData();
    formData.append("theFile", e.target.files[0]);
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    const response = await axios.post(
      "http://localhost:3000/api/admin/upload",
      formData,
      config
    );
    setImgUpload(true);
    setImgUploadName(response.data.fileName);
    return response;
  };


  const uploadImg = (e) => {
    const imageUploadeHandlerFunction = imageUploadeHandler(e);
    toast.promise(imageUploadeHandlerFunction, {
      loading: "uploading",
      success: <b>uploaded</b>,
      error: <b>Could not upload</b>,
    });
  };

  const sendFormData = async () => {
    const response = await axios.post("http://localhost:3000/api/admin/projects/", {
      title,
      tag,
      description,
      img:imgUploadName,
      content,
      githubLink,
      previewLink

    });
    console.log(response);
    
    return response;
  };
  const sendFormDataHandler = (e) => {
    e.preventDefault();
    const sendFormDataFunction = sendFormData();
    toast.promise(sendFormDataFunction, {
      loading: "Sending",
      success: <b>Post Sent!</b>,
      error: <b>Could not send Post.</b>,
    });

  };
  const removeImgHandler=()=>{
    setImgUpload(false);
    setImgUploadName("");
  }
  // const notify=(e)=>{
  //   e.preventDefault()
  //   const el2 = ref.current;
  //   console.log(el2)
  // }
  return (
    <>
      {session && (
        <Panel activeItem="projects">
          {/* onSubmit={(e)=>notify(e)} */}
          <form onSubmit={(e)=>sendFormDataHandler(e)}>
            <Input htmlId="title" label="title" value={title} setValue={setTitle} placeHolder="title"/>
            <Input htmlId="description" label="description" value={description} setValue={setDescription} placeHolder="description"/>
            {/* <Editor /> */}
            <Editor name="dasda" value={content} onBlurSet={setContent} />
            {imgUpload ? (
              // <div className="mt-3">img uploaded: {imgUploadName}</div>
              <>
                <div>img Uploaded:</div>
                <img src={"/uploads/" + imgUploadName} style={{width:'30%'}}/>
                <button onClick={()=>removeImgHandler()} className=" mt-5  mb-5 rounded px-3 py-2 border border-gray-500">remove img</button>
              </>
            ) : (
              <div>
                <div>
                  <label htmlFor="image" className="text-xl required">
                    image
                  </label>
                  <input
                    name="theFile"
                    onChange={(e) => uploadImg(e)}
                    required
                    id="image"
                    type="file"
                    className="form-input py-2 rounded-md w-full focus:shadow-lg mb-3"
                  />
                </div>
              </div>
            )}
            <Input htmlId="tag" label="tag" value={tag} setValue={setTag} placeHolder="tag"/>
            <Input htmlId="prviewlink" label="preview link" value={previewLink} setValue={setPreviewLink} placeHolder="http://something.com"/>
            <Input htmlId="githublink" label="github link" value={githubLink} setValue={setGithubLink} placeHolder="http://something.com"/>
            <button type="submit">Send</button>
          </form>
        </Panel>
      )}
      <Toaster />
    </>
  );
}

export default Home;
