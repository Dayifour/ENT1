export const generateEnseignants = (count: number) => {
  const enseignants = [];
  const noms = [
    "Kadidia",
    "Ibrahim",
    "Fatimata",
    "Adama",
    "Mariam",
    "Amadou",
    "Salif",
    "Awa",
    "Mohamed",
    "Aissatou",
    "Ousmane",
    "Nana",
    "Alima",
    "Issa",
    "Fatoumata",
  ];
  const prenoms = [
    "DIALLO",
    "TRAORE",
    "COULIBALY",
    "KONE",
    "SANGARE",
    "BARRY",
    "KEITA",
    "DEMBA",
    "DIALLO",
    "DOUCOURE",
    "TRAORE",
    "SISSOKO",
    "KAMISSOKO",
    "SIDIBE",
    "KANE",
  ];
  const modules = [
    "PHP frameworks",
    "Java Development",
    "Web Design",
    "Data Science",
    "Python Programming",
    "Machine Learning",
    "Cyber Security",
    "Database Administration",
    "Cloud Computing",
    "AI Research",
    "Mobile Development",
    "Network Administration",
  ];
  const classes = [
    "AP, IG, TELECOM",
    "INFO, TELECOM",
    "DS, AI",
    "CYBER, INFO",
    "INFO, AP",
    "AI, DS",
    "INFO, WEB",
    "APPS, INFO",
    "TELECOM, NETWORK",
  ];
  const villes = [
    "BAMAKO MALI",
    "OUAGADOUGOU BURKINA",
    "DAKAR SÉNÉGAL",
    "ABIDJAN CÔTE D'IVOIRE",
    "CONAKRY GUINÉE",
  ];

  for (let i = 1; i <= count; i++) {
    enseignants.push({
      id: `#${i.toString().padStart(3, "0")}`,
      nom: `${noms[Math.floor(Math.random() * noms.length)]} ${
        prenoms[Math.floor(Math.random() * prenoms.length)]
      }`,
      email: `enseignant${i}@gmail.com`,
      image: "",
      modules: modules[Math.floor(Math.random() * modules.length)],
      classes: classes[Math.floor(Math.random() * classes.length)],
      telephone: `99${Math.floor(100000 + Math.random() * 900000)}`,
      adresse: villes[Math.floor(Math.random() * villes.length)],
    });
  }

  return enseignants;
};

// Générer 500 enseignants
