import './App.css';
import Counter from './Counter';
import ThemeProvider from './ThemeProvider';
import ThemeDisplay from './ThemeDisplay';

function App() {
  return (
    <div>
      <ThemeProvider>
        <ThemeDisplay />
        <Counter />
      </ThemeProvider>
    </div>
  );
}

export default App;
