const Icons = (icon) => {
    let iconPath = './src/assets/icons/clear-day.svg'; // Valor por defecto
  
    switch (icon) {
      case 'Thunderstorm':
        iconPath = './src/assets/icons/thunderstorms-rain.svg';
        console.log("TORMENTA");
        break;
      case 'Drizzle':
        iconPath = './src/assets/icons/drizzle.svg';
        console.log('LLOVIZNA');
        break;
      case 'Rain':
        iconPath = './src/assets/icons/rain.svg';
        console.log('LLUVIA');
        break;
      case 'Snow':
        iconPath = './src/assets/icons/snowy.svg';
        console.log('NIEVE');
        break;
      case 'Clear':
        iconPath = './src/assets/icons/clear-day.svg';
        console.log('LIMPIO');
        break;
      case 'Atmosphere':
        iconPath = './src/assets/icons/weather.svg';
        console.log('ATMOSFERA');
        break;
      case 'Clouds':
        iconPath = './src/assets/icons/fog.svg';
        console.log('NUBES');
        break;
      case 'Fog':
        iconPath = './src/assets/icons/fog.svg';
        console.log('NUBES');
        break;
      case 'Haze':
        iconPath = './src/assets/icons/haze.svg';
        console.log('BRUMAS');
        break;
      case 'Smoke':
        iconPath = './src/assets/icons/smoke.svg';
        console.log('HUMO');
        break;
      default:
        console.log('Icono no reconocido, usando valor por defecto (LIMPIO)');
    }
  
    return iconPath;
  };
  
  export default Icons;
  