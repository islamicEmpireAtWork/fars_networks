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

function changeMap(label) {
  switch(label) {
    case "<b>Umayyad Apex <br> (ca. 100/720)</b>":
      map.removeLayer(mansurHarunLayer);
			map.removeLayer(mansurHarunLinesLayer);
      map.removeLayer(alMamunLayer);
			map.removeLayer(alMamunLinesLayer);
      map.removeLayer(alMutadidLayer);
			map.removeLayer(alMutadidLinesLayer);

			map.addLayer(umayyadLinesLayer);
      map.addLayer(umayyadApexLayer);
      break;
    case "<b>Mansur-Harun al-Rashid <br> (ca. 136-193/754-809)</b>":
      map.removeLayer(umayyadApexLayer);
			map.removeLayer(umayyadLinesLayer);
      map.removeLayer(alMamunLayer);
			map.removeLayer(alMamunLinesLayer);
      map.removeLayer(alMutadidLayer);
			map.removeLayer(alMutadidLinesLayer);

			map.addLayer(mansurHarunLinesLayer);
      map.addLayer(mansurHarunLayer);
      break;
    case "<b>al-Ma'mun to al-Mu'tasim <br> (ca. 198-227/813-842)</b>":
      map.removeLayer(mansurHarunLayer);
			map.removeLayer(mansurHarunLinesLayer);
      map.removeLayer(umayyadApexLayer);
			map.removeLayer(umayyadLinesLayer);
      map.removeLayer(alMutadidLayer);
			map.removeLayer(alMutadidLinesLayer);

			map.addLayer(alMamunLinesLayer);
      map.addLayer(alMamunLayer);
      break;
    case "<b>al-Mu'tadid to al-Muqtadir <br> (ca. 279-320/892-932)</b>":
      map.removeLayer(mansurHarunLayer);
			map.removeLayer(mansurHarunLinesLayer);
      map.removeLayer(alMamunLayer);
			map.removeLayer(alMamunLinesLayer);
      map.removeLayer(umayyadApexLayer);
			map.removeLayer(umayyadLinesLayer);

			map.addLayer(alMutadidLinesLayer);
      map.addLayer(alMutadidLayer);
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
	var popup = L.popup(popupOptions, layer).setContent(feature.properties.standardised_transliterated_name);
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
}).addTo(map);


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
}).addTo(map);

var alMamunLinesLayer = L.geoJson(alMamunLines, {
  style: function (feature) {
		return {
			weight: feature.properties.radius,
			color: "black",
			opacity: 0.5,
		};
	}
}).addTo(map);

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
}).addTo(map);

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
}).addTo(map);

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
