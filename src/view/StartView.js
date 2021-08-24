import React from 'react';
import { AiOutlineStar as StarIcon } from "react-icons/ai";
import { GrGroup as UsersIcon } from "react-icons/gr";
import { MdDateRange as DateIcon } from "react-icons/md";
import { MovieDescription } from '../components/atom/MovieDescription';
import { MovieFavouriteButton } from '../components/atom/MovieFavouriteButton';
import { MoviePopularity } from '../components/atom/MoviePopularity';
import { MoviePoster } from '../components/atom/MoviePoster';
import { MovieSectionTitle } from '../components/atom/MovieSectionTitle';
import { MovieTitle } from '../components/atom/MovieTitle';
import { RateWrapper } from '../components/atom/RateWrapper';
import { MovieHeader } from '../components/organism/MovieHeader';
import { MovieItem } from '../components/organism/MovieItem';
import { MovieItems } from '../components/schema/MovieItems';





export const StartView = ({valueSearch}) => {
    return (
        <>
            {
                valueSearch
                    
                    ?

                    <>
                        <h1>„{valueSearch}”</h1>
                        <div>
                            <MoviePoster
                                image='https://m.media-amazon.com/images/I/A1wnJQFI82L._AC_SY879_.jpg'
                                className='result'
                            />
                            <div>
                                <MovieTitle className='result'>Star Wars IV : New Hope</MovieTitle>
                                <RateWrapper>
                                    <StarIcon/>
                                    <StarIcon/>
                                    <StarIcon/>
                                    <StarIcon/>
                                    <StarIcon/>
                                </RateWrapper>
                                <MoviePopularity>
                                    <UsersIcon />
                                    <p>1.185.852.963</p>
                                </MoviePopularity>
                                <p>
                                    <DateIcon />
                                    <p>1979/07/19</p>
                                </p>
                                <MovieDescription> 
                                   Gwiezdne wojny, część IV: Nowa nadzieja – chronologicznie czwarty film z cyklu Gwiezdne wojny wyreżyserowany przez George’a Lucasa w 1977 roku pod tytułem Gwiezdne wojny, bez numeru epizodu i podtytułu; opowiada o młodym Luke’u Skywalkerze, który – podobnie jak ojciec – chce zostać rycerzem Jedi. 
                                </MovieDescription>
                                <MovieFavouriteButton/>
                            </div>
                        </div>
                    </>
                
                    :
                <>
                        <MovieHeader/>

                        <div>
                            <MovieSectionTitle>
                                New 5 movies
                            </MovieSectionTitle>
                            <MovieItems>
                                <MovieItem
                                    img='https://fwcdn.pl/fpo/73/77/877377/7967704.6.jpg'
                                    title='The gateway'
                                />
                                <MovieItem
                                    img='https://www.kina.krakow.pl/images/dbimages/film_21187_original_1.jpg'
                                    title='Spider Man no way home'
                                />
                                <MovieItem
                                    img='https://gamingsociety.pl/wp-content/uploads/2020/03/black-widow-marvel.jpeg'
                                    title='Black Widow'
                                />
                                <MovieItem
                                    img='https://images.moviesanywhere.com/117a1bf432540b6dffe4dea02d5f9ba0/aac7aa47-7e44-4039-b54a-a3abf8e68200.jpg'
                                    title='Pixels'
                                />
                                <MovieItem
                                    img='https://www.filmawka.pl/wp-content/uploads/2020/10/batman.jpg'
                                    title='Batman'
                                />
                            </MovieItems>
                                
                        </div>
                            
                        <div>
                            <MovieSectionTitle>TOP 5 most popular movies</MovieSectionTitle>        
                            <MovieItems>
                                <MovieItem
                                    img='https://media.multikino.pl/thumbnails/50/rc/ODhDREM2/eyJ0aHVtYm5haWwiOnsic2l6ZSI6WyIxMDAwMCIsIjEwMDAwIl0sIm1vZGUiOiJpbnNldCJ9fQ==/uploads/images/films_and_events/free-guy-teaser2-poland_217fed72eb.jpg'
                                    title='Free Guy'
                                    rate='5'
                                />
                                <MovieItem
                                    img='https://fwcdn.pl/nph/49468/2021/30639.7.jpg'
                                    title='The Suicide Squad'
                                    rate='3'
                                />
                                <MovieItem
                                    img='https://www.ckis.konin.pl/wp-content/uploads/Reminescencja-1.jpg'
                                    title='Reminescencja'
                                    rate='3'
                                />
                                <MovieItem
                                    img='https://terrigen-cdn-dev.marvel.com/content/prod/1x/sack_payoff_1-sheet_v6_lg.jpg'
                                    title='Eternals'
                                    rate='2'
                                />
                                <MovieItem
                                    img='https://cont3.naekranie.pl/wp-content/uploads/2021%2F08%2Fshang_611604b1d9c2e.jpeg'
                                    title='Shang-Chi i legenda dziesięciu pierścieni'
                                    rate='2'
                                />
                            </MovieItems>
                        </div>
                            
                        <div>
                            <MovieSectionTitle>New 5 serials</MovieSectionTitle>        
                            <MovieItems>
                                <MovieItem
                                    img='https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfmzFzTpdiMnPzuTLjoJ93IwbGXfCHGNuMGuFIIGSqhhOZKhYKdlCTy3SAx2O20WKJuPXvxWhfs-UF5t-2dKgFifxUHd.jpg?r=f3b'
                                    title='Top Secret UFO Projects: Declassified'
                                />
                                <MovieItem
                                    img='https://fwcdn.pl/fpo/69/44/876944/7966710.3.jpg'
                                    title='Shiny_Flakes: The Teenage Drug Lord'
                                />
                                <MovieItem
                                    img='https://fwcdn.pl/fpo/26/20/852620/7921921.3.jpg'
                                    title='Control Z: Sezon 2'
                                />
                                <MovieItem
                                    img='https://cdn.gracza.pl/galeria/mdb/f/1207676843.jpg'
                                    title='The Swarm'
                                />
                                <MovieItem
                                    img='https://static.prsa.pl/images/5a3a7b7a-203e-489f-92d3-fa299cd87f1d.jpg?format=500'
                                    title='The Friends : Reunion'
                                />
                            </MovieItems>
                        </div>
                            
                        <div>
                            <MovieSectionTitle>TOP 5 most popular serials</MovieSectionTitle>        
                            <MovieItems>
                                <MovieItem
                                    img='https://fwcdn.pl/nph/867323/2020/24407_1.8.jpg'
                                    title='Lucyfer'
                                    rate='5'
                                />
                                <MovieItem
                                    img='https://www.emp-shop.pl/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dwecdb9636/images/3/1/8/0/318007.jpg?sfrm=png'
                                    title='Vikings'
                                    rate='4'
                                />
                                <MovieItem
                                    img='https://rytmy.pl/wp-content/uploads/2021/04/feed_rick-and-morty-season-4-2000-1024x1024.jpg'
                                    title='Rick and Morty'
                                    rate='5'
                                />
                                <MovieItem
                                    img='https://fwcdn.pl/fpo/97/58/809758/7911491.3.jpg'
                                    title='Sex Education'
                                    rate='3'
                                />
                                <MovieItem
                                    img='https://ocdn.eu/pulscms-transforms/1/4mMk9kqTURBXy9iNTM2OTY3MzdjNmFkMDk1NWU5ZTUzNjdiMDVhODM3OS5qcGVnkpUDAADNEzvNCtGTBc0DSM0B-oKhMAGhMQE'
                                    title='Ranczo'
                                    rate='5'
                                />
                            </MovieItems>
                        </div>
                </>
            }
        </>
    )
}