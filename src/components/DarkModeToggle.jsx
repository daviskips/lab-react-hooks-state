import React from 'react'

const DarkModeToggle = ({ isDarkMode, onToggle }) => {
  return (
    <button
      type="button"
      aria-label={isDarkMode ? 'Toggle light mode' : 'Toggle dark mode'}
      onClick={onToggle}
    >
      {isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  )
}

export default DarkModeToggle