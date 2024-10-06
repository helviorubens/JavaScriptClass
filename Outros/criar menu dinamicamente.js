function createMenu(name) {
  // Inicializa a estrutura base do menu
  const menu = {
    name: name || "Menu Principal",
    subMenus: []
  };

  // Adiciona um submenu
  function addSubMenu(subMenuName, func = null) {
    const subMenu = {
      name: subMenuName,
      subMenus: [],
      func: func
    };
    menu.subMenus.push(subMenu);
    return subMenu;
  }

  // Adiciona um subsubmenu a um submenu já existente
  function addSubSubMenu(parentSubMenuName, subSubMenuName, func = null) {
    const parentSubMenu = menu.subMenus.find(subMenu => subMenu.name === parentSubMenuName);
    if (parentSubMenu) {
      const subSubMenu = { name: subSubMenuName, func: func };
      parentSubMenu.subMenus.push(subSubMenu);
    }
  }

  // Retorna o menu completo
  function getMenu() {
    return menu;
  }

  // Public Interface
  return {
    addSubMenu,
    addSubSubMenu,
    getMenu
  };
}

// Exemplo de uso:
const mainMenu = createMenu("🎛️ Configurações");

// Adiciona submenus ao menu principal
mainMenu.addSubMenu("💾 Parâmetros Globais");
mainMenu.addSubMenu("🛠️ Suporte");

// Adiciona sub-submenus dentro de "Parâmetros Globais"
mainMenu.addSubSubMenu("💾 Parâmetros Globais", "👁️‍🗨️ Exibir parâmetros atuais", "storage_001");
mainMenu.addSubSubMenu("💾 Parâmetros Globais", "⏫ Atualizar parâmetros da planilha", "storage_002");
mainMenu.addSubSubMenu("💾 Parâmetros Globais", "🔄 Restaurar valores padrão", "storage_003");
mainMenu.addSubSubMenu("💾 Parâmetros Globais", "🗑️ Apagar todos os parâmetros", "storage_004");

// Adiciona sub-submenus dentro de "Suporte"
mainMenu.addSubSubMenu("🛠️ Suporte", "📁 Nomes dos colaboradores", "support_001");
mainMenu.addSubSubMenu("🛠️ Suporte", "⏱ Trigger [onFormSubmit]", "support_002");
mainMenu.addSubSubMenu("🛠️ Suporte", "➡️ Atualizar horas no Vault", "support_003");

// Obtém o menu completo
const configMenu = mainMenu.getMenu();

console.trace(configMenu);
