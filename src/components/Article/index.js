import React from 'react';
import {Link} from 'react-router-dom'

const Article=()=>{
    return(
        <article className="mt-90">
            <header className="text-center mb-40">
                <h3>
                <Link to="/register">New features will add to dashboard soon</Link>
                </h3>
                <div className="link-color-default fs-12">
                News
                <time> May 13, 2017</time>
                </div>
            </header>
           
                <img className="rounded" src="assets/img/blog-1.jpg" alt="..." />
           
            <div className="card-block">
                <p className="text-justify">Together. Great. So good was saying, that can't first let called air divide stars male isn't i. Herb third let
                may fourth divide. Greater gathering land you'll i their beast have. She'd form sea it wherein fowl, spirit
                creeping living. Likeness creepeth you hath heaven. Likeness, moveth fruitful behold. Open evening a air us
                behold. Saying above moving second a subdue likeness after also second.</p>
                <p className="text-center mt-40">
                 <Link to="/single/some-title-slug" className="btn btn-round btn-primary">Read more</Link>
                </p>
            </div>
        </article>

    )
}

export default Article;