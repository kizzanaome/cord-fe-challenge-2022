import React from 'react';
import MobileHeader from '../pages/discover/index';
import MobilePageTitle from '../pages/discover/index';
// import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { shallow, configure, mount } from 'enzyme';
import renderer from 'react-test-renderer'

import Discover from '../pages/discover'

configure({ adapter: new Adapter() });

// jest.mock('axios', () => {
//     return {
//         __esModule: true,
//         default: jest.fn()
//     }
// });





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
        const tree = renderer.create(
            <MobilePageTitle>Discover</MobilePageTitle>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })

    

    // test("render the discover ui", () => {
    //     console.log(wrapper.find("div"));
    //     expect(wrapper.find("div").text()).toContain("Discover")
    // })

    // test("expect wrapper  ", () => {
    //     // console.log(wrapper.debug());

    //     expect(wrapper.find("p").text()).toBe("Discover")
    // })

    // it('should handle error data', (done) => {
    //     const axios = require('axios');
    //     jest.spyOn(axios, 'default').mockRejectedValue()
    //     const wrapper = shallow(<Discover />, {
    //         disableLifecycleMethods: false
    //     });

    //     // console.log(wrapper.instance())
    //     // console.log(wrapper.state())
    //     wrapper.instance().loadPopularMovies();
    //     process.nextTick(() => {
    //         expect(wrapper.state('loading')).toBeTruthy();
    //         done();
    //     })
    // })
})