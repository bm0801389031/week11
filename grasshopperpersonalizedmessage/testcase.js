describe('greeting', () => {
    it('fixed tests', () => {
      Test.assertEquals(greet('Daniel', 'Daniel'), 'Hello boss')
      Test.assertEquals(greet('Greg', 'Daniel'), 'Hello guest')
    })
    it ('random tests', () => {
      for (let i = 0; i < 10; i++) {
        let first = Test.randomToken()
        let second = Test.randomToken()
        Math.floor(Math.random() * 2)
          ? Test.assertEquals(greet(first, first), 'Hello boss')
          : Test.assertEquals(greet(first, second), 'Hello guest')
      }
    })
  })