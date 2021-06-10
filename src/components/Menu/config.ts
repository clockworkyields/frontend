import { MenuEntry } from 'clock-uikit'

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
        href: 'https://swap.hyperjump.fi/#/swap?outputcurrency=0xeF52250C313dF3321cE27290092cd9E984e6F33A',
        external: true,
      },
      {
        label: 'Liquidity',
        href: 'https://swap.hyperjump.fi/#/add/BNB/0xeF52250C313dF3321cE27290092cd9E984e6F33A',
        external: true,
      },
    ],
  },
  {
    label: 'CLOCKWORK',
    icon: 'ClockIcon',
    href: '/farms',
  },
  {
    label: 'Staking',
    icon: 'ClockIcon',
    href: '/staking',
  },
  {
    label: 'Verified Rentals',
    icon: 'VerifiedIcon',
    href: '/pools',
  },
  {
    label: 'Unverified Rentals',
    icon: 'UnverifiedIcon',
    href: '/pools',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Poo',
        href: 'https://poocoin.app/tokens/0xeF52250C313dF3321cE27290092cd9E984e6F33A',
        external: true,
      },
    ],
  },
  {
    label: 'Github',
    icon: 'GithubIcon',
    href: 'https://github.com/clockworkyields',
    external: true,
  },
  {
    label: 'Medium',
    icon: 'MediumIcon',
    href: 'https://clockwork-yields.medium.com',
    external: true,
  },
]

export default config
