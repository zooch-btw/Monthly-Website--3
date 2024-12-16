// Generate Prefix of name
function genPrefix(firstName) {
  if (firstName.length > 4) {
    return "The Great";
  } else {
    return "Master";
  }
}
//Generate 1st name of name
function genFirstName(firstName) {
  const firstLetter = firstName.charAt(0).toLowerCase();
  if (firstLetter === "a") {
    return "Geoff";
  } else if (firstLetter === "a") {
    return "Peter";
  } else if (firstLetter === "b") {
    return "Robert";
  } else if (firstLetter === "c") {
    return "Samuel";
  } else if (firstLetter === "d") {
    return "John";
  } else if (firstLetter === "e") {
    return "Kevin";
  } else {
    return "Bob"; // default name
  }
}

//Generate middle name of name
function genMiddleName(roadType, FavColor) {
  switch (roadType) {
    case "road":
      return `${FavColor}ridge`;
      break;

    case "street":
      return `${FavColor}son`;
      break;
    case "avenue":
      return `${FavColor}field`;
      break;
    case "court":
      return `${FavColor}view`;
      break;
    case "square":
      return `${FavColor}penny`;
      break;
    default:
      return `${FavColor}stone`;
      break;
  }
}

// Generate last name of name
function genLastName(LastName) {
  const lastLetter = LastName.charAt(LastName.length - 1).toLowerCase();
  if (lastLetter === "a") {
    return "Shadow";
  } else if (lastLetter === "e") {
    return "Sun";
  } else if (lastLetter === "i") {
    return "Moon";
  } else if (lastLetter === "o") {
    return "Storm";
  } else if (lastLetter === "u" || lastLetter === "y") {
    return "Night";
  } else if (lastLetter === "s" && lastLetter === "t") {
    return "Dawn";
  } else if (lastLetter === "z") {
    return "Thorn";
  } else {
    return "Frost"; // default name
  }
}

// Generate suffix
function genSuffix(FavAnimal) {
  return `Of The ${
    FavAnimal.charAt(0).toUpperCase() + FavAnimal.slice(1).toLowerCase()
  }`;
}

// MASTER FUNCTION TO ASSEMBLE FULL NAME
function genFullName() {
  //Define varibales from inputs
  const firstName = document.getElementById("firstName").value.trim();
  const LastName = document.getElementById("LastName").value.trim();
  const roadType = document.getElementById("roadType").value;
  const FavColor = document.getElementById("FavColor").value.trim();
  const FavAnimal = document
    .getElementById("FavAnimal")
    .value.trim()
    .toUpperCase();

  //Generate each part of the name using helper functions
  const prefix = genPrefix(firstName);
  const newFirstName = genFirstName(firstName);
  const MiddleName = genMiddleName(roadType, FavColor);
  const newLastName = genLastName(LastName);
  const suffix = genSuffix(FavAnimal);

  // functions to capitalize words
  const Capitalizedprefix = capitalize(prefix);
  const CapitalizedFirstName = capitalize(newFirstName);
  const CapitalizedMiddleName = capitalize(MiddleName);
  const CapitalizedLastName = capitalize(newLastName);
  const Capitalizedsuffix = capitalize(suffix);

  // combine all parts into the full name
  const fullname = `${Capitalizedprefix} ${CapitalizedFirstName} ${CapitalizedMiddleName} ${CapitalizedLastName} ${Capitalizedsuffix} Clan`;

  //Display result
  document.getElementById("result").textContent = fullname;
}

//Capitalizer Function
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
