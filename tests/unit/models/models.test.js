const { expect } = require("chai");
const sinon = require("sinon");
const { mockAllProducts, mockId } = require('../mock');

 const connection = require('../../../src/models/connection');
const modelProdut = require("../../../src/models/produts.model");

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
    expect(result).to.be.deep.equal(mockId);
  });

  it("inserido name", async function () {
    const createdProductMock = { fieldCount: 0, affectedRows: 1, insertId: 4, info: "", serverStatus: 2, warningStatus: 0, };
    sinon.stub(connection, "execute").resolves([ createdProductMock.insertId]);
    // Act
    const result = await modelProdut.insertName({ name:'produtoX' });
    // Assert
    expect(result).to.be.an('undefined');
  });

  it("testando atualização", async function () {
    const createdProductMock = { fieldCount: 0, affectedRows: 1, insertId: 4, info: "", serverStatus: 2, warningStatus: 0, };
    sinon.stub(connection, "execute").resolves([ createdProductMock.affectedRows]);
    // Act
    const result = await modelProdut.updateProdutId(1, 't');
   // expect(result).to.be(1)
    // Assert
    //expect(result).to.be.an('undefined');
  });
});

 afterEach(function () {
    sinon.restore();
  });