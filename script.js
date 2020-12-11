
var mapbox = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 30,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var map = new L.Map('map', {
    layers: [mapbox],
    center: [-29.987647, -71.340822],
    zoom: 14,
    zoomControl: true
});












var style1 = {
                    'color': "green",
                    'weight': 0,
					'dashArray': 3,
                    'opacity': 5,
					'fillOpacity': 0.3
                };
				
var style2 = {
                    'color': "blue",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };	

				
var style3 = {
                    'color': "yellow",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };	

var style4 = {
                    'color': "purple",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };

var style5 = {
                    'color': "black",
                    'weight': 0,
                    'opacity': 8,
					'fillOpacity': 0.8
                };

var style6 = {
                    'color': "orange",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };

var style7 = {
                    'color': "brown",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };

var style8 = {
                    'color': "olive",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };								

var style9 = {
                    'color': "aqua",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };	

var style10 = {
                    'color': "gray",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };

var style11 = {
                    'color': "deeppink",
                    'weight': 0,
                    'opacity': 5,
					'fillOpacity': 0.3
                };						

			  
	/*		  
	var nod_ovalle = L.geoJSON(nod_ovalle, {
	style: style1,
    onEachFeature: function (feature, layer) {
    layer.bindPopup('</h2><p>EQUIPO 1</p>'+'</h2><p>JOSE GAFARDO LISSETTE</p><p>'+feature.properties.Name+'</p>');
    }
    }).addTo(map);			  
			  
			  */
			  
			  


	  
	var  trab3 = L.geoJSON( trab3, {
    
	onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Nodo+'</p>');
    },
	
	
	  style: function(feature) {
           d = feature.properties.Nodo;
           return d == 1 ? {color: '#00FF7F', opacity:0.7} :
                  d == 2  ? {color: '#BD0026', opacity:0.7} :
                  d == 3  ? {color: '#E31A1C', opacity:0.7} :    
			    	d == 4  ? {color: '#1C97E7', opacity:0.7} :  
					d == 5  ? {color: '#7E1CB0', opacity:0.7} :
					d == 6  ? {color: '#059687 ', opacity:0.7} :
	                d == 7  ? {color: '#034A0F ', opacity:0.7} :
					d == 8  ? {color: '#A8680C  ', opacity:0.7} : 
					 
					  {color: '#FFEDA0', opacity:0.7};
         }
		 }).addTo(map);  
			  
			  
/*		 

	var nodo12 = L.geoJSON(nodo12, {
	style: style1,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.name+'</p>');
  }
  }).addTo(map);  */

/*
	var b_ = L.geoJSON(b_, {
	style: style2,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);


			  
	var c_ = L.geoJSON(c_, {
	style: style3,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);
	
	var d_ = L.geoJSON(d_, {
	style: style4,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);		  

	var e_ = L.geoJSON(e_, {
	style: style6,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);
  
  
	var d_ = L.geoJSON(d_, {
	style: style7,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);


	var e_ = L.geoJSON(e_, {
	style: style8,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);

	var f_ = L.geoJSON(f_, {
	style: style9,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);


	var g_ = L.geoJSON(g_, {
	style: style10,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);


  	var h_ = L.geoJSON(h_, {
	style: style11,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);
  
  
  
	var i_ = L.geoJSON(i_, {
	style: style1,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map); 
			  
	var j_ = L.geoJSON(j_, {
	style: style2,
    onEachFeature: function (feature, layer) {
    layer.bindPopup(feature.properties.Name+'</p>');
  }
  }).addTo(map);			  

	




*/









			  
/*			  
			  
var imageUrl = 'nod177b.png',
    imageBounds = [[-29.978475, -71.338548], [-29.985505, -71.332666]],
	opacity=;
L.imageOverlay(imageUrl, imageBounds,opacity).addTo(map);  
 
 
 
 
*/






/*var	bounds = new L.LatLngBounds(
			new L.LatLng(-30.579153, -71.203989),
			new L.LatLng(-30.593552, -71.169173));

		map.fitBounds(bounds);

		var overlay = new L.ImageOverlay("nods_png.png", bounds, {
			opacity: 0.5,
			
			
		})//.addTo(map);


    var baseMaps = {
    "mapa base": mapbox,
   };

   var overlayMaps = {
	 
	"Nodo 9": a_,
	"Nodo 10": b_,  
    "Nodo 11": c_,
	"Nodo 12": d_,
    "Nodo 13": e_,
	"Nodo 14": f_,
    "Nodo 15": g_,
	"Nodo 16": h_,
    "Nodo 17": i_,
	"Nodo 18": j_,
    
	"Direcciones": overlay
   };

   var raster = {
	   
	 "Imagen nodos" : overlay
	   
   };
*/


/*
var layerControl = new L.Control.Layers(null, {
    'Group 1': layerGroup1
    
}).addTo(map);
*/
L.control.layers(baseMaps, overlayMaps).addTo(map);










// add location control to global name space for testing only
// on a production site, omit the "lc = "!
lc=  L.control.locate({
    strings: {
        title: "Show me where I am, yo!"
    }
}).addTo(map);