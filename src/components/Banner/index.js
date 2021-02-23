import React from 'react';



const Banner=({title, subtitle,backgroundImage})=>{
    return(
        <header className="header header-inverse" style={{backgroundImage}} data-overlay={8}>
            <div className="container text-center">
                <div className="row">
                <div className="col-12 col-lg-8 offset-lg-2">
                    <h1>{title}</h1>
                    <p className="fs-20" style={{color:'#fff'}}>{subtitle}</p>
                </div>
                </div>
            </div>
         </header>
    )
}

export default Banner;