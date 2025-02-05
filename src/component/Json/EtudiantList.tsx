 export const generateEtudiants = (count: number) => {
  const etudiant = [];
  const noms = [
    "Kadidia",
 
  ];
  const prenoms = [
    "DIALLO",

  ];
  // const modules = [
  //   "PHP frameworks",
  //   "Java Development",
  //   "Web Design",
  //   "Data Science",
  //   "Python Programming",
  //   "Machine Learning",
  //   "Cyber Security",
  //   "Database Administration",
  //   "Cloud Computing",
  //   "AI Research",
  //   "Mobile Development",
  //   "Network Administration",
  // ];
  const classes = [
    "TELECOM",

  ];
  const villes = [
    "BAMAKO MALI",

  ];

  for (let i = 1; i <= count; i++) {
    etudiant.push({
      id: `#${i.toString().padStart(3, "0")}`,
      nom: `${noms[Math.floor(Math.random() * noms.length)]} ${
        prenoms[Math.floor(Math.random() * prenoms.length)]
      }`,
      email: `enseignant${i}@gmail.com`,
      image: "",
      // modules: modules[Math.floor(Math.random() * modules.length)],
      classes: classes[Math.floor(Math.random() * classes.length)],
      telephone: `99${Math.floor(100000 + Math.random() * 900000)}`,
      adresse: villes[Math.floor(Math.random() * villes.length)],
    });
  }

  return etudiant;
};

// Générer 500 etudiants
