import React from 'react';
import Card from './Card';
import ProductData from './ProductData';
import Common from './Common';
import home from "../images/ooo.png";


const Products = () => {
    return (
        <>
            <Common
              name="Fitrend"
              desc="A smart IoT enabled device that supports hypertensive patients to manage their condition in real-time, through remote monitoring, and analytics"
              imgsrc={home} 
              isCompName={true}
              visit='/services'  />
            <div className="my-5">
                <h1 className="text-center">Features</h1>
            </div>
            <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {
                        ProductData.map((val, index) => {
                                return <Card 
                                    // imgsrc={val.imgsrc}
                                    title={val.title}
                                    key={index}
                                />
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Products;
