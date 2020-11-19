import './App.css'
import Header from './components/Header/Header'
import Content from './components/Content/Content'
// import ReactFlagsSelect from 'react-flags-select';

import {
  setTranslations,
  setDefaultLanguage
} from 'react-switch-lang';

//datepicker
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';


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
    </MuiPickersUtilsProvider>

  );
}

export default App;
