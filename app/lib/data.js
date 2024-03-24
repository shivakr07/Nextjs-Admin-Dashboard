// import {Users} from "./models";
// import { connectToDB } from "./utils";

// export const fetchUsers = async() => {
//     try{
//         const val = await connectToDB();
//         console.log(val);
//         const users = await Users.find();
//         return users;
//     } catch(error){
//         console.log(error);
//         // throw new Error("Failed to fetch users!");
//     }
// }

import { connectToDB } from './utils.js';
import { Users } from './models.js';
import { Products } from './models.js';

export async function fetchUsers(req, res) {
    try {
        // Connect to the database
        await connectToDB();
        const users = await Users.find();
        // console.log("Fetched users:", users);
        return users;
    } catch (error) {
        // Log and handle errors
        console.error('Error : ', error);
        throw new Error("failed to fetch users")
    }
}

export async function fetchUser(id) {
    try {
        await connectToDB();
        const user = await Users.findById(id);
        return user;
    } catch (error) {
        console.error('Error : ', error);
        throw new Error("failed to fetch user")
    }
}

export async function fetchProducts(req, res) {
    try {
        await connectToDB();
        const products = await Products.find();
        return products;
    } catch (error) {
        console.error('Error : ', error);
        throw new Error("failed to fetch products")
    }
}

