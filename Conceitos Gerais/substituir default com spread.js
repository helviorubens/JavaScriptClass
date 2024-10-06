const original = {
  title: 'TITULO',
  message: 'MESSAGE',
  icon: 'ICON'
}

function exibeObjeto(options) {
  const { title, message, icon } = options;

  console.log(title, message, icon);
}

exibeObjeto(original)

const atual = {...original, title:'HELLO'}

exibeObjeto(atual)
exibeObjeto(original)