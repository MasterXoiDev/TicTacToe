
import './App.css';
import Card from './components/card/Card';
import CardList from './components/card/CardList';
import { ThemeProvider } from 'styled-components';
import Counter from './components/counter/Counter';
import CardTailwind from './components/card/CardTailwind';
import Photos from './components/photo/Photos';
import Photos2 from './components/photo/Photos2';
import Hacker from './components/hackernews/Hacker';
import Toggle from './components/state/Toggle';
import Testreducer from "./components/testReducer/Testreducer"
import Useref from './components/useRef/Useref';
import TextereaAutosize from './components/useRef/TextereaAutosize';
import DropdownList from './components/dropdown/DropdownList';
import Blog from './components/customHook/Blog';
import SideBarMenu from './components/sideBarMenu/SideBarMenu';
import { Fragment, useState } from 'react';
import useClickOutSide from './hooks/useClickOutSide';
import Form from './components/form/Form';
import MovieSearchApp from './components/MovieSearchApp';
import Formsign from './components/form/Formsign';
import Formsignrefactor from './components/form/Formsignrefactor';
import Formreacthook from './components/form/Formreacthook';



const theme = {
  color: {
    white: "white"
  }
}
function App() {
  // const [show,setShow] = useState(false)

  const { domSelect,
        show,
        handleShow,} = useClickOutSide("span")
  return (


      
      <Fragment>
      {/* <ThemeProvider theme={theme} >
        <CardList>
          <CardTailwind title2={true}></CardTailwind>
        </CardList>
      </ThemeProvider>
      <Counter></Counter>
      <Photos2></Photos2>
      <Photos></Photos>
      <Hacker></Hacker>
      <Toggle></Toggle>
      <Testreducer></Testreducer>
      <Useref></Useref>
      <TextereaAutosize></TextereaAutosize>
      <DropdownList></DropdownList>
      <Blog></Blog> */}

      
      {/* <span className='inline-block m-3 p-3 bg-green-500 text-lg rounded-xl text-orange-50 cursor-pointer' onClick={handleShow}>click button</span>
      <SideBarMenu show={show} ref={domSelect}></SideBarMenu> */}
      {/* <DropdownList></DropdownList> */}

      {/* <Form></Form> */}
      {/* <MovieSearchApp></MovieSearchApp> */}
      {/* <Formsign></Formsign> */}

      {/* <Formsignrefactor></Formsignrefactor> */}
      <Formreacthook></Formreacthook>
      </Fragment>
    


  );
}



export default App;
