module.exports = {
  routes: [
    {
      // Path defined with a regular expression
      method: "POST",
      path: "/order/pretransaction", // Only match when the URL parameter is composed of lowercase letters
      handler: "custom.pre",
    },
    {
      method: "GET",
      path: "/hello",
      handler: "custom.index",
    },
    {
      method: "POST",
      path: "/orders/posttransaction",
      handler: "custom.post",
    },
  ],
};
