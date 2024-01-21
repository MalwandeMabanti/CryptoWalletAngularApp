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


