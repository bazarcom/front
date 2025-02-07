export function getColorByMarket(marketName: string) {
  let color;
  switch (marketName) {
  case 'NEPTUN_MARKET':
    color = '#FF7101';
    break;
  case 'WOLT_MARKET':
    color = '#00C1E8';
    break;
  case 'BAZARSTORE':
    color = '#4CAF50';
    break;
  case 'BRAVO_MARKET':
    color = '#77BA1C';
    break;
  case 'BOLMART_MARKET':
    color = '#F3F3F3';
    break;
  case 'ARAZ_MARKET':
    color = '#FFFFFF';
    break;
  case 'INDI_MARKET':
    color = '#8462F5';
    break;
  case 'RAHAT_MARKET':
    color = '#000000';
    break;
  default:
    color = '#FF7101';
    break;
  }
  return color;
}
