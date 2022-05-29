// import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { shallow, configure, mount } from 'enzyme';
// import renderer from 'react-test-renderer'

import Discover from './pages/discover'

configure({ adapter: new Adapter() });

// jest.mock('axios', () => {
//     return {
//         __esModule: true,
//         default: jest.fn()
//     }
// });



describe("fetching from the Movie API", () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Discover />);
        // console.log(wrapper.debug())

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