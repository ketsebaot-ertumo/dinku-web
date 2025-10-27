// /api/routes.ts

import API from "./api";

// login
export const loginUser = async (credentials: { email: string; password: string }) => {
    try{
      const data = await API.post(`users/login`, credentials);
      return data;
    }catch(err: any){
      // console.error("API error:", err);
      return err.message;
    }
};

// register
export const registerUser = async (credentials: {first_name: string; last_name: string; email: string; password: string; role: string; }) => {
  try{
    const data = await API.post(`users/signup`, credentials);
    return data;
  }catch(err: any){
    // console.error(err);
    return  err.message
  }
};

// logout
export const logoutUser = async () => {
    const data = await API.post(`users/logout`);
    return data;
};


// Generic function to get a single entity by ID
export const getEntity = async (entity: string, id: string) => {
  try{
    const data = await API.get(`/${entity}/${id}`);
    return data;
  }catch(err: any){
    // console.error(err);
    return err.message
  }
};

// Generic function to get all entities of a type
export const getAllEntities = async (entity: string) => {
  try{
    const data = await API.get(`/${entity}/`);
    return data;
  } catch(err: any){
    // console.error(err);
    // return err.message
  }
};


// Generic function to create a new entity
export const createEntity = async (entity: string, values: any) => {
  try{
    const data = await API.post(`/${entity}`, values);
    return data;
  }catch(err: any){
    // console.error("\nerror in createEntity", err.message, "\nerr:",err?.response?.data?.error?.detail, );
    return err?.response?.data?.error || err.message || "Unknown error";
  }
};

// Generic function to update an existing entity
export const updateEntity = async (entity: string, id: string, values: any) => {
  try{
    const data = await API.put(`/${entity}/${id}`, values); 
    return data;
  }catch(err: any){
    // console.error(err);
    return err?.response?.data?.error || err.message || "Unknown error";
  }
};

// Generic function to delete an entity
export const deleteEntity = async (entity: string, id: string) => {
  try{
    const data = await API.delete(`/${entity}/${id}`);
    return data;
  }catch(err: any){
    // console.error(err);
    return err?.response?.data?.error || err.message || "Unknown error";
  }
};


// Generic function to get search result of a type
export const getSearchResults = async (keyword: string) => {
  try{
    const data = await API.get(`/search/?keyword=${keyword}`);
    return data;
  } catch(err: any){
    // console.error(err);
    return err.message
  }
};

// // Generic function to get enrollement by course result of a type
// export const getEnrollementByCourse = async (keyword: string) => {
//   try{
//     const data = await API.get(`/search/?keyword=${keyword}`);
//     return data;
//   } catch(err: any){
//       // console.error(err);
//       return  err.message
//   }
// };
  