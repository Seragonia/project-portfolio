"use strict";

const DEBUG = true;
//Debugging function
var __debug = function(msg) { if(DEBUG){console.log("%c[DEBUG]%c :"+" %c "+msg+" ", "color:#CAE1E8;background:#526970;", "background:transparent;", "color:#fff;background:#2F3C40;");} }


var APP_CANVAS = {
  canvas: null,
  ctx: null,

  init: function() {
    __debug("Creating the canvas");
    this.canvas = document.getElementById("header-canvas");
    if(this.canvas.getContext) {
      this.ctx = this.canvas.getContext("2d");
      this.ctx.fillStyle = "rgb(200,0,0)";
      this.ctx.fillRect (10, 10, 55, 50);

      this.ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
      this.ctx.fillRect (30, 30, 55, 50);
    }
  },

  draw: function() {

  }
};
