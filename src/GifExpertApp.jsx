import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    
    const [ categories, setCategories ] = useState([]);  // ['batman']
    
    const onAddCategory = (inputValue) => {
        if (categories.includes(inputValue)) {
            alert('Name already exists')
            return
        }
        setCategories([ ...categories, inputValue]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            
            <AddCategory onAddCategory={onAddCategory} /> 

            
            { categories.map((category, index) => {
                return (
                    <GifGrid
                        key={index} 
                        category={category}
                    />
                )
            })}

        </>
    )
}
