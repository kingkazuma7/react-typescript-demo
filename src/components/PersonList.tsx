import { PersonName } from './Person.types';

type PersonListProps = { // 配列
  names: PersonName[]
}

export const PersonList = (props: PersonListProps) => {
  // console.log(props);
  
  return (
    <div>
      {props.names.map((name, index) => (
        <h2 key={index}>{name.first} {name.last}</h2>
      ))}
    </div>
  )
}
