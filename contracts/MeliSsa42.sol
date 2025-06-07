// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/// @title MeliSsa42 - Un token ERC-20 conforme, basé sur OpenZeppelin
/// @notice Fournit une offre fixe au créateur lors du déploiement
contract MeliSsa42 is ERC20 {
    uint256 private constant INITIAL_SUPPLY = 42000 * 10**18;

    /// @notice Constructeur : crée le token MeliSsa42 et mint l'offre initiale
    constructor() ERC20("MeliSsa42", "M42") {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}