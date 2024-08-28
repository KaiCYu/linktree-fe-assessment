import ThemeProvider from './context/ThemeContext';
import UserProfileContext from './context/userProfileContext'

import Layout from './components/Layout';
import './App.css'

function App() {
  return (
    <main className="App">
      <UserProfileContext>
        <ThemeProvider>
          <Layout />
        </ThemeProvider>
      </UserProfileContext>
    </main>
  )
}

export default App
