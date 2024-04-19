export interface IGlobalData {
  coins_count: number
  active_markets: number
  total_mcap: number
  total_volume: number
  btc_d: string
  eth_d: string
  mcap_change: string
  volume_change: string
  avg_change_percent: string
  volume_ath: number | null
  mcap_ath: number | null
}

export interface IAllCoinsResponse {
  data: ICoin[]
  info: object
}

export interface ICoin {
  id: string
  symbol: string
  name: string
  nameid: string
  rank: number
  price_usd: string
  percent_change_24h: string
  percent_change_1h: string
  percent_change_7d: string
  price_btc: string
  market_cap_usd: string
  volume24: number
  volume24a: number
  csupply: string
  tsupply?: string
  msupply?: string
}

export interface IGetAllCoins {
  start: number
  limit: number
}

export interface IMarketData {
  id: string
  name: string
  name_id: string
  volume_usd: number
  active_pairs: number
  url: string
  country: string
}

export interface INews {
  status: string
  totalResults: number
  articles: IArticle[]
}

export interface IArticle {
  source: ISource
  author?: string
  title: string
  description?: string
  url: string
  urlToImage?: string
  publishedAt: string
  content: string
}

export interface ISource {
  id?: string
  name: string
}
