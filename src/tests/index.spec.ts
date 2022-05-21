import supertest from 'supertest'
import app from './../index'
import imageResizedRout from '../routes/imageResize/imageResized'
import path from 'path'
import imageResize from '../utility/resized'

// create a request object
const request = supertest(app)

describe('Test if imageResizedRout exist ', () => {
  it('expect imageResizedRout', async () => {
    expect(imageResizedRout).toBeDefined()
  })
})

describe('Test endpoint response', () => {
  it('test hello world endpoint', async () => {
    const response = await request.get('/')
    expect(response.status).toBe(200)
  })
})
it('Invalid Output Path throws error', async () => {
  const resize = path.join(__dirname, `../../images/resizd/santamonica-200-400.jpeg`)
  const img = path.join(__dirname, `../../images/santamonica.jpeg`)
  const result = await imageResize(img, 0, 0, resize)
  expect(result).toBe('image faild')
})
