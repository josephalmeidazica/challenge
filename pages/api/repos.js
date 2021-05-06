// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  let content = {};
  content.push({itemtype: "application/vnd.lime.document-select+json"})
  let items = []
  fetch("https://api.github.com/orgs/takenet/repos?q=language:C#&limit:5&order:asc")
  .then(response => response.json())
  .then(json => {
    json.map(el => { items.push( {name:el.name, descricao:el.description}) })
    content.push(items);
    res.statusCode = 200
    res.json({ content })
    });
}


