import './App.css'
import FooterComponent from './Component/FooterComponent';
import LayoutComponent from './Component/LayoutComponent';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div className="">
      <Provider store={store}>
        <LayoutComponent />
        <FooterComponent />
      </Provider>
    </div>
  );
}

export default App;
