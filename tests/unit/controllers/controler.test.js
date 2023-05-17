const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const { expect } = chai;
chai.use(sinonChai);

const { mockAllProducts, mockId } = require("../mock");

const controller = require("../../../src/controllers/produts.controler");
const productService = require("../../../src/services/produts.serves");

describe("Testes do controller  ", function () {
  it("Recuperando a lista de pessoas", async function () {
    const res = {};
    const req = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productService, "product").resolves(mockAllProducts[0]);
    await controller.product(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mockAllProducts[0]);

  });

   it("Testes dos servies id", async function () {
   const res = {};
   const req = { params: { id: 1 } };
   res.status = sinon.stub().returns(res);
   res.json = sinon.stub().returns();

   sinon.stub(productService, "productId").resolves(mockId[0]);
   await controller.productId(req, res);

   expect(res.status).to.have.been.calledWith(200);
   expect(res.json).to.have.been.calledWith(mockId[0]);
   });
});

afterEach(function () {
  sinon.restore();
});
