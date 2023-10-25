// this file is for combining all tasks  but failed at pinning image so dint really continue

import React from 'react'
import pinFileToIPFS from "./utils/pinning";
const intract = () => {

    const pin = async (image) => {
        return (await pinFileToIPFS(image));
    }


    // make metadata
    const metadata = new Object();
    metadata.name = name;
    metadata.image = url;
    metadata.description = description;

    
    let tokenURI;
    try {
        // tokenURI = await uploadToIPFS(metadata);
    } catch (error) {
        console.error("Error uploading data to IPFS", error);
        return {
            success: false,
            status: "Could not upload metadatato IPFS",
        };
    }

    return (
        <div>intract</div>
    )
}

export default intract