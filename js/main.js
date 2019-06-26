var legendOpen = false;

// Baselayer - Ancient World Mapping Centre tiles

var mapboxTiles = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiaXNhd255dSIsImEiOiJBWEh1dUZZIn0.SiiexWxHHESIegSmW8wedQ', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
maxZoom: 10,
id: 'isawnyu.map-knmctlkh',
accessToken: 'pk.eyJ1IjoiaXNhd255dSIsImEiOiJBWEh1dUZZIn0.SiiexWxHHESIegSmW8wedQ'
});

var map = L.map('map', {
	center: [29.5, 52],
	zoom: 7,
	layers: [mapboxTiles],
});

// Change layer function

function removeAllOverlays() {
		var allOverlays = [umayyadApexLayer, umayyadLinesLayer, umayyadHarboursLayer, umayyadBishopricsLayer, umayyadMetropolitanBishopricsLayer, umayyadMintsLayer, mansurHarunLayer, mansurHarunLinesLayer, mansurHarunBishopricsLayer, mansurHarunMintsLayer, alMamunLayer, alMamunLinesLayer, alMamunHarboursLayer, alMamunBishopricsLayer, alMamunMintsLayer, alMutadidLayer, alMutadidLinesLayer, alMutadidHarboursLayer, alMutadidBishopricsLayer, alMutadidMintsLayer];
		for (var i = 0; i < allOverlays.length; i++) {
			map.removeLayer(allOverlays[i]);
		};
};

function removeAllControls() {
	var allControls = [umayyadLinesControl, mansurHarunLinesControl, alMamunLinesControl, alMutadidLinesControl];
	for (var i = 0; i < allControls.length; i++) {
		map.removeControl(allControls[i]);
	};
};

function changeMap(label) {
  switch(label) {
    case "<b>Umayyad Apex <br> (ca. 100/720)</b>":
			removeAllOverlays();
			removeAllControls();

			map.addLayer(umayyadLinesLayer);
      map.addLayer(umayyadApexLayer);
			map.addLayer(umayyadHarboursLayer);
			map.addLayer(umayyadBishopricsLayer);
			map.addLayer(umayyadMetropolitanBishopricsLayer);
			map.addLayer(umayyadMintsLayer);
			map.addControl(umayyadLinesControl);
      break;
    case "<b>Mansur-Harun al-Rashid <br> (ca. 136-193/754-809)</b>":
			removeAllOverlays();
			removeAllControls();

			map.addLayer(mansurHarunLinesLayer);
      map.addLayer(mansurHarunLayer);
			map.addLayer(umayyadHarboursLayer);
			map.addLayer(mansurHarunBishopricsLayer);
			map.addLayer(umayyadMetropolitanBishopricsLayer);
			map.addLayer(mansurHarunMintsLayer);
			map.addControl(mansurHarunLinesControl);
      break;
    case "<b>al-Ma'mun to al-Mu'tasim <br> (ca. 198-227/813-842)</b>":
      removeAllOverlays();
			removeAllControls();

			map.addLayer(alMamunLinesLayer);
      map.addLayer(alMamunLayer);
			map.addLayer(alMamunHarboursLayer);
			map.addLayer(alMamunBishopricsLayer);
			map.addLayer(umayyadMetropolitanBishopricsLayer);
			map.addLayer(alMamunMintsLayer);
			map.addControl(alMamunLinesControl);
      break;
    case "<b>al-Mu'tadid to al-Muqtadir <br> (ca. 279-320/892-932)</b>":
      removeAllOverlays();
			removeAllControls();

			map.addLayer(alMutadidLinesLayer);
      map.addLayer(alMutadidLayer);
			map.addLayer(alMutadidHarboursLayer);
			map.addLayer(alMutadidBishopricsLayer);
			map.addLayer(umayyadMetropolitanBishopricsLayer);
			map.addLayer(alMutadidMintsLayer);
			map.addControl(alMutadidLinesControl);
      break;
    default:
      map.addLayer(umayyadApexLayer);
  }
}

/* Popup content */

function zoomToFeature(e) {
  map.flyTo(e.latlng, 10, {
		duration: 0.5,
	});
};

var popupOptions = {
	className: 'custom',
	closeButton: false
}

function onEachFeature(feature, layer) {
	var popup = L.popup(popupOptions, layer).setContent('<h3>' + feature.properties.standardised_transliterated_name + '</h3>');
	layer.bindPopup(popup);
    layer.on({
        click: zoomToFeature,
    });
		layer.on('mouseover', function(event) {
			layer.openPopup();
		});
		layer.on('mouseout', function(event) {
			layer.closePopup();
		});
    setIconSize();
};

/* Add data */

var backgroundSitesStyle = {
	radius: 1,
	fillColor: "#777",
	color: "#777",
	weight: 4,
	opacity: 1,
}

