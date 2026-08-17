
import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

function App() {
  // 1. Create variables for state
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [cart, setCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')

  // 2. Simple functions to change state
  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode)
  }

  function changeCategory(event) {
    setSelectedCategory(event.target.value)
  }

  function addToCart(item) {
    setCart([...cart, item])
  }

  // 3. Render HTML and components
  return (
    <div>
      <h1>Shopping App</h1>
      <p>Welcome! Your task is to implement filtering, cart management, and dark mode.</p>

      {/* Button to toggle dark mode */}
      <DarkModeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />

      {/* Dropdown for selecting category */}
      <label>Filter by Category: </label>
      <select value={selectedCategory} onChange={changeCategory}>
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      {/* List of items */}
      <ProductList selectedCategory={selectedCategory} onAddToCart={addToCart} />

      {/* Cart to show added items */}
      <Cart cart={cart} />
    </div>
  )
}

export default App