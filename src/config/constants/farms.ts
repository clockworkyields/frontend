import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 11,
    lpSymbol: 'CLOCK-USDC LP',
    lpAddresses: {
      97: '',
      56: '0xE9C53B5Ab0C9cDBd72A03151a628863C28c55A6A',
    },
    tokenSymbol: 'CLOCK',
    tokenAddresses: {
      97: '',
      56: '0xa0bb7b9f0db2faf0ee51fabb4502c430750eea6f',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    lpSymbol: 'CLOCK-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xb2Fc2db05d5445FBbebCD416C3262Df529fA6538',
    },
    tokenSymbol: 'CLOCK',
    tokenAddresses: {
      97: '',
      56: '0xa0bb7b9f0db2faf0ee51fabb4502c430750eea6f',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'CLOCK-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xdC70e8aBE860A8B532855E6a86E715ba492ecD45',
    },
    tokenSymbol: 'CLOCK',
    tokenAddresses: {
      97: '',
      56: '0xa0bb7b9f0db2faf0ee51fabb4502c430750eea6f',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4,
    lpSymbol: 'SPHN-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7561eee90e24f3b348e1087a005f78b4c8453524',
    },
    tokenSymbol: 'SPHN',
    tokenAddresses: {
      97: '',
      56: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 5,
    lpSymbol: 'CDMC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x70d8929d04b60af4fb9b58713ebcf18765ade422',
    },
    tokenSymbol: 'CDMC',
    tokenAddresses: {
      97: '',
      56: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 6,
    lpSymbol: 'USDC-BNB LP',
    lpAddresses: {
      97: '0x81aCa0c535bb13e0cD2F10A3c6E4DC1b9Bbe6c0e',
      56: '0xbCD62661A6b1DEd703585d3aF7d7649Ef4dcDB5c',
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee',
      56: '0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xf2e4E3F9B58b3eDaC88Ad11D689a23f3119a782D',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 7,
    lpSymbol: 'USER5-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
    },
    tokenSymbol: 'USER5',
    tokenAddresses: {
      97: '',
      56: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  // caves/staking
  {
    pid: 0,
    isTokenOnly: true,
    lpSymbol: 'CLOCK',
    lpAddresses: {
      97: '',
      56: '0xb2Fc2db05d5445FBbebCD416C3262Df529fA6538', // BLZD-BUSD LP
    },
    tokenSymbol: 'CLOCK',
    tokenAddresses: {
      97: '',
      56: '0xa0bb7b9f0db2faf0ee51fabb4502c430750eea6f',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 8,
    isTokenOnly: true,
    lpSymbol: 'SPHN',
    lpAddresses: {
      97: '',
      56: '0x4bE10283b2183032BE35E6537C9737DF5a3F6C4A', // ALLOY-BNB LP
    },
    tokenSymbol: 'SPHN',
    tokenAddresses: {
      97: '',
      56: '0x5eF5994fA33FF4eB6c82d51ee1DC145c546065Bd',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 9,
    isTokenOnly: true,
    lpSymbol: 'CDMC',
    lpAddresses: {
      97: '',
      56: '0xd132D2C24F29EE8ABb64a66559d1b7aa627Bd7fD', // BIFI-BNB LP
    },
    tokenSymbol: 'CDMC',
    tokenAddresses: {
      97: '',
      56: '0xCa3F508B8e4Dd382eE878A314789373D80A5190A',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 10,
    isTokenOnly: true,
    lpSymbol: 'USDC',
    lpAddresses: {
      97: '',
      56: '0x8DD39f0a49160cDa5ef1E2a2fA7396EEc7DA8267', // vBSWAP-BNB LP
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      56: '0x4f0ed527e8A95ecAA132Af214dFd41F30b361600',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 12,
    isTokenOnly: true,
    lpSymbol: 'USER5',
    lpAddresses: {
      97: '',
      56: '0xdC6C130299E53ACD2CC2D291fa10552CA2198a6b', // WATCH-BNB LP
    },
    tokenSymbol: 'USER5',
    tokenAddresses: {
      97: '',
      56: '0x7A9f28EB62C791422Aa23CeAE1dA9C847cBeC9b0',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
]

export default farms
