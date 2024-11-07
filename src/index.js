 import React from 'react';
 import ReactDOM from 'react-dom/client';
 import './index.css';


const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


 function App() {
   return (
     <div className = "container">
       <Header />
       <Menu />
       <Footer />

     </div>
   );
 }

 // Pizza Component
function Pizza({ name, ingredients, price, photoName, soldOut }) {
  return (
    <div className="pizza">
      <img src={photoName} alt={name} />
      <h2>{name}</h2>
      <p>{ingredients}</p>
      <p>{soldOut ? "Sold Out" : `$${price}`}</p>
    </div>
  );
}

function Header() {
  return (
    <div className = "header">
      <h1 style = {{color: 'orange', fontSize: '48px', textTransform: 'uppercase'}}>Athy's Pizza Co.</h1>
    </div>
  );
}


//  function Pizza() {
//    return (
//      <div className = "pizza">
//         <img src="pizzas/Spinaci.jpg" alt="pizza" />
//        <h2>Pizza Spinaci</h2>
//        <p>Ingredients: Tomato, Mozzarella, Spinach, and Ricotta cheese</p>
//        <p>Price: $10</p>
//      </div>
//    );
//  }

 function Menu() {
   return (
     <div className = "menu">
       <h2>Our Menu</h2>
       <p>Authentic Italian Cuisine</p>
       <div className = "pizzas">
         {pizzaData.map((pizza) => (
           <Pizza key = {pizza.name} name = {pizza.name} photoName = {pizza.photoName} price = {pizza.price} ingredients = {pizza.ingredients} soldOut = {pizza.soldOut} />
         ))}
       </div>
     </div>
   );
 }

 function Footer() {
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= 10 && currentHour < 22;
   return (
    <footer className="footer">
      <p>{isOpen ? "We’re currently open" : "Sorry, we're closed"}</p>
      {isOpen && <OrderButton /> }
    </footer>
  );

  function OrderButton() {
    return (
      <div className = "order">
      <button className = "btn">Order</button>
      </div>
    );
  }
}

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<App />);