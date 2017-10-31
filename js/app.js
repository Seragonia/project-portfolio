"use strict";

const DEBUG = true;
//Debugging function
var __debug = function(msg) { if(DEBUG){console.log("%c[DEBUG]%c :"+" %c "+msg+" ", "color:#CAE1E8;background:#526970;", "background:transparent;", "color:#fff;background:#2F3C40;");} }


var APP_CANVAS = {
	canvas: null,
	ctx: null,
	background: null,
	canvas_width: 0,
	canvas_height: 0,

  init: function() {
		APP_PAGE.init();
    __debug("Creating the canvas");
    this.canvas = document.getElementById('header-canvas');
		if(this.canvas)
		{
			this.ctx = this.canvas.getContext('2d');
			this.canvas_width = parseInt(document.getElementById("header-canvas").getAttribute("height"));
			this.canvas_height = parseInt(document.getElementById("header-canvas").getAttribute("width"));
			this.draw();
		}else {
			__debug("Error while creating the canvas.");
		}
  },

  draw: function() {
		/*this.background = this.ctx.createLinearGradient(this.canvas_width,0,this.canvas_width,this.canvas_height);
		this.background.addColorStop(0.000, 'rgba(220, 220, 220, 1.000)');
    this.background.addColorStop(1.000, 'rgba(237, 237, 237, 1.000)');
		this.ctx.fillStyle = this.background;
		this.ctx.fillRect(0,0,2*this.canvas_width,this.canvas_height);*/
  }
};

var APP_PAGE = {
	navbar: null,
	sticky: null,
	color: ["594F4F", "547980", "45ADA8", "9DE0AD"],
	choosenColor: 0,
	main: null,
	mobile: null,

	init: function() {
		__debug("Random content color bar");
		this.choosenColor = Math.floor(Math.random() * this.color.length);
		document.getElementById("main").style.borderColor = '#' + this.color[this.choosenColor];

		this.navbar = document.getElementById("container-head");
		this.main = document.getElementById("main");
		this.mobile = document.getElementById("nav-icon");
		this.sticky = 250;

		$(document).ready(function(){

			$(function () {
			  $('[data-toggle="tooltip"]').tooltip()
			})

			$('#nav-icon').click(function(){
				$(this).toggleClass('open');
				$('.menu').toggleClass('menu-active');
				$('.main').toggleClass('menu-active');
				//$('#nav-icon').toggleClass('menu-active');
				$('#container').toggleClass('menu-active');
				$(".sub-drop-icon").on("click", function(e) {
					$(this).parent().find(".sub-menu").toggleClass("opened");
				});
			});



			$('#read-mode').on('click', function (e) {
				var featured
				var close = "<div id=\"close-icon\" class=\"sticky-mobile open\">\
				                <span></span\
				                <span></span>\
				                <span></span>\
				                <span></span>\
				              </div>";
				$('#model-lecture-mode').html($('#content-article').html());
				$('#model-lecture-mode').toggleClass('hidden');
				$('#top').toggleClass('hidden');
				$('#model-lecture-mode').prepend(close);
				$('#close-icon').click(function(){
					$('#model-lecture-mode').toggleClass('hidden');
					$('#top').toggleClass('hidden');
				});
			})
		});
	},

	scroll: function() {
		if(!(this.navbar && this.main)) return;
		if (window.pageYOffset >= this.sticky) {
			this.navbar.classList.add("sticky");
			this.main.classList.add("sticky-marge");
		} else {
			this.navbar.classList.remove("sticky");
			this.main.classList.remove("sticky-marge");
		}
	},

	filter: function() {
			$(".filter-button").click(function(){
				var value = $(this).attr('data-filter');
				if(value == "all")
				{
					$('.post').show('1000');
				}
				else
				{
					$(".post").not('.'+value).hide('1000');
					$('.post').filter('.'+value).show('1000');
				}
			});
			if ($(".filter-button").removeClass("active")) {
				$(this).removeClass("active");
			}
			$(this).addClass("active");
	}
}
