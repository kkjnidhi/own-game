class Form {
    constructor() {
      this.input = createInput("").attribute("placeholder", "Enter your name");
      this.NextButton = createButton("Next");
      this.titleImg = createImg("TITLE.png", "game title");
      this.greeting = createElement("h2");

    }
    setElementsPosition() {
      this.titleImg.position(570, 50);
      this.input.position(width / 2 - 180, height / 2 + 50);
      this.NextButton.position(width / 2 - 120, height / 2 + 80);
      this.greeting.position(width / 2 - 300, height / 2 - 100);
    }
  
    setElementsStyle() {
      this.titleImg.class("gameTitle");
      this.input.class("customInput");
      this.NextButton.class("customButton");
      this.greeting.class("greeting");
    }
  
    hide() {
      this.greeting.hide();
      this.NextButton.hide();
      this.input.hide();
      this.titleImg.hide();
    }
    handleMousePressed() {
      this.NextButton.mousePressed(() => {
        this.input.hide();
        this.NextButton.hide();
this.titleImg.hide();
        var message = `
        Hello ${this.input.value()}
        </br>Let us see the rules`;
        this.greeting.html(message);
      });
    }

    display() {
      this.setElementsPosition();
      this.setElementsStyle();
      image(backgroundImage,width/2,height/2)
    }
  }
  