import React from 'react';
import {HashRouter, Link} from 'react-router-dom'
import styled from 'styled-components';
import { AboutInstruction } from '../components/atom/AboutInstruction';
import { AboutInstructionItem } from '../components/atom/AboutInstructionItem';
import { AboutSectionTitle } from '../components/atom/AboutSectionTitle';
import { AuthorImage } from '../components/atom/AuthorImage';
import { Submenu } from '../components/atom/Submenu';
import { SubmenuLink } from '../components/atom/SubmenuLink';
import { Opinion } from '../components/molecule/Opinion';
import { opinions } from '../data/opinions';

export const AboutView = () => {
    return (
        <>
         
            
            <Submenu>
                <SubmenuLink>
                    How use this application?
                </SubmenuLink>
                <SubmenuLink>
                    Opinions.
                </SubmenuLink>
                <SubmenuLink>
                    Who I am?
                </SubmenuLink>
            </Submenu>

            <div>
                <AboutSectionTitle>
                    How use this application?
                </AboutSectionTitle>
                <AboutInstruction>
                    <AboutInstructionItem>
                        1.Go to Home page.
                    </AboutInstructionItem>
                    <AboutInstructionItem>
                        2.Start typing in search box.
                    </AboutInstructionItem>
                    <AboutInstructionItem>
                        3.If find movie , click "ADD TO FAV" button.
                    </AboutInstructionItem>
                    <AboutInstructionItem>
                        4.If you like remove movie from favourites, go to favourites page and click "Remove from fav" button
                    </AboutInstructionItem>
                </AboutInstruction>
            </div>

            <div path='/opinion'>
                <AboutSectionTitle>Opinions</AboutSectionTitle>
                <div>
                    {
                        opinions.map( e =>
                            <Opinion
                                image={e.image}
                                name={e.name}
                                comment={e.comment}
                            />
                        )
                    }
                </div>
                
            </div>

            <div path='/aboutMe'>
                <AboutSectionTitle>WHO I AM?</AboutSectionTitle>
                
                <AuthorImage
                    author='https://scontent-frt3-2.xx.fbcdn.net/v/t1.6435-9/198036733_101579698834258_8949335479155007453_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=0NYM4Yd0wnoAX_kyYRX&_nc_ht=scontent-frt3-2.xx&oh=dd84c6e0ebd2afb4c50251807765f3ed&oe=614C8184'
                />

                
            
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