import React from 'react';
import {HashRouter, Link} from 'react-router-dom'
import styled from 'styled-components';
import { AboutInstruction } from '../components/atom/AboutInstruction';
import { AboutInstructionItem } from '../components/atom/AboutInstructionItem';
import { AboutSectionTitle } from '../components/atom/AboutSectionTitle';
import { AuthorDescription } from '../components/atom/AuthorDescription';
import { AuthorImage } from '../components/atom/AuthorImage';
import { Socials } from '../components/atom/Socials';
import { Submenu } from '../components/atom/Submenu';
import { SubmenuLink } from '../components/atom/SubmenuLink';
import { AuthorWrapper } from '../components/molecule/AuthorWrapper';
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
                <AuthorWrapper />
                <Socials/>
            </div>
                
            <div>
                Radosław Adamczyk &copy; 2021
            </div>
        </>
    )
}