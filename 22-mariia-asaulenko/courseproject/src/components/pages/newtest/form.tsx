import * as React from 'react';
import { EventEmitter } from 'events'
const MyForm: React.FC = () => {
  const obj = {};
  interface Client {
    name: string,
    surname: string,
    email: string,
    phone: string
  }
  const [client, setClient]: [Client, React.Dispatch<React.SetStateAction<Client>>] = React.useState({
    name: "",
    surname: "",
    email: "",
    phone: ""
  })

  const getOnChangeHendler = (fildName) => (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    event.preventDefault();
    const updateClient={ ...client, [fildName]: event.target.value };
    setClient(updateClient);
    (window as any).dataForm.emitter.emit('emitName', updateClient)
  }

  // const setValue = (fildName, value) => {
  //   obj[fildName]=value;
  //   emitter.emit(eventName,obj)
  //   return obj
  // }
  return (
    <div className="class-form">
      <form className="d-flex flex-column justify-content-md-center">
        <input
          placeholder='Name'
          type="text"
          value={client.name}
          onChange={getOnChangeHendler("name")}
        />
        <input placeholder='Surname'
          type="text"
          value={client.surname}
          onChange={getOnChangeHendler("surname")}
        />
        <input placeholder='Email'
          type="text"
          value={client.email}
          onChange={getOnChangeHendler("email")}
        />
        <input placeholder='Phone'
          type="text"
          value={client.phone}
          onChange={getOnChangeHendler("phone")}
        />
      </form>
    </div>
  )
}

export default MyForm;