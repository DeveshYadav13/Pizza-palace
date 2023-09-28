import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 699,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 1099,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 1299,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 1299,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 1599,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 1899,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}


function Header() {
  return (
    <header className="header">
      <h1>Pizza Palace and Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className='menu'>
      <h2>Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All from
            our stone oven, all organic, all delicious.
          </p>

          <ul className='pizzas'>
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our Menu. Please come back later :)</p>
      )}

    </main>
  );
}

function Pizza({ pizzaObj }) {
  //console.log(pizzaObj);

  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
      <img src={pizzaObj.photoName} alt="{pizzaObj.name}" />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        <span>{pizzaObj.soldOut ? "SOLD OUT" : "₹" + pizzaObj.price}</span>

      </div>
    </li>
  );
}


function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;
  // console.log(isOpen);

  return (
    <footer className='footer'>
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00.</p>
      )
      }
    </footer >
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className='order'>
      <p>We're open from {openHour}:00 to {closeHour}:00. Come visit us or order online.</p>
      <button className='btn'>Order</button>
    </div>
  );
}

export default App;
