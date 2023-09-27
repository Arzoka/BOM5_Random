let current_data;

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    let language = localStorage.getItem("language");
    if (!language || language !== "dutch") {
      doLanguageInput(data.en);
    } else doLanguageInput(data.nl);
  })
  .catch((error) => console.log(error));

const doLanguageInput = (data) => {
  console.log(data);
  if (document.getElementById("SDG_Overview")) {
    document.getElementById("SDG_Overview").innerHTML = data.index.Overview;
    document.getElementById("play_SDG").innerHTML = data.index.PlaySDG;
    document.getElementById("our_SDGs").innerHTML = data.index.OurSDGs;
  } else if (document.getElementById("contact_title")) {
    document.getElementById("contact_title").innerHTML = data.contact.Title;
  }
};
