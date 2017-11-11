window.onload = function() {
 	// Going GOT for this
      var words = ['joffrey', 'cersei', 'walder', 'meryn', 'tywin', 'melisandre', 'beric', 'thoros', 'ilyn', 'gregor'];
      // delcaring all of my words, and putting them into a variable named words
      var game = {
      	//variable game I need for game start later.
        guessed: [],
        //guessed letters
        left: 12,
//I need to define a whole bunch of this statements in here
        start: function() {
          this.complete = false;
          //some guy on the internet said to do this
          this.word = words[Math.floor(Math.random() * words.length)];
          //this is important because it combines my words variable with word length I need for my ifthen
          this.$right = document.getElementById('right');
          this.$wrong = document.getElementById('wrong');
          this.$remain = document.getElementById('remain');
          this.$right.innerHTML = '_'.repeat(this.word.length);
        },
        //this is just going to learn if people guess

        guess: function(letter) {
          if (this.left > 0 && this.complete != true) {
          	//You dont want to know how long I had just one &
            //this code ensures that they still have some guesses left, and the second part if its complete.
            if (this.word.indexOf(letter) > -1 || this.guessed.indexOf(letter) > -1) {
              this.right(letter);
            } else {
              this.wrong(letter);
            }
          }
        },

        right: function(letter) {
          //this is going to check if the word is right or not
          for(var i = 0; i < this.word.length; i++) {
            if (this.word[i] == letter) {
              var word = this.$right.innerHTML.split('');
              word[i] = letter;
              this.$right.innerHTML = word.join('');
            }
          }
//this whole thing is checking if the game is going to be done or not. the this needs to be done
          if (this.$right.innerHTML.indexOf('_') < 0) {
            alert('Valar Morghulis!');
            this.complete = true;
          }
        },
        wrong: function(letter) {
          this.guessed.push(letter);
          this.$wrong.innerHTML += ' ' + letter;
          this.left--;
          this.$remain.innerHTML = this.left;
          if (this.left < 1) {
            alert('You must work for Joffery! You lose! '+ this.word);
            this.complete = true;
          }
        }
      };
      //this is going to code their entries
      game.start();
      document.onkeyup = function(event) {
        var letter = String.fromCharCode(event.keyCode).toLowerCase();
        game.guess(letter);
      };
}