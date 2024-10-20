document.getElementById("heading").addEventListener(
  "click",
  function (event) {
    console.log(event.target, " === ", "how");
    axios.get("https://api.github.com/users/hadley/orgs").then((data) => {
      console.log(data.data);
    });
  },
  false
);

async function handleHeadClick(e) {
  const data = await axios.get("https://api.github.com/users/hadley/orgs");
  console.log(data);
}

const handleGreeting = () => {
  return console.log("Hello, Lonje.");
};

handleGreeting();
