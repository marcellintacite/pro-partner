export const SignupValidation = (data) => {
  let errors = [];
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (data.psw !== data.vpsw) {
    errors.push("Le 2 mot de passe doivent etre semblable");
  }
  if (!data.mail.match(mailformat)) {
    errors.push("Adresse mail non valide");
  }
  if (data.psw < 6) {
    errors.push("Mot de pas doit contenir au moins 6 caractères");
  }
  return errors;
};

export const loginValidation = (data) => {
  let errors = [];
  if (data.psw < 6) {
    errors.push("Mot de pas doit contenir au moins 6 caractères");
  }
  if (data.psw === "" || data.mail === "") {
    errors.push("Veuillez completer tous les champs");
  }

  return errors;
};
