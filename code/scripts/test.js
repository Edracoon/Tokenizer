const { ethers } = require("hardhat");

const CONTRACT_ADDRESS = "0xbA41e539f898B86B0939cB47D876CdF75b2EB54c" // Lastly deployed Sepolia contract address
const OWNER_ADDRESS = "0x68061f79c7EaAe9FDA9F62cA0a8D5a80cc670D6E" // Metamask user address
const OTHER_USER_ADDRESS = "0xFCCbf4B2eEeEb18Cd95bb4d6bD02e852825D0013" // Another user address from metamask

async function main() {
    // 1️⃣ Vérifier le totalSupply
    console.log("2️⃣ Vérifier le totalSupply");
    const MeliSsa42 = await ethers.getContractAt("MeliSsa42", CONTRACT_ADDRESS);
    const totalSupply = await MeliSsa42.totalSupply();
    console.log("totalSupply =", ethers.formatUnits(totalSupply, 18));

    // 3️⃣ Vérifier le solde de l'owner (balanceOf)
    console.log("3️⃣ Vérifier le solde de l'owner (balanceOf)");
    const [owner] = await ethers.getSigners();
    owner.address;

    const balance = await MeliSsa42.balanceOf(owner.address);
    console.log("balance =", ethers.formatUnits(balance, 18));

    // 4️⃣ Tester un transfer
    console.log("4️⃣ Transférer 100 tokens à l'autre user");
    const transfer = await MeliSsa42.transfer(OTHER_USER_ADDRESS, ethers.parseUnits("100", 18));
    await transfer.wait();

    const balanceUser = await MeliSsa42.balanceOf(OTHER_USER_ADDRESS);
    console.log("balanceUser =", ethers.formatUnits(balanceUser, 18)); // 100

    // 5️⃣ Tester approve + transferFrom
    console.log("5️⃣ Tester approve + transferFrom");
    const approve = await MeliSsa42.approve(OTHER_USER_ADDRESS, ethers.parseUnits("50", 18));
    await approve.wait();
    const allowance = await MeliSsa42.allowance(owner.address, OTHER_USER_ADDRESS);
    console.log("allowance =", ethers.formatUnits(allowance, 18));

    // 6️⃣ Tester mint (par owner)
    console.log("6️⃣ Tester mint (par owner)");
    const mint = await MeliSsa42.mint(OWNER_ADDRESS, ethers.parseUnits("500", 18));
    await mint.wait();

    const balanceAfterMint = await MeliSsa42.balanceOf(OWNER_ADDRESS);
    console.log("balanceAfterMint =", ethers.formatUnits(balanceAfterMint, 18)); // 500

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});