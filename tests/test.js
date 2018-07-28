const request = require('supertest')
const app = require('../')

describe('APP', () => {
  it('rote /block should return 200 OK', done => {
    const blockHeight = 0
    request(app)
      .get('/block/' + blockHeight)
      .expect(200, done)
      .then(res => {
        if (res.body.data.height == blockHeight) {
          console.log(res.body.data)
        } else {
          throw new Error("FAILED. Didn't returned the expected block")
        }
      })
  })

  it('route /block should return newly added block', done => {
    return request(app)
      .post('/block')
      .send({ data: 'Test string' })
      .expect(200, done)
      .then(res => expect(res.data).toBe('Test string'))
  })
})