var backgroundSitesLayer = L.geoJson(sites, {
	pointToLayer: function(feature, latlng) {
      return L.circleMarker (latlng, backgroundSitesStyle)
  }
}).addTo(map);

function setIconSize() {
  for (i = 0; i < umayyadApex.length; i++) {
    if (umayyadApex[i].properties.Importance == "Site") {
        umayyadApex[i].properties.radius = 4;
    } else if (umayyadApex[i].properties.Importance == "District capital") {
        umayyadApex[i].properties.radius = 8;
    } else if (umayyadApex[i].properties.Importance == "Sub-region capital") {
        umayyadApex[i].properties.radius = 12;
    } else if (umayyadApex[i].properties.Importance == "Provincial capital") {
        umayyadApex[i].properties.radius = 16;
    } else {
        umayyadApex[i].properties.radius = 4;
    }
  }
  for (i = 0; i < mansurHarun.length; i++) {
    if (mansurHarun[i].properties.Importance == "Site") {
        mansurHarun[i].properties.radius = 4;
    } else if (mansurHarun[i].properties.Importance == "District capital") {
        mansurHarun[i].properties.radius = 8;
    } else if (mansurHarun[i].properties.Importance == "Sub-region capital") {
        mansurHarun[i].properties.radius = 12;
    } else if (mansurHarun[i].properties.Importance == "Provincial capital") {
        mansurHarun[i].properties.radius = 16;
    } else {
        mansurHarun[i].properties.radius = 4;
    }
  }
  for (i = 0; i < alMamun.length; i++) {
    if (alMamun[i].properties.Importance == "Site") {
        alMamun[i].properties.radius = 4;
    } else if (alMamun[i].properties.Importance == "District capital") {
        alMamun[i].properties.radius = 8;
    } else if (alMamun[i].properties.Importance == "Sub-region capital") {
        alMamun[i].properties.radius = 12;
    } else if (alMamun[i].properties.Importance == "Provincial capital") {
        alMamun[i].properties.radius = 16;
    } else {
        alMamun[i].properties.radius = 4;
    }
  }
  for (i = 0; i < alMutadid.length; i++) {
    if (alMutadid[i].properties.Importance == "Site") {
        alMutadid[i].properties.radius = 4;
    } else if (alMutadid[i].properties.Importance == "District capital") {
        alMutadid[i].properties.radius = 8;
    } else if (alMutadid[i].properties.Importance == "Sub-region capital") {
        alMutadid[i].properties.radius = 12;
    } else if (alMutadid[i].properties.Importance == "Provincial capital") {
        alMutadid[i].properties.radius = 16;
    } else {
        alMutadid[i].properties.radius = 4;
    }
  }
};


var umayyadLinesLayer = L.geoJson(umayyadApexLines, {
  style: function (feature) {
		return {
			weight: feature.properties.radius,
			color: "black",
			opacity: 0.5,
		};
	}
});


var umayyadApexLayer = L.geoJson(umayyadApex, {
  onEachFeature: onEachFeature,
  pointToLayer: function(feature, latlng) {
      return L.shapeMarker (
          latlng,
          {
              radius: feature.properties.radius,
              color: "#fff",
              shape: "square",
              weight: 1,
              opacity: 1,
              fillColor: feature.properties.color,
              fillOpacity: 0.5
          }
      )
  }
});

var alMamunLinesLayer = L.geoJson(alMamunLines, {
  style: function (feature) {
		return {
			weight: feature.properties.radius,
			color: "black",
			opacity: 0.5,
		};
	}
});

var alMamunLayer = L.geoJson(alMamun, {
  onEachFeature: onEachFeature,
  pointToLayer: function(feature, latlng) {
      return L.shapeMarker (
          latlng,
          {
              radius: feature.properties.radius,
              color: "#fff",
              shape: "square",
              weight: 1,
              opacity: 1,
              fillColor: feature.properties.color,
              fillOpacity: 0.5
          }
      )
  }
});

var alMutadidLinesLayer = L.geoJson(alMutadidLines, {
  style: function (feature) {
		return {
			weight: feature.properties.radius,
			color: "black",
			opacity: 0.5,
		};
	}
});

var alMutadidLayer = L.geoJson(alMutadid, {
  onEachFeature: onEachFeature,
  pointToLayer: function(feature, latlng) {
      return L.shapeMarker (
          latlng,
          {
              radius: feature.properties.radius,
              color: "#fff",
              shape: "square",
              weight: 1,
              opacity: 1,
              fillColor: feature.properties.color,
              fillOpacity: 0.5
          }
      )
  }
});

var mansurHarunLinesLayer = L.geoJson(mansurHarunLines, {
  style: function (feature) {
		return {
			weight: feature.properties.radius,
			color: "black",
			opacity: 0.5,
		};
	}
});

