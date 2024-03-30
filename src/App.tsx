import './App.css';
import UserProvider from './contexts/UserContext.tsx';
import ChatContainer from './components/ChatContainer.tsx';

function App() {
  return (
    <UserProvider>
      <ChatContainer></ChatContainer>
    </UserProvider>
  );
}

export default App;
