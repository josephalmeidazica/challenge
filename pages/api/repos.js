// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  let content = {
    itemtype: "application/vnd.lime.document-select+json",
    items: []
  };
  fetch("https://api.github.com/orgs/takenet/repos?q=language:C#&limit:5&order:asc")
  .then(response => response.json())
  .then(json => {
    json.map(dado => { content.items.push( {
      header:{
        type: "application/vnd.lime.media-link+json",
        value: {
            title: dado.name,
            text: dado.description,
            type: "image/jpeg",
            uri: dado.owner.avatar_url,
            aspectRatio: "1:1",
        },
      },
    })
  })
    res.statusCode = 200
    res.json({ content })
    });
}


