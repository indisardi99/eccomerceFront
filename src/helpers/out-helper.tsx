import {IValidateLogin, IValidateRegister } from "@/types"

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
if (!apiUrl) {
    console.error("API URL is not defined");
    throw new Error("API URL is not defined");
}

    export async function register(userData: IValidateRegister) {
        try{
                const res = await fetch (`${apiUrl}/users/register`, {
                    method: 'POST',
                    headers:{
                        "Content-Type": "application/json",
                        // 'ngrok-skip-browser-warning': 'true',
                    },
                    body: JSON.stringify(userData)
                })
            if(res.ok){
                return (
                    res.json()
                )
            } else {
                const errorMessage = await res.text(); 
                console.error("Failed to register:", errorMessage);
                throw new Error("Failed to register: " + errorMessage);
            }
        } catch (error:any) {
            console.error("Error registering:", error);
            throw new Error("Error registering: " + error.message);
        }
    }

    export async function login (userData: IValidateLogin) {
        try{    
                console.log(userData)
                const res = await fetch (`${apiUrl}/users/login`, {
                    method: 'POST',
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(userData)
                })
            if(res.ok){
                return (
                    res.json()
                )
            }else{
                alert ("Failed to login")
                throw new Error ("Failed to login")
            }
        }catch (error:any) {
                throw new Error(error)
        }
    } 