const User = require('./user.js')

const users = [
    new User('Uma'),
    new User('Josh'),
    new User('Ollie'),
  ];

class userBase {
    constructor(users) {
        this.users = users;

    }

    count() {
     return this.users.length
    }

    getNames() {
        return users.map((user) => {return user.getName()})
    }

    getIntroductions() {
      return users.map((user) => {return `Hi, my name is ${user.getName()}`})
    }
} 

const collection = new userBase(users);
console.log(collection.getIntroductions())