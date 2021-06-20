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
      56: '0x402E6B9F9A2959d6f4eb398071d90270a6583C73',
    },
    tokenSymbol: 'SPHN',
    tokenAddresses: {
      97: '',
      56: '0xb58a579e8f987b52564a5fe08fe5181dc2621a9c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 5,
    lpSymbol: 'CDMC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x6aABa627f91d56e41E5bB90566d604C20bFd2407',
    },
    tokenSymbol: 'CDMC',
    tokenAddresses: {
      97: '',
      56: '0xef52250c313df3321ce27290092cd9e984e6f33a',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 6,
    lpSymbol: 'USDC-BNB LP',
    lpAddresses: {
      97: '0x81aCa0c535bb13e0cD2F10A3c6E4DC1b9Bbe6c0e',
      56: '0x41e080C3fd4a27aA30c73E1B2eE9D8dD1adc5501',
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee',
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
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
      56: '0x89494c524BA3D706cC1DFB1dDb47B27CF14E0d9F',
    },
    tokenSymbol: 'USER5',
    tokenAddresses: {
      97: '',
      56: '0x81100f79eb6c3314ee8974a02fa10203c90b0e74',
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
      56: '0x402E6B9F9A2959d6f4eb398071d90270a6583C73', // SPHN-BNB LP
    },
    tokenSymbol: 'SPHN',
    tokenAddresses: {
      97: '',
      56: '0xb58a579e8f987b52564a5fe08fe5181dc2621a9c',
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
      56: '0x6aABa627f91d56e41E5bB90566d604C20bFd2407', // CDMC-BNB LP
    },
    tokenSymbol: 'CDMC',
    tokenAddresses: {
      97: '',
      56: '0xef52250c313df3321ce27290092cd9e984e6f33a',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 13,
    isTokenOnly: true,
    lpSymbol: 'BTD',
    lpAddresses: {
      97: '',
      56: '0x3eED3731D5360Ec6c229d09F6bf867ABb6d7aCb5', // BTD-BNB LP
    },
    tokenSymbol: 'BTD',
    tokenAddresses: {
      97: '',
      56: '0xd1102332a213e21faf78b69c03572031f3552c33',
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
      56: '0x41e080C3fd4a27aA30c73E1B2eE9D8dD1adc5501', // USDC-BNB LP
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
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
      56: '0x89494c524BA3D706cC1DFB1dDb47B27CF14E0d9F', // USER5-BNB LP
    },
    tokenSymbol: 'USER5',
    tokenAddresses: {
      97: '',
      56: '0x81100f79eb6c3314ee8974a02fa10203c90b0e74',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
]

export default farms
