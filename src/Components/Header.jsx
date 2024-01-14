import React from 'react';
import logo from '../Images/Icons/oliverugslogo.png';


const Header = () => {
  let PrimaryLinks =[
    {name:"Home" ,link:"/"},
    {name:"Furnish Your Space",
      link:"/"},
    {name:"Sign In" ,link:"/"}
  ];
 

  return (
    <>
      <div className="header flex items-start justify-between  bg-neutral-300">
          <img className="mt-1 ml-5 pb-1 rounded-sm" src={ logo } width={120}/>
          <ul className="flex items-center justify-between font-sans font-thin text-lg text-neutral-700">
            {
    PrimaryLinks.map((link)=>(
    <li key={link.name} className="m-5">
      <li key={link.submenu}></li>
      <a href={link.link}>{link.name}</a>      
    </li>
    )
    )
  }  
  
        </ul> 
      </div>
      <div className='search flex place-content-center text-neutral-200 bg-stone-200 p-2' >
        <div className='flex justify-center bg-neutral-600 rounded-xl w-60'>
          Search
        </div>
       
      </div>
      <div className='discountbar text-center text-neutral-100 bg-neutral-400 p-2 '>
        Free Delivery when you spend over $100
      </div>
  </>    
  );
}

export default Header;