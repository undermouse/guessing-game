class GuessingGame {
    setRange(min, max) {
      this.min = min;
      this.max = max;
    }
  
    guess() {
      let middle = Math.round((this.min + this.max) / 2);
      return middle;
    }
  
    lower() {
      this.max = this.guess();
    }
  
    greater() {
      this.min = this.guess();
    }
  }
  
module.exports = GuessingGame;


