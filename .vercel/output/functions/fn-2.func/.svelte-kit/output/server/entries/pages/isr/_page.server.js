const config = {
  isr: {
    // Expiration time (in seconds) before the cached asset will be re-generated by invoking the Serverless Function.
    // Setting the value to `false` means it will never expire.
    expiration: 10
  }
};
function load() {
  const generatedAt = (/* @__PURE__ */ new Date()).toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    fractionalSecondDigits: 3
    // for milliseconds
  });
  return {
    generatedAt
  };
}
export {
  config,
  load
};
