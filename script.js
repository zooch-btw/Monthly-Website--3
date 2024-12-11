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
  if (roadType === "road") {
    return `${FavColor}ridge`;
  } else if (roadType === "street") {
    return `${FavColor}son`;
  } else if (roadType === "avenue") {
    return `${FavColor}field`;
  } else if (roadType === "court") {
    return `${FavColor}view`;
  } else if (roadType === "square") {
    return `${FavColor}penny`;
  } else {
    return `${FavColor}stone`;
  }
}

// Generate last name of name
function genLastName(LastName) {
  const lastLetter = lastName.charAt(lastName.length - 1).toLowerCase();
  if (lastLetter === "a") {
    return "Shadow";
  } else if (lastLetter === "e") {
    return "Sun";
  } else if (lastLetter === "i") {
    return "Moon";
  } else if (lastLetter === "o") {
    return "Storm";
  } else if (lastLetter === "z") {
    return "Thorn";
  } else {
    return "Frost"; // default name
  }
}

// Generate suffix
function genSiffix(FavAnimal) {
  return `of the ${FavAnimal}`;
}

// MASTER FUNCTION TO ASSEMBLE FULL NAME
function genFullName() {
  //Define varibales from inputs
  const firstName = document.getElementById("firstName").value.trim();
  const LastName = document.getElementById("firstName").value.trim();
  const roadType = document.getElementById("firstName").value;
  const FavColor = document.getElementById("firstName").value.trim();
  const FavAnimal = document.getElementById("firstName").value.trim();

  //Generate each part of the name using helper functions
  const prefix = genPrefix(firstName);
  const newFirstName = genFirstName(firstName);
  const MiddleName = genMiddleName(roadType, FavColor);
  const newLastName = genLastName(LastName);
  const suffix = genSiffix(FavAnimal);
}

// Remys work (hehe)
function name() {
  let image = document.getElementById("imageId");
  image.classList.remove("d-none");
}
