// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title MeliSsa42 Token (ERC-20 compliant)
/// @author You
/// @notice This contract implements a basic ERC-20 token using OpenZeppelin's standard implementation.
/// @dev Uses OpenZeppelin ERC20 contract

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// Inherit from ERC20 and Ownable
contract MeliSsa42 is ERC20, Ownable {

    /// @notice Constructor that mints the initial supply to the deployer's address
    /// @param initialSupply Initial token supply, in units of token * (10 ** decimals())
    constructor(uint256 initialSupply) ERC20("MeliSsa42", "MS42") Ownable(msg.sender) {
        _mint(msg.sender, initialSupply);
    }

    /// @notice Mint new tokens to a specific address
    /// @param to Recipient address
    /// @param amount Amount of tokens to mint
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}