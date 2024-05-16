import React from 'react';
import { Container } from 'react-bootstrap';

const Movie = (props) => {
    return (
        <Container className="container">
            <div className="movie-best">
                <div className="col-sm-10 col-sm-offset-1 movie-best__rating">Today Best choice</div>
                <div className="col-sm-12 change--col">
                    <div className="movie-beta__item ">
                        <img alt='' src="http://placehold.it/380x600"/>
                            <span className="best-rate">5.0</span>

                            <ul className="movie-beta__info">
                                <li><span className="best-voted">71 people voted today</span></li>
                                <li>
                                    <p className="movie__time">169 min</p>
                                    <p>Adventure | Drama | Fantasy </p>
                                    <p>38 comments</p>
                                </li>
                                <li className="last-block">
                                    <a href="movie-page-left.html" className="slide__link">more</a>
                                </li>
                            </ul>
                    </div>
                    <div className="movie-beta__item second--item">
                        <img alt='' src="http://placehold.it/380x600"/>
                            <span className="best-rate">5.0</span>

                            <ul className="movie-beta__info">
                                <li><span className="best-voted">71 people voted today</span></li>
                                <li>
                                    <p className="movie__time">169 min</p>
                                    <p>Adventure | Drama | Fantasy </p>
                                    <p>38 comments</p>
                                </li>
                                <li className="last-block">
                                    <a href="movie-page-left.html" className="slide__link">more</a>
                                </li>
                            </ul>
                    </div>
                    <div className="movie-beta__item third--item">
                        <img alt='' src="http://placehold.it/380x600"/>
                            <span className="best-rate">5.0</span>

                            <ul className="movie-beta__info">
                                <li><span className="best-voted">71 people voted today</span></li>
                                <li>
                                    <p className="movie__time">169 min</p>
                                    <p>Adventure | Drama | Fantasy </p>
                                    <p>38 comments</p>
                                </li>
                                <li className="last-block">
                                    <a href="movie-page-left.html" className="slide__link">more</a>
                                </li>
                            </ul>
                    </div>
                    <div className="movie-beta__item hidden-xs">
                        <img alt='' src="http://placehold.it/380x600"/>
                            <span className="best-rate">5.0</span>

                            <ul className="movie-beta__info">
                                <li><span className="best-voted">71 people voted today</span></li>
                                <li>
                                    <p className="movie__time">169 min</p>
                                    <p>Adventure | Drama | Fantasy </p>
                                    <p>38 comments</p>
                                </li>
                                <li className="last-block">
                                    <a href="movie-page-left.html" className="slide__link">more</a>
                                </li>
                            </ul>
                    </div>
                    <div className="movie-beta__item hidden-xs hidden-sm">
                        <img alt='' src="http://placehold.it/380x600"/>
                            <span className="best-rate">5.0</span>

                            <ul className="movie-beta__info">
                                <li><span className="best-voted">71 people voted today</span></li>
                                <li>
                                    <p className="movie__time">169 min</p>
                                    <p>Adventure | Drama | Fantasy </p>
                                    <p>38 comments</p>
                                </li>
                                <li className="last-block">
                                    <a href="movie-page-left.html" className="slide__link">more</a>
                                </li>
                            </ul>
                    </div>
                    <div className="movie-beta__item hidden-xs hidden-sm">
                        <img alt='' src="http://placehold.it/380x600"/>
                            <span className="best-rate">5.0</span>

                            <ul className="movie-beta__info">
                                <li><span className="best-voted">71 people voted today</span></li>
                                <li>
                                    <p className="movie__time">169 min</p>
                                    <p>Adventure | Drama | Fantasy </p>
                                    <p>38 comments</p>
                                </li>
                                <li className="last-block">
                                    <a href="movie-page-left.html" className="slide__link">more</a>
                                </li>
                            </ul>
                    </div>
                </div>
                <div className="col-sm-10 col-sm-offset-1 movie-best__check">check all movies now playing</div>
            </div>

            <div className="col-sm-12">
                <div className="mega-select-present mega-select-top mega-select--full">
                    <div className="mega-select-marker">
                        <div className="marker-indecator location">
                            <p className="select-marker"><span>movie to watch now</span> <br/>in your city</p>
                        </div>

                        <div className="marker-indecator cinema">
                            <p className="select-marker"><span>find your </span> <br/>cinema</p>
                        </div>

                        <div className="marker-indecator film-category">
                            <p className="select-marker"><span>find movie due to </span> <br/> your mood</p>
                        </div>

                        <div className="marker-indecator actors">
                            <p className="select-marker"><span> like particular stars</span> <br/>find them</p>
                        </div>

                        <div className="marker-indecator director">
                            <p className="select-marker"><span>admire personalities - find </span> <br/>by director</p>
                        </div>

                        <div className="marker-indecator country">
                            <p className="select-marker"><span>search for movie from certain </span> <br/>country?</p>
                        </div>
                    </div>

                    <div className="mega-select pull-right">
                        <span className="mega-select__point">Search by</span>
                        <ul className="mega-select__sort">
                            <li className="filter-wrap"><a href="#" className="mega-select__filter filter--active" data-filter='location'>Location</a></li>
                            <li className="filter-wrap"><a href="#" className="mega-select__filter" data-filter='cinema'>Cinema</a></li>
                            <li className="filter-wrap"><a href="#" className="mega-select__filter" data-filter='film-category'>Category</a></li>
                            <li className="filter-wrap"><a href="#" className="mega-select__filter" data-filter='actors'>Actors</a></li>
                            <li className="filter-wrap"><a href="#" className="mega-select__filter" data-filter='director'>Director</a></li>
                            <li className="filter-wrap"><a href="#" className="mega-select__filter" data-filter='country'>Country</a></li>
                        </ul>

                        <input name="search-input" type='text' className="select__field"/>

                            <div className="select__btn">
                                <a href="#" className="btn btn-md btn--danger location">find <span className="hidden-exrtasm">your city</span></a>
                                <a href="#" className="btn btn-md btn--danger cinema">find <span className="hidden-exrtasm">suitable cimema</span></a>
                                <a href="#" className="btn btn-md btn--danger film-category">find <span className="hidden-exrtasm">best category</span></a>
                                <a href="#" className="btn btn-md btn--danger actors">find <span className="hidden-exrtasm">talented actors</span></a>
                                <a href="#" className="btn btn-md btn--danger director">find <span className="hidden-exrtasm">favorite director</span></a>
                                <a href="#" className="btn btn-md btn--danger country">find <span className="hidden-exrtasm">produced country</span></a>
                            </div>

                            <div className="select__dropdowns">
                                <ul className="select__group location">
                                    <li className="select__variant" data-value='London'>London</li>
                                    <li className="select__variant" data-value='New York'>New York</li>
                                    <li className="select__variant" data-value='Paris'>Paris</li>
                                    <li className="select__variant" data-value='Berlin'>Berlin</li>
                                    <li className="select__variant" data-value='Moscow'>Moscow</li>
                                    <li className="select__variant" data-value='Minsk'>Minsk</li>
                                    <li className="select__variant" data-value='Warsawa'>Warsawa</li>
                                </ul>

                                <ul className="select__group cinema">
                                    <li className="select__variant" data-value='Cineworld'>Cineworld</li>
                                    <li className="select__variant" data-value='Empire'>Empire</li>
                                    <li className="select__variant" data-value='Everyman'>Everyman</li>
                                    <li className="select__variant" data-value='Odeon'>Odeon</li>
                                    <li className="select__variant" data-value='Picturehouse'>Picturehouse</li>
                                </ul>

                                <ul className="select__group film-category">
                                    <li className="select__variant" data-value="Children's">Children's</li>
                                    <li className="select__variant" data-value='Comedy'>Comedy</li>
                                    <li className="select__variant" data-value='Drama'>Drama</li>
                                    <li className="select__variant" data-value='Fantasy'>Fantasy</li>
                                    <li className="select__variant" data-value='Horror'>Horror</li>
                                    <li className="select__variant" data-value='Thriller'>Thriller</li>
                                </ul>

                                <ul className="select__group actors">
                                    <li className="select__variant" data-value='Leonardo DiCaprio'>Leonardo DiCaprio</li>
                                    <li className="select__variant" data-value='Johnny Depp'>Johnny Depp</li>
                                    <li className="select__variant" data-value='Jack Nicholson'>Jack Nicholson</li>
                                    <li className="select__variant" data-value='Robert De Niro'>Robert De Niro</li>
                                    <li className="select__variant" data-value='Morgan Freeman'>Morgan Freeman</li>
                                    <li className="select__variant" data-value='Jim Carrey'>Jim Carrey</li>
                                    <li className="select__variant" data-value='Adam Sandler'>Adam Sandler</li>
                                    <li className="select__variant" data-value='Ben Stiller'>Ben Stiller</li>
                                </ul>

                                <ul className="select__group director">
                                    <li className="select__variant" data-value='Steven Spielberg'>Steven Spielberg</li>
                                    <li className="select__variant" data-value='Martin Scorsese'>Martin Scorsese</li>
                                    <li className="select__variant" data-value='Guy Ritchie'>Guy Ritchie</li>
                                    <li className="select__variant" data-value='Christopher Nolan'>Christopher Nolan</li>
                                    <li className="select__variant" data-value='Tim Burton'>Tim Burton</li>
                                </ul>

                                <ul className="select__group country">
                                    <li className="select__variant" data-value='USA'>USA</li>
                                    <li className="select__variant" data-value='Germany'>Germany</li>
                                    <li className="select__variant" data-value='Australia'>Australia</li>
                                    <li className="select__variant" data-value='UK'>UK</li>
                                    <li className="select__variant" data-value='Japan'>Japan</li>
                                    <li className="select__variant" data-value='Serbia'>Serbia</li>
                                </ul>
                            </div>
                    </div>
                </div>
            </div>

            <div className="clearfix"></div>

            <h2 id='target' className="page-heading heading--outcontainer">Now in the cinema</h2>

            <div className="col-sm-12">
                <div className="row">
                    <div className="col-sm-8 col-md-9">
                        <div className="movie movie--test movie--test--dark movie--test--left">
                            <div className="movie__images">
                                <a href="movie-page-left.html" className="movie-beta__link">
                                    <img alt='' src="http://placehold.it/424x424"/>
                                </a>
                            </div>

                            <div className="movie__info">
                                <a href='movie-page-left.html' className="movie__title">Gravity (2013)  </a>

                                <p className="movie__time">91 min</p>

                                <p className="movie__option"><a href="#">Sci-Fi</a> | <a href="#">Thriller</a> | <a href="#">Drama</a></p>

                                <div className="movie__rate">
                                    <div className="score"></div>
                                    <span className="movie__rating">4.1</span>
                                </div>
                            </div>
                        </div>

                        <div className="movie movie--test movie--test--light movie--test--left">
                            <div className="movie__images">
                                <a href="movie-page-left.html" className="movie-beta__link">
                                    <img alt='' src="http://placehold.it/424x424"/>
                                </a>
                            </div>

                            <div className="movie__info">
                                <a href='movie-page-left.html' className="movie__title">The Hobbit: The Desolation of Smaug (2013)  </a>

                                <p className="movie__time">169 min</p>

                                <p className="movie__option"><a href="#">Adventure</a> | <a href="#">Fantasy</a> | <a href="#">Drama</a></p>

                                <div className="movie__rate">
                                    <div className="score"></div>
                                    <span className="movie__rating">5.0</span>
                                </div>
                            </div>
                        </div>

                        <div className="movie movie--test movie--test--light movie--test--right">
                            <div className="movie__images">
                                <a href="movie-page-left.html" className="movie-beta__link">
                                    <img alt='' src="http://placehold.it/424x424"/>
                                </a>
                            </div>

                            <div className="movie__info">
                                <a href='movie-page-left.html' className="movie__title">The Hunger Games: Catching Fire (2013)   </a>

                                <p className="movie__time">146 min</p>

                                <p className="movie__option"><a href="#">Action</a> | <a href="#">Adventure</a> | <a href="#">Sci-Fi</a></p>

                                <div className="movie__rate">
                                    <div className="score"></div>
                                    <span className="movie__rating">4.9</span>
                                </div>
                            </div>
                        </div>

                        <div className="movie movie--test movie--test--dark movie--test--right">
                            <div className="movie__images">
                                <a href="movie-page-left.html" className="movie-beta__link">
                                    <img alt='' src="http://placehold.it/424x424"/>
                                </a>
                            </div>

                            <div className="movie__info">
                                <a href='movie-page-left.html' className="movie__title">Thor: The Dark World (2013) </a>

                                <p className="movie__time">112 min</p>

                                <p className="movie__option"><a href="#">Action</a> | <a href="#">Adventure</a> | <a href="#">Fantasy</a></p>

                                <div className="movie__rate">
                                    <div className="score"></div>
                                    <span className="movie__rating">5.0</span>
                                </div>
                            </div>
                        </div>

                        <div className="movie movie--test movie--test--dark movie--test--left">
                            <div className="movie__images">
                                <a href="movie-page-left.html" className="movie-beta__link">
                                    <img alt='' src="http://placehold.it/424x424"/>
                                </a>
                            </div>

                            <div className="movie__info">
                                <a href='movie-page-left.html' className="movie__title">World War Z (2013)  </a>

                                <p className="movie__time">116 min</p>

                                <p className="movie__option"><a href="#">Action</a> | <a href="#">Adventure</a> | <a href="#">Horror</a></p>

                                <div className="movie__rate">
                                    <div className="score"></div>
                                    <span className="movie__rating">4.1</span>
                                </div>
                            </div>
                        </div>

                        cl
                        <div className="movie movie--test movie--test--light movie--test--left">
                            <div className="movie__images">
                                <a href="movie-page-left.html" className="movie-beta__link">
                                    <img alt='' src="http://placehold.it/424x424"/>
                                </a>
                            </div>

                            <div className="movie__info">
                                <a href='movie-page-left.html' className="movie__title">Prisoners (2013) </a>

                                <p className="movie__time">153 min</p>

                                <p className="movie__option"><a href="#">Crime</a> | <a href="#">Thriller</a> | <a href="#">Drama</a></p>

                                <div className="movie__rate">
                                    <div className="score"></div>
                                    <span className="movie__rating">5.0</span>
                                </div>
                            </div>
                        </div>
                        cl

                        cl
                        <div className="movie movie--test movie--test--light movie--test--right">
                            <div className="movie__images">
                                <a href="movie-page-left.html" className="movie-beta__link">
                                    <img alt='' src="http://placehold.it/424x424"/>
                                </a>
                            </div>

                            <div className="movie__info">
                                <a href='movie-page-left.html' className="movie__title">This Is the End (2013)   </a>

                                <p className="movie__time">107 min</p>

                                <p className="movie__option"><a href="#">Comedy</a> | <a href="#">Fantasy</a></p>

                                <div className="movie__rate">
                                    <div className="score"></div>
                                    <span className="movie__rating">4.9</span>
                                </div>
                            </div>
                        </div>
                        cl

                        cl
                        <div className="movie movie--test movie--test--dark movie--test--right">
                            <div className="movie__images">
                                <a href="movie-page-left.html" className="movie-beta__link">
                                    <img alt='' src="http://placehold.it/424x424"/>
                                </a>
                            </div>

                            <div className="movie__info">
                                <a href='movie-page-left.html' className="movie__title">The Internship (2013)  </a>

                                <p className="movie__time">112 min</p>

                                <p className="movie__option"><a href="#">Comedy</a></p>

                                <div className="movie__rate">
                                    <div className="score"></div>
                                    <span className="movie__rating">5.0</span>
                                </div>
                            </div>
                        </div>
                        cl


                        <div className="row">
                            <div className="social-group">
                                <div className="col-sm-6 col-md-4 col-sm-push-6 col-md-push-4">
                                    <div className="social-group__head">Join <br/>our social groups</div>
                                    <div className="social-group__content">A lot of fun, discussions, queezes and contests among members. <br className="hidden-xs"/><br/>Always be first to know about best offers from cinemas and our partners</div>
                                    </div>

                                    <div className="col-sm-6 col-md-4 col-sm-pull-6 col-md-pull-4">
                                        <div className="facebook-group">

                                            <iframe className="fgroup" src="http://www.facebook.com/plugins/likebox.php?href=https%3A%2F%2Fwww.facebook.com%2Fthemeforest&amp;width=240&amp;height=330&amp;colorscheme=light&amp;show_faces=true&amp;header=false&amp;stream=false&amp;show_border=false" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:240px; height:330px;" allowTransparency="true"></iframe>
                                        </div>
                                    </div>

                                    <div className="clearfix visible-sm"></div>
                                    <div className="col-sm-6 col-md-4">
                                        <div className="twitter-group">
                                            <div id="twitter-feed"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <aside className="col-sm-4 col-md-3">
                            <div className="sitebar first-banner--left">
                                <div className="banner-wrap first-banner--left">
                                    <img alt='banner' src="http://placehold.it/500x500"/>
                                </div>

                                <div className="banner-wrap">
                                    <img alt='banner' src="http://placehold.it/500x500"/>
                                </div>

                                <div className="banner-wrap banner-wrap--last">
                                    <img alt='banner' src="http://placehold.it/500x500"/>
                                </div>

                                <div className="promo marginb-sm">
                                    <div className="promo__head">A.Movie app</div>
                                    <div className="promo__describe">for all smartphones<br/> and tablets</div>
                                    <div className="promo__content">
                                        <ul>
                                            <li className="store-variant"><a href="#"><img alt='' src="images/apple-store.svg"/></a></li>
                                            <li className="store-variant"><a href="#"><img alt='' src="images/google-play.svg"/></a></li>
                                            <li className="store-variant"><a href="#"><img alt='' src="images/windows-store.svg"/></a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </aside>
                    </div>
                </div>

                <div className="col-sm-12">
                    <h2 className="page-heading">Latest news</h2>

                    <div className="col-sm-4 similar-wrap col--remove">
                        <div className="post post--preview post--preview--wide">
                            <div className="post__image">
                                <img alt='' src="http://placehold.it/270x330"/>
                                    <div className="social social--position social--hide">
                                        <span className="social__name">Share:</span>
                                        <a href='#' className="social__variant social--first fa fa-facebook"></a>
                                        <a href='#' className="social__variant social--second fa fa-twitter"></a>
                                        <a href='#' className="social__variant social--third fa fa-vk"></a>
                                    </div>
                            </div>
                            <p className="post__date">22 October 2013 </p>
                            <a href="single-page-left.html" className="post__title">"Thor: The Dark World" - World Premiere</a>
                            <a href="single-page-left.html" className="btn read-more post--btn">read more</a>
                        </div>
                    </div>
                    <div className="col-sm-4 similar-wrap col--remove">
                        <div className="post post--preview post--preview--wide">
                            <div className="post__image">
                                <img alt='' src="http://placehold.it/270x330"/>
                                    <div className="social social--position social--hide">
                                        <span className="social__name">Share:</span>
                                        <a href='#' className="social__variant social--first fa fa-facebook"></a>
                                        <a href='#' className="social__variant social--second fa fa-twitter"></a>
                                        <a href='#' className="social__variant social--third fa fa-vk"></a>
                                    </div>
                            </div>
                            <p className="post__date">22 October 2013 </p>
                            <a href="single-page-left.html" className="post__title">30th Annual Night Of Stars Presented By The Fashion Group International</a>
                            <a href="single-page-left.html" className="btn read-more post--btn">read more</a>
                        </div>
                    </div>
                    <div className="col-sm-4 similar-wrap col--remove">
                        <div className="post post--preview post--preview--wide">
                            <div className="post__image">
                                <img alt='' src="http://placehold.it/270x330"/>
                                    <div className="social social--position social--hide">
                                        <span className="social__name">Share:</span>
                                        <a href='#' className="social__variant social--first fa fa-facebook"></a>
                                        <a href='#' className="social__variant social--second fa fa-twitter"></a>
                                        <a href='#' className="social__variant social--third fa fa-vk"></a>
                                    </div>
                            </div>
                            <p className="post__date">22 October 2013 </p>
                            <a href="single-page-left.html" className="post__title">Hollywood Film Awards 2013</a>
                            <a href="single-page-left.html" className="btn read-more post--btn">read more</a>
                        </div>
                    </div>
                </div>
        </Container>
    );
};

export default Movie;