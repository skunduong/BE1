class ShipType2Controller extends ShipController {
  constructor(x, y, configs){
    configs.cooldown = ShipType2Controller.COOLDOWN;
    super(x, y, ShipType2Controller.SPRITE_NAME, configs);
    this.sprite.health = ShipType2Controller.MAX_HEALTH;
  }

  fire(){
    this.createBullet(
      new Phaser.Point(
        this.sprite.position.x + 20,
        this.sprite.position.y - 10
      ),
      new Phaser.Point(1, -5)
    );
    this.createBullet(
      new Phaser.Point(
        this.sprite.position.x - 20,
        this.sprite.position.y - 10
      ),
      new Phaser.Point(-1, -5)
    );
    this.createBullet(
      new Phaser.Point(
        this.sprite.position.x + 40,
        this.sprite.position.y + 10
      ),
      new Phaser.Point(1, -1)
    );
    this.createBullet(
      new Phaser.Point(
        this.sprite.position.x - 40,
        this.sprite.position.y + 10
      ),
      new Phaser.Point(-1, -1)
    );
  }

  createBullet(position, direction){
    new BulletType2Controller(
      position,
      direction
    )
  }
}


ShipType2Controller.SPRITE_NAME = "3_downleft_05.gif";
ShipType2Controller.MAX_HEALTH = 10;
ShipType2Controller.COOLDOWN = 0.25;
