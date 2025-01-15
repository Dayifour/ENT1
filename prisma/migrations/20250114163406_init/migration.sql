/*
  Warnings:

  - You are about to drop the `Annexes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Cours` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EmploisDuTemps` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Enseignant` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Etudiants` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FiliereModule` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Filieres` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Modules` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Notes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Paiements` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Role` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Utilisateurs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Cours` DROP FOREIGN KEY `Cours_id_filiere_module_fkey`;

-- DropForeignKey
ALTER TABLE `Cours` DROP FOREIGN KEY `Cours_id_professeur_fkey`;

-- DropForeignKey
ALTER TABLE `EmploisDuTemps` DROP FOREIGN KEY `EmploisDuTemps_id_cours_fkey`;

-- DropForeignKey
ALTER TABLE `Enseignant` DROP FOREIGN KEY `Enseignant_id_utilisateur_fkey`;

-- DropForeignKey
ALTER TABLE `Etudiants` DROP FOREIGN KEY `Etudiants_id_filiere_fkey`;

-- DropForeignKey
ALTER TABLE `Etudiants` DROP FOREIGN KEY `Etudiants_id_utilisateur_fkey`;

-- DropForeignKey
ALTER TABLE `FiliereModule` DROP FOREIGN KEY `FiliereModule_id_filiere_fkey`;

-- DropForeignKey
ALTER TABLE `FiliereModule` DROP FOREIGN KEY `FiliereModule_id_module_fkey`;

-- DropForeignKey
ALTER TABLE `Filieres` DROP FOREIGN KEY `Filieres_id_annexe_fkey`;

-- DropForeignKey
ALTER TABLE `Modules` DROP FOREIGN KEY `Modules_id_filiere_fkey`;

-- DropForeignKey
ALTER TABLE `Notes` DROP FOREIGN KEY `Notes_id_cours_fkey`;

-- DropForeignKey
ALTER TABLE `Notes` DROP FOREIGN KEY `Notes_id_etudiant_fkey`;

-- DropForeignKey
ALTER TABLE `Paiements` DROP FOREIGN KEY `Paiements_id_etudiant_fkey`;

-- DropForeignKey
ALTER TABLE `Utilisateurs` DROP FOREIGN KEY `Utilisateurs_id_role_fkey`;

-- DropTable
DROP TABLE `Annexes`;

-- DropTable
DROP TABLE `Cours`;

-- DropTable
DROP TABLE `EmploisDuTemps`;

-- DropTable
DROP TABLE `Enseignant`;

-- DropTable
DROP TABLE `Etudiants`;

-- DropTable
DROP TABLE `FiliereModule`;

-- DropTable
DROP TABLE `Filieres`;

-- DropTable
DROP TABLE `Modules`;

-- DropTable
DROP TABLE `Notes`;

-- DropTable
DROP TABLE `Paiements`;

-- DropTable
DROP TABLE `Role`;

-- DropTable
DROP TABLE `Utilisateurs`;

-- CreateTable
CREATE TABLE `annexes` (
    `id_annexe` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `adresse` VARCHAR(191) NOT NULL,
    `ville` VARCHAR(191) NULL,
    `region` VARCHAR(191) NULL,

    PRIMARY KEY (`id_annexe`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cours` (
    `id_cours` INTEGER NOT NULL AUTO_INCREMENT,
    `id_filiere_module` INTEGER NOT NULL,
    `id_professeur` INTEGER NOT NULL,
    `semestre` ENUM('Semestre1', 'Semestre2', 'Semestre3', 'Semestre4') NOT NULL,
    `annee_academique` VARCHAR(9) NOT NULL,

    INDEX `Cours_id_filiere_module_fkey`(`id_filiere_module`),
    INDEX `Cours_id_professeur_fkey`(`id_professeur`),
    PRIMARY KEY (`id_cours`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `emploisdutemps` (
    `id_emploi` INTEGER NOT NULL AUTO_INCREMENT,
    `id_cours` INTEGER NOT NULL,
    `jour` ENUM('Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi') NOT NULL,
    `heure_debut` DATETIME(3) NOT NULL,
    `heure_fin` DATETIME(3) NOT NULL,
    `salle` VARCHAR(191) NULL,

    INDEX `EmploisDuTemps_id_cours_fkey`(`id_cours`),
    PRIMARY KEY (`id_emploi`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `enseignant` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `matricule` VARCHAR(191) NOT NULL,
    `id_utilisateur` INTEGER NOT NULL,
    `specialite` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Enseignant_matricule_key`(`matricule`),
    UNIQUE INDEX `Enseignant_id_utilisateur_key`(`id_utilisateur`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `etudiants` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `matricule` VARCHAR(191) NOT NULL,
    `id_utilisateur` INTEGER NOT NULL,
    `date_naissance` DATETIME(3) NOT NULL,
    `id_filiere` INTEGER NOT NULL,

    UNIQUE INDEX `Etudiants_matricule_key`(`matricule`),
    UNIQUE INDEX `Etudiants_id_utilisateur_key`(`id_utilisateur`),
    INDEX `Etudiants_id_filiere_fkey`(`id_filiere`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `filieremodule` (
    `id_filiere_module` INTEGER NOT NULL AUTO_INCREMENT,
    `syllabus` VARCHAR(191) NULL,
    `id_filiere` INTEGER NOT NULL,
    `id_module` INTEGER NOT NULL,

    INDEX `FiliereModule_id_filiere_fkey`(`id_filiere`),
    INDEX `FiliereModule_id_module_fkey`(`id_module`),
    PRIMARY KEY (`id_filiere_module`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `filieres` (
    `id_filiere` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `niveau` ENUM('Primaire', 'Secondaire', 'Licence', 'Master1', 'Master2', 'Doctorat') NOT NULL,
    `id_annexe` INTEGER NULL,

    INDEX `Filieres_id_annexe_fkey`(`id_annexe`),
    PRIMARY KEY (`id_filiere`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `modules` (
    `id_module` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `code_module` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `credits` INTEGER NOT NULL,
    `volumeHoraire` INTEGER NULL,
    `id_filiere` INTEGER NULL,

    UNIQUE INDEX `Modules_code_module_key`(`code_module`),
    INDEX `Modules_id_filiere_fkey`(`id_filiere`),
    PRIMARY KEY (`id_module`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notes` (
    `id_note` INTEGER NOT NULL AUTO_INCREMENT,
    `id_etudiant` INTEGER NOT NULL,
    `id_cours` INTEGER NOT NULL,
    `note_class` DOUBLE NULL,
    `note_exam` DOUBLE NULL,
    `commentaire` VARCHAR(191) NULL,
    `annee_academique` VARCHAR(9) NOT NULL,
    `date_saisie` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Notes_id_cours_fkey`(`id_cours`),
    INDEX `Notes_id_etudiant_fkey`(`id_etudiant`),
    PRIMARY KEY (`id_note`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `paiements` (
    `id_paiement` INTEGER NOT NULL AUTO_INCREMENT,
    `id_etudiant` INTEGER NOT NULL,
    `montant` DOUBLE NOT NULL,
    `date_paiement` DATETIME(3) NOT NULL,
    `type_paiement` ENUM('Inscription', 'Scolarite', 'Autre') NOT NULL,
    `reference_paiement` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Paiements_reference_paiement_key`(`reference_paiement`),
    INDEX `Paiements_id_etudiant_fkey`(`id_etudiant`),
    PRIMARY KEY (`id_paiement`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `role` (
    `id_role` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(50) NOT NULL,
    `description` VARCHAR(50) NULL,
    `permissions` JSON NOT NULL,

    PRIMARY KEY (`id_role`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `utilisateurs` (
    `id_utilisateur` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `prenom` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `mot_de_passe` VARCHAR(191) NOT NULL,
    `id_role` INTEGER NOT NULL,
    `sexe` ENUM('M', 'F') NOT NULL,
    `type` ENUM('Etudiant', 'Enseignant', 'Membre') NOT NULL,
    `telephone` VARCHAR(15) NULL,
    `adresse` VARCHAR(191) NULL,
    `profil` VARCHAR(191) NOT NULL,
    `date_creation` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Utilisateurs_email_key`(`email`),
    UNIQUE INDEX `Utilisateurs_profil_key`(`profil`),
    INDEX `Utilisateurs_id_role_fkey`(`id_role`),
    PRIMARY KEY (`id_utilisateur`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
