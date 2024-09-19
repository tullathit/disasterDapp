async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    console.log("Account balance:", (await ethers.provider.getBalance(deployer.address)).toString());

    const RegisterDisaster = await ethers.getContractFactory("RegisterDisaster");
    console.log("Deploying the RegisterDisaster contract..."); 

    const registerDisaster = await RegisterDisaster.deploy();

    console.log("Contract deployed to address:", registerDisaster.address);
}

main()
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });
