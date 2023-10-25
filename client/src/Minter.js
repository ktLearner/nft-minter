import React, { useState } from "react";
// import ImageUploader from "./ImageUploader";
import pinFileToIPFS from "./utils/pinning";
// https://lavender-holy-bear-697.mypinata.cloud/ipfs/QmWGGyoExCG3LhJ4BqUQ7oopWMPBKGgPdR7Aeb9gLQPHUz
const Minter = () => {

  const [uploadedImage, setUploadedImage] = useState(null);
  const [cid, setcid] = useState(null);

  const handleImageUpload = async(e) => {
    const file = e.target.files[0];
    if (file) {
      const Cid = await pinFileToIPFS(file);
      setcid(Cid)
      console.log(Cid)
      console.log(cid)
      setUploadedImage(file);
    }
  }
  // pin(image)

  // const  pin = async(image)=>{
  //   const  Cid = await pinFileToIPFS(image);
  //   setcid(Cid)
  // }
    return (
      <div className=' '>
        <div>

          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Upload file</label>
          <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
        </div >
        <div>
      <input type="file"  onChange={handleImageUpload} />
      {uploadedImage && (
        <div>
          <img src={URL.createObjectURL(uploadedImage)} alt="Selected" />
        </div>
      )}
    </div>
        <div>
          {/* <ImageUploader onImageUpload={handleImageUpload} /> */}
        </div>

        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>

      </div>
    )
  }

  export default Minter;