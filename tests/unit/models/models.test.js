const { expect } = require("chai");
const sinon = require("sinon");
const { mockAllProducts, mockId } = require('../mock');

 const connection = require('../../../src/models/connection');
const modelProdut = require("../../../src/models/");

describe("Testes da model", function () {
  it("Recuperando a lista de pessoas", async function () {
   sinon.stub(connection, "execute").resolves([mockAllProducts]);
   // Act
   const result = await modelProdut.produtos();
   // Assert
   expect(result).to.be.deep.equal(mockAllProducts);
  });

  it("Recuperando uma pessoa passageira a partir do seu id", async function () {
  sinon.stub(connection, "execute").resolves([[mockId]]);
   // Act
   const result = await modelProdut.productsId(1);
   // Assert
    expect(result).to.be.deep.equal( mockId );
  });
});

 afterEach(function () {
    sinon.restore();
  });