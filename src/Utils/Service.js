import { generatePath } from "react-router";

const Service = async (method, url, payload = {}, urlParams = {}) => {
  try {
    url = generatePath(url, { ...urlParams, 3000: ":3000" });
    console.log(`Remote Service ${method} ${url}`);
    let response;
    let result;
    if (method === "POST" || method === "PUT") {
      let body = {
        method: method,
        headers: {
          //   Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      };
      response = await fetch(url, body);
    } else if (method === "GET") {
      let body = {
        method: method,
        headers: {
          //   Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      };
      response = await fetch(url, body);
    } else if (method === "DELETE") {
      let body = {
        method: method,
        headers: {
          //   Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: payload && JSON.stringify(payload),
      };
      response = await fetch(url, body);
    } else {
      throw new Error("Unknown Request Type");
    }
    return response.json();
  } catch (e) {
    throw new Error(e);
  }
};

export default Service;
