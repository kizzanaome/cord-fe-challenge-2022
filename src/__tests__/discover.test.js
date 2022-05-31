import React from 'react';
import MobileHeader from '../pages/discover/index';
import MobilePageTitle from '../pages/discover/index';
import FetcherContext, { FetcherProvider } from '../Context/FetcherContext'
import Discover from '../pages/discover'




import { render, screen, clean } from '@testing-library/react';

import renderer from 'react-test-renderer'


describe("renders the discover UI correctly", () => {


    beforeEach(() => {



        // const TestComponet = () => {
        //     const genreOptions = React.useContext(FetcherContext)
        //     return (
        //         <FetcherProvider value={{ genreOptions }}>
        //             <Discover />
        //         </FetcherProvider>
        //     );
        // }

    });


    it("renders mobile header correctly", () => {
        const TestComponet = () => {
            React.useContext(FetcherContext)
            const tree = renderer.create(
                <MobileHeader>
                    <MobilePageTitle>Discover</MobilePageTitle>
                </MobileHeader>
            ).toJSON();
            expect(tree).toMatchSnapshot();

        }

    })

    it("renders mobile title correctly", () => {

        const TestComponet = () => {
            const genreOptions = React.useContext(FetcherContext)

            const component = <MobilePageTitle>Discover</MobilePageTitle>
            const tree = renderer.create(component).toJSON();
            expect(tree).toMatchSnapshot();
            // );
        }

    })


})
