export const IssuesIndex = jest
  .fn() // =>
  .mockImplementationOnce(
    // return (
    new Promise(
      resolve => {
        const results = [
          {
            created_at: '2018-02-14T12:39:32.919Z',
            description: 'Moving is a difficult thing, alas',
            id: 'f827b6bc-7a35-459c-8a44-aec602a80bab',
            updated_at: '2018-02-14T12:39:32.919Z',
          },
        ];
        process.nextTick(() => resolve(results));
      },
      // )
    ),
  )
  .mockImplementationOnce(console.log('heysecond'));
// console.log('Legit')
// return (
// new Promise(resolve => {
//   const results = [
//     {
//       created_at: '2018-02-14T12:39:32.919Z',
//       description: 'Moving is a difficult thing, alas',
//       id: 'f827b6bc-7a35-459c-8a44-aec602a80bab',
//       updated_at: '2018-02-14T12:39:32.919Z',
//     },
//   ];
//   process.nextTick(() => resolve(results));
// )
// The idea here is that when it's called a second time, it will ultimately return something that isn't a valid promise.
// .mockImplementationOnce(() => console.log('other promise goes here'))
// );
// });
// Give it a good and bad call so we can observe what happens
// with both. Look up how to return a bad promise.
// const getHashedPasswordFromDB = jest.fn(() => Promise.resolve({}))
