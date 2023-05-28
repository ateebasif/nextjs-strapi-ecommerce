const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  // Method 1: Creating an entirely custom action
  async pre(ctx) {
    try {
      // Check if user is authenticated
      // console.log("ctx.state", ctx.state);
      let params = ctx.request.body;

      console.log("params", params);

      const entry = await strapi.entityService.create("api::order.order", {
        data: {
          email: params.email,
          orderid: params.orderid,
          paymentInfo: null,
          products: params.cart,
          address: params.address,
          name: params.name,
          transactionid: null,
          amount: params.amount,
          status: "pending",
        },
      });
      console.log("entry", entry);
      // ctx.send(entry);
      ctx.redirect("http://localhost:3000/success");
    } catch (err) {
      ctx.body = err;

      console.log("error", err);
    }
  },

  async index(ctx, next) {
    // called by GET /hello
    ctx.body = "Hello World!"; // we could also send a JSON
  },

  async post(ctx) {
    let params = ctx.request.body;
    const entries = await strapi.entityService.findMany("api::order.order", {
      fields: ["id"],
      filters: { orderid: params.ORDERID },
    });
    let id = entries[0].id;
    await strapi.entityService.update("api::order.order", id, {
      data: {
        transactionid: "params.TXNID",
        paymentInfo: "params",
        status: params.STATUS,
      },
    });
    ctx.redirect("http://localhost:3000/success");
  },
}));
