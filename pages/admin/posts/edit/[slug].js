import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";
import Panel from "../../../../components/Panel/Panel";
import React, { useRef, useEffect, useState, Component } from "react";
import toast, { Toaster } from "react-hot-toast";
import dynamic from "next/dynamic";
import Input from "../../../../components/Input/Input";

function Home({apiData}) {
  // console.log(apiData)
  // const ref = useRef(null);
  const { data: session } = useSession();
  const router = useRouter();
  const Editor = dynamic(() => import("../../../../components/Editor/Editor"), {
    ssr: false,
  });

  const [title, setTitle] = useState(apiData.title);
  const [description, setDescription] = useState(apiData.description);
  const [content, setContent] = useState(apiData.content);
  const [imgUpload, setImgUpload] = useState(true);
  const [imgUploadName, setImgUploadName] = useState(apiData.img);

  const imageUploadeHandler = async (e) => {
    var formData = new FormData();
    formData.append("theFile", e.target.files[0]);
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    const response = await axios.post(
      process.env.NEXT_PUBLIC_URL+"/api/admin/upload",
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
    const response = await axios.patch(process.env.NEXT_PUBLIC_URL+`/api/admin/posts/${apiData._id}`, {
      title,
      description,
      img:imgUploadName,
      content,

    });
    console.log(response);
    
    return response;
  };
  const sendFormDataHandler = (e) => {
    e.preventDefault();
    const sendFormDataFunction = sendFormData();
    toast.promise(sendFormDataFunction, {
      loading: "Sending",
      success: <b>post saved!</b>,
      error: <b>Could not save post.</b>,
    });
    // router.push('/admin/posts')
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
        <Panel activeItem="posts">
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
            <button type="submit" className="block">Send</button>
          </form>
        </Panel>
      )}
      <Toaster />
    </>
  );
}


export async function getServerSideProps(context) {
    const { slug } = context.query;
    // console.log("===================");
    // console.log(pid);
    try {
      const res = await axios.get(process.env.URL + "/api/posts/" + slug);
      console.log(res.data)
      return {
        props: {
          apiData: res.data,
        },
      };
    } catch (error) {
      return {
        notFound: true,
      };
    }
  }

export default Home;
