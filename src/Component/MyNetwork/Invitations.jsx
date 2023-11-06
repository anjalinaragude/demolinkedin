import React from 'react';

const Invitations = () => {
  return (
    <div>
      <div class="card">
  <div class="card-header">
    <div className='d-flex justify-content-between'>
        <span>Invitations</span>
        <span>Manage</span>
    </div>
    </div>
  <div class="card-body">
    <div className='d-flex justify-content-between'>
    <div className='d-flex p-2'>
        <div className='p-3'>
            <img src="img/profile3.jpg" width={42} height={42} alt="" className=" rounded-pill" />
        </div>
        <div>
            <h5>Nilesh Saimi</h5>
            <span className='fw-200'>Product Manager</span>
            <p>1 mutual connection</p>
        </div>
       </div> 

       <div className='d-flex my-4 '>
        <div className='me-4'>
        <button className='bg-white border-0'>ignor</button>
        </div>
        <div>
        <button className='bg-white rounded-pill border-primary w-60'> Accept</button>
       </div>
       </div>
    </div>
  </div>
</div>
</div>
    
  );
}

export default Invitations;
