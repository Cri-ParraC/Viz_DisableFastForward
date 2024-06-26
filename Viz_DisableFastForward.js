//=============================================================================
// Viz_DisableFastForward.js [MZ] (v1.0.1)
//=============================================================================

/*:
 * @target MZ
 * @plugindesc [MZ] (v1.0.1) Desactiva el "empujar" eventos manteniendo Z.
 * @author Vizcacha
 * @version 1.0.1
 * @url https://github.com/Cri-ParraC/Viz_DisableFastForward
 * @help Viz_DisableFastForward.js [MZ] (v1.0.1)
 * ----------------------------------------------------------------------------
 * Plugin sencillo para RPG Maker MZ que deshabilita un comportamiento por
 * defecto del juego.
 * 
 * Normalmente, caminar hacia un evento mientras se mantiene el botón de
 * acción (Z), hace que el juego se acelere. Este plugin desactiva eso.
 */

(() => {
  "use strict";
  console.info("Viz_DisableFastForward.js [MZ] (v1.0.1) activado");

  //-----------------------------------------------------------------------------
  // Scene_Map
  //-----------------------------------------------------------------------------

  // Scene_Map.isFastForward

  Scene_Map.prototype.isFastForward = function () {
    return false;
  };

})();