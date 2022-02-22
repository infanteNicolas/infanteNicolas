import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';

function App() {
  return (
    <div className="App">
      
      <NavBar></NavBar>
      <ItemListContainer></ItemListContainer>

    </div>
  );
}

export default App;
