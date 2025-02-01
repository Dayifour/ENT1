-- AddForeignKey
ALTER TABLE `cours` ADD CONSTRAINT `Cours_id_filiere_module_fkey` FOREIGN KEY (`id_filiere_module`) REFERENCES `filieremodule`(`id_filiere_module`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cours` ADD CONSTRAINT `Cours_id_professeur_fkey` FOREIGN KEY (`id_professeur`) REFERENCES `enseignant`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `emploisdutemps` ADD CONSTRAINT `EmploisDuTemps_id_cours_fkey` FOREIGN KEY (`id_cours`) REFERENCES `cours`(`id_cours`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `enseignant` ADD CONSTRAINT `Enseignant_id_utilisateur_fkey` FOREIGN KEY (`id_utilisateur`) REFERENCES `utilisateurs`(`id_utilisateur`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `etudiants` ADD CONSTRAINT `Etudiants_id_filiere_fkey` FOREIGN KEY (`id_filiere`) REFERENCES `filieres`(`id_filiere`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `etudiants` ADD CONSTRAINT `Etudiants_id_utilisateur_fkey` FOREIGN KEY (`id_utilisateur`) REFERENCES `utilisateurs`(`id_utilisateur`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `filieremodule` ADD CONSTRAINT `FiliereModule_id_filiere_fkey` FOREIGN KEY (`id_filiere`) REFERENCES `filieres`(`id_filiere`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `filieremodule` ADD CONSTRAINT `FiliereModule_id_module_fkey` FOREIGN KEY (`id_module`) REFERENCES `modules`(`id_module`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `filieres` ADD CONSTRAINT `Filieres_id_annexe_fkey` FOREIGN KEY (`id_annexe`) REFERENCES `annexes`(`id_annexe`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `modules` ADD CONSTRAINT `Modules_id_filiere_fkey` FOREIGN KEY (`id_filiere`) REFERENCES `filieres`(`id_filiere`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notes` ADD CONSTRAINT `Notes_id_cours_fkey` FOREIGN KEY (`id_cours`) REFERENCES `cours`(`id_cours`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notes` ADD CONSTRAINT `Notes_id_etudiant_fkey` FOREIGN KEY (`id_etudiant`) REFERENCES `etudiants`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `paiements` ADD CONSTRAINT `Paiements_id_etudiant_fkey` FOREIGN KEY (`id_etudiant`) REFERENCES `etudiants`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `utilisateurs` ADD CONSTRAINT `Utilisateurs_id_role_fkey` FOREIGN KEY (`id_role`) REFERENCES `role`(`id_role`) ON DELETE RESTRICT ON UPDATE CASCADE;
