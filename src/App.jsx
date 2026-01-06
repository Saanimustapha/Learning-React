import { Welcome } from './Welcome'
import { ClickButton } from './Button'
// import { ContactForm } from './ContactForm'
import { StyledForm } from './StyledForm'
import { Product } from './Product'
import { Greeting } from './Greeting'
import { UserCard } from './UserCard'
import { CardWrapper } from './CardWrapper'
import { UserDetails } from './UserDetails'
import { ProductList } from './ProductList'
import { Alert } from './Alert'
import './App.css'


function App() {

  return (
    <>
    <Alert type="success">Info successfully submitted</Alert>
    <Alert type="error">Something went wrong</Alert>
    <ProductList/>
    <UserDetails name="Bruce wayne" isOnline={true} isPremium={true}/>
    <UserDetails name="Bruce wayne" isOnline={false} isPremium={false}/>
    <CardWrapper title = "Book"/>
    <p>Bood title</p>
    <p>Number of pages</p>
    <CardWrapper/>
    <UserCard name="saani" age="25" city="accra"/>
    <Greeting person='Bruce' message='Hi'/>
    <Greeting person='Clark'/>
    <Greeting message='Whats up'/>
    <Greeting/>
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
