this.add.image(400, 300, "circuit");

platforms = this.physics.add.staticGroup();

platforms
  .create(400, 568, "plane")
  .setScale(2)
  .refreshBody();

platforms.create(600, 400, "plane");
platforms.create(50, 250, "plane");
platforms.create(750, 220, "plane");
