import React, { useEffect, useState } from 'react';
import './App.css';



const App = () => {

  const[data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try{
        const res= await fetch('https://api.facthunt.in/fostergem/v1/post/list/public');
        const actualData = await res.json();
        console.log(actualData.content[0]);
        setData(actualData.content);
      }catch(err){
        console.log("Error fetching data."); 
      }
      
    }
    getData();
  },[]);
 
  return (
    <>
     <h2 className="heading_style">Discover</h2>
    {data.map((content) => {
    return(
            <div className="cards">
              <div className="card">
                <img src={content.coverImageUrl} alt="pic1" className="card_img"/>
                <div className="card_info">
                 <span className="card_category">{content.title}</span>
                </div>
              </div>
            </div>
          )
        }
     )}
    </>
  );
}


export default App;
