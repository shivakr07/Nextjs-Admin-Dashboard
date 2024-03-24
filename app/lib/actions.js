"use server"

import { redirect } from "next/navigation"
import { Products, Users } from "./models"
import { connectToDB } from "./utils"
import bcrypt from "bcrypt"
import { revalidatePath } from "next/cache"
// import { signIn } from "@/auth"


export const addUser = async (formData) => {

    const { username,email,password,phone,address,isAdmin,isActive}  = Object.fromEntries(formData)
    try{
      await connectToDB()

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newUser = new Users({
        username,
        email,
        password : hashedPassword,
        phone,
        address,
        isAdmin,
        isActive
      })

      await newUser.save()
    } catch(error){
      console.log(error)
      throw new Error("Failed to create the User")
    }
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
    
}

export const addProduct = async(formData) => {
  const {title, desc, price, stock, color, size} = Object.fromEntries(formData);

  try{
    await connectToDB();
    const newProduct = new Products({
      title,
      desc,
      price,
      stock,
      color,
      size
    });
    await newProduct.save();
  }catch(err){
    console.log(err)
    throw new Error('failed to create the products');
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
}

export const deleteUser = async(formData) => {
  const {id} = Object.fromEntries(formData);

  try{
    await connectToDB();
    await Users.findByIdAndDelete(id);
  }catch(err){
    console.log(err);
    throw new Error('failed to delete');
  }
  revalidatePath("/dashboard/users")
}

export const deleteProduct = async(formData) => {
    const {id} = Object.fromEntries(formData);

    try{
    await connectToDB();
    await Products.findByIdAndDelete(id);
  } catch(err){
    console.log(err);
    throw new Error('failed to delete');
  }
  revalidatePath("/dashboard/products")
}

export const updateUser = async(formData) => {
  const {id, username, email, password, phone, address, isAdmin, isActive} = Object.fromEntries(formData);
  try{
    await connectToDB();
    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    }
    Object.keys(updateFields).forEach((key) => (updateFields[key] === "" || undefined && delete updateFields[key]));
    await Users.findByIdAndUpdate(id, updateFields)

  } catch(err){
    console.log(err);
    throw new Error('failed to update the user');
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
}

export const authenticate = async(formData)=> {
  const {username, password} = Object.fromEntries(formData);
  
  try{
    await signIn("credentials", {username, password});
  } 
  catch(err){
    if(err.message.includes("CredentialsSignin")){
      return "Wrong Credentials"
    }
    throw err;
  }
}



// so we will add users 
// for that we need models [import models]
// connect to database connectToDB
// and we need formdata 
// and since in db we have it like object so Object.entries should take the similar data 
// and we need to add directive "use server" otherwise server action will not work
// and in the addUser page we can just add a form action as addUser 
// as we are making the server action as addUser [later think whether it is necessary or not]


