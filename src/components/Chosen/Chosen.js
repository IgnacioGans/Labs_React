import React from 'react';
import Select from 'react-select'
import './Chosen.css';
import makeAnimated from 'react-select/animated';
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'red' : 'blue',
    padding: 20,
    
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 300,
    display:"flex",
    backgroundColor: "black"
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
const animatedComponents = makeAnimated();
const Chosen = () => (
  <Select 
    styles={customStyles}
    closeMenuOnSelect={false}
    isMulti
    components={animatedComponents}
    options={options} 
  />
)
export default Chosen;