module.exports = {
  branch: 'master',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ['@semantic-release/npm', { 
      npmPublish: false, 
      allowSameVersion: true
    }],
    '@semantic-release/github',
    ["@semantic-release/exec", {
      prepareCmd : "sh ./prepare.sh ${nextRelease.version}"
    }]
  ],
};
