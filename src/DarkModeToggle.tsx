import { useDarkMode } from './DarkModeContext'

export function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  return (
    <button
      onClick={toggleDarkMode}
      className="dark-mode-toggle"
      aria-label="Toggle dark mode"
      style={{
        background: 'none',
        border: '1px solid #666',
        borderRadius: '4px',
        padding: '4px 8px',
        cursor: 'pointer',
        fontSize: '14px',
        color: 'inherit',
        marginLeft: 'auto'
      }}
    >
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}