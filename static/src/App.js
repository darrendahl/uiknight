import logo from './logo.svg';
import 'normalize.css/normalize.css'
import './App.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import '@blueprintjs/core/lib/css/blueprint.css'
import { Button, Navbar } from '@blueprintjs/core'


function Body(){
  return <></>
}

function SideBar(){
  return <div className="sidebar"></div>
}

function Header(){
  return <Navbar>
      <Navbar.Group>
          <Navbar.Heading>UI Knight</Navbar.Heading>
          <Navbar.Divider />
          <Button className="bp3-minimal" icon="home" text="Home" />
          <Button className="bp3-minimal" icon="document" text="Files" />
      </Navbar.Group>
  </Navbar>
}

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      <Body />
    </div>
  );
}

export default App;
