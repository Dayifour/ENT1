import React from "react";
import { BaseFormulaire } from "./BaseFormulaire";
import { log } from "node:console";

const FormulaireAdmin= ()=>{
    const fields=[
        {name: "nom",label:"Nom",type:"text"},
        {name: "email",label:"Email",type:"email"},
        {name: "password",label:"Mot de passe",type:"password"},

    ];
    const handleSubmit= async (data:Record<string,string>)=>{
        console.log("Admin Data Submitted:", data);
        try{
            const response= await fetch("/api/inscription/admin",{

                method: "POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(data),
            });
            if(response.ok){
                const result= await response.json();
                alert("Inscription reussie:" +result.message);
            }else{
                const error=await response.json();
                alert("Erreur lors de l'inscription:"+error.error);
            }
        }catch(error){
            console.log("Erreur réseau ou serveur:", error);
            alert("Une erreur s'est produite .Veuillez réessayer.");
            
        }
    };
    return <BaseFormulaire fields={fields} onSubmit={handleSubmit}/>;
}
export default FormulaireAdmin;