import React from 'react'
import styled from 'styled-components'

const ContectGreed = () => {
  return (
    <Wrapper>
      <div className="greed-main alert alert-success">
         <div className="row">
          <div className="col-lg-3 col-md-5 col-sm-0 m-auto ">
           <div className="card">
             <div className="card-header ">
              Your Massage succefully sent
             </div>
             <div className="card-body" style={{textAlign:"center"}}>
              <h3>Thanks For Contact Us</h3>
             </div>
           </div>
          </div>
         </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
 .greed-main{
  width: 100%;
  height: 100vh;
  
} 
.row{
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60vh;
}

.card-header{
  font-size: 1.5rem;
}
`

export default ContectGreed
