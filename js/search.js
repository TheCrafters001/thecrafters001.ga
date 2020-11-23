

// ---------- script properties ----------

var include_num = 1;
var bold = 1;

// ---------- sites ----------


var s = new Array();

s[0] = "Software^/software.html^Software I have made^software, easyhtml, flash, player, forest-oe, oe, game, updater, minecraft, appdata, remover, showdown, essentials, converter";
s[1] = "Games^/games.html^Games I have made^games, keep, control, pokémon, delta, green, robo, invaders";
s[2] = "Blog^/blog.html^Check out the progress I am making on my games, software, or just come and look at stuff I randomly post^blog, posts";
s[3] = "Contact Me^/contact.html^Contact Me^contact, email";
s[4] = "Art^/art.html^Art page^art";
s[5] = "Changelogs^/changelogs.html^View changelogs for all my software and games^changes, changelog, games, software";
// Games
s[6] = "Keep Control^/games/keep-control-20^Can he keep control of you^games, keep, control";
s[7] = "Keep Control - Remastered^/games/keep-control-remastered-22^Can he keep control of you???^games, keep, control, remastered";
s[8] = "Platformer^/games/platformer-115?^Just a stupidly simple platformer^games, platformer, platform, 2d, unreal"
s[9] = "Robo Invaders^/games/robo-invaders-19?^Stop the robots!^Unreal, 2d, games, shooter"
// Software


// ---------- end of script properties and sites ----------


var cookies = document.cookie;
var p = cookies.indexOf("q=");

if (p != -1) {
	var st = p + 2;
	var en = cookies.indexOf(";", st);
	if (en == -1) {
		en = cookies.length;
	}
	var d = cookies.substring(st, en);
	d = unescape(d);
}
var od = d;
var m = 0;
if (d.charAt(0) == '"' && d.charAt(d.length - 1) == '"') {
	m = 1;
}

var r = new Array();
var co = 0;

if (m == 0) {
	var woin = new Array();
	var w = d.split(" ");
	for (var a = 0; a < w.length; a++) {
		woin[a] = 0;
		if (w[a].charAt(0) == '-') {
			woin[a] = 1;
		}
	}
	for (var a = 0; a < w.length; a++) {
		w[a] = w[a].replace(/^\-|^\+/gi, "");
	}
	a = 0;
	for (var c = 0; c < s.length; c++) {
		pa = 0;
		nh = 0;
		for (var i = 0; i < woin.length; i++) {
			if (woin[i] == 0) {
				nh++;
				var pat = new RegExp(w[i], "i");
				var rn = s[c].search(pat);
				if (rn >= 0) {
					pa++;
				} else {
					pa = 0;
				}
			}
			if (woin[i] == 1) {
				var pat = new RegExp(w[i], "i");
				var rn = s[c].search(pat);
				if (rn >= 0) {
					pa = 0;
				}
			}
		}
		if (pa == nh) {
			r[a] = s[c];
			a++;
		}
	}
	co = a;
}

if (m == 1) {
	d = d.replace(/"/gi, "");
	var a = 0;
	var pat = new RegExp(d, "i");
	for (var c = 0; c < s.length; c++) {
		var rn = s[c].search(pat);
		if (rn >= 0) {
			r[a] = s[c];
			a++;
		}
	}
	co = a;

}


function return_query() {
	document.jse_Form.d.value = od;
}

function num_jse() {
	document.write(co);
}

function out_jse() {
	if (co == 0) {
		document.write('Your search did not match any documents.<p>Make sure all keywords are spelt correctly.<br>Try different or more general keywords.');
		return;
	}
	for (var a = 0; a < r.length; a++) {
		var os = r[a].split("^");
		if (bold == 1 && m == 1) {
			var br = "<b>" + d + "</b>";
			os[2] = os[2].replace(pat, br);
		}
		if (include_num == 1) {
			document.write(a + 1, '. <a href="', os[1], '">', os[0], '</a><br>', os[2], '<p>');
		} else {
			document.write('<a href="', os[1], '">', os[0], '</a><br>', os[2], '<p>');
		}
	}

}
