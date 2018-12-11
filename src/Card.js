import React from 'react';
import './Card.css';

export default function Card(props) {
  return (
    <div className='Card'>
      <button
        type='button'
        onClick={() => props.onClickDelete(props.id)}
      >
        delete
      </button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}

Card.propTypes = {
  onClickDelete: () => {}
}
