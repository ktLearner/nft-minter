//main frontend which calls the interact page to initiate minting
//first tried pinning on ipfs and got stuck

// https://lavender-holy-bear-697.mypinata.cloud/ipfs/QmWGGyoExCG3LhJ4BqUQ7oopWMPBKGgPdR7Aeb9gLQPHUz

import React, { useState } from "react";
import pinFileToIPFS from "./utils/pinning";
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
      <input type="file" className="p-20" onChange={handleImageUpload} />
      {uploadedImage && (
        <div>
          <img src={URL.createObjectURL(uploadedImage)} alt="Selected" />
        </div>
      )}
    </div>
        <div>
        
        </div>

        {/* <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button> */}

      </div>
    )
  }

  export default Minter;