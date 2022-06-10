import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from 'styled-components';

import SideNavBar from "./components/sidenavbar";

import Discover from "./pages/discover";


import './css/app.scss';
import { FetcherProvider } from "./Context/FetcherContext";

export default class App extends React.Component {
  render() {
    return (
      <FetcherProvider>
        <Router>
          <PageContainer>
            <SideNavBar {...this.props} />
            <ContentWrapper>
              <Switch>
                <Route path="/discover" component={Discover} {...this.props} />
              </Switch>
            </ContentWrapper>
          </PageContainer>
        </Router>
      </FetcherProvider>
    );
  }
}


const ContentWrapper = styled.main`
  padding-left: 280px;

  /* --- smartphone and tablet responsiveness --- */
  @media only screen and (min-width: 270px) and (max-width: 1439px) {
    padding-left: 0;
  }
`

const PageContainer = styled.main`
  overflow-x: hidden;
`
