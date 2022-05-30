import React from 'react';
import MobileHeader from '../pages/discover/index';
import MobilePageTitle from '../pages/discover/index';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { shallow, configure, mount } from 'enzyme';
import renderer from 'react-test-renderer';

// import 'jest-enzyme';
// import 'jest-styled-components';

import Discover from '../pages/discover'
import *  as discover from '../pages/discover'



// const mockGetPopularMovies = jest.spyOn(discover, 'loadPopularMovies')



// describe("testing methonds", () => {
//     afterEach(() => {
//         jest.resetAllMocks();
//     });
// })

// jest.mock('axios', () => {
//     return {
//         __esModule: true,
//         default: jest.fn()
//     }
// });

configure({ adapter: new Adapter() });

describe("renders the discover UI correctly", () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Discover />);
        // console.log(wrapper.debug())

    })

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


    it('should handle error data', (done) => {
        const axios = require('axios');
        jest.spyOn(axios, 'default').mockRejectedValue()
        const wrapper = shallow(<Discover />, {
            disableLifecycleMethods: false
        });

        // console.log(wrapper.instance())
        // console.log(wrapper.state())
        wrapper.instance().loadPopularMovies();
        process.nextTick(() => {
            expect(wrapper.state('loading')).toBeTruthy();
            done();
        })
    })
})