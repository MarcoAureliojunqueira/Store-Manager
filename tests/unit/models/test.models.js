const { expect } = require("chai");
const sinon = require("sinon");
const { passengerModel } = require("../../../src/models/index");

const connection = require('../../../src/models/connection');
const { pessoas } = require("./model.mock");

describe("Testes de unidade do model de pessoas ", function () {
  it("Recuperando a lista de pessoas", async function () {
    // Arrange
    sinon.stub(connection, "execute").resolves([pessoas]);
    // Act
    const result = await passengerModel.produtos();
    // Assert
    expect(result).to.be.deep.equal(pessoas);
  });

  it("Recuperando uma pessoa passageira a partir do seu id", async function () {
    // Arrange
    sinon.stub(connection, "execute").resolves([[pessoas[0]]]);
    // Act
    const result = await passengerModel.productsId(1);
    // Assert
    expect(result).to.be.deep.equal(pessoas[0]);
  });
});
 afterEach(function () {
    sinon.restore();
  });