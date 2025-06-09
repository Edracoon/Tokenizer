const { ethers } = require("hardhat");

async function main() {
    console.log("🚀 Deploying MeliSsa42 token...");

    // Valeur initiale du total supply (exemple : 1 million tokens)
    const initialSupply = ethers.parseUnits("1000000", 18); // 1 million tokens (avec 18 décimales)

    // On récupère la factory de contrat (générée automatiquement par Hardhat lors de compile)
    const MeliSsa42 = await ethers.getContractFactory("MeliSsa42");

    // On déploie le contrat avec le paramètre initialSupply
    const meliSsa42 = await MeliSsa42.deploy(initialSupply);

    console.log("⏳ Waiting for deployment...");
    await meliSsa42.waitForDeployment();

    const address = await meliSsa42.getAddress();
    console.log(`✅ MeliSsa42 deployed at address: ${address}`);

    // Pour interagir après déploiement
    const balance = await meliSsa42.balanceOf(address);
    const totalSupply = await meliSsa42.totalSupply();

    console.log(`✅ Balance of ${address}: ${balance}`);
    console.log(`✅ Total supply: ${totalSupply}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});