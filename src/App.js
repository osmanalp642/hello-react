import User from './components/User'
import './App.css';
const friends=[
  {
    id:1,
    name:'Ahmet'
  },
  {
    id:2,
    name:'Tayfun'
  },
  {
    id:3,
    name:'Ayşe'
  },
  {
    id:4,
    name:'Fatma'
  },
];
function App() {
  return (
   <User
    // name="Osman"
    Surname="Alparslan"
    Age={21} 
    // isLoggedIn={true}
    friends={friends}
    address={{
      title:'Selçuklu/Konya',
      zip:4242
    }}
    />
     );
}

export default App;
