const Octokit = require('@octokit/rest');

const octokit = new Octokit({
  auth: `token ${process.env.GITHUB_TOKEN}`
});

run();

async function run() {
  // TODO this if will be !process.env.CIRCLE_PULL_REQUEST
  if (true) {
    console.log('blah', process.env.CIRCLE_SHA1)
    await octokit.repos.createCommitComment({
      owner: 'adobe',
      repo: 'react-spectrum',
      commit_sha: process.env.CIRCLE_SHA1,
      body: `Testing comment
      https://reactspectrum.blob.core.windows.net/reactspectrum/${process.env.CIRCLE_SHA1}/verdaccio/build/index.html
      https://reactspectrum.blob.core.windows.net/reactspectrum/${process.env.CIRCLE_SHA1}/verdaccio/docs/index.html
      `
    })
    return;
  }

  let pr = process.env.CIRCLE_PULL_REQUEST.split('/').pop();
  await octokit.issues.createComment({
    owner: 'adobe',
    repo: 'react-spectrum',
    issue_number: pr,
    body: `Build successful! 🎉

* [View the storybook](https://reactspectrum.blob.core.windows.net/reactspectrum/${process.env.CIRCLE_SHA1}/storybook/index.html)
* [View the storybook-17](https://reactspectrum.blob.core.windows.net/reactspectrum/${process.env.CIRCLE_SHA1}/storybook-17/index.html)
* [View the documentation](https://reactspectrum.blob.core.windows.net/reactspectrum/${process.env.CIRCLE_SHA1}/docs/index.html)`
  });
}
