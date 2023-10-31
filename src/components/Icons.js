const Icons = (icon) => {
  switch (icon) {
      case 'Thunderstorm':
          icon='src/assets/icons/thunderstorms-rain.svg'
          console.log("TORMENTA")
          break;    
      case 'Drizzle':
          icon='src/assets/icons/drizzle.svg'
          console.log('LLOVIZNA');
          break;
      case 'Rain':
          icon='src/assets/icons/rain.svg'
          console.log('LLUVIA');
          break;
      case 'Snow':
          icon='src/assets/icons/snowy.svg'
          console.log('NIEVE');
          break;                        
      case 'Clear':
          icon='src/assets/icons/clear-day.svg'
          console.log('LIMPIO');
          break;
      case 'Atmosphere':
          icon='src/assets/icons/weather.svg'
          console.log('ATMOSFERA');
          break;  
      case 'Clouds':
          icon='src/assets/icons/fog.svg'
          console.log('NUBES');
          break;  
      case 'Fog':
          icon='src/assets/icons/fog.svg'
          console.log('NUBES');
          break;    
      case 'Haze':
          icon='src/assets/icons/haze.svg'
          console.log('BRUMAS');
          break;   
      case 'Smoke':
          icon='src/assets/icons/smoke.svg'
          console.log('HUMO');
          break;      
      default:
          icon='src/assets/icons/clear-day.svg'
          console.log('LIMPIO');    
  }
return icon
}

export default Icons