import express, { Response, Request } from 'express'
import path from 'path'
import sharp from 'sharp'
import fs from 'fs'
import imageResize from '../routes/imageResize/imageResized'
import imageResizedRout from '../routes/imageResize/imageResized'

const routes = express.Router()

routes.use('/image', imageResizedRout)
export default routes
