require('dotenv').config();

const ethers = require('ethers');

// Get Alchemy API Key
const API_KEY = process.env.API_KEY;

// Define an Alchemy Provider
const provider = new ethers.AlchemyProvider('sepolia', API_KEY)

const contract = require("../../../artifacts/contracts/my-nft.sol/MyNFT.json");

// Create a signer
const privateKey = process.env.PRIVATE_KEY
const signer = new ethers.Wallet(privateKey, provider)

// Get contract ABI and address
const abi = contract.abi
const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'

// Create a contract instance
const myNftContract = new ethers.Contract(contractAddress, abi, signer)

// Get the NFT Metadata IPFS URL
let tokenUri = "https://lavender-holy-bear-697.mypinata.cloud/ipfs/QmaGdA72EHqj5umM4XyuUksp3VYgWWhfwKJdzmsMbXAk8x/9.json";

// Call mintNFT function
const mintNFT = async () => {
    let nftTxn = await myNftContract.mintNFT(signer.address, tokenUri)
    await nftTxn.wait()
    console.log(`NFT Minted! Check it out at: https://sepolia.etherscan.io/tx/${nftTxn.hash}`)
}

mintNFT()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});