var mansurHarunLayer = L.geoJson(mansurHarun, {
  onEachFeature: onEachFeature,
  pointToLayer: function(feature, latlng) {
      return L.shapeMarker (
          latlng,
          {
              radius: feature.properties.radius,
              color: "#fff",
              shape: "square",
              weight: 1,
              opacity: 1,
              fillColor: feature.properties.color,
              fillOpacity: 0.5
          }
      )
  }
});

// Harbours

var harbourIcon = L.icon({
	iconUrl: './img/harbour.svg',
	iconSize: [20, 20],
	iconAnchor: [10, 0]
})

var umayyadHarboursLayer = L.geoJson(umayyadHarbours, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: harbourIcon }
      )
  }
});

var alMamunHarboursLayer = L.geoJson(alMamunHarbours, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: harbourIcon }
      )
  }
});

var alMutadidHarboursLayer = L.geoJson(alMutadidHarbours, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: harbourIcon }
      )
  }
});

// Bishoprics

var bishopricIcon = L.icon({
	iconUrl: './img/e_bish.svg',
	iconSize: [30, 30],
	iconAnchor: [2, 28]
});

var umayyadBishopricsLayer = L.geoJson(umayyadBishoprics, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: bishopricIcon }
      )
  }
});

var mansurHarunBishopricsLayer = L.geoJson(mansurHarunBishoprics, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: bishopricIcon }
      )
  }
});

var alMamunBishopricsLayer = L.geoJson(alMamunBishoprics, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: bishopricIcon }
      )
  }
});

var alMutadidBishopricsLayer = L.geoJson(alMutadidBishoprics, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: bishopricIcon }
      )
  }
});

// Metropolitan Bishoprics

var metropolitanBishopricIcon = L.icon({
	iconUrl: './img/e_metBish.svg',
	iconSize: [30, 30],
	iconAnchor: [2, 28]
});

var umayyadMetropolitanBishopricsLayer = L.geoJson(umayyadMetropolitanBishoprics, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.marker (
          latlng,
          { icon: metropolitanBishopricIcon }
      )
  }
});

// Mints

var mintStyle = {
	radius: 8,
	fillColor: "#000000",
	color: "#000",
	weight: 4,
	opacity: 1,
	fillOpacity: 0
}

var umayyadMintsLayer = L.geoJson(umayyadMints, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.circleMarker (latlng, mintStyle)
  }
});

var mansurHarunMintsLayer = L.geoJson(mansurHarunMints, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.circleMarker (latlng, mintStyle)
  }
});

var alMamunMintsLayer = L.geoJson(alMamunMints, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.circleMarker (latlng, mintStyle)
  }
});

var alMutadidMintsLayer = L.geoJson(alMutadidMints, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.circleMarker (latlng, mintStyle)
  }
});

/* Timeline slider */

