import React, { useMemo } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { Heading } from 'clock-uikit'
import orderBy from 'lodash/orderBy'
import partition from 'lodash/partition'
import useI18n from 'hooks/useI18n'
import { usePools, useBlock } from 'state/hooks'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
// import Coming from './components/Coming'
import PoolCard from './components/PoolCard'
import PoolTabButtons from './components/PoolTabButtons'
import Divider from './components/Divider'

const Farm: React.FC = () => {
  const { path } = useRouteMatch()
  const TranslateString = useI18n()
  const { account } = useWallet()
  const pools = usePools(account)
  const { blockNumber } = useBlock()

  const [finishedPools, openPools] = useMemo(
    () => partition(pools, (pool) => pool.isFinished || blockNumber > pool.endBlock),
    [blockNumber, pools],
  )

  return (
    <Page>
      <Hero>
        <div>
          <Heading as="h1" size="xxl" mb="16px">
            {TranslateString(282, 'Rental Pools')}
          </Heading>
          <Heading as="h1" size="xl" mb="16px">
          {TranslateString(282, 'Coming Soon...')}
          </Heading>
          <ul>
            <li>{TranslateString(580, 'Projects can rent farms on Clockwork, they can specify the desired LP to be staked,')}</li>
            <li>{TranslateString(486, 'they will send the emissions tokens and we will host the pool here. ')}</li>
            <li>{TranslateString(406, 'You will also be able to stake your $CLOCK for a portion of these tokens.')}</li>
          </ul>
        </div>
        <div style={{ textAlign: 'right' }}>
          <img
            src="https://raw.githubusercontent.com/clockworkyields/clock-frontend/master/public/images/sticker.png"
            alt="CLOCK Pool icon"
          />
        </div>
      </Hero>
      <PoolTabButtons />
      <Divider />
      <FlexLayout>
        <Route exact path={`${path}`}>
          <>
            {orderBy(openPools, ['sortOrder']).map((pool) => (
              <PoolCard key={pool.sousId} pool={pool} />
            ))}
            {/* <Coming /> */}
          </>
        </Route>
        <Route path={`${path}/history`}>
          {orderBy(finishedPools, ['sortOrder']).map((pool) => (
            <PoolCard key={pool.sousId} pool={pool} />
          ))}
        </Route>
      </FlexLayout>
    </Page>
  )
}

const Hero = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 1fr;
  margin-left: auto;
  margin-right: auto;
  max-width: 250px;
  padding: 48px 0;
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    font-size: 16px;
    li {
      margin-bottom: 4px;
    }
  }
  img {
    height: auto;
    max-width: 396px;
  }
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    margin: 0;
    max-width: none;
  }
`

export default Farm
