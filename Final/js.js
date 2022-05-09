
  var dieFace = {
    4:'<svg width="50" height="50"xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="gradient" x1="50%" y1="-2.48949813e-15%" x2="50%" y2="100%" ><stop stop-color="#E89A09" offset="0%"/><stop stop-color="#8B3EC4" offset="80%"/></linearGradient></defs><polygon points="0,3 25,46 50,3" style="stroke: white; fill:url(#gradient)" /><text fill="white" x="20" y="26" font-family="Tarot" font-size="18">REPLACE</text></svg>',
    6:'<svg width="50" height="50"xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="gradient" x1="50%" y1="-2.48949813e-15%" x2="50%" y2="100%" ><stop stop-color="#E89A09" offset="0%"/><stop stop-color="#8B3EC4" offset="80%"/></linearGradient></defs><polygon points="3,3 3,47 47,47 47,3" style="stroke: white; fill: url(#gradient)" /><text fill="white" x="20" y="30" font-family="Tarot" font-size="18">REPLACE</text></svg>',
    8:'<svg width="60" height="50"xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="gradient" x1="50%" y1="-2.48949813e-15%" x2="50%" y2="100%" ><stop stop-color="#E89A09" offset="0%"/><stop stop-color="#8B3EC4" offset="80%"/></linearGradient></defs><polygon points="25,0 60,25 25,50 25,0 0,25 25,50" style="stroke: white; fill:url(#gradient)" /><text fill="white" x="25" y="30" font-family="Verdana" font-size="18">REPLACE</text></svg>',
    10:'<svg width="50" height="50"xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="gradient" x1="50%" y1="-2.48949813e-15%" x2="50%" y2="100%" ><stop stop-color="#E89A09" offset="0%"/><stop stop-color="#8B3EC4" offset="80%"/></linearGradient></defs><polygon points="43,50 0,25 43,0 50,25" style="stroke: white; fill:url(#gradient)" /><text fill="white" x="25" y="30" font-family="Tarot" font-size="18">REPLACE</text></svg>',
 100:'<svg width="50" height="50"xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="gradient" x1="50%" y1="-2.48949813e-15%" x2="50%" y2="100%" ><stop stop-color="#E89A09" offset="0%"/><stop stop-color="#8B3EC4" offset="80%"/></linearGradient></defs><polygon points="43,50 0,25 43,0 50,25" style="stroke: white; fill:url(#gradient)" /><text fill="white" x="20" y="30" font-family="Tarot" font-size="18">REPLACE</text></svg>',
    12:'<svg width="50" height="50"xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="gradient" x1="50%" y1="-2.48949813e-15%" x2="50%" y2="100%" ><stop stop-color="#E89A09" offset="0%"/><stop stop-color="#8B3EC4" offset="80%"/></linearGradient></defs><polygon points="25,0 1,17 10,45 40,45 49,17" style="stroke: white; fill:url(#gradient)" /><text fill="white" x="16" y="30" font-family="Tarot" font-size="18">REPLACE</text></svg>',
    20:'<svg width="50" height="50"xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="gradient" x1="50%" y1="-2.48949813e-15%" x2="50%" y2="100%" ><stop stop-color="#E89A09" offset="0%"/><stop stop-color="#8B3EC4" offset="80%"/></linearGradient></defs><polygon points="46.5,37.5 25,50 3,37.5 3,12.5 24.5,0 46.5,12.5" style="stroke: white; fill:url(#gradient)" /><text fill="white" x="15" y="32" font-family="Tarot" font-size="18">REPLACE</text></svg>',

  };

  function rollem(){
  	total = 0;
    n = document.getElementById('num').value;
    d = document.getElementById('die').value;
   m = document.getElementById('mod').value;
  	o = document.getElementById('output');
	p = o.innerHTML;
	
	if (d in dieFace){ 
	  face = dieFace[d];
    } 
	
    if (p != ''){
        p = p.concat("<hr>")
    } 
    for (i = 0; i < n; i++){
		r = Math.ceil(Math.random() * d);
		total += r;
        p = p.concat("<span> " + face.replace('REPLACE', r.toString()) + " </span>");
    }
    p += " Total:" + total;
    o.innerHTML = p;
  }


  function loady(){
  	  for(f in dieFace){
  		  e = document.getElementById(f);
		  if (e) e.innerHTML = dieFace[f].replace("REPLACE", f);
	  }
  }

  function dieClick(whatzis){
    n = document.getElementById('num');
    d = document.getElementById('die');
		if (whatzis.id == d.value){
			n.value = Number(n.value) + 1;
		} else {
			n.value = 1;
			d.value = whatzis.id
		}
  }