import React from 'react';
import './Card.scss';
export const Card = (props) => {
  const { flag, name, population, region, capital } = props.props;
    return (
    <div className="card">
        <img src={flag} alt="cardImg" />
        <div className="card__body">
            <h3>
                {name}
            </h3>
            <ul>
                <li><strong>Population: </strong>{population}</li>
                <li><strong>Region: </strong>{region}</li>
                <li><strong>Capital: </strong>{capital}</li>
            </ul>
        </div>
    </div>
  )
}
