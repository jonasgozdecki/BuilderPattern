export default class Profile {
  /* Receives the builder and assigns the values */
  constructor(builder) {
    this.menulocation = builder.menuLocation;
    this.borders = builder.borders;
    this.theme = builder.theme;
    this.coverimage = builder.coverImage;
    this.backgroundcolor = builder.backgroundColor;
    this.menucolor = builder.menuColor;
    this.profilefont = builder.profileFont;
  }

  /* Some Business logic and abstract/generic methods here */
}
