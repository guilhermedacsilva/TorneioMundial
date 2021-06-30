//=============================================================================
// RPG Maker MZ - Guinobody
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Alternative menu screen layout.
 * @author Yoji Ojima
 *
 * @help AltMenuScreen.js
 *
 * This plugin changes the layout of the menu screen.
 * It puts the commands on the top and the status on the bottom.
 *
 * It does not provide plugin commands.
 */

/*
Game_Unit
    Game_Party : tem ouro e itens
    Game_Troop


*/

(() => {
    Scene_MenuBase.prototype.commandWindowHeight = function() {
        return this.calcWindowHeight(2, true);
    };

})();
