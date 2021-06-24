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
        href: 'https://swap.hyperjump.fi/#/swap?inputCurrency=0x1176F401497A51A222f16bc1B6e5778eDbaB2b12',
        external: true,
      },
      {
        label: 'Liquidity',
        href: 'https://swap.hyperjump.fi/#/add/BNB/0x1176F401497A51A222f16bc1B6e5778eDbaB2b12',
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
        label: 'Docs',
        href: 'https://app.gitbook.com/@clockworkyields/s/clockwork/',
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
