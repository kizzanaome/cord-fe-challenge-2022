import React from 'react';
import { getByRole, render, screen } from '@testing-library/react';
import Discover from '../pages/discover';
import FetcherContext from '../Context/FetcherContext';



it('test title', () => {
    const TestComponet = () => {
        React.useContext(FetcherContext)
        render(<Discover />)
        expect(screen.getByRole('heading')).toHaveTextContent('Discover');
    }

})