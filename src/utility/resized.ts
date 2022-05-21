import sharp from 'sharp'

const imageResize = async (
  img: string,
  width: number,
  hight: number,
  imageResize: string
): Promise<string> => {
  try {
    await sharp(img).resize({ width: width, height: hight }).toFile(imageResize)

    return 'done'
  } catch (error) {
    return 'image faild'
  }
}

export default imageResize
