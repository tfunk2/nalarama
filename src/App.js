import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [breedOne, setBreedOne] = useState("");
  const [breedTwo, setBreedTwo] = useState("");
  const [breedThree, setBreedThree] = useState("");
  const [breedFour, setBreedFour] = useState("");
  const [breedFive, setBreedFive] = useState("");
  const [percentOne, setPercentOne] = useState("0");
  const [percentTwo, setPercentTwo] = useState("0");
  const [percentThree, setPercentThree] = useState("0");
  const [percentFour, setPercentFour] = useState("0");
  const [percentFive, setPercentFive] = useState("0");
  const [userName, setUserName] = useState("0");
  const [userEmail, setUserEmail] = useState("0");

  // const [percentRemaining, setPercentRemaining] = useState(100);

  const fullListOfBreeds = [
    "Affenpinscher",
    "Afghan Hound",
    "African Village Dog",
    "Airedale Terrier",
    "Akita",
    "Akita Inu",
    "Alaskan Klee Kai",
    "Alaskan Malamute",
    "Alaskan-type Husky",
    "American Bulldog",
    "American English Coonhound",
    "American Eskimo Dog",
    "American Foxhound",
    "American Hairless Terrier",
    "American Pit Bull Terrier",
    "American Staffordshire Terrier",
    "American Village Dog",
    "American Water Spaniel",
    "Anatolian Shepherd Dog",
    "Appenzeller Sennenhund",
    "Arabian Village Dog",
    "Australian Cattle Dog (Blue Heeler)",
    "Australian Kelpie",
    "Australian Shepherd",
    "Australian Terrier",
    "Azawakh",
    "Barbet",
    "Basenji",
    "Basset Hound",
    "Beagle",
    "Bearded Collie",
    "Beauceron",
    "Bedlington Terrier",
    "Belgian Laekenois",
    "Belgian Malinois",
    "Belgian Sheepdog",
    "Belgian Tervuren",
    "Bergamasco Sheepdog",
    "Berger Picard",
    "Bernese Mountain Dog",
    "Bichon Frise",
    "Biewer Terrier",
    "Black Russian Terrier",
    "Black and Tan Coonhound",
    "Bloodhound",
    "Blue Lacy",
    "Bluetick Coonhound",
    "Boerboel",
    "Bolognese",
    "Border Collie",
    "Border Terrier",
    "Borzoi",
    "Boston Terrier",
    "Bouvier des Flandres",
    "Boxer",
    "Boykin Spaniel",
    "Bracco Italiano",
    "Braque Du Bourbonnais",
    "Briard",
    "Brittany",
    "Brussels Griffon",
    "Bull Terrier",
    "Bulldog",
    "Bullmastiff",
    "Cairn Terrier",
    "Canaan Dog",
    "Canadian Eskimo Dog",
    "Cane Corso",
    "Cane Di Fonni",
    "Cardigan Welsh Corgi",
    "Carolina Dog",
    "Catahoula Leopard Dog",
    "Caucasian Ovcharka",
    "Cavalier King Charles Spaniel",
    "Central Asian Village Dog",
    "Central and East African Village Dog",
    "Cesky Fousek",
    "Cesky Terrier",
    "Chesapeake Bay Retriever",
    "Chihuahua",
    "Chinese Chongqing Dog",
    "Chinese Crested",
    "Chinese Shar-Pei",
    "Chinese Village Dog",
    "Chinook",
    "Chow Chow",
    "Cimarron Uruguayo",
    "Cirneco Dell'Etna",
    "Clumber Spaniel",
    "Cocker Spaniel",
    "Collie",
    "Coton de Tulear",
    "Coyote",
    "Curly-Coated Retriever",
    "Czechoslovakian Vlcak",
    "Dachshund",
    "Dalmatian",
    "Dandie Dinmont Terrier",
    "Dingo",
    "Doberman Pinscher",
    "Dogo Argentino",
    "Dogue de Bordeaux",
    "Drentsche Patrijshond",
    "Dutch Shepherd",
    "East Asian Village Dog",
    "Eastern European Village Dog",
    "English Cocker Spaniel",
    "English Foxhound",
    "English Setter",
    "English Shepherd",
    "English Springer Spaniel",
    "English Toy Spaniel",
    "Entlebucher Mountain Dog",
    "Eurasier",
    "European Village Dog",
    "Field Spaniel",
    "Fila Brasileiro",
    "Finnish Lapphund",
    "Finnish Spitz",
    "Flat-Coated Retriever",
    "Formosan Mountain Dog",
    "French Bulldog",
    "French Spaniel",
    "German Longhaired Pointer",
    "German Pinscher",
    "German Shepherd Dog",
    "German Shorthaired Pointer",
    "German Wirehaired Pointer",
    "Giant Schnauzer",
    "Glen of Imaal Terrier",
    "Golden Retriever",
    "Gordon Setter",
    "Grand Basset Griffon Vendeen",
    "Gray Wolf",
    "Great Dane",
    "Great Pyrenees",
    "Greater Swiss Mountain Dog",
    "Greenland Dog",
    "Greyhound",
    "Hamiltonstovare",
    "Harrier",
    "Havanese",
    "Hokkaido",
    "Hong Kong Village Dog",
    "Hovawart",
    "Ibizan Hound",
    "Icelandic Sheepdog",
    "Indian Indigenous Dog",
    "Irish Red and White Setter",
    "Irish Setter",
    "Irish Terrier",
    "Irish Water Spaniel",
    "Irish Wolfhound",
    "Istrian Shorthaired Hound",
    "Italian Greyhound",
    "Japanese Chin",
    "Japanese and Korean Village Dog",
    "Jindo",
    "Kai Ken",
    "Karelian Bear Dog",
    "Keeshond",
    "Kerry Blue Terrier",
    "Kishu Ken",
    "Komondor",
    "Koolie",
    "Kuvasz",
    "Labrador Retriever",
    "Lagotto Romagnolo",
    "Lakeland Terrier",
    "Lapponian Herder",
    "Leonberger",
    "Levriero Meridionale",
    "Lhasa Apso",
    "Llewellin Setter",
    "Lowchen",
    "Maltese",
    "Manchester Terrier (Toy)",
    "Maremma Sheepdog",
    "Mastiff",
    "McNab",
    "Melanesian Village Dog",
    "Middle Eastern Village Dog",
    "Miniature Pinscher",
    "Miniature Schnauzer",
    "Miniature/MAS-type Australian Shepherd",
    "Mountain Cur",
    "Mudi",
    "Munsterlander (Large)",
    "Munsterlander (Small)",
    "Neapolitan Mastiff",
    "Nederlandse Kooikerhondje",
    "New Guinea Singing Dog",
    "Newfoundland",
    "Norfolk Terrier",
    "Norrbottenspets",
    "Northern East African Village Dog",
    "Norwegian Buhund",
    "Norwegian Elkhound",
    "Norwegian Lundehund",
    "Norwich Terrier",
    "Nova Scotia Duck Tolling Retriever",
    "Old English Sheepdog",
    "Otterhound",
    "Papillon",
    "Pekingese",
    "Pembroke Welsh Corgi",
    "Perro de Presa Canario",
    "Peruvian Inca Orchid",
    "Petit Basset Griffon Vendeen",
    "Pharaoh Hound",
    "Phu Quoc Ridgeback",
    "Picardy Spaniel",
    "Plott",
    "Pointer",
    "Polish Lowland Sheepdog",
    "Polynesian Village Dog",
    "Pomeranian",
    "Poodle (Small)",
    "Poodle (Standard)",
    "Portuguese Podengo",
    "Portuguese Podengo Pequeno",
    "Portuguese Pointer",
    "Portuguese Water Dog",
    "Pudelpointer",
    "Pug",
    "Puli",
    "Pumi",
    "Pungsan",
    "Pyrenean Mastiff",
    "Pyrenean Shepherd",
    "Rat Terrier",
    "Redbone Coonhound",
    "Rhodesian Ridgeback",
    "Rottweiler",
    "Russell-type Terrier",
    "Russian Toy",
    "Russian Tsvetnaya Bolonka",
    "Saint Bernard",
    "Saluki",
    "Samoyed",
    "Sarplaninac",
    "Schipperke",
    "Scottish Deerhound",
    "Scottish Terrier",
    "Sealyham Terrier",
    "Shetland Sheepdog",
    "Shiba Inu",
    "Shih Tzu",
    "Shikoku",
    "Shiloh Shepherd",
    "Siberian Husky",
    "Silken Windhound",
    "Silky Terrier",
    "Skye Terrier",
    "Smooth Fox Terrier",
    "Soft Coated Wheaten Terrier",
    "South Asian Village Dog",
    "Southeast Asian Island Village Dog",
    "Southeast Asian Village Dog",
    "Spanish Water Dog",
    "Spinone Italiano",
    "Stabyhoun",
    "Staffordshire Bull Terrier",
    "Standard Schnauzer",
    "Sussex Spaniel",
    "Swedish Vallhund",
    "Teddy Roosevelt Terrier",
    "Terrier Brasileiro",
    "Tibetan Mastiff",
    "Tibetan Spaniel",
    "Tibetan Terrier",
    "Toy Fox Terrier",
    "Treeing Walker Coonhound",
    "Vietnamese Village Dog",
    "Vizsla",
    "Volpino Italiano",
    "Weimaraner",
    "Welsh Springer Spaniel",
    "Welsh Terrier",
    "West African Village Dog",
    "West Asian Village Dog",
    "West Highland White Terrier",
    "West Siberian Laika",
    "Western European Village Dog",
    "Wetterhoun",
    "Whippet",
    "White Shepherd",
    "Windsprite",
    "Wire Fox Terrier",
    "Wirehaired Pointing Griffon",
    "Xoloitzcuintli",
    "Yakutian Laika",
    "Yorkshire Terrier",
  ];

  const breedOptions = fullListOfBreeds.map((breed) => {
    return <option value={breed} />;
  });

  const percentRemaining = () => {
    return 100 - parseInt(percentOne) - parseInt(percentTwo) - parseInt(percentThree) - parseInt(percentFour) - parseInt(percentFive);
  }

  const alphabetOnly = (e) => {
    let alphabetRegex = /[a-zA-Z]| /
    if(alphabetRegex.test(e.key)) {
      console.log("alphabet letter")
    } else {
        e.preventDefault()
    }
  }

  useEffect(() => {
    if(percentOne === "") {
      setPercentOne("0")
    }
  }, [percentOne])

  useEffect(() => {
    if(percentTwo === "") {
      setPercentTwo("0")
    }
  }, [percentTwo])

  useEffect(() => {
    if(percentThree === "") {
      setPercentThree("0")
    }
  }, [percentThree])

  useEffect(() => {
    if(percentFour === "") {
      setPercentFour("0")
    }
  }, [percentFour])

  useEffect(() => {
    if(percentFive === "") {
      setPercentFive("0")
    }
  }, [percentFive])

  return (
    <div className="App">
      <h1 className="main-title">Nalarama!</h1>
      {/* percentRemaining should have to be 0 in order to submit form */}
      <h3 className="percent-remaining">{percentRemaining()}%</h3>
      <div className="guess-form-container">
        <div className="breed-choices-container">
          <div className="datalist-container">
            <input
              onKeyPress={alphabetOnly}
              className="breed-input"
              list="breed-one-list"
              id="breeds-input-one"
              name="breed-one"
              onChange={(e) => setBreedOne(e.target.value)}
              placeholder="Breed Guess #1"
            />
            <datalist id="breed-one-list">{breedOptions}</datalist>
            <input
              type="number"
              className="percentage-input"
              min={0}
              max={100}
              onChange={(e) => setPercentOne(e.target.value)}
              placeholder="%"
            />
          </div>
          <div className="datalist-container">
            <input
              onKeyPress={alphabetOnly}
              className="breed-input"
              list="breed-two-list"
              id="breeds-input-two"
              name="breed-two"
              onChange={(e) => setBreedTwo(e.target.value)}
              placeholder="Breed Guess #2"
            />
            <datalist id="breed-two-list">{breedOptions}</datalist>
            <input
              type="number"
              className="percentage-input"
              min={0}
              max={percentRemaining}
              onChange={(e) => setPercentTwo(e.target.value)}
              placeholder="%"
            />
          </div>
          <div className="datalist-container">
            <input
              onKeyPress={alphabetOnly}
              className="breed-input"
              list="breed-three-list"
              id="breeds-input-three"
              name="breed-three"
              onChange={(e) => setBreedThree(e.target.value)}
              placeholder="Breed Guess #3"
            />
            <datalist id="breed-three-list">{breedOptions}</datalist>
            <input
              type="number"
              className="percentage-input"
              min={0}
              max={percentRemaining}
              onChange={(e) => setPercentThree(e.target.value)}
              placeholder="%"
            />
          </div>
          <div className="datalist-container">
            <input
              onKeyPress={alphabetOnly}
              className="breed-input"
              list="breed-four-list"
              id="breeds-input-four"
              name="breed-four"
              onChange={(e) => setBreedFour(e.target.value)}
              placeholder="Breed Guess #4"
            />
            <datalist id="breed-four-list">{breedOptions}</datalist>
            <input
              type="number"
              className="percentage-input"
              min={0}
              max={percentRemaining}
              onChange={(e) => setPercentFour(e.target.value)}
              placeholder="%"
            />
          </div>
          <div className="datalist-container">
            <input
              onKeyPress={alphabetOnly}
              className="breed-input"
              list="breed-five-list"
              id="breeds-input-five"
              name="breed-five"
              onChange={(e) => setBreedFive(e.target.value)}
              placeholder="Breed Guess #5"
            />
            <datalist id="breed-five-list">{breedOptions}</datalist>
            <input
              type="number"
              className="percentage-input"
              min={0}
              max={percentRemaining}
              onChange={(e) => setPercentFive(e.target.value)}
              placeholder="%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
