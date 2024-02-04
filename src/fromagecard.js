import React from 'react';
import fromageData from './fromage.json';
// import './item.css';
import Button from "react-bootstrap/Button";


function FromageCard({ name, description, link, image }) {
    return (
        <div class="row">
            <div class="col-sm-6">
                <div className="Item">
                    <div className="card">
                        <img src={image} className='cardImg' alt="..." />
                        <div className="card-body">
                            <h5 >{name}</h5>
                            <p >{description}</p>
                            <div > <Button variant="info"><a href={link} target="_blank"> En savoir plus</a></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
function ItemList() {
    return (
        <div className="centered" >
            {fromageData.map((fromage, key) => (
                <FromageCard
                    key={key}
                    name={fromage.fromagename}
                    description={fromage.fromagesummary}
                    image={fromage.fromageimg}
                    link={fromage.fromagelink}
                />
            ))}
        </div>
    );
}

export default ItemList;