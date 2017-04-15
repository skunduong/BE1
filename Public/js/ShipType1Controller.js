class ShipType1Controller extends ShipController {
  constructor(x, y, configs){
    configs.cooldown = ShipType1Controller.COOLDOWN;
    super(x, y, ShipType1Controller.SPRITE_NAME, configs);
    this.sprite.health = ShipType1Controller.MAX_HEALTH;
  }

  fire(){
    this.createBullet(new Phaser.Point(0, -1));
    this.createBullet(new Phaser.Point(1, -5));
    this.createBullet(new Phaser.Point(-1, -5));
    this.createBullet(new Phaser.Point(1, -2));
    this.createBullet(new Phaser.Point(-1, -2));
  }

  createBullet(direction){
    new BulletType1Controller(
      this.sprite.position,
      direction
    )
  }
}


ShipType1Controller.SPRITE_NAME = "3_upleft_03.gif";
ShipType1Controller.MAX_HEALTH = 5;
ShipType1Controller.COOLDOWN = 0.1;
