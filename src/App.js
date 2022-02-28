import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customer = {
  'name' : 'hunojung',
  'birthday' : '920504',
  'gender' : '남자',
  'job' : '대학생'
}

function App() {
  return (
    <Customer 
      name = {customer.name}
      birthday = {customer.birthday}
      gender = {customer.gender}
      job = {customer.job}/>

  );
}

export default App;
