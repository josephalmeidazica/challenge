// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  let dados = [];
  fetch("https://api.github.com/orgs/takenet/repos?q=language:C#&limit:5&order:asc")
  .then(response => response.json())
  .then(json => {
    json.map(el => { dados.push( {name:el.name, descricao:el.description}) })
    res.statusCode = 200
    res.json({ dados })
    });
}


