import React from 'react';
import './App.css';
import './App.css';
import SearchForm from './SearchComponent';
import ResultContainer from './container';
import DetailForm from './DetailForm';
import FoodContainer from './FoodContainer';

export default function App() {
  return (
    <div>
      <p>React Redux</p>
      <SearchForm/>
      <ResultContainer/>
      <DetailForm/>
      <FoodContainer/>
    </div>
  );
}