L.control.timelineSlider({
                timelineItems: ["<b>Umayyad Apex <br> (ca. 100/720)</b>", "<b>Mansur-Harun al-Rashid <br> (ca. 136-193/754-809)</b>", "<b>al-Ma'mun to al-Mu'tasim <br> (ca. 198-227/813-842)</b>", "<b>al-Mu'tadid to al-Muqtadir <br> (ca. 279-320/892-932)</b>"],
                backgroundColor: "#000",
                backgroundOpacity: 0,
                labelWidth: "250px",
                labelFontSize: "16px",
                inactiveColor: "#555",
                activeColor: "#581845",
                thumbHeight: "6px",
                changeMap: function({label, value, map}) { changeMap(label); }
              })
            .addTo(map);

	// layer Control

	var cornuRoutesLayer = L.geoJson(cornuRoutes, {
	  style: function (feature) {
			return {
				weight: 2,
				color: "black",
				opacity: 0.5,
			};
		}
	});

	var options = {
		collapsed:false,
	}

	var umayyadOverlayMaps = {
		label: 'Legend',
		children: [
			{
				label: 'Connections',
				children: [
					{ label: " Routes", layer: cornuRoutesLayer },
					{ label: " Power Lines", layer: umayyadLinesLayer }
				]
			},
			{
				label: 'Sites',
				children: [
					{ label: ' Harbours', layer: umayyadHarboursLayer },
					{ label: ' Bishoprics', layer: umayyadBishopricsLayer},
					{ label: ' Metropolitan Bishoprics', layer: umayyadMetropolitanBishopricsLayer },
					{ label: ' Mints', layer: umayyadMintsLayer }
				]
			}
		]};

	var umayyadLinesControl = L.control.layers.tree(null, umayyadOverlayMaps, options);

	var mansurHarunOverlayMaps = {
		label: 'Legend',
		children: [
			{
				label: 'Connections',
				children: [
					{ label: " Routes", layer: cornuRoutesLayer },
					{ label: " Power Lines", layer: mansurHarunLinesLayer }
				]
			},
			{
				label: 'Sites',
				children: [
					{ label: ' Harbours', layer: umayyadHarboursLayer },
					{ label: ' Bishoprics', layer: mansurHarunBishopricsLayer},
					{ label: ' Metropolitan Bishoprics', layer: umayyadMetropolitanBishopricsLayer },
					{ label: ' Mints', layer: mansurHarunMintsLayer }
				]
			}
		]};

	var mansurHarunLinesControl = L.control.layers.tree(null, mansurHarunOverlayMaps, options);

	var alMamunOverlayMaps = {
		label: 'Legend',
		children: [
			{
				label: 'Connections',
				children: [
					{ label: " Routes", layer: cornuRoutesLayer },
					{ label: " Power Lines", layer: alMamunLinesLayer }
				]
			},
			{
				label: 'Sites',
				children: [
					{ label: ' Harbours', layer: alMamunHarboursLayer },
					{ label: ' Bishoprics', layer: alMamunBishopricsLayer},
					{ label: ' Metropolitan Bishoprics', layer: umayyadMetropolitanBishopricsLayer },
					{ label: ' Mints', layer: alMamunMintsLayer }
				]
			}
		]};

	var alMamunLinesControl = L.control.layers.tree(null, alMamunOverlayMaps, options);

	var alMutadidOverlayMaps = {
		label: 'Legend',
		children: [
			{
				label: 'Connections',
				children: [
					{ label: " Routes", layer: cornuRoutesLayer },
					{ label: " Power Lines", layer: alMutadidLinesLayer }
				]
			},
			{
				label: 'Sites',
				children: [
					{ label: ' Harbours', layer: alMutadidHarboursLayer },
					{ label: ' Bishoprics', layer: alMutadidBishopricsLayer},
					{ label: ' Metropolitan Bishoprics', layer: umayyadMetropolitanBishopricsLayer },
					{ label: ' Mints', layer: alMutadidMintsLayer }
				]
			}
		]};

	var alMutadidLinesControl = L.control.layers.tree(null, alMutadidOverlayMaps, options);

	map.on("overlayadd", function (event) {
		var allOverlaysWithoutLines = [umayyadApexLayer, umayyadHarboursLayer, umayyadBishopricsLayer, umayyadMetropolitanBishopricsLayer, umayyadMintsLayer, mansurHarunLayer, mansurHarunBishopricsLayer, mansurHarunMintsLayer, alMamunLayer, alMamunHarboursLayer, alMamunBishopricsLayer, alMamunMintsLayer, alMutadidLayer, alMutadidHarboursLayer, alMutadidBishopricsLayer, alMutadidMintsLayer];
		for (var i = 0; i < allOverlaysWithoutLines.length; i++) {
			allOverlaysWithoutLines[i].bringToFront();
		};
	});

	map.addLayer(umayyadLinesLayer);
	map.addLayer(umayyadApexLayer);
	map.addLayer(umayyadHarboursLayer);
	map.addLayer(umayyadBishopricsLayer);
	map.addLayer(umayyadMetropolitanBishopricsLayer);
	map.addLayer(umayyadMintsLayer);
	map.addControl(umayyadLinesControl);

// Menu

/* Open */
function openNav() {
document.getElementById("myNav").style.width = "20%";
}

/* Close */
function closeNav() {
document.getElementById("myNav").style.width = "0%";
closeMenuDivs();
}

/* Open Mental Maps div */
function openMMDiv() {
document.getElementsByClassName("admin-maps-menu")[0].style.width = "0vw";
document.getElementsByClassName("mental-maps-menu")[0].style.width = "150px";
}

function closeMMDiv() {
document.getElementsByClassName("mental-maps-menu")[0].style.width = "0vw";
}

/* Open Admin Maps div */
function openAMDiv() {
document.getElementsByClassName("mental-maps-menu")[0].style.width = "0vw";
document.getElementsByClassName("admin-maps-menu")[0].style.width = "150px";
}

function closeAMDiv() {
document.getElementsByClassName("admin-maps-menu")[0].style.width = "0vw";
}

/* Open Admin Maps div */
function closeMenuDivs() {
document.getElementsByClassName("mental-maps-menu")[0].style.width = "0vw";
document.getElementsByClassName("admin-maps-menu")[0].style.width = "0vw";
}

function toggleLegend() {

  if (legendOpen) {
    document.getElementById("legendClosed").style.display="block";
    document.getElementById("legendOpened").style.display="none";
    legendOpen = false;
  } else {
    document.getElementById("legendClosed").style.display="none";
    document.getElementById("legendOpened").style.display="block";
    legendOpen = true;
  }
}
