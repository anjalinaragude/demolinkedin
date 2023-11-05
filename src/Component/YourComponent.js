import React, { useState } from 'react';
import Modal from './Modal';
import EditSkill from './EditSkill';
import {FiEdit2} from 'react-icons/fi'


const YourComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
 const [isEdit,setIsEdit] =useState(false)
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const [inputValue, setInputValue] = useState('');
  const [save,setSave]=useState([])

  const handleInputChange = (e) => {
      setInputValue(e.target.value);
  };

  function handleClick() {
    setIsEdit(!isEdit);
  }
  const handleSave = () => {
      // Handle the logic for saving the input value here
      setSave( [...save,{inputValue}]);
      // You can perform any save operation here with the input value
      toggleModal(); // Close the modal after saving (You can change this as per your logic)
  };
  console.log(save)

  return (
    <div>
    <div className='d-flex justify-content-between'>
        <h3>Skills</h3>
        <div>
      <button className="btn  border-0 rounded" onClick={toggleModal}>+</button>
     
      </div>
      <Modal isOpen={isModalOpen} toggleModal={toggleModal} save={save} setSave={setSave} />
      </div>
      <div>
        {save.map((item)=>{
return(
    <div className='d-flex  justify-content-between'>
        <h4>{item}</h4>
        <button className='bg-white border-0'><FiEdit2/></button>
        <hr/>
    </div>
)
        })}
        </div> 
        {isEdit ? (
          <EditSkill
            save={save}
            setSave={setSave}
            setIsEdit={setIsEdit}
            isEdit={isEdit}
          />
        ) : null}
      </div>
  );
};

export default YourComponent;
