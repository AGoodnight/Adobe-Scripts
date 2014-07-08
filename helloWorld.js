var originalUnit = preferences.rulerUnits;
preferences.rulerUnits = Units.INCHES;

var docRef = apps.document(2,4);

var artLayerRef = docRef.artLayers.add();
artLayers.kind = layerKind.TEXT;

var textItemRef = artLayerRef.textItem;
textItemRef.contents = "hello, World";

docRef = null;
textItemRef = null;

app.preferences.rulerUnits = originalUnit;