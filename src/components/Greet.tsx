
type greetProps = {
  name:string;
  messageCount:number;
  isLoggedIn:boolean;
}
const Greet = ({name,messageCount,isLoggedIn}:greetProps)=>{
  return (
    <h1>
     Hello : {name}
    <br/>  messageCount: {messageCount} 
    <br/> isLoggedIn : {isLoggedIn? "LoggedIn":"Guest"}
    </h1>
  )
}

export default Greet;