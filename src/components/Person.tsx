import { personProps } from './Person.types';

export const Person = (props: personProps) => {
  // console.log(props);
  
  return (
    <div>human sample
      <div>{props.name.first}</div>
      <div>{props.name.last}</div>
    </div>
  )
}
