

type personProps ={
 persons:{
   firstName:String;
   lastName:String
 }[]
}

const PersonList = (props:personProps) => {
  // const {persons} = props;
  return (
   <div>
    <ul>
      {props.persons.map((person,index:number)=>{
        return (
      <li key={index}>{person.firstName}- {person.lastName}</li>
        )
      })}
    </ul>
   </div>
  )
}

export default PersonList;
