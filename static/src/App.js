import logo from './logo.svg';
import 'normalize.css/normalize.css'
import './App.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import '@blueprintjs/core/lib/css/blueprint.css'
import { Button } from '@blueprintjs/core'


function App() {
  return (
    <div className="App">
      <Button icon="refresh" text="Hi" />
    </div>
  );
}

export default App;
