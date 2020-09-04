import image from './assets/image.png'
import { TitleBlock, TextBlock, TextColumnsBlock, ImageBlock } from './classes/blocks'
import { css } from './utils'

const text = `
  Крутые видеоКрутые видеоКрутые видеоКрутые видеоКрутые видеоКрутые видео
`

export const model = [
  new TitleBlock('Test title', {
    tag: 'h2',
    styles: css({
      background: 'linear-gradient(to left, #f2994a, #f2c94c)',
      color: '#fff',
      padding: '1.5rem',
      'text-align': 'center'
    })
  }),
  new ImageBlock(image, {
    styles: 'padding: 2rem 0; display: flex; justify-content: center;',
    alt: 'my image',
    imageStyles: 'width: 500px; height: auto'
  }), 
  new TextColumnsBlock([
    'Приложение на чистом JavaScript, без использоваия библиотек',
    'Узнаешь как работают принципы SOLID и ООП в Javascript за один курс',
    'JavaScript - это просто, интерессно. Научись создавать любые UI своими руками'
  ], {
    styles: 'padding: 2rem 0; color: #fff; background: linear-gradient(to bottom, #8e2de2, #4a00e0); font-weight: bold;'
  }),
  new TextBlock(text, {
    styles: 'background: linear-gradient(to left, #f2994a, #f2c94c); font-weight: bold; padding: 1rem;'
  })
]