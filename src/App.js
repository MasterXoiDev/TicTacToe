
import './App.css';
import Card from './components/card/Card';
import CardList from './components/card/CardList';
import { ThemeProvider } from 'styled-components';
const theme= {
  color:{
    white: "white"
  } 
}
function App() {
  return (
    <ThemeProvider theme={theme} >
        <CardList>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
        </CardList>
    </ThemeProvider>
  );
}



export default App;
