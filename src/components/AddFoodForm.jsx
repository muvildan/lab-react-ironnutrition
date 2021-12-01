import { useState } from "react";
import { Input } from "antd";

export default function AddFoodForm(props){

    const [formState, setFormState] = useState ({})

    function handleSubmit(event){
        event.preventDefault()
        props.parentCb(formState)
        setFormState({})
    }

    function handleInput(event){
        let {name, value} = event.target
        setFormState(Object.assign({}, formState, {[name]: value}))
    }

  return (
    <div className="AddFoodForm">
      <h4>Add Food</h4>
      <form onSubmit={handleSubmit}>

        <label htmlFor='name'>Name:</label>
        <Input 
        type='text'
        name="name"
        placeholder='Food name'
        value={formState.name || ''}
        onChange={handleInput}/>
        <br/>
        <label htmlFor='image'>Image:</label>
        <Input 
        type='text'
        name='image'
        placeholder='Image URL'
        value={formState.image || ''}
        onChange={handleInput} />
        <br/>
        <label htmlFor='calories'>Calories:</label>
        <Input 
        type='text'
        name='calories'
        placeholder='Calories'
        value={formState.calories || ''}
        onChange={handleInput} />
        <br/>
        <label htmlFor='servings'>Servings:</label>
        <Input 
        type='text'
        name='servings'
        placeholder='Servings'
        value={formState.servings || ''}
        onChange={handleInput} />
        <br/>

        <button >Submit</button>
      </form>
    </div>
  );
}
