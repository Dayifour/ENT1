-- CreateTable
CREATE TABLE `Utilisateurs` (
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
    PRIMARY KEY (`id_utilisateur`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Role` (
    `id_role` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(50) NOT NULL,
    `description` VARCHAR(50) NULL,
    `permissions` JSON NOT NULL,

    PRIMARY KEY (`id_role`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Annexes` (
    `id_annexe` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `adresse` VARCHAR(191) NOT NULL,
    `ville` VARCHAR(191) NULL,
    `region` VARCHAR(191) NULL,

    PRIMARY KEY (`id_annexe`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Filieres` (
    `id_filiere` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `niveau` ENUM('Primaire', 'Secondaire', 'Licence', 'Master1', 'Master2', 'Doctorat') NOT NULL,
    `id_annexe` INTEGER NULL,

    PRIMARY KEY (`id_filiere`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Modules` (
    `id_module` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `code_module` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `credits` INTEGER NOT NULL,
    `volumeHoraire` INTEGER NULL,
    `id_filiere` INTEGER NULL,

    UNIQUE INDEX `Modules_code_module_key`(`code_module`),
    PRIMARY KEY (`id_module`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FiliereModule` (
    `id_filiere_module` INTEGER NOT NULL AUTO_INCREMENT,
    `syllabus` VARCHAR(191) NULL,
    `id_filiere` INTEGER NOT NULL,
    `id_module` INTEGER NOT NULL,

    PRIMARY KEY (`id_filiere_module`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cours` (
    `id_cours` INTEGER NOT NULL AUTO_INCREMENT,
    `id_filiere_module` INTEGER NOT NULL,
    `id_professeur` INTEGER NOT NULL,
    `semestre` ENUM('Semestre1', 'Semestre2', 'Semestre3', 'Semestre4') NOT NULL,
    `annee_academique` VARCHAR(9) NOT NULL,

    PRIMARY KEY (`id_cours`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Etudiants` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `matricule` VARCHAR(191) NOT NULL,
    `id_utilisateur` INTEGER NOT NULL,
    `date_naissance` DATETIME(3) NOT NULL,
    `id_filiere` INTEGER NOT NULL,

    UNIQUE INDEX `Etudiants_matricule_key`(`matricule`),
    UNIQUE INDEX `Etudiants_id_utilisateur_key`(`id_utilisateur`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Enseignant` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `matricule` VARCHAR(191) NOT NULL,
    `id_utilisateur` INTEGER NOT NULL,
    `specialite` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Enseignant_matricule_key`(`matricule`),
    UNIQUE INDEX `Enseignant_id_utilisateur_key`(`id_utilisateur`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EmploisDuTemps` (
    `id_emploi` INTEGER NOT NULL AUTO_INCREMENT,
    `id_cours` INTEGER NOT NULL,
    `jour` ENUM('Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi') NOT NULL,
    `heure_debut` DATETIME(3) NOT NULL,
    `heure_fin` DATETIME(3) NOT NULL,
    `salle` VARCHAR(191) NULL,

    PRIMARY KEY (`id_emploi`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Notes` (
    `id_note` INTEGER NOT NULL AUTO_INCREMENT,
    `id_etudiant` INTEGER NOT NULL,
    `id_cours` INTEGER NOT NULL,
    `note_class` DOUBLE NULL,
    `note_exam` DOUBLE NULL,
    `commentaire` VARCHAR(191) NULL,
    `annee_academique` VARCHAR(9) NOT NULL,
    `date_saisie` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id_note`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Paiements` (
    `id_paiement` INTEGER NOT NULL AUTO_INCREMENT,
    `id_etudiant` INTEGER NOT NULL,
    `montant` DOUBLE NOT NULL,
    `date_paiement` DATETIME(3) NOT NULL,
    `type_paiement` ENUM('Inscription', 'Scolarite', 'Autre') NOT NULL,
    `reference_paiement` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Paiements_reference_paiement_key`(`reference_paiement`),
    PRIMARY KEY (`id_paiement`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Utilisateurs` ADD CONSTRAINT `Utilisateurs_id_role_fkey` FOREIGN KEY (`id_role`) REFERENCES `Role`(`id_role`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Filieres` ADD CONSTRAINT `Filieres_id_annexe_fkey` FOREIGN KEY (`id_annexe`) REFERENCES `Annexes`(`id_annexe`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Modules` ADD CONSTRAINT `Modules_id_filiere_fkey` FOREIGN KEY (`id_filiere`) REFERENCES `Filieres`(`id_filiere`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FiliereModule` ADD CONSTRAINT `FiliereModule_id_filiere_fkey` FOREIGN KEY (`id_filiere`) REFERENCES `Filieres`(`id_filiere`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FiliereModule` ADD CONSTRAINT `FiliereModule_id_module_fkey` FOREIGN KEY (`id_module`) REFERENCES `Modules`(`id_module`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cours` ADD CONSTRAINT `Cours_id_filiere_module_fkey` FOREIGN KEY (`id_filiere_module`) REFERENCES `FiliereModule`(`id_filiere_module`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cours` ADD CONSTRAINT `Cours_id_professeur_fkey` FOREIGN KEY (`id_professeur`) REFERENCES `Enseignant`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Etudiants` ADD CONSTRAINT `Etudiants_id_utilisateur_fkey` FOREIGN KEY (`id_utilisateur`) REFERENCES `Utilisateurs`(`id_utilisateur`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Etudiants` ADD CONSTRAINT `Etudiants_id_filiere_fkey` FOREIGN KEY (`id_filiere`) REFERENCES `Filieres`(`id_filiere`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Enseignant` ADD CONSTRAINT `Enseignant_id_utilisateur_fkey` FOREIGN KEY (`id_utilisateur`) REFERENCES `Utilisateurs`(`id_utilisateur`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EmploisDuTemps` ADD CONSTRAINT `EmploisDuTemps_id_cours_fkey` FOREIGN KEY (`id_cours`) REFERENCES `Cours`(`id_cours`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notes` ADD CONSTRAINT `Notes_id_etudiant_fkey` FOREIGN KEY (`id_etudiant`) REFERENCES `Etudiants`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notes` ADD CONSTRAINT `Notes_id_cours_fkey` FOREIGN KEY (`id_cours`) REFERENCES `Cours`(`id_cours`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Paiements` ADD CONSTRAINT `Paiements_id_etudiant_fkey` FOREIGN KEY (`id_etudiant`) REFERENCES `Etudiants`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
