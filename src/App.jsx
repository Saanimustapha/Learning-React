import { Welcome } from './Welcome'
import { Button } from './Button'
// import { ContactForm } from './ContactForm'
import { StyledForm } from './StyledForm'
import { Product } from './Product'
import { Greeting } from './Greeting'
import { UserCard } from './UserCard'
import { CardWrapper } from './CardWrapper'
import { UserDetails } from './UserDetails'
import { ProductList } from './ProductList'
import { Alert } from './Alert'
import { Menu } from './Menu'
import { UserForm } from './UserForm'
import { Counter } from './Counter'
import { LoginCard } from './LoginCard'
import { Message } from './Message'
import { SimpleCounter } from './SimpleCounter'
import { SimpleCounterTwo } from './SimpleCounterTwo'
import { BatchUpdate } from './BatchUpdate'
import { UserProfile } from './UserProfile'
import { ToDoList } from './ToDoList'
import { ShoppingCart } from './ShoppingCart'
import { Courses } from './Courses'
import { ReducerCounter } from './ReducerCounter'
import { ReducerShoppingCart } from './ReducerShoppingCart'
import './App.css'


function App() {

  return (
    <>
    <ReducerShoppingCart/>
    {/* <ReducerCounter/>
    <Courses/>
    <ShoppingCart/>
    <ToDoList/>
    <UserProfile/>
    <BatchUpdate/>
    <SimpleCounterTwo/>
    <SimpleCounter/>
    <Message/>
    <LoginCard/>
    <Counter/>
    <Menu/>
    <UserForm/>
    <Button/>
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
    {/* <StyledForm/> */} 
    </>
  )
}

export default App
