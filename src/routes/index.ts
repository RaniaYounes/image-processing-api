import express from 'express'



import imageResizedRout from '../routes/imageResize/imageResized'

const routes = express.Router()

routes.use('/image', imageResizedRout)
export default routes
