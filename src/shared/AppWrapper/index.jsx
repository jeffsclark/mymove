import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import Feedback from 'scenes/Feedback';
import SubmittedFeedback from 'scenes/SubmittedFeedback';
import Header from 'shared/Header';
import { history } from 'shared/store';
import Shipments from 'scenes/Shipments';
import Footer from 'shared/Footer';
import DD1299 from 'scenes/DD1299';
import Landing from 'scenes/Landing';
import WizardDemo from 'scenes/WizardDemo';
import DemoWorkflowRoutes from 'scenes/DemoWorkflow/routes';

const redirect = pathname => () => (
  <Redirect
    to={{
      pathname: pathname,
    }}
  />
);
const AppWrapper = () => (
  <ConnectedRouter history={history}>
    <div className="App site">
      <Header />
      <main className="site__content">
        <Route exact path="/" component={Feedback} />
        <Route path="/submitted" component={SubmittedFeedback} />
        <Route path="/shipments/:shipmentsStatus" component={Shipments} />
        <Route path="/DD1299" component={DD1299} />
        <Route path="/landing" component={Landing} />
        <Route exact path="/mymove" render={redirect('/mymove/intro')} />
        {WizardDemo()}
        <Route exact path="/demo" render={redirect('/demo/sm')} />
        {DemoWorkflowRoutes()}
      </main>
      <Footer />
    </div>
  </ConnectedRouter>
);

export default AppWrapper;
