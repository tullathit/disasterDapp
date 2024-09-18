const { expect } = require("chai");

describe("RegisterDisaster contract", function () {
  let registerDisaster, owner;

  beforeEach(async () => {
    const [deployer] = await ethers.getSigners();
    registerDisaster = await ethers.deployContract("RegisterDisaster");
    owner = deployer;
  });

  describe("Deployment", () => {
    it("Should set the right owner", async () => {
      expect(await registerDisaster.owner()).to.equal(owner.address);
    });
  });

  describe("Registration", () => {
    it("Should allow a person to register", async () => {
      await registerDisaster.registerPerson("1234567890", "John", "Doe", "123 Main St");
      const person = await registerDisaster.getID("1234567890");
      expect(person.idCard).to.equal("1234567890");
      expect(person.firstName).to.equal("John");
      expect(person.lastName).to.equal("Doe");
      expect(person.addr).to.equal("123 Main St");
    });
  });

  describe("Get ID", () => {
  it("Should find a person by ID", async () => {
    await registerDisaster.registerPerson("1234567890", "John", "Doe", "123 Main St");

    const person = await registerDisaster.getID("1234567890");
    expect(person.idCard).to.equal("1234567890");
    expect(person.firstName).to.equal("John");
    expect(person.lastName).to.equal("Doe");
    expect(person.addr).to.equal("123 Main St");
  });

  it("Should not find a person by ID if not registered", async () => {
    const unregisteredID = "9999999999";
    await expect(registerDisaster.getID(unregisteredID)).to.be.revertedWith("Person not found");
    });
  });
});