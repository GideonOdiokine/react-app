import React from 'react';
import Article from '../Article';
import Banner from '../Banner';
import {Link} from 'react-router-dom'


const Welcome =()=>{
    return(
       <div>
        <Banner title="Latest Blog Posts" subtitle="Read and get updated on how we progress." backgroundImage='url(assets/img/bg-gift.jpg)' />
        <main className="main-content bg-gray">
            <div className="row">
                <div className="col-12 col-lg-6 offset-lg-3">
                     <Article />
                     <nav className="flexbox mb-50">
                     <Link to='/'>
                            <i className="ti-arrow-left fs-9 mr-4" /> Newer </Link>
                       <Link to='/'>Older
                            <i className="ti-arrow-right fs-9 ml-4" />
                     </Link>
                    </nav>

                     <hr/>
                </div>
            </div>
        </main>
       </div>
        
    )
}

export default Welcome;