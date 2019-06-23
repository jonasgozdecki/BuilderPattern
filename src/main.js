import "./styles.css";

import ProfileBuilder from "./builders/Profile/ProfileBuilder";
import ProfileDirector from "./builders/Profile/ProfileDirector";

function main() {
  const profileBuilder = new ProfileBuilder();
  const director = new ProfileDirector(profileBuilder);
  return director.createPopularProfile();
}

main();

/*
document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
*/
