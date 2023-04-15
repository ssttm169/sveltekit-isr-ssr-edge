import { f as fail } from "../../../chunks/index.js";
async function load() {
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
  const res = await Promise.resolve("yes");
  return {
    generatedAt,
    res
  };
}
const actions = {
  login: async ({ request }) => {
    console.log("login");
    const data = await request.formData();
    const ipAddress = data.get("ipAddress");
    const port = data.get("port");
    if (!ipAddress) {
      return fail(400, { ipAddress, missing: true });
    }
    if (!port) {
      return fail(400, { port, missing: true });
    }
    const execRes = await Promise.resolve("yes");
    console.log("execRes", execRes);
    return { success: true, execRes };
  },
  register: async () => {
    console.log("register=====");
  }
};
export {
  actions,
  load
};
