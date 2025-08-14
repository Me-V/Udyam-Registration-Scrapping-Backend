const request = require('supertest')
const app = require('../src/app')

describe('PAN Validation', () => {
  it('should validate correct PAN format', async () => {
    const res = await request(app)
      .post('/api/validate-pan')
      .send({ pan: 'ABCDE1234F' })
    
    expect(res.statusCode).toEqual(200)
    expect(res.body.valid).toBe(true)
  })

  it('should reject invalid PAN format', async () => {
    const res = await request(app)
      .post('/api/validate-pan')
      .send({ pan: 'ABCD1234' })
    
    expect(res.statusCode).toEqual(400)
    expect(res.body.valid).toBe(false)
  })
})