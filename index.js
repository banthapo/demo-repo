const handleHeadClick = (e) => {
  //   console.log(e.target);
};

document.getElementById("heading").addEventListener(
  "click",
  function (event) {
    console.log(event.target, " === ", "how");
  },
  true
);
