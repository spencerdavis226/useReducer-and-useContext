import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemeDisplay() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const style = {
    background: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#333' : '#fff',
    padding: '20px',
    textAlign: 'center',
  };

  return (
    <div style={style}>
      <h2>Theme Toggle Example</h2>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemeDisplay;
