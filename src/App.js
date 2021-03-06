import "./App.css";
import React, { useState, useEffect } from "react";
import nalaFace from "./images/nala-face.png";
import nalaFaceReverse from "./images/nala-face-reverse.png";
import nalaCircle from "./images/nala-circle.png";
import nalaCutout from "./images/nala-cutout-1.png";
import nalaYawning from "./images/nala-yawning.png";

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
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [predictedWeight, setPredictedWeight] = useState("1");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [allGuessForms, setAllGuessForms] = useState([]);

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
    return <option key={breed} value={breed} />;
  });

  const percentUsed = () => {
    return (
      0 +
      parseInt(percentOne) +
      parseInt(percentTwo) +
      parseInt(percentThree) +
      parseInt(percentFour) +
      parseInt(percentFive)
    );
  };

  const alphabetOnly = (e) => {
    let alphabetRegex = /[a-zA-Z ]|-/;
    if (alphabetRegex.test(e.key)) {
    } else {
      e.preventDefault();
    }
  };

  const onlyThreeNumbers = (e) => {
    let threeNumbersRegex = /[0-9]/;
    if (threeNumbersRegex.test(e.key)) {
    } else {
      e.preventDefault();
    }
  };

  const resetForm = () => {
    setUserName("");
    setUserEmail("");
    setBreedOne("");
    setBreedTwo("");
    setBreedThree("");
    setBreedFour("");
    setBreedFive("");
    setPercentOne("0");
    setPercentTwo("0");
    setPercentThree("0");
    setPercentFour("0");
    setPercentFive("0");
    setPredictedWeight("1");
  };

  const fetchSubmissions = () => {
    fetch("https://nalarama.herokuapp.com/guess_form_submissions")
      .then((response) => response.json())
      .then((guessForms) => {
        setAllGuessForms(guessForms);
      });
  };

  const handleSubmit = (event) => {
    if (
      breedOne.length > 0 &&
      breedTwo.length > 0 &&
      breedThree.length > 0 &&
      breedFour.length > 0 &&
      breedFive.length > 0 &&
      parseInt(percentOne) > 0 &&
      parseInt(percentTwo) > 0 &&
      parseInt(percentThree) > 0 &&
      parseInt(percentFour) > 0 &&
      parseInt(percentFive) > 0 &&
      userName.length > 0 &&
      userEmail.length > 0 &&
      parseInt(predictedWeight) > 0
    ) {
      event.preventDefault();
      fetch("https://nalarama.herokuapp.com/guess_form_submissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: userName,
          email: userEmail,
          breed_one: breedOne,
          breed_two: breedTwo,
          breed_three: breedThree,
          breed_four: breedFour,
          breed_five: breedFive,
          percent_one: percentOne,
          percent_two: percentTwo,
          percent_three: percentThree,
          percent_four: percentFour,
          percent_five: percentFive,
          predicted_adult_weight: predictedWeight,
        }),
      }).then(setIsFormSubmitted(true));
    } else {
      alert(
        "Submit failed, make sure you have the form completely filled out, then try again!"
      );
    }
  };

  const goAgain = () => {
    setIsFormSubmitted(false);
    resetForm();
  };

  const checking = () => {
    if(allGuessForms.length >= 1) {
      return allGuessForms.length
    } else {
      return "Checking..."
    }
  }

  useEffect(() => {
    if (percentOne === "") {
      setPercentOne("0");
    }
  }, [percentOne]);

  useEffect(() => {
    if (percentTwo === "") {
      setPercentTwo("0");
    }
  }, [percentTwo]);

  useEffect(() => {
    if (percentThree === "") {
      setPercentThree("0");
    }
  }, [percentThree]);

  useEffect(() => {
    if (percentFour === "") {
      setPercentFour("0");
    }
  }, [percentFour]);

  useEffect(() => {
    if (percentFive === "") {
      setPercentFive("0");
    }
  }, [percentFive]);

  useEffect(() => {
    if (predictedWeight === "") {
      setPredictedWeight("1");
    }
  }, [predictedWeight]);

  useEffect(() => {
    fetchSubmissions();
  }, [isFormSubmitted]);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  return (
    <div className="App">
      <header>
        <img
          className="nala-face-img-left"
          alt="nala face"
          src={nalaFaceReverse}
        ></img>
        <h1 className="main-title">Nalarama!</h1>
        <img
          className="nala-face-img-right"
          alt="nala face"
          src={nalaFace}
        ></img>
      </header>
      <div className="opening-paragraph">
        <h5 className="opening-paragraph-l1">
          Want to prove your puppy breed picking prowess?
        </h5>
        <h5 className="opening-paragraph-l2">
          Take a shot at guessing what mix our pup Nala is!
        </h5>
        <h5 className="opening-paragraph-l3">
          All participants will have their entry scored, and will receive the
          final results via their valid e-mail address
        </h5>
        <h3 className="forms-counter">
          Entries so far:{" "}
          <span className="forms-counter-number">{checking()}</span>
        </h3>
      </div>
      {/* percentUsed should have to be 0 in order to submit form */}
      {!isFormSubmitted ? (
        <div className="guess-form-container">
          <div className="name-email-container">
            <h3 className="step-title">Step 1</h3>
            <p>Enter your name and e-mail</p>
            <div className="step-one-inputs-div">
              <input
                className="name-input"
                type="text"
                placeholder="Name"
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
                className="email-input"
                type="text"
                placeholder="E-mail"
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </div>
            <p>
              We promise to never sell your information, and will only use your
              e-mail to send you the final results!
            </p>
            <img
              className="nala-cutout"
              alt="nala cutout"
              src={nalaCutout}
            ></img>
          </div>
          <div className="breed-choices-container">
            <h3 className="step-title">Step 2</h3>
            <p>Select 5 dog breeds and guess a percentage for each breed.</p>
            <p>Ideally your total percentage will add up to exactly 100!</p>
            <h3
              className={
                percentUsed() === 100 ? "hundred-percent" : "percent-remaining"
              }
            >
              {percentUsed()}%
            </h3>
            <h3>
              {percentUsed() === 100
                ? "Perfect, ready to move on!"
                : percentUsed() > 100
                ? "Oops, too much, take some back!"
                : percentUsed() > 75
                ? "Almost done!"
                : percentUsed() > 50
                ? "Over halfway there!"
                : percentUsed() > 25
                ? "Keep going!"
                : "Start guessing!"}
            </h3>
            <div className="datalist-container">
              <input
                onKeyPress={alphabetOnly}
                className="breed-input"
                list="breed-one-list"
                id="breeds-input-one"
                name="breed-one"
                onChange={(e) => setBreedOne(e.target.value)}
                placeholder="Breed 1"
              />
              <datalist id="breed-one-list">{breedOptions}</datalist>
              <input
                onKeyPress={onlyThreeNumbers}
                type="number"
                className="percentage-input"
                min={1}
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
                placeholder="Breed 2"
              />
              <datalist id="breed-two-list">{breedOptions}</datalist>
              <input
                onKeyPress={onlyThreeNumbers}
                type="number"
                className="percentage-input"
                min={1}
                max={100}
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
                placeholder="Breed 3"
              />
              <datalist id="breed-three-list">{breedOptions}</datalist>
              <input
                onKeyPress={onlyThreeNumbers}
                type="number"
                className="percentage-input"
                min={1}
                max={100}
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
                placeholder="Breed 4"
              />
              <datalist id="breed-four-list">{breedOptions}</datalist>
              <input
                onKeyPress={onlyThreeNumbers}
                type="number"
                className="percentage-input"
                min={1}
                max={100}
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
                placeholder="Breed 5"
              />
              <datalist id="breed-five-list">{breedOptions}</datalist>
              <input
                onKeyPress={onlyThreeNumbers}
                type="number"
                className="percentage-input"
                min={1}
                max={100}
                onChange={(e) => setPercentFive(e.target.value)}
                placeholder="%"
              />
            </div>
            <h5 className="embark-link-sentence">
              Need some inspiration or information about the different breeds?
              Check out the{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://embarkvet.com/resources/dog-breeds/"
              >
                350+ dog breeds
              </a>{" "}
              Embark tests for.
            </h5>
          </div>
          <img className="nala-circle" alt="nala cutout" src={nalaCircle}></img>
          <h3 className="step-title">Step 3</h3>
          <p className="step-three-p">
            Enter your guess for Nala's predicted adult weight, then you're
            ready to submit!
          </p>
          <div className="predicted-weight-container">
            <input
              onKeyPress={onlyThreeNumbers}
              type="number"
              className="predicted-weight-input"
              min={1}
              max={100}
              onChange={(e) => setPredictedWeight(e.target.value)}
              placeholder="lbs."
            />
            <button className="submit-button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
          <div className="scoring-guide-div">
            <h3>
              Want to learn about the scoring system? Check out the{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.google.com/document/d/1ZV9TeVTspGCi58wLo323N_OezzcLBhZD3LAljw_0gCs/edit?usp=sharing"
              >
                Scoring Guide
              </a>
            </h3>
          </div>
        </div>
      ) : (
        <div className="successful-submission">
          <h1 className="thank-you-h1">
            Thanks for participating <span>{userName}</span>!
          </h1>
          <table>
            <tr>
              <th className="table-summary-title">Summary</th>
              <th>Breeds</th>
              <th>Percentages</th>
            </tr>
            <tr>
              <td>1</td>
              <td>{breedOne}</td>
              <td>{percentOne}%</td>
            </tr>
            <tr>
              <td>2</td>
              <td>{breedTwo}</td>
              <td>{percentTwo}%</td>
            </tr>
            <tr>
              <td>3</td>
              <td>{breedThree}</td>
              <td>{percentThree}%</td>
            </tr>
            <tr>
              <td>4</td>
              <td>{breedFour}</td>
              <td>{percentFour}%</td>
            </tr>
            <tr>
              <td>5</td>
              <td>{breedFive}</td>
              <td>{percentFive}%</td>
            </tr>
          </table>
          <table className="adult-weight-table">
            <tr>
              <td>Adult Weight Guess</td>
              <td>
                {predictedWeight} {predictedWeight === 1 ? "lb" : "lbs."}
              </td>
            </tr>
          </table>

          <h3 className="closing-sentence">
            We will send you an e-mail at{" "}
            <span className="email-span">{userEmail}</span> when Nala's Embark
            results come in, and the top 3 scores will be recognized!
          </h3>
          <img
            className="nala-yawning"
            alt="nala yawning"
            src={nalaYawning}
          ></img>
          <h4 className="closing-sentence cs-two">
            Want to do another one? Sounds good! Submit as many entries as your
            heart desires!
          </h4>
          <button className="go-again-button" onClick={() => goAgain()}>
            Go again!
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
