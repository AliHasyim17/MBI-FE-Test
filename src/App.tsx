import React, { useEffect, useState } from "react";
import "./App.css";
import { Table } from './component/table';
import ReactPaginate from 'react-paginate';
import BarChart from './component/barChart'
import AddData from "./component/addData";

const App: React.FC = () => {
  const [people, setPeople] = useState([]);
  const [chart, setChart] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);

  useEffect(() =>{
    const getCharacters = async () => {
      try{
        const response = await fetch(`https://swapi.dev/api/people/?page=1`);
        const data = await response.json()
        setPeople(data);
      }catch(e){
        console.log(Error)
      }
    }

    const getChart = async () => {
      try{
        const response = await fetch(`https://swapi.dev/api/people/?page=1`);
        const data = await response.json()
        setChart(data);
      }catch(e){
        console.log(Error)
      }
    }
    getChart();
    getCharacters();
  }, [])

  const fetchCharacters = async (curerntPage:any) => {
    try{
      const response = await fetch(`https://swapi.dev/api/people/?page=${curerntPage}`);
      const data = await response.json()
      return data;
    }catch(e){
      console.log(Error)
    }
  }

  const handlePageClick = async (data:any) => {
    let currentPage = data.selected + 1;
    const charactersFormServer = await fetchCharacters(currentPage);
    setPeople(charactersFormServer);
    const chartsFormServer = await fetchCharacters(currentPage);
    setChart(chartsFormServer);
  }

  return (
    <div className="App">
      <div className='pad'></div>
          <h2>StarWars Characters Data</h2>
          <button onClick={() => setOpenPopup(true)} className="pop-btn">Add</button>
          <AddData open={openPopup} onClose={() => setOpenPopup(false)}/>
          <Table people={people}/>
          <ReactPaginate 
          previousLabel={'<<'}
          nextLabel={'>>'}
          pageCount={9}
          onPageChange={handlePageClick}
          containerClassName={'pagination justify-content-center'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          activeClassName={'active'
          }
          />
          <div className='pad'></div>
          <BarChart chart={chart}/>
          <div className='pad'></div> 
    </div>
  );
};

export default App;
