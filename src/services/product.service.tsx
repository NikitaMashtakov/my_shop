import axios from "axios";

export const ProductService = {
    async getAllProducts() {
        const response = await axios.get('https://fakestoreapi.com/products')
        return response.data
    },
    async getById(id: number) {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        return response.data
    }
}