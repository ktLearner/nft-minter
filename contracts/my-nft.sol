// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

//for getting the rules of token 
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    //limiter for number of mintings
    uint256 public constant maxSupply = 3001;

    constructor() ERC721("MyNFT", "NFT") {}

    // modifier for checking if the limit is exceeded 
    modifier minting_limit(){
         require(_tokenIds.current() < maxSupply, "Error message if condition is not met");
        _; 
    }
    // function to mint after checking the modifier 
    function mintNFT(address recipient, string memory tokenURI)
        minting_limit
        public
        onlyOwner
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }
}
