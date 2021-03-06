/* global Y */

// initialize a shared object. This function call returns a promise!
Y({
  db: {
    name: 'memory'
  },
  connector: {
    name: 'websockets-client',
    room: 'Textarea-example2',
    // url: '//localhost:1234',
    url: 'https://yjs-v13.herokuapp.com/'
  },
  share: {
    textarea: 'Text'
  },
  timeout: 5000 // reject if no connection was established within 5 seconds
}).then(function (y) {
  window.yTextarea = y

  // bind the textarea to a shared text element
  y.share.textarea.bind(document.getElementById('textfield'))
})
