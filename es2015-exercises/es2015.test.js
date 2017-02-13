test('you can use arrow functions instead of regular functions', () => {
  // swap this func for an arrow function
  const func = () => 3;

  expect(func()).toEqual(3)
})

test('one line arrow functions do not need a return', () => {
  // turn this function into an arrow function that is on a single line
  const func = () => 3;

  expect(func()).toEqual(3)
});

test('arrow functions always implicitly bind to the correct scope', () => {
  const person = {
    name: 'Jack',
    friends: ['Isaac', 'James'],
    outputFriends() {
      // change this function to an arrow function
      // and remove the bind(this)
      // and see what happens
      return this.friends.map((friend) => {
        return `${this.name} has ${friend} as a friend`
      })
    }
  }

  expect(person.outputFriends()).toEqual([
    'Jack has Isaac as a friend',
    'Jack has James as a friend',
  ])
})

test('classes can have instance methods', () => {
  class Foo {
    bar() {
      return 'bar'
    }
  }

  expect(new Foo().bar()).toEqual('bar')

  // uncomment the test below and get it ot pass
  // expect(new Foo().hello()).toEqual('world')
});

test('classes can have static class methods', () => {
  class Foo {
  }

  Foo.bar = function() {
    return 'bar'
  }

  expect(Foo.bar()).toEqual('bar');

  // get the below test to pass
  // expect(Foo.hello).toEqual({ a: 1 })
});

test('classes can have a constructor which is called when they are created', () => {
  class Person {
    constructor(name) {
      this.name = name
    }
  }

  const jack = new Person('jack');
  expect(jack.name).toEqual('jack');

  // exercise: uncomment this test and get it to pass
  // expect(jack.getName()).toEqual('jack')
})

test('you can map over arrays', () => {
  const start = [1, 2, 3]
  const mapped = start.map(x => x)
  // make the below test pass
  // expect(mapped).toEqual([2, 4, 6])
})
