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

function removeAllOverlays(label) {
		map.eachLayer(function(layer) {
			if (layer == umayyadLinesLayer || layer == mansurHarunLinesLayer || layer == alMamunLinesLayer || layer == samarraLinesLayer || layer == alMutadidLinesLayer) {
					map.removeLayer(layer);
				switch(label) {
		    case "<b>Umayyad Apex <br> (ca. 100/720)</b>":
					map.addLayer(umayyadLinesLayer);
		      break;
		    case "<b>Mansur-Harun al-Rashid <br> (ca. 136-193/754-809)</b>":
					map.addLayer(mansurHarunLinesLayer);
		      break;
		    case "<b>al-Ma'mun to al-Mu'tasim <br> (ca. 198-221/813-836)</b>":
					map.addLayer(alMamunLinesLayer);
		      break;
				case "<b>Samarra period <br> (ca. 221-279/836-892)</b>":
					map.addLayer(samarraLinesLayer);
		      break;
		    case "<b>al-Mu'tadid to al-Muqtadir <br> (ca. 279-320/892-932)</b>":
					map.addLayer(alMutadidLinesLayer);
		      break;
			  }
			} else if (layer == umayyadApexLayer || layer == mansurHarunLayer || layer == alMamunLayer || layer == samarraLayer || layer == alMutadidLayer) {
					map.removeLayer(layer);
				switch(label) {
		    case "<b>Umayyad Apex <br> (ca. 100/720)</b>":
					map.addLayer(umayyadApexLayer);
		      break;
		    case "<b>Mansur-Harun al-Rashid <br> (ca. 136-193/754-809)</b>":
					map.addLayer(mansurHarunLayer);
		      break;
		    case "<b>al-Ma'mun to al-Mu'tasim <br> (ca. 198-221/813-836)</b>":
					map.addLayer(alMamunLayer);
		      break;
				case "<b>Samarra period <br> (ca. 221-279/836-892)</b>":
					map.addLayer(samarraLayer);
		      break;
		    case "<b>al-Mu'tadid to al-Muqtadir <br> (ca. 279-320/892-932)</b>":
					map.addLayer(alMutadidLayer);
		      break;
			  }
			} else if (layer == umayyadHarboursLayer || layer == alMamunHarboursLayer || layer == alMutadidHarboursLayer) {
					map.removeLayer(layer);
				switch(label) {
		    case "<b>Umayyad Apex <br> (ca. 100/720)</b>":
					map.addLayer(umayyadHarboursLayer);
		      break;
		    case "<b>Mansur-Harun al-Rashid <br> (ca. 136-193/754-809)</b>":
					map.addLayer(umayyadHarboursLayer);
		      break;
		    case "<b>al-Ma'mun to al-Mu'tasim <br> (ca. 198-221/813-836)</b>":
					map.addLayer(alMamunHarboursLayer);
		      break;
				case "<b>Samarra period <br> (ca. 221-279/836-892)</b>":
					map.addLayer(alMamunHarboursLayer);
		      break;
		    case "<b>al-Mu'tadid to al-Muqtadir <br> (ca. 279-320/892-932)</b>":
					map.addLayer(alMutadidHarboursLayer);
		      break;
			  }
			} else if (layer == umayyadBishopricsLayer || layer == mansurHarunBishopricsLayer || layer == alMamunBishopricsLayer || layer == alMutadidBishopricsLayer) {
				map.removeLayer(layer);
				switch(label) {
					case "<b>Umayyad Apex <br> (ca. 100/720)</b>":
						map.addLayer(umayyadBishopricsLayer);
						break;
					case "<b>Mansur-Harun al-Rashid <br> (ca. 136-193/754-809)</b>":
						map.addLayer(mansurHarunBishopricsLayer);
						break;
					case "<b>al-Ma'mun to al-Mu'tasim <br> (ca. 198-221/813-836)</b>":
						map.addLayer(alMamunBishopricsLayer);
						break;
					case "<b>Samarra period <br> (ca. 221-279/836-892)</b>":
						map.addLayer(alMamunBishopricsLayer);
						break;
					case "<b>al-Mu'tadid to al-Muqtadir <br> (ca. 279-320/892-932)</b>":
						map.addLayer(alMutadidBishopricsLayer);
						break;
				}
			} else if (layer == umayyadMetropolitanBishopricsLayer) {
				map.removeLayer(layer);
				switch(label) {
					case "<b>Umayyad Apex <br> (ca. 100/720)</b>":
						map.addLayer(umayyadMetropolitanBishopricsLayer);
						break;
					case "<b>Mansur-Harun al-Rashid <br> (ca. 136-193/754-809)</b>":
						map.addLayer(umayyadMetropolitanBishopricsLayer);
						break;
					case "<b>al-Ma'mun to al-Mu'tasim <br> (ca. 198-221/813-836)</b>":
						map.addLayer(umayyadMetropolitanBishopricsLayer);
						break;
					case "<b>Samarra period <br> (ca. 221-279/836-892)</b>":
						map.addLayer(umayyadMetropolitanBishopricsLayer);
						break;
					case "<b>al-Mu'tadid to al-Muqtadir <br> (ca. 279-320/892-932)</b>":
						map.addLayer(umayyadMetropolitanBishopricsLayer);
						break;
				}
			} else if (layer == umayyadMintsLayer || layer == mansurHarunMintsLayer || layer == alMamunMintsLayer || layer == alMutadidMintsLayer) {
				map.removeLayer(layer);
				switch(label) {
					case "<b>Umayyad Apex <br> (ca. 100/720)</b>":
						map.addLayer(umayyadMintsLayer);
						break;
					case "<b>Mansur-Harun al-Rashid <br> (ca. 136-193/754-809)</b>":
						map.addLayer(mansurHarunMintsLayer);
						break;
					case "<b>al-Ma'mun to al-Mu'tasim <br> (ca. 198-221/813-836)</b>":
						map.addLayer(alMamunMintsLayer);
						break;
					case "<b>Samarra period <br> (ca. 221-279/836-892)</b>":
						map.addLayer(alMamunMintsLayer);
						break;
					case "<b>al-Mu'tadid to al-Muqtadir <br> (ca. 279-320/892-932)</b>":
						map.addLayer(alMutadidMintsLayer);
						break;
				}
			} else if (layer == umayyadCopperMintsLayer || layer == mansurHarunCopperMintsLayer || layer == alMamunCopperMintsLayer || layer == samarraCopperMintsLayer || layer == alMutadidCopperMintsLayer) {
				map.removeLayer(layer);
				switch(label) {
					case "<b>Umayyad Apex <br> (ca. 100/720)</b>":
						map.addLayer(umayyadCopperMintsLayer);
						break;
					case "<b>Mansur-Harun al-Rashid <br> (ca. 136-193/754-809)</b>":
						map.addLayer(mansurHarunCopperMintsLayer);
						break;
					case "<b>al-Ma'mun to al-Mu'tasim <br> (ca. 198-221/813-836)</b>":
						map.addLayer(alMamunCopperMintsLayer);
						break;
					case "<b>Samarra period <br> (ca. 221-279/836-892)</b>":
						map.addLayer(samarraCopperMintsLayer);
						break;
					case "<b>al-Mu'tadid to al-Muqtadir <br> (ca. 279-320/892-932)</b>":
						map.addLayer(alMutadidCopperMintsLayer);
						break;
				}
			}
	});
};

