import React from 'react';
import styled from 'styled-components';

export const AboutView = () => {
    return (
        <>
         
            
            <ul>
                <li>How use this application?</li>
                <li>Opinions.</li>
                <li>Who I am?</li>
            </ul>

            <div>
                <h3>How use this application?</h3>
                <p>
                    Short steps to find movie and add finded movie to favourite.
                </p>
                <ul>
                    <ol>1. Go to Home page.</ol>
                    <ol> 2. Start typing in search box </ol>
                    <ol>3. If find movie , click "ADD TO FAV" button</ol>
                    <ol>4. If you like remove movie from favourites, go to favourites page and click "Remove from fav" button</ol>
                </ul>
            </div>

            <div>
                <h4>Opinions</h4>
                <div>
                    <figure>
                        <img src="https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg"/>
                    </figure>
                    <strong>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat quidem, minus at laborum esse eos porro rerum magnam delectus vel, provident odio odit voluptatibus aliquid fuga beatae sapiente aut! Vitae!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsa assumenda perferendis provident laudantium nam, laborum cumque nesciunt omnis deleniti, eveniet enim. Aspernatur minima, cum debitis dignissimos pariatur eligendi. Quasi.
                    </strong>
                </div>
                
            </div>


            <div>
                <figure>
                    <img src="https://scontent-frt3-2.xx.fbcdn.net/v/t1.6435-9/198036733_101579698834258_8949335479155007453_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0NYM4Yd0wnoAX_kyYRX&_nc_ht=scontent-frt3-2.xx&oh=dd84c6e0ebd2afb4c50251807765f3ed&oe=614C8184"/>
                </figure>
                <strong>
                    Who I am?
                </strong>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure similique ipsum unde sed harum dicta, quas nam laudantium assumenda pariatur quam voluptates eveniet a ipsa consequatur odit nisi distinctio. Impedit.
                    Eligendi sequi pariatur inventore iste totam, architecto tempore tempora porro officiis est dolorem in ad praesentium autem nihil suscipit similique nulla laudantium? Est, molestiae illo nesciunt pariatur odio voluptas eos!
                </p>
                <ul>
                    <li>fb</li>
                    <li>yt</li>
                    <li>git</li>
                    <li>snap</li>
                    <li>ig</li>
                </ul>
                <div>
                    Radosław Adamczyk &copy; 2021
                </div>
            </div>

        </>
    )
}