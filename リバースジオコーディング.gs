function reverseGeocoding2(latitude, longitude) {
  var response = Maps.newGeocoder().reverseGeocode(latitude, longitude);
  var result = response.results[0];
  var address = "";
  for (var i = 0; i < result.address_components.length; i++) {
    var component = result.address_components[i];
    if (component.types.indexOf("country") != -1) {
      address += component.long_name;
    } else if (component.types.indexOf("administrative_area_level_1") != -1) {
      address += component.short_name + " ";
    } else if (component.types.indexOf("administrative_area_level_2") != -1) {
      address += component.long_name + ", ";
    } else if (component.types.indexOf("locality") != -1) {
      address += component.long_name + ", ";
    } else if (component.types.indexOf("sublocality") != -1) {
      address += component.long_name + ", ";
    }
  }
  return address;
}