function removeAllControls(label) {
	var allControls = [umayyadLinesControl, mansurHarunLinesControl, alMamunLinesControl, samarraLinesControl, alMutadidLinesControl];
	for (var i = 0; i < allControls.length; i++) {
		map.removeControl(allControls[i]);
	};
};

function changeMap(label) {
  switch(label) {
    case "<b>Umayyad Apex <br> (ca. 100/720)</b>":
			map.addLayer(backgroundSitesLayer);
			//map.addLayer(umayyadLinesLayer);
      map.addLayer(umayyadApexLayer);
			map.addControl(umayyadLinesControl);
      break;
    case "<b>Mansur-Harun al-Rashid <br> (ca. 136-193/754-809)</b>":
			map.addLayer(backgroundSitesLayer);
			//map.addLayer(mansurHarunLinesLayer);
      map.addLayer(mansurHarunLayer);
			map.addControl(mansurHarunLinesControl);
      break;
    case "<b>al-Ma'mun to al-Mu'tasim <br> (ca. 198-221/813-836)</b>":
			map.addLayer(backgroundSitesLayer);
			//map.addLayer(alMamunLinesLayer);
      map.addLayer(alMamunLayer);
			map.addControl(alMamunLinesControl);
      break;
		case "<b>Samarra period <br> (ca. 221-279/836-892)</b>":
			map.addLayer(backgroundSitesLayer);
			//map.addLayer(samarraLinesLayer);
      map.addLayer(samarraLayer);
			map.addControl(samarraLinesControl);
      break;
    case "<b>al-Mu'tadid to al-Muqtadir <br> (ca. 279-320/892-932)</b>":
			map.addLayer(backgroundSitesLayer);
			//map.addLayer(alMutadidLinesLayer);
      map.addLayer(alMutadidLayer);
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
	var popup = L.popup(popupOptions, layer).setContent('<h3>' + feature.properties.standardised_transliterated_name + '</h3><h5><b> Kura:</b> ' + feature.properties.kura_name + '</h5>');
	layer.bindPopup(popup);
    layer.on({
        click: zoomToFeature,
    });
		layer.on('mouseover', function(event) {
			layer.openPopup();
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
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.circleMarker (latlng, backgroundSitesStyle)
  }
});

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
    } else if (umayyadApex[i].properties.Importance == "Super-provincial capital") {
        umayyadApex[i].properties.radius = 20;
    } else {
        umayyadApex[i].properties.radius = 24;
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
    } else if (mansurHarun[i].properties.Importance == "Super-provincial capital") {
        mansurHarun[i].properties.radius = 20;
    } else {
        mansurHarun[i].properties.radius = 24;
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
    } else if (alMamun[i].properties.Importance == "Super-provincial capital") {
        alMamun[i].properties.radius = 20;
    } else {
        alMamun[i].properties.radius = 24;
    }
  }
	for (i = 0; i < samarra.length; i++) {
    if (samarra[i].properties.Importance == "Site") {
        samarra[i].properties.radius = 4;
    } else if (samarra[i].properties.Importance == "District capital") {
        samarra[i].properties.radius = 8;
    } else if (samarra[i].properties.Importance == "Sub-region capital") {
        samarra[i].properties.radius = 12;
    } else if (samarra[i].properties.Importance == "Provincial capital") {
        samarra[i].properties.radius = 16;
    } else if (samarra[i].properties.Importance == "Super-provincial capital") {
        samarra[i].properties.radius = 20;
    } else {
        samarra[i].properties.radius = 24;
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
    } else if (alMutadid[i].properties.Importance == "Provincial capital") {
        alMutadid[i].properties.radius = 20;
    } else {
        alMutadid[i].properties.radius = 24;
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

var samarraLinesLayer = L.geoJson(samarraLines, {
  style: function (feature) {
		return {
			weight: feature.properties.radius,
			color: "black",
			opacity: 0.5,
		};
	}
});

var samarraLayer = L.geoJson(samarra, {
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

// Precious metal mints

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

// Copper mints

var copperMintStyle = {
	radius: 5,
	fillColor: "#000000",
	color: "#000",
	weight: 4,
	opacity: 0,
	fillOpacity: 1,
}

var umayyadCopperMintsLayer = L.geoJson(umayyadCopperMints, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.circleMarker (latlng, copperMintStyle)
  }
});

var mansurHarunCopperMintsLayer = L.geoJson(mansurHarunCopperMints, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.circleMarker (latlng, copperMintStyle)
  }
});

