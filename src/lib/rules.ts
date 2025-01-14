import { z } from "zod";

export const RegisterFormSchema = z.object({
  matricule: z.string().min(1, "Le matricule est requis."),
  id_utilisateur: z.number().positive("ID utilisateur doit être positif."),
  date_naissance: z.string().refine(
    (date) => !isNaN(new Date(date).getTime()),
    "Date de naissance invalide."
  ),
  id_filiere: z.number().positive("ID filière doit être positif."),
});
