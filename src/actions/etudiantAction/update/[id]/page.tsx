import { string } from "zod";

const UpdateEtudiantPage= async ({params}:{params:{id:string}}) =>{
    const id= params.id;
    console.log(id);
    return(
        <div className="max-w-md mx-auto mt-5">
            <h1 className="text-2xl text-center mb-2">Updeta Etudiant</h1>
        </div>
    );
    
};
export default UpdateEtudiantPage;