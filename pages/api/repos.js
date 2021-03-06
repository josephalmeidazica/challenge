// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  let content = {
    itemType: "application/vnd.lime.document-select+json",
    items: []
  };
  fetch("https://api.github.com/orgs/takenet/repos?sort=created&direction=asc")
  .then(response => response.json())
  .then(json => {
    json.map(dado => {
      if(dado.language === "C#" && content.items.length < 5){
      content.items.push( {
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
    })}
  })
    res.statusCode = 200
    res.json( content )
    });
}


