export function geolocate () {
  return new Promise((resolve, reject) => {
    if (!('geolocation' in window.navigator)) {
      reject(new Error('no browser support'))
    } else {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          resolve({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            accuracy: position.coords.accuracy,
            alt: position.coords.altitude,
            altAccuracy: position.coords.altitudeAccuracy,
            datetime: new Date(position.timestamp)
          })
        },
        () => {
          reject(new Error('no position access'))
        },
        {
          enableHighAccuracy: true,
          timeout: 5000
        }
      )
    }
  })
}
