import React from "react";
import { Button, FoodInput, FormContainer, Select } from "./HeaderStyles";

const Form = ({ setQuery, getData, mealTypes, setMeal }) => {

  const handleSubmit=(e)=>{
    e.preventDefault();
    getData()
  }
  return (
    <div>
      <FormContainer onSubmit={handleSubmit}>
        <FoodInput 
        type={"text"} 
        placeholder="Search" 
        onChange={(e)=>setQuery(e.target.value)} />

        <Button 
        type="submit"
       
        >Search</Button>

        <Select 
        name="mealType" 
        id="mealType" 
        onChange={e=>setMeal(e.target.value)}>
        {
          mealTypes.map((item,index)=><option key={index} value={item.toLowerCase()} >{item}</option>)
        
        }</Select>
      </FormContainer>
    </div>
  );
};

export default Form;
