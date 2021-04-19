import { MenuEntry } from '@mozartfinance/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://swap.hyperjump.fi/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://swap.hyperjump.fi/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/clockworkyields',
      },
      {
        label: 'Docs',
        href: 'https://app.gitbook.com/@clockworkyields/s/clockwork/',
      },
      {
        label: 'Medium',
        href: 'https://clockwork-yields.medium.com/',
      },
    ],
  },
//  {
//    label: 'Audit by IB',
//    icon: 'TicketIcon',
//    href: 'https://github.com/ImmuneBytes/Smart-Contract-Audit-Reports/blob/main/Mozart%20Finance/Mozart%20Finance%20(PIANO)%20-%20Final%20Audit%20Report.pdf',
//  },
]

export default config
