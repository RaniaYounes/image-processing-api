import express from 'express'
import path from 'path'

import fs from 'fs'
import imageResize from '../../utility/resized'

const imageResizedRout = express.Router()

imageResizedRout.get('/', async (req: express.Request, res: express.Response): Promise<void> => {
  const imageName = req.query.imageName
  const width = Number(req.query.width)
  const hight = Number(req.query.hight)
  const img = path.join(__dirname, `../../../images/${imageName}.jpeg`)
  const resize = path.join(__dirname, `../../../images/resized/${imageName}-${width}-${hight}.jpeg`)

  if (req.query.imageName === undefined || !fs.existsSync(img)) {
   
    res.status(400).send('this is invalid image')
    
  } else if (width <= 0 || hight <= 0 || Number.isNaN(width) || Number.isNaN(hight)) {
    console.log(' validation')
    res.status(400).send('this is inavalid Dimention ')
  } else if (fs.existsSync(resize)) {
   
    res.status(200).sendFile(resize)
  } else {
    const resort = await imageResize(img, width, hight, resize)
    if (resort === 'done') {
  
      res.status(200).sendFile(resize)
    }
  }
})
export default imageResizedRout
