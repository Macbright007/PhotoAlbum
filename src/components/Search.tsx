import React from "react";
import { FormStyle } from "./Style"

interface SearchProps {
  value: string;
  onChange: (val: string) => void;
}

const Search = ({value, onChange}:SearchProps) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value)
  }
 
  return (
    <FormStyle>
      <input type="search" placeholder="search for image..." onChange={handleChange}/>
    </FormStyle>
  )
} 

export default Search