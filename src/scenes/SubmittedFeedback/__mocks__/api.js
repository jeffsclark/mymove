export const IssuesIndex = () => {
  console.log('Legit');
  return new Promise(resolve => {
    const results = [
      {
        created_at: '2018-02-14T12:39:32.919Z',
        description: 'Moving is a difficult thing, alas',
        id: 'f827b6bc-7a35-459c-8a44-aec602a80bab',
        updated_at: '2018-02-14T12:39:32.919Z',
      },
    ];
    process.nextTick(() => resolve(results));
  });
};
// Give it a good and bad call so we can observe what happens
// with both. Look up how to return a bad promise.
