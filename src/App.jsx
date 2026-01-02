import { Welcome } from './Welcome'
import { ClickButton } from './Button'
// import { ContactForm } from './ContactForm'
import { StyledForm } from './StyledForm'
import { Product } from './Product'
import './App.css'


function App() {

  return (
    <>
    <Product name="Laptop" price={899} instock={true}/>
    <Product name="Phone" price={234} instock={false}/>
    <h1>This a react tutorial</h1>
    {/* <Welcome name="Bruce" alias="batman"/>
    <Welcome name="Clark" alias="superman"/> */}
    <StyledForm/>
    <ClickButton/>
    </>
  )
}

export default App
