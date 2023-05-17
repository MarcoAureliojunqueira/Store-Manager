const { expect } = require("chai");
const sinon = require("sinon");
const { mockAllProducts, mockId } = require("../mock");

const modelProdut = require("../../../src/models/produts.model");
const productService = require("../../../src/services/produts.serves");

describe("Testes da services ", function () {
  it("Recuperando a lista de pessoas", async function () {
    sinon.stub(modelProdut, "produtos").resolves([mockAllProducts]);
    // Act
    const result = await productService.product();
   
      expect(result).to.be.an("array");
  
  });

  it("Testes dos servies id", async function () {
    sinon.stub(modelProdut, "productsId").resolves(mockId);
    // Act
    const result = await productService.productId(1);
    // Assert
    expect(result).to.be.deep.equal( mockId );
   
  });
  
  it("Testes dos servies ", async function () {
    sinon.stub(modelProdut, "insertName").resolves(4);
    // Act
    const result = await productService.insertId({name: 'm'});
    // Assert
    expect(result).to.be.deep.equal({ id: 4, name: "m" });
  });
});

afterEach(function () {
  sinon.restore();
});
