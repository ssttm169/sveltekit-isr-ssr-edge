import { j as json } from "../../../chunks/index.js";
function GET() {
  const number = Math.floor(Math.random() * 6) + 1;
  return json({
    id: 11,
    name: "Tom",
    number
  });
}
export {
  GET
};
