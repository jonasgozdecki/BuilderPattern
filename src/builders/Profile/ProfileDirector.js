export default class ProfileDirector {
  /* The director receives the builder */
  constructor(builder) {
    this.builder = builder;
  }

  /* Implements a method to automatically generate a popular profile */
  createPopularProfile() {
    return this.builder
      .setMenu("top")
      .setBorders("soft")
      .setTheme("light")
      .setCoverImage("rain.jpg")
      .setBackgroundColor("black")
      .setMenuColor("blue")
      .setProfileFont("Ubuntu")
      .build();
  }
}
