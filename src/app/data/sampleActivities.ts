export default [
  {
    attachments: [
      {
        content: {
          buttons: [
            {
              title: 'Select',
              type: 'imBack',
              value: 'I like Amber.'
            }
          ],
          images: [
            {
              alt: 'Cat sneaking in playground.',
              url: 'https://spyip.github.io/react-film/image/01.jpg'
            }
          ],
          text: 'Amber is a warm and golden name, perfect for a cat with a sunny personality. She might be playful, affectionate, and always ready for cuddles.'
          // Comment out to workaround is a Windows Narrator bug.
          // title: 'Amber'
        },
        contentType: 'application/vnd.microsoft.card.hero'
      },
      {
        content: {
          buttons: [
            {
              title: 'Select',
              type: 'imBack',
              value: 'I like Belle.'
            }
          ],
          images: [
            {
              alt: 'Cat sitting on greens.',
              url: 'https://spyip.github.io/react-film/image/02.jpg'
            }
          ],
          text: 'Bella exudes elegance and grace. This name suits a sophisticated feline who enjoys lounging in sunspots, grooming her luxurious fur, and captivating everyone with her mesmerizing eyes.'
          // Comment out to workaround is a Windows Narrator bug.
          // title: 'Belle'
        },
        contentType: 'application/vnd.microsoft.card.hero'
      },
      {
        content: {
          buttons: [
            {
              title: 'Select',
              type: 'imBack',
              value: 'I like Charlie.'
            }
          ],
          images: [
            { alt: 'Cat laying on greens looks playful.', url: 'https://spyip.github.io/react-film/image/03.jpg' }
          ],
          text: 'Charlie is a friendly and versatile name. It fits both male and female cats equally well. A Charlie might be curious, adventurous, and love exploring nooks and crannies around the house.'
          // Comment out to workaround is a Windows Narrator bug.
          // title: 'Charlie'
        },
        contentType: 'application/vnd.microsoft.card.hero'
      }
    ],
    attachmentLayout: 'carousel',
    from: { role: 'bot' },
    text: 'This is a series of hero card.',
    type: 'message'
  }
];
