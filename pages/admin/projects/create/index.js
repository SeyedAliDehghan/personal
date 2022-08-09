import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";
import Panel from "../../../../components/Panel/Panel";
import React, { useRef, useEffect, useState, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faEdit } from "@fortawesome/free-solid-svg-icons";
import toast, { Toaster } from "react-hot-toast";
import dynamic from "next/dynamic";

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
  const [content, setContent] = useState("Foo");
  const [imgUpload, setImgUpload] = useState(false);
  const [imgUploadName, setImgUploadName] = useState("");
  const [bannerUpload, setBannerUpload] = useState(false);
  const [bannerUploadName, setBannerUploadName] = useState("");

  const imageUploadeHandler = async (e) => {
    var formData = new FormData();
    formData.append("theFile", e.target.files[0]);
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    const response = await axios.post(
      "http://localhost:3000/api/projects/create",
      formData,
      config
    );
    setImgUpload(true);
    setImgUploadName(response.data.fileName);
    return response;
  };
  const bannerUploadeHandler = async (e) => {
    var formData = new FormData();
    formData.append("theFile", e.target.files[0]);
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    const response = await axios.post(
      "http://localhost:3000/api/projects/create",
      formData,
      config
    );
    setBannerUpload(true);
    setBannerUploadName(response.data.fileName);
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
  const uploadBanner = (e) => {
    const bannerUploadeHandlerFunction = bannerUploadeHandler(e);
    toast.promise(bannerUploadeHandlerFunction, {
      loading: "uploading",
      success: <b>uploaded</b>,
      error: <b>Could not upload</b>,
    });
  };

  const sendFormData = async () => {
    const response = await axios.post("http://localhost:3000/api/projects", {
      // Data is gonnna be here
    });
    return Response;
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
          <form action="localhost/dasdas">
            <label htmlFor="title" className="text-xl required">
              title:
            </label>
            <input
              required
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-input py-2 rounded-md w-full focus:shadow-lg"
              placeholder="Name"
            />
            <label htmlFor="description" className="text-xl required">
              description:
            </label>
            <input
              required
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              className="form-input py-2 rounded-md w-full focus:shadow-lg mb-3"
              placeholder="Name"
            />
            {/* <Editor /> */}
            <Editor name="dasda" value={content} onBlurSet={setContent} />
            {imgUpload ? (
              // <div className="mt-3">img uploaded: {imgUploadName}</div>
              <>
                <div>img Uploaded:</div>
                <img src={"/uploads/" + imgUploadName} style={{width:'30%'}}/>
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
            {bannerUpload ? (
              // <div className="mt-3">Banner Uploaded: {bannerUploadName}</div>
              <>
                <div>Banner Uploaded:</div>
                <img src={"/uploads/" + bannerUploadName} style={{width:'30%'}}/>
              </>
            ) : (
              <div>
                <label htmlFor="banner" className="text-xl required">
                  banner
                </label>
                <input
                  name="theFile"
                  onChange={(e) => uploadBanner(e)}
                  required
                  id="banner"
                  type="file"
                  className="form-input py-2 rounded-md w-full focus:shadow-lg mb-3"
                />
              </div>
            )}
            <button type="submit">Send</button>
          </form>
        </Panel>
      )}
      <Toaster />
    </>
  );
}

export default Home;
