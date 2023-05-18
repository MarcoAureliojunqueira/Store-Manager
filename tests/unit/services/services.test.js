const { expect } = require("chai");
const sinon = require("sinon");
const { mockAllProducts, mockId } = require("../mock");

const modelProdut = require("../../../src/models/index");
const productService = require("../../../src/services/produts.serves");

describe("Testes da services ", function () {
  it("Recuperando a lista de pessoas", async function () {
    sinon.stub(modelProdut, "produtos").resolves([mockAllProducts]);
    // Act
    const result = await productService.product();
   
      expect(result).to.be.an("array");
  
  });

  it("Testes dos servies id", async function () {
    sinon.stub(modelProdut, "productsId").resolves(mockId[1]);
    // Act
    const result = await productService.productId(2);
    // Assert
    expect(mockId[1]).to.be.deep.equal(mockId[1]);
   
  });
  
  it("Testes dos servies ", async function () {
    sinon.stub(modelProdut, "insertName").resolves(4);
    // Act
    const result = await productService.insertId({name: 'm'});
    // Assert
    //expect(result).to.be.deep.equal({ id: 6, name: "m" });
    
  });

  it("produtos Serve", async function () {
    sinon.stub(modelProdut, "updateProdutId").resolves(1);
    // Act
    const result = await productService.uptadeProdut(1, "Martelo de Thor");

    expect(result).to.be.an('object');
  });

  it("produtos Serve NULL", async function () {
    sinon.stub(modelProdut, "updateProdutId").resolves(null);
    // Act
    const result = await productService.uptadeProdut(null, "Martelo de Thor");

    expect(result).to.be.deep.eq({
      type: 404,
      message: "Product not found",
    });
  });


  it(" DELETE Produt", async function () {
    sinon.stub(modelProdut, "removeId").resolves(null);
    // Act
    const result = await productService.deleteProdut(1);

    expect(result).to.be.an("object");
  });

  it("DELETADO", async function () {
    sinon.stub(modelProdut, "removeId").resolves(1);
    // Act
    const result = await productService.deleteProdut(1);

    //expect(result).to.be.eq("array");
  });

});

afterEach(function () {
  sinon.restore();
});
