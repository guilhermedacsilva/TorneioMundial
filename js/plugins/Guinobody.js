//=============================================================================
// RPG Maker MZ - Guinobody
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Coisas minhas.
 * @author GuiNobody
 *
 * @help lalala
 */

/*
BattleManager
    .processTurn
    .startAction
    .applyGlobal


Game_Item : itens e skills
Game_Action : ação na batalha
    .apply


Game_BattlerBase : funções gerais
    .isStateAffected
    Game_Battler : sprites e ações
        .addState
        .gainHp : é chamado sempre que há alteração
        .regenerateHp : início da ação
        Game_Actor
        Game_Enemy


Game_Unit
    Game_Party : tem ouro e itens
    Game_Troop

*/

(() => {

    Game_BattlerBase.MY_TRAIT_HP_REGEN = [32,38,43];
    Game_BattlerBase.MY_TRAIT_HP_REGEN_VALUES = {};

    Game_Battler.prototype.regenerateHp = function() {
        if (!this.hasOwnProperty('_iniciar_MY_TRAIT_HP_REGEN_VALUES')) {
            Game_BattlerBase.MY_TRAIT_HP_REGEN.forEach(id => {
                Game_BattlerBase.MY_TRAIT_HP_REGEN_VALUES[id] = parseInt($dataStates[id].note);
            });
            this._iniciar_MY_TRAIT_HP_REGEN_VALUES = true;
        }

        const minRecover = -this.maxSlipDamage();
        let value = 0;

        Game_BattlerBase.MY_TRAIT_HP_REGEN.forEach(id => {
            value += this.isStateAffected(id) ? Game_BattlerBase.MY_TRAIT_HP_REGEN_VALUES[id] : 0;
        });

        value = Math.max(Math.floor(this.mhp * this.hrg + value), minRecover);

        //alert(Object.keys(this));
        //alert(this._name + ' min recover ' + minRecover + ' | mhp ' + this.mhp + ' | hrg ' + this.hrg + ' | value ' + value);
        if (value !== 0) {
            this.gainHp(value);
        }
    };

})();
