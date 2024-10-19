// function criarNodo(valor, filhos = []) {
//   return {
//     valor,
//     filhos,
//     adicionarFilho(novoFilho) {
//       filhos.push(novoFilho);
//     }
//   };
// }

// // Criando uma árvore
// const raiz = criarNodo('raiz');
// const filho1 = criarNodo('filho1');
// const filho2 = criarNodo('filho2');
// raiz.adicionarFilho(filho1);
// raiz.adicionarFilho(filho2);
// filho1.adicionarFilho(criarNodo('neto'));

// console.log(raiz)


// function criarNo(valor, proximo = null) {
//   return {
//     valor,
//     proximo
//   };
// }

// // Criando uma lista encadeada
// const primeiroNo = criarNo(1);
// primeiroNo.proximo = criarNo(2);
// primeiroNo.proximo.proximo = criarNo(3);

// console.log(primeiroNo)


// function createUserMenuV2(menuName) {
//   let mainMenu = []; // Array para armazenar os containers

//   return {
//     createContainer(name, subMenus = []) {
//       // Cria o objeto com as propriedades "name" e "subMenus"
//       const container = {
//         name,
//         subMenus,
//         addSubMenus(newSubMenu) {
//           subMenus.push(newSubMenu);
//         }
//       };

//       // Adiciona o container ao mainMenu, mantendo apenas "name" e "subMenus"
//       mainMenu.push({ name, subMenus });

//       return container;
//     },

//     // Método para obter o menu principal (mainMenu)
//     getMainMenu() {
//       return mainMenu;
//     }
//   };
// }

// // Exemplo de uso:
// const userMenu = createUserMenuV2("User Menu");

// // Criando containers
// const container1 = userMenu.createContainer("Settings");
// const container2 = userMenu.createContainer("Profile");

// // Adicionando submenus a um container
// container1.addSubMenus({ name: "Change Password" });
// container2.addSubMenus({ name: "Update Email" });

// // Obtendo o mainMenu
// console.log(userMenu.getMainMenu());


function createMenuItem(name, func = null) {
  return func ? { name, func } : { name, subMenus: [] };
}

function addSubMenu(menu, subMenu) {
  if (!menu.subMenus) {
    throw new Error(`${menu.name} is not a menu with submenus.`);
  }
  menu.subMenus.push(subMenu);
}

function createSprintMenu() {
  const sprintMenu = createMenuItem("🎯 Sprint");
  addSubMenu(sprintMenu, createMenuItem("🚩 Iniciar", "sprint_001"));
  addSubMenu(sprintMenu, createMenuItem("🏁 Finalizar", "sprint_002"));

  console.log('sprintMenu', sprintMenu)
  return sprintMenu;
}

function createConfigMenu() {
  const configMenu = createMenuItem("🎛️ Configurações");

  const parametrosGlobais = createMenuItem("💾 Parâmetros Globais");
  addSubMenu(parametrosGlobais, createMenuItem("👁️‍🗨️ Exibir parâmetros atuais", "storage_001"));
  addSubMenu(parametrosGlobais, createMenuItem("⏫ Atualizar parâmetros da planilha", "storage_002"));
  addSubMenu(parametrosGlobais, createMenuItem("🔄 Restaurar valores padrão", "storage_003"));
  addSubMenu(parametrosGlobais, createMenuItem("🗑️ Apagar todos os parâmetros", "storage_004"));

  console.log('parametrosGlobais', parametrosGlobais)
  addSubMenu(configMenu, parametrosGlobais);

  const suporteMenu = createMenuItem("🛠️ Suporte");
  addSubMenu(suporteMenu, createMenuItem("📁 Nomes dos colaboradores", "support_001"));
  addSubMenu(suporteMenu, createMenuItem("⏱ Trigger [onFormSubmit]", "support_002"));
  addSubMenu(suporteMenu, createMenuItem("➡️ Atualizar horas no Vault", "support_003"));
  addSubMenu(suporteMenu, createMenuItem("⛔ [onTest]", "onTest"));

  console.log('suporteMenu', suporteMenu)
  addSubMenu(configMenu, suporteMenu);

  console.log('configMenu', configMenu)
  return configMenu;
}

function buildMainMenu() {
  const mainMenu = [];
  mainMenu.push(createSprintMenu());
  mainMenu.push(createConfigMenu());
  return mainMenu;
}

const mainMenu = buildMainMenu();
console.log(mainMenu);