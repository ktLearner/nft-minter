const axios = require('axios')
const FormData = require('form-data')
const fs = require('fs')
const JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJiYTRjNDdjMi1iZDA3LTRmYTMtODkwZS0xYWJlODM0NTk1YTgiLCJlbWFpbCI6ImtyaXNobmEua3Q1MzlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjNjMDkzZGJmY2Q2YzBlMmUzNTdkIiwic2NvcGVkS2V5U2VjcmV0IjoiNjYyM2RmMWFiNjJlYTgyODE2ZDA3YzJiY2RlMzA3MzYyYzNmNTEyYmYyZTIxZDkyNzZmZGQyNzYzNjRjY2MxNSIsImlhdCI6MTY5Njc2NjIzOX0.d-nRYB7OmdxL17JctjtH3ODwV-_vh9oxQ2pXcOCKuek'
console.log ("hello");

const pinFileToIPFS = async () => {
    const formData = new FormData();
    const src = "/home/krishna/Desktop/code/blockchain/nft-collection/2.jpg";
    
    const file = fs.createReadStream(src)
    formData.append('file', file)
    
    const pinataMetadata = JSON.stringify({
      name: 'File name',
    });
    formData.append('pinataMetadata', pinataMetadata);
    
    const pinataOptions = JSON.stringify({
      cidVersion: 0,
    })
    formData.append('pinataOptions', pinataOptions);
    console.log ("hello");

    try{
      const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        maxBodyLength: "Infinity",
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
          Authorization: JWT
        }
      });
      console.log ("hello");
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
}
pinFileToIPFS();
