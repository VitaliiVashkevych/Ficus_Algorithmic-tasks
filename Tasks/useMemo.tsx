// TASK 1

import { useMemo, useState } from 'react';
import './App.css';
import React from 'react';

const data = [
  { id: 1, category: 'Sales', value: 150 },
  { id: 2, category: 'Marketing', value: 100 },
  { id: 3, category: 'Development', value: 200 },
  { id: 4, category: 'Support', value: 80 },
  { id: 5, category: 'Sales', value: 170 },
  { id: 6, category: 'Marketing', value: 120 },
  { id: 7, category: 'Development', value: 220 },
  { id: 8, category: 'Support', value: 90 },
];

function App() {
  const sum = useMemo(() => {
    console.log('Rerendered with memo')
    return data.reduce((acc, item) => acc + item.value, 0)
  }, [data])
  const [count, setCount] = useState(0);

  console.log('Rerendered without memo')

  return (
    <div className="App">
      <h2>Sum: {sum}</h2>

      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default App;

// TASK 2
import { useMemo, useState } from 'react';
import './App.css';
import React from 'react';

const data = [
  { id: 1, category: 'Sales', value: 150 },
  { id: 2, category: 'Marketing', value: 100 },
  { id: 3, category: 'Development', value: 200 },
  { id: 4, category: 'Support', value: 80 },
  { id: 5, category: 'Sales', value: 170 },
  { id: 6, category: 'Marketing', value: 120 },
  { id: 7, category: 'Development', value: 220 },
  { id: 8, category: 'Support', value: 90 },
];

function App() {
  const [visibleItems, setVisibleItems] = useState(data);

  const filterItems = useMemo(() => {
    return (e: string) => {
      console.log('Triggered');
      
      const filteredItems = data.filter(item => item.category.toLowerCase().includes(e));
      setVisibleItems(filteredItems);
    }
  }, [data]);

  return (
    <div className="App">
      <input type="text" onChange={(event) => filterItems(event.target.value)}/>
      {visibleItems.map(item => (
        <div key={item.id}>{item.category}</div>
      ))}
    </div>
  )
}

export default App;

// TASK 3

import { useMemo, useState } from "react";
import "./App.css";

interface Data {
  [key: string]: string;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Form />
    </>
  );
}

const Form = () =>
  useMemo(() => {
    const data: Data = {};
    console.log("rerendered");

    const handleSubmit = (e: { preventDefault: () => void }) => {
      e.preventDefault();
      const name = (document.getElementById("name") as HTMLInputElement).value;
      const age = (document.getElementById("age") as HTMLInputElement).value;
      const address = (document.getElementById("address") as HTMLInputElement)
        .value;

      data.name = name;
      data.age = age;
      data.address = address;
      console.log(data);
    };
    return (
      <form action="get">
        <input type="text" placeholder="Name" id="name" />
        <input type="text" placeholder="Age" id="age" />
        <input type="text" placeholder="Address" id="address" />
        <button type="submit" onClick={handleSubmit}>
          Save data
        </button>
      </form>
    );
  }, []);

export default App;

// TASK 4

import { useMemo, useState } from "react";
import "./App.css";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "Laptop", category: "Electronics", price: 999 },
  { id: 2, name: "Smartphone", category: "Electronics", price: 699 },
  { id: 3, name: "T-Shirt", category: "Apparel", price: 29 },
  { id: 4, name: "Jeans", category: "Apparel", price: 49 },
  { id: 5, name: "Coffee Maker", category: "Home Appliances", price: 89 },
  { id: 6, name: "Blender", category: "Home Appliances", price: 59 },
  { id: 7, name: "Novel Book", category: "Books", price: 19 },
  { id: 8, name: "Notebook", category: "Stationery", price: 5 },
  { id: 9, name: "Desk Lamp", category: "Furniture", price: 35 },
  { id: 10, name: "Office Chair", category: "Furniture", price: 150 },
];

function App() {
  const [count, setCount] = useState(0);
  const [visibleProducts, setVisibleProducts] = useState(products);

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>Products</h1>
      <ListOfProducts
        visibleProducts={visibleProducts}
        setVisibleProducts={setVisibleProducts}
      />
    </div>
  );
}

export default App;

const ListOfProducts = ({
  visibleProducts,
  setVisibleProducts,
}: {
  visibleProducts: Product[];
  setVisibleProducts: (products: Product[]) => void;
}) =>
  useMemo(() => {
    console.log("Rerendered");

    const sortByPrice = (type: string) => {
      switch (type) {
        case "Cheapest": {
          const newProducts = [...products];
          newProducts.sort((a, b) => a.price - b.price);
          setVisibleProducts(newProducts);
          return;
        }
        case "More Expensive": {
          const newProducts = [...products];
          newProducts.sort((a, b) => b.price - a.price);
          setVisibleProducts(newProducts);
          return;
        }
        default:
          return;
      }
    };

    const filterByGroup = (value: string) => {
      if (value === "All") {
        setVisibleProducts(products);
        return;
      }

      const newProducts: Product[] = [];
      products.forEach((prod) =>
        prod.category === value ? newProducts.push(prod) : ""
      );

      setVisibleProducts(newProducts);
      return;
    };
    return (
      <>
        <div>
          <p>Sort by price</p>
          <button onClick={() => sortByPrice("Cheapest")}>Cheapest</button>
          <button onClick={() => sortByPrice("More Expensive")}>
            More Expensive
          </button>
        </div>

        <div>
          <p>Filter by category</p>
          <select
            name="filter"
            id="filter"
            onChange={(e) => filterByGroup(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Apparel">Apparel</option>
            <option value="Home Appliances">Home Appliances</option>
            <option value="Books">Books</option>
            <option value="Stationery">Stationery</option>
            <option value="Furniture">Furniture</option>
          </select>
        </div>

        <ul>
          {visibleProducts.map((product) => (
            <li key={product.id}>
              {product.name} - {product.category} - ${product.price}
            </li>
          ))}
        </ul>
      </>
    );
  }, [visibleProducts]);

