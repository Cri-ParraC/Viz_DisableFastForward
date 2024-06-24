//=============================================================================
// Viz_DisableFastForward.js [MZ] (v1.0.0)
//=============================================================================

/*:
 * @target MZ
 * @plugindesc [MZ] (v1.0.0) Desactiva el "empujar" eventos manteniendo Z.
 * @author Vizcacha
 * @version 1.0.0
 * @url https://github.com/Cri-ParraC/Viz_DisableFastForward
 * @help Viz_DisableFastForward.js [MZ] (v1.0.0)
 * ----------------------------------------------------------------------------
 * Plugin sencillo para RPG Maker MZ que deshabilita un comportamiento por
 * defecto del juego.
 * 
 * Normalmente, caminar hacia un evento mientras se mantiene el botón de
 * acción (Z), hace que el juego se acelere. Este plugin desactiva eso.
 */

(() => {
  "use strict";
  console.info("Viz_DisableFastForward.js [MZ] (v1.0.0) activado");

  Scene_Map.prototype.isFastForward = function () {
    return false;
  };

})();