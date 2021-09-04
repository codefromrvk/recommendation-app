import "./styles.css";

import { useState } from "react";

// const recoms = {
//   books: ["atomic habits", "indistractable"],
//   movies: ["shawshank redemption", "fight club"],
//   stocks: ["reliance industries", "happiest minds"]
// };
const recoms = {
  books: [
    {
      name: "atomic habits",
      rating: "4/5"
    },
    {
      name: "indistractable",
      rating: "3.5/5"
    },
    {
      name: "the alchemist",
      rating: "3/5"
    }
  ],
  movies: [
    {
      name: "shawshank redemption",
      rating: "4.5/5"
    },
    {
      name: "fight club",
      rating: "4/5"
    },
    {
      name: "Prestige",
      rating: "4/5"
    }
  ],
  stocks: [
    {
      name: "happiest minds",
      rating: "4/5"
    },
    {
      name: "reliance industries",
      rating: "3.5/5"
    },
    {
      name: "zomato",
      rating: "3/5"
    }
  ]
};

const sections = Object.keys(recoms);

export default function App() {
  const [activeSection, setActiveSection] = useState("books");

  function sectionHandler(event) {
    var activeSection = event.target.innerText;

    setActiveSection(activeSection);
  }

  return (
    <div className="App">
      <h1 style={{ textShadow: "3px 2px 3px #b6a2f3" }}>
        my recommendations <span>📚🎥🤑</span>
      </h1>
      <small> all my personal favourites at one place</small>
      <ul
        style={{
          padding: "1rem 0rem 1rem 0rem"
        }}
      >
        {sections.map((section) => {
          return (
            <li
              className="border"
              key={section}
              onClick={sectionHandler}
              style={{
                display: "inline",
                padding: "0.5rem",
                backgroundColor: "#4C1D95",
                cursor: "pointer",
                marginRight: "0.5rem",
                border: "1px solid black",
                color: "white"
              }}
            >
              {section}
            </li>
          );
        })}
      </ul>
      <hr />
      <ul style={{ padding: "0rem 0rem 0rem 0rem" }}>
        {recoms[activeSection].map((element) => {
          console.log(element.name);
          // console.log(element.rating);

          return (
            <li
              key={element.name}
              style={{
                listStyle: "none",
                margin: "0rem 0 1rem 0",
                border: "1px solid gray",
                padding: "1rem",
                borderRadius: "0.5rem",
                width: "70%",
                backgroundColor: "#A78BFA"
              }}
            >
              <div>{element.name}</div>
              <div>{element.rating}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
