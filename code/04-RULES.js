bytes = this.physics.add.group({
  key: "bytes",
  repeat: 11,
  setXY: { x: 12, y: 0, stepX: 70 }
});

bytes.children.iterate(function(child) {
  child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
});

this.physics.add.collider(bytes, platforms);

this.physics.add.overlap(player, bytes, collectBytes, null, this);
