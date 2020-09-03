if (bytes.countActive(true) === 0) {
  //  A new batch of bytes to collect
  bytes.children.iterate(function(child) {
    child.enableBody(true, child.x, 0, true, true);
  });

  var x =
    player.x < 400
      ? Phaser.Math.Between(400, 800)
      : Phaser.Math.Between(0, 400);

  var bug = bugs.create(x, 16, "bug");
  bug.setBounce(1);
  bug.setCollideWorldBounds(true);
  bug.setVelocity(Phaser.Math.Between(-200, 200), 20);
  bug.allowGravity = false;
}
