player = this.physics.add.sprite(100, 450, "kiki");

player.setBounce(0.2);
player.setCollideWorldBounds(true);

this.anims.create({
  key: "left",
  frames: this.anims.generateFrameNumbers("kiki", { start: 0, end: 3 }),
  frameRate: 10,
  repeat: -1
});

this.anims.create({
  key: "turn",
  frames: [{ key: "kiki", frame: 4 }],
  frameRate: 20
});

this.anims.create({
  key: "right",
  frames: this.anims.generateFrameNumbers("kiki", { start: 5, end: 8 }),
  frameRate: 10,
  repeat: -1
});

this.physics.add.collider(player, platforms);
