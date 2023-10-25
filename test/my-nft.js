const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyNFT", function () {
  let myNFT;
  let owner;
  let recipient;
  const mintingLimit = 3001;
  
  before(async function () {
    [owner, recipient] = await ethers.getSigners();

    const MyNFT = await ethers.getContractFactory("MyNFT");
    myNFT = await MyNFT.deploy();
    await myNFT.deployed();
  });

  it("Should deploy the contract", async function () {
    expect(myNFT.address).to.not.equal(0);
  });

  it("Should have the correct name and symbol", async function () {
    const name = await myNFT.name();
    const symbol = await myNFT.symbol();
    expect(name).to.equal("MyNFT");
    expect(symbol).to.equal("NFT");
  });

  it("Should allow the owner to mint NFTs within the limit", async function () {
    const tokenURI = "https://example.com/my-nft";
    let newItemId;
    
    for (let i = 0; i < mintingLimit; i++) {
      newItemId = await myNFT.connect(owner).mintNFT(recipient.address, tokenURI);
      expect(newItemId.toNumber()).to.equal(i + 1);
    }
  });

  it("Should not allow minting beyond the limit", async function () {
    const tokenURI = "https://example.com/my-nft";
    
    try {
      await myNFT.connect(owner).mintNFT(recipient.address, tokenURI);
      expect.fail("Minting should fail when the limit is reached");
    } catch (error) {
      expect(error.message).to.include("Error message if condition is not met");
    }
  });
});
