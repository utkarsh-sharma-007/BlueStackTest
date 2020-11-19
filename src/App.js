import './App.css'
import Header from './components/Header/Header'
import Content from './components/Content/Content'

import {
  setTranslations,
  setDefaultLanguage
} from 'react-switch-lang';

//datepicker
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

// toaster
import {ToastsContainer, ToastsStore} from 'react-toasts';

import en from './assets/transalte/eng.json';
import ge from './assets/transalte/german.json';

setTranslations({ en, ge });
setDefaultLanguage('en');

function App(props) {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <div className="App">
        <Header/>
        <Content/>
      </div>
      <ToastsContainer store={ToastsStore}/>
    </MuiPickersUtilsProvider>

  );
}

export default App;
