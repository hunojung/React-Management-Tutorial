import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [{
  
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name' : 'jho',
  'birthday' : '920504',
  'gender' : '남자',
  'job' : '대학생'

},{

  'id':1,
  'image':'https://placeimg.com/64/64/2',
  'name' : 'kkh',
  'birthday' : '960504',
  'gender' : '남자',
  'job' : '대학생'

},{

  'id':3,
  'image':'https://placeimg.com/64/64/3',
  'name' : 'jhj',
  'birthday' : '960504',
  'gender' : '남자',
  'job' : '대학생'

}]
function App() {
  return (
    <div>
      {customers.map(c=>{
        // map을 쓰면 원소를 구분할 수 있는 key를 넣어줘야한다.
        return(  <Customer key={c.id} id = {c.id}  image = {c.image} name = {c.name} birthday = {c.birthday}  gender = {c.gender} job = {c.job}/> ) })}
      </div>
  );
}

export default App;
