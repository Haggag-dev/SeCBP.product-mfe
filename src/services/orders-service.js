import APIClient from "./api-client";

const apiClent = new APIClient("orders/order");

const createOrder = async (body) => {
  return await apiClent.post(body);
};

export default createOrder;
