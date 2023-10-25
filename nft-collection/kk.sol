// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TVCharacterNFT is ERC721Enumerable, Ownable {
    string[] public characters;
    mapping(uint256 => string) private tokenIdToImage;

    uint256 public maxNFTs;
    uint256 public mintedNFTs;

    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {
        maxNFTs = 3000;
        mintedNFTs = 0;
    }

    function mintNFT(string memory _character, string memory _image) public onlyOwner {
        require(mintedNFTs < maxNFTs, "Maximum NFT limit reached");
        uint256 tokenId = characters.length;
        characters.push(_character);
        tokenIdToImage[tokenId] = _image;
        _mint(msg.sender, tokenId);
        mintedNFTs++;
    }

    function changeImage(uint256 tokenId, string memory _newImage) public {
        require(ownerOf(tokenId) == msg.sender, "Only the owner can change the image");
        tokenIdToImage[tokenId] = _newImage;
    }

    function getImage(uint256 tokenId) public view returns (string memory) {
        return tokenIdToImage[tokenId];
    }
}
