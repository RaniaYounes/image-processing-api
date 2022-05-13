import supertest from 'supertest'
import app from '../routes/index'
import imageResize from '../utility/resized';
import path from 'path';

// create a request object
const request = supertest(app)

describe('Test endpoint response', () => {
  it('test hello world endpoint', async () => {
    const response = await request.get('/')
    expect(response.status).toBe(200)
  })
})


it('Invalid Output Path throws error', async () => {
  const resize = path.join(__dirname, `./../../images/imageR/thump-200-200.jpeg`)
  const img = path.join(__dirname, `./../../images/thump.jpeg`)
  const result = await imageResize (img, 0, 0 ,resize)
  expect(result).toBe('image faild');

})

    