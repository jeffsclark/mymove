import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
// import { fetchMock } from 'fetch-mock';
import issuesReducer, {
  createShowIssuesRequest,
  createShowIssuesSuccess,
  createShowIssuesFailure,
  loadIssues,
} from './ducks';

jest.mock('./api');

// describe('Issues Reducer', () => {
//   it('Should handle SHOW_ISSUES', () => {
//     const initialState = { issues: null, hasError: false };

//     const newState = issuesReducer(initialState, { type: 'SHOW_ISSUES' });

//     expect(newState).toEqual({ issues: null, hasError: false });
//   });

//   it('Should handle SHOW_ISSUES_SUCCESS', () => {
//     const initialState = { issues: null, hasError: false };

//     const newState = issuesReducer(initialState, {
//       type: 'SHOW_ISSUES_SUCCESS',
//       items: 'TOO FEW DOGS',
//     });

//     expect(newState).toEqual({ issues: 'TOO FEW DOGS', hasError: false });
//   });

//   it('Should handle SHOW_ISSUES_FAILURE', () => {
//     const initialState = { issues: null, hasError: false };

//     const newState = issuesReducer(initialState, {
//       type: 'SHOW_ISSUES_FAILURE',
//       error: 'Boring',
//     });

//     expect(newState).toEqual({ issues: null, hasError: true });
//   });
// });

// describe('Issues Actions', () => {
//   const initialState = { issues: null, hasError: false };
//   const mockStore = configureStore();
//   let store;

//   beforeEach(() => {
//     store = mockStore(initialState);
//   });

//   it('Should check action on dispatching ', () => {
//     let action;
//     store.dispatch(createShowIssuesRequest());
//     store.dispatch(
//       createShowIssuesSuccess([{ id: '11', description: 'too few dogs' }]),
//     );
//     store.dispatch(createShowIssuesFailure('Tests r not fun.'));
//     action = store.getActions();
//     // Add expect about what the contents will be.
//     expect(action[0].type).toBe('SHOW_ISSUES');
//     expect(action[1].type).toBe('SHOW_ISSUES_SUCCESS');
//     expect(action[1].items).toEqual([
//       { id: '11', description: 'too few dogs' },
//     ]);
//     expect(action[2].type).toBe('SHOW_ISSUES_FAILURE');
//     expect(action[2].error).toEqual('Tests r not fun.');
//   });
// });

// TODO: Figure out how to mock the Swagger API call
describe('async action creators', () => {
  const initialState = { issues: null, hasError: false };
  const mockStore = configureStore();
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('should receive a valid promise and handle it properly', () => {
    const testLoadIssues = loadIssues();
    const getState = function() {
      return;
    };
    const dispatch = function(action) {
      return;
    };

    testLoadIssues(dispatch, getState);
    // return store.dispatch(loadIssues()).then(() => {
    //   // return of async actions
    //   expect(store.getActions()).toEqual(expectedActions);
    // });

    it('should receive an invalid promise and handle it properly', () => {
      // Need to get an invalid promise somehow - does that require another mock? Need to show that error.
      // Am I testing the action value or the issue returned in the promise?
      // If the promise value comes from the mock, am I testing for that? Should I provide the value to the mock function and then test for the provided value, rather than having the value hard-coded in the mock?
      // Make loadIssues available
      // Provide mocked versions of what it needs to run (feel like current approach is anemic)
      // Provide it a valid promise and test that result (expect items?)
      // Separate it function: provide it an invalid promise and test that result (expect error?)
      const testLoadIssues = loadIssues();
      // const getState = function() {
      //   return;
      // };
      // const dispatch = function(action) {
      //   return;
      // };

      // testLoadIssues(dispatch, getState);
      // return store.dispatch(loadIssues()).then(() => {
      //   // return of async actions
      //   expect(store.getActions()).toEqual(expectedActions);
    });
    // it('creates SHOW_ISSUES_SUCCESS when submitted issues have been loaded', () => {
    //   fetchMock.getOnce('/submitted', {
    //     items: { issues: [{ id: 11, description: 'too few dogs' }] },
    //     headers: { 'content-type': 'application/json' },
    //   });

    //   const expectedActions = [
    //     { type: SHOW_ISSUES },
    //     {
    //       type: SHOW_ISSUES_SUCCESS,
    //       items: { issues: [{ id: 11, description: 'too few dogs' }] },
    //     },
    //   ];

    //   const store = mockStore(initialState);

    //   return store.dispatch(loadIssues()).then(() => {
    //     // return of async actions
    //     expect(store.getActions()).toEqual(expectedActions);
    //   });
    // });
  });
});
