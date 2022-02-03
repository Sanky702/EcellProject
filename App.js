import './App.css';
import Topbar from './components/topbar/topbar';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import SinglePost from './components/post/post';


function App() {
  return (
    <>
      <Topbar/>
      <Header/>
      <SinglePost/>
      <Sidebar/>
    </>
  );
}

export default App;
