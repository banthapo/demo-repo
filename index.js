document.getElementById("heading").addEventListener(
  "click",
  function (event) {
    console.log(event.target, " === ", "how");
    axios.get("https://api.github.com/users/hadley/orgs").then((data) => {
      console.log(data.data);
    });
  },
  true
);

async function handleHeadClick(e) {
  const data = await axios.get("https://api.github.com/users/hadley/orgs");
  console.log(data);
}
