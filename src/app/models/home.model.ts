export interface Home
{
    id: number,
    name: string,
    ask: number,
    bid: number,
    last: number,
    high: number,
    low: number,
    volume: number,
    open: Open,
    averages: Averages,
    changes: Changes,
    volume_percent: number,
    timestamp: number,
    display_timestamp: string,
    display_symbol: string
}

interface Open
{
  hour: number,
  day: number,
  week: number,
  month: number,
  month_3: number,
  month_6: number,
  year: number
}

interface Averages
{
  day: number,
  week: number,
  month: number
}

interface Changes
{
  price: Price,
  percent: Percent
}

interface Price
{
  hour: number,
  day: number,
  week: number,
  month: number,
  month_3: number,
  month_6: number,
  year: number
}

interface Percent
{
  hour: number,
  day: number,
  week: number,
  month: number,
  month_3: number,
  month_6: number,
  year: number
}












































//export interface Home
//{
//  id: string,
//  symbol: string,
//  name: string,
//  image: string,
//  current_price: number,
//  market_cap: number,
//  market_cap_rank: number,
//  fully_diluted_valuation: number,
//  total_volume: number,
//  high_24h: number,
//  low_24h: number,
//  price_change_24h: number,
//  price_change_percentage_24h: number,
//  market_cap_change_24h: number,
//  market_cap_change_percentage_24h: number,
//  circulating_supply: number,
//  total_supply: number,
//  max_supply: number,
//  ath: number,
//  ath_change_percentage: number,
//  ath_date: string,
//  atl: number,
//  atl_change_percentage: number,
//  atl_date: string,
//  roi: null,
//  last_updated: string
//}



