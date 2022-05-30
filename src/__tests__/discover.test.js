// import React from 'react';
import MobileHeader from '../pages/discover/index';
import MobilePageTitle from '../pages/discover/index';


import { render, screen, clean } from '@testing-library/react';

import renderer from 'react-test-renderer'

describe("renders the discover UI correctly", () => {

    it("renders mobile header correctly", () => {
        const tree = renderer.create(
            <MobileHeader>
                <MobilePageTitle>Discover</MobilePageTitle>
            </MobileHeader>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })

    it("renders mobile title correctly", () => {
        const component = <MobilePageTitle>Discover</MobilePageTitle>
        const tree = renderer.create(component).toJSON();
        expect(tree).toMatchSnapshot();
    })










})
