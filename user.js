// file: user.js

class User {
    constructor(name) {
      this.name = name;
    }

  
    getName() {
      return this.name;
    }
  
    getIntroduction() {
      return `Hi, my name is ${this.name}`;
    }
  }

  const ryan = new User('Ryan');

  console.log(ryan.getIntroduction());
  module.exports = User