var alMamunCopperMintsLayer = L.geoJson(alMamunCopperMints, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.circleMarker (latlng, copperMintStyle)
  }
});

var samarraCopperMintsLayer = L.geoJson(samarraCopperMints, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.circleMarker (latlng, copperMintStyle)
  }
});

var alMutadidCopperMintsLayer = L.geoJson(alMutadidCopperMints, {
	onEachFeature: onEachFeature,
	pointToLayer: function(feature, latlng) {
      return L.circleMarker (latlng, copperMintStyle)
  }
});

// Routes

var cornuRoutesLayer = L.geoJson(cornuRoutes, {
	style: function (feature) {
		return {
			weight: 2,
			color: "black",
			opacity: 0.5,
		};
	}
});

/* Timeline slider */

L.control.timelineSlider({
                timelineItems: ["<b>Umayyad Apex <br> (ca. 100/720)</b>", "<b>Mansur-Harun al-Rashid <br> (ca. 136-193/754-809)</b>", "<b>al-Ma'mun to al-Mu'tasim <br> (ca. 198-221/813-836)</b>", "<b>Samarra period <br> (ca. 221-279/836-892)</b>", "<b>al-Mu'tadid to al-Muqtadir <br> (ca. 279-320/892-932)</b>"],
                backgroundColor: "#000",
                backgroundOpacity: 0,
                labelWidth: "195px",
                labelFontSize: "16px",
                inactiveColor: "#555",
                activeColor: "#581845",
                thumbHeight: "6px",
                changeMap: function({label, value, map}) { removeAllOverlays(label); removeAllControls(); changeMap(label); }
              })
            .addTo(map);

	// layer Control

	var options = {
		collapsed:false,
	}

	var umayyadOverlayMaps = {
		label: 'Layer Control',
		children: [
			{
				label: 'Connections',
				children: [
					{ label: " Routes", layer: cornuRoutesLayer },
					{ label: " Devolvement of power", layer: umayyadLinesLayer }
				]
			},
			{
				label: 'Sites',
				children: [
					{ label: ' Harbours', layer: umayyadHarboursLayer },
					{ label: ' Eastern Syrian Diocese', layer: umayyadBishopricsLayer},
					{ label: ' Eastern Syrian Metropolitan Diocese', layer: umayyadMetropolitanBishopricsLayer },
					{ label: ' Precious metal mints', layer: umayyadMintsLayer },
					{ label: ' Copper mints', layer: umayyadCopperMintsLayer },
				]
			}
		]};

	var umayyadLinesControl = L.control.layers.tree(null, umayyadOverlayMaps, options);

	var mansurHarunOverlayMaps = {
		label: 'Layer Control',
		children: [
			{
				label: 'Connections',
				children: [
					{ label: " Routes", layer: cornuRoutesLayer },
					{ label: " Devolvement of power", layer: mansurHarunLinesLayer }
				]
			},
			{
				label: 'Sites',
				children: [
					{ label: ' Harbours', layer: umayyadHarboursLayer },
					{ label: ' Eastern Syrian Diocese', layer: mansurHarunBishopricsLayer},
					{ label: ' Eastern Syrian Metropolitan Diocese', layer: umayyadMetropolitanBishopricsLayer },
					{ label: ' Precious metal mints', layer: mansurHarunMintsLayer },
					{ label: ' Copper mints', layer: mansurHarunCopperMintsLayer }
				]
			}
		]};

	var mansurHarunLinesControl = L.control.layers.tree(null, mansurHarunOverlayMaps, options);

	var alMamunOverlayMaps = {
		label: 'Layer Control',
		children: [
			{
				label: 'Connections',
				children: [
					{ label: " Routes", layer: cornuRoutesLayer },
					{ label: " Devolvement of power", layer: alMamunLinesLayer }
				]
			},
			{
				label: 'Sites',
				children: [
					{ label: ' Harbours', layer: alMamunHarboursLayer },
					{ label: ' Eastern Syrian Diocese', layer: alMamunBishopricsLayer},
					{ label: ' Eastern Syrian Metropolitan Diocese', layer: umayyadMetropolitanBishopricsLayer },
					{ label: ' Precious metal mints', layer: alMamunMintsLayer },
					{ label: ' Copper mints', layer: alMamunCopperMintsLayer }
				]
			}
		]};

	var alMamunLinesControl = L.control.layers.tree(null, alMamunOverlayMaps, options);

	var samarraOverlayMaps = {
		label: 'Layer Control',
		children: [
			{
				label: 'Connections',
				children: [
					{ label: " Routes", layer: cornuRoutesLayer },
					{ label: " Devolvement of power", layer: samarraLinesLayer }
				]
			},
			{
				label: 'Sites',
				children: [
					{ label: ' Harbours', layer: alMamunHarboursLayer },
					{ label: ' Eastern Syrian Diocese', layer: alMamunBishopricsLayer},
					{ label: ' Eastern Syrian Metropolitan Diocese', layer: umayyadMetropolitanBishopricsLayer },
					{ label: ' Precious metal mints', layer: alMamunMintsLayer },
					{ label: ' Copper mints', layer: samarraCopperMintsLayer }
				]
			}
		]};

	var samarraLinesControl = L.control.layers.tree(null, samarraOverlayMaps, options);

	var alMutadidOverlayMaps = {
		label: 'Layer Control',
		children: [
			{
				label: 'Connections',
				children: [
					{ label: " Routes", layer: cornuRoutesLayer },
					{ label: " Devolvement of power", layer: alMutadidLinesLayer }
				]
			},
			{
				label: 'Sites',
				children: [
					{ label: ' Harbours', layer: alMutadidHarboursLayer },
					{ label: ' Eastern Syrian Diocese', layer: alMutadidBishopricsLayer},
					{ label: ' Eastern Syrian Metropolitan Diocese', layer: umayyadMetropolitanBishopricsLayer },
					{ label: ' Precious metal mints', layer: alMutadidMintsLayer },
					{ label: ' Copper mints', layer: alMutadidCopperMintsLayer }
				]
			}
		]};

	var alMutadidLinesControl = L.control.layers.tree(null, alMutadidOverlayMaps, options);

	map.on("overlayadd", function (event) {
		var allOverlaysWithoutLines = [umayyadApexLayer, mansurHarunLayer, umayyadHarboursLayer, umayyadBishopricsLayer, umayyadMetropolitanBishopricsLayer, umayyadMintsLayer, umayyadCopperMintsLayer, mansurHarunBishopricsLayer, mansurHarunMintsLayer, mansurHarunCopperMintsLayer, alMamunLayer, samarraLayer, alMamunHarboursLayer, alMamunBishopricsLayer, alMamunMintsLayer, alMamunCopperMintsLayer, alMutadidLayer, alMutadidHarboursLayer, alMutadidBishopricsLayer, alMutadidMintsLayer, alMutadidCopperMintsLayer, samarraCopperMintsLayer];
		for (var i = 0; i < allOverlaysWithoutLines.length; i++) {
			allOverlaysWithoutLines[i].bringToFront();
		};
	});

	map.addLayer(backgroundSitesLayer);
	map.addLayer(umayyadLinesLayer);
	map.addLayer(umayyadApexLayer);
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
document.getElementsByClassName("mental-maps-menu")[0].style.width = "auto";
}

function closeMMDiv() {
document.getElementsByClassName("mental-maps-menu")[0].style.width = "0vw";
}

/* Open Admin Maps div */
function openAMDiv() {
document.getElementsByClassName("mental-maps-menu")[0].style.width = "0vw";
document.getElementsByClassName("admin-maps-menu")[0].style.width = "auto";
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
