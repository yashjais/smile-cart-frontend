import axios from "axios";

const fetch = params => axios.get("products", { params });

const show = slug => axios.get(`products/${slug}`);

const productsApi = { show, fetch };

export default productsApi;
