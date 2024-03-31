import './App.css';
import { useUserContext } from './contexts/UserContext.tsx';
import Login from './components/Login.tsx';
import ChatContainer from './components/ChatContainer.tsx';

function App() {
  const { user } = useUserContext();
  return <>{user ? <ChatContainer></ChatContainer> : <Login></Login>}</>;
}

export default App;
