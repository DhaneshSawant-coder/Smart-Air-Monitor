let lastAqiNotified = null;
let lastTempNotified = null;
let lastHumNotified = null;

function getAqiMessage(status) {
  if (status === 'GOOD') return "Air is healthy today. Great time to open windows!";
  if (status === 'MODERATE') return "Air quality is at a moderate level today.";
  if (status === 'UNHEALTHY (SENSITIVE)') return "Air may affect sensitive groups today.";
  if (status === 'UNHEALTHY') return "Air quality is unhealthy right now.";
  if (status === 'VERY UNHEALTHY') return "Air quality is very unhealthy. Limit outdoor exposure.";
  return "Air quality is hazardous. Avoid outdoor exposure.";
}

function maybeNotify(aqiStatus, tempStatus, humStatus) {
  if (aqiStatus !== lastAqiNotified) {
    showNotif('Air Quality Update: ' + aqiStatus, getAqiMessage(aqiStatus));
  }
  lastAqiNotified = aqiStatus;

  if ((tempStatus === 'HOT' || tempStatus === 'DANGEROUS HEAT') && tempStatus !== lastTempNotified) {
    showNotif('Temperature Alert', 'Status: ' + tempStatus);
  }
  lastTempNotified = tempStatus;

  if ((humStatus === 'HIGH HUMIDITY' || humStatus === 'VERY HUMID') && humStatus !== lastHumNotified) {
    showNotif('Humidity Alert', 'Status: ' + humStatus);
  }
  lastHumNotified = humStatus;
}
