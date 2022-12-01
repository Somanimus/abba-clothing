import './App.css';
import Footer from './elements/footer/footer';
import Header from './elements/header/header';
import ItemInfo from './elements/itempage/iteminfo';
import MainPage from './elements/mainpage/mainpage';
import ProfilePage from './elements/profilepage/profilepage';

function App() {
  return (
    <div className='App'>
    <Header/>
    <ProfilePage/>
    <Footer/>
    </div>
  );
}

export default App;
