// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  let githubres = fetch("https://api.github.com/orgs/takenet/repos?q=language:c#&limit:5&order:asc");
  res.statusCode = 200
  res.json({ githubres })
}


