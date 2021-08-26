import React from 'react';
import { MovieSearchValue } from '../components/atom/MovieSearchValue';
import { MovieSectionTitle } from '../components/atom/MovieSectionTitle';
import { MovieHeader } from '../components/organism/MovieHeader';
import { MovieItem } from '../components/organism/MovieItem';
import { MovieSearch } from '../components/organism/MovieSearch';
import { MovieItems } from '../components/schema/MovieItems';





export const StartView = ({valueSearch,title, popular, description, release, rate, poster}) => {
    return (
        <>
            {
                valueSearch
                    
                    ?

                    <>
                        <MovieSearchValue>„{valueSearch}”</MovieSearchValue>
                        <MovieSearch
                            image={poster}
                            title={title}
                            rate={rate}
                            release={release}
                            popular={popular}
                            description={description}
                        />
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
                                    img='https://image.tmdb.org/t/p/original//2xjILGdpXU7IYa50IdLHGHykqD7.jpg'
                                    title='The gateway'
                                />
                                <MovieItem
                                    img='https://image.tmdb.org/t/p/original//5RjyUm9HP2ZRwvqCqK9sDqlQHxa.jpg'
                                    title='Spider Man No Way Home'
                                />
                                <MovieItem
                                    img='https://image.tmdb.org/t/p/original//qAZ0pzat24kLdO3o8ejmbLxyOac.jpg'
                                    title='Black Widow'
                                />
                                <MovieItem
                                    img='https://image.tmdb.org/t/p/original//leKQao68zra3SY2cPHZLzEbdLKT.jpg'
                                    title='Life of Pi'
                                />
                                <MovieItem
                                    img='https://image.tmdb.org/t/p/original//r7XF6duZy5ZXmOX7HE3fKGV1WLN.jpg'
                                    title='Batman'
                                />
                            </MovieItems>
                                
                        </div>
                            
                        <div>
                            <MovieSectionTitle>TOP 5 most popular movies</MovieSectionTitle>        
                            <MovieItems>
                                <MovieItem
                                    img='https://image.tmdb.org/t/p/original//acCS12FVUQ7blkC8qEbuXbsWEs2.jpg'
                                    title='Free Guy'
                                    rate='5'
                                />
                                <MovieItem
                                    img='https://image.tmdb.org/t/p/original//iCi4c4FvVdbaU1t8poH1gvzT6xM.jpg'
                                    title='The Suicide Squad'
                                    rate='3'
                                />
                                <MovieItem
                                    img='https://image.tmdb.org/t/p/original//nxncAAL1FUKtQWs4uhs5jf1MVut.jpg'
                                    title='Joker'
                                    rate='4'
                                />
                                <MovieItem
                                    img='https://image.tmdb.org/t/p/original//6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg'
                                    title='Star Wars IV : New Hope'
                                    rate='4'
                                />
                                <MovieItem
                                    img='https://image.tmdb.org/t/p/original//9f2Q0U3IOsLgrI2HkvldwSABZy5.jpg'
                                    title='Shang-Chi i legenda dziesięciu pierścieni'
                                />
                            </MovieItems>
                        </div>
                </>
            }
        </>
    )
}