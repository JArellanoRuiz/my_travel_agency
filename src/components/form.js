import {useState} from "react";

export default function Form({onAddItems}){

    const [description, setDescription] = useState("");
    const [quantity,setQuantity] = useState(2);
    
  
    function handleSubmit(event) {
      event.preventDefault();
  
      if(!description) return;
  
      const newItem = {description, quantity, packed: false, id: Date.now()};
      console.log(newItem);
      onAddItems(newItem);
      setDescription("");
      setQuantity(1);
    }
  
    return(
      <form className="add-form"  onSubmit={handleSubmit}>
        <h3>What do you need for your 🤩 trip ?</h3>
        <select 
          value={quantity} 
          onChange={ (elem)=> setQuantity(Number(elem.target.value))}
        >
          {Array.from({length: 20}, (_,i) => i +1).map
          ((num)=> (
            <option value={num} key={num}>{num}</option>
          ))}
        </select>
      <input 
        type='text' 
        placeholder="Item..." 
        value={description} 
        onChange={(elem)=> {
          setDescription(elem.target.value);
        }}
      />
      <button>Add</button>
  
      </form>
    )
  }
  