import React,{useState} from 'react'
import styled from "styled-components";


const MyImage = ({ imgs = [ { url: " "}]}) => {
    const [mainImage , setMainImage] = useState (imgs[0]);
  return <wrapper> 
    <div className='grid grid-four-column'>
     {
        imgs.map (( cureElem , index)  =>{
            return (

                <figure>
              <img src = {curElem.url} 
              alt= {curElem.filename} 
               className='box-image-style'
                key={index}
                onclick = {() => setMainImage( curElm) } />

                </figure>
            )

        })
     }
     <div className='main-screen'>
        <image src= {mainImage.url} alt = {imgs[0].filename}/>
     </div>

    </div>
    </wrapper>
  
}
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;

  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    /* order: 2; */

    img {
      max-width: 100%;
      max-height: 100%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }

  .main-screen {
    display: grid;
    place-items: center;
    order: 1;
    img {
      max-width: 100%;
      height: auto;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
  .grid-four-column {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    order: 1;

    .grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;
export default MyImage