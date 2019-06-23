import Profile from "../../Profile";

class ProfileBuilder {
  /* Define all the steps needed to create a profile */

  setMenu(position) {
    this.menuLocation = position;
    return this;
  }

  setBorders(style) {
    this.borders = style;
    return this;
  }

  setTheme(style) {
    this.theme = style;
    return this;
  }

  setCoverImage(url) {
    this.coverImage = url;
    return this;
  }

  setBackgroundColor(color) {
    this.backgroundColor = color;
    return this;
  }

  setMenuColor(color) {
    this.menuColor = color;
    return this;
  }

  setProfileFont(fontFamily) {
    this.profileFont = fontFamily;
    return this;
  }

  /* Could also be called getProfile() */
  build() {
    return new Profile(this);
  }
}
export default ProfileBuilder;
