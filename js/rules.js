class Rule {
    constructor() {
        this. Rules = createElement('h1');
        this.playButton = createButton("PLay");
        this.option1 = createElement('h4');
        this.option2 = createElement('h4');
        this.option3 = createElement('h4');
        this.option4 = createElement('h4');
    }
    setEButtonPosition() {
        this.playButton.position(width / 2 - 90, height / 2 - 20);
    }
    hide() {
        this.playButton.hide();
    }
    handleMousePressed() {
        this.playButton.mousePressed(() => {
    
          this.playButton.hide();
          var message = `
          Hello ${this.input.value()}
          </br>wait for another player to join...`;
          this.greeting.html(message);
          playerCount += 1;
          player.name = this.input.value();
          player.index = playerCount;
          player.addPlayer();
          player.updateCount(playerCount);
          player.getDistance();
        });
      }
    display() {
       this.setEButtonPosition() ;
       this.handleMousePressed();
       this.Rules.html("Rules " );
       this.Rules.position(150, 80);
       this.option1.html("1. " );
       this.option1.position(150, 100);
       this.option2.html("2. " );
       this.option2.position(150, 120);
       this.option3.html("3." );
       this.option3.position(150, 140);
       this.option4.html("4." );
       this.option4.position(150, 160);
    }
}