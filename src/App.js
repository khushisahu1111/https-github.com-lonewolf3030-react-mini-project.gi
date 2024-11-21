import './App.css';
import Header from './components/header/Header';
import { useState, useEffect } from 'react';
import Products from './components/Products/Products';

function App() {

const [products, setProducts] = useState([]);
const [filteredProducts, setFilteredProducts] = useState([])
const [searchText, setSearchText] = useState("");

const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
}

console.log("search term", searchText);


useEffect(() => {
  if(searchText.trim() === ""){
    setFilteredProducts(products)
  }else{
    const result = filteredProducts.filter((item) => item.title.toLowerCase()
    .includes(searchText.toLowerCase()))
  
    setFilteredProducts(result)
  }


}, [searchText, filteredProducts, products])

useEffect(() => {
  const fetchProducts = async() => {
     const response = await fetch("https://fakestoreapi.com/products");
     const data = await response.json();
     setProducts(data)
     setFilteredProducts(data)
  }

  fetchProducts();
}, []);


  return (
    <div className="App">
        <Header handleSearchTextChange={handleSearchTextChange} searchText = {searchText}/>
        <Products  products = {filteredProducts}/>


    </div>
  );
}

export default App;
