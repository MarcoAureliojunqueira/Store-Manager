const { expect } = require("chai");
const sinon = require("sinon");
const { mockAllProducts, mockId } = require("../mock");

const modelProdut = require("../../../src/models/index");
const salesService = require("../../../src/services/sales.services");

describe("Testes da services ", function () {
  it("Recuperando a lista de pessoas", async function () {
    sinon.stub(modelProdut, "produtos").resolves([{
    saleId: 2,
    date: '2023-05-18T05:25:08.000Z',
    productId: 3,
    quantity: 15
  }]);
    // Act
    const result = await salesService.productsSales();
   
    expect(result).to.be.an("array");
  })
  });