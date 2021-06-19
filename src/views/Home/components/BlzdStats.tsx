import React from 'react'
import { Card, CardBody, Heading, Text } from 'clock-uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceCakeBusd } from '../../../state/hooks'

const StyledBlzdStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const BlzdStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const farms = useFarms()
  const cakePrice = usePriceClockBusd()
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0)
  const blzdSupply = getBalanceNumber(circSupply)
  const marketCap = cakePrice.times(circSupply)

  let cakePerBlock = 0
  if (farms && farms[0] && farms[0].cakePerBlock) {
    cakePerBlock = new BigNumber(farms[0].cakePerBlock).div(new BigNumber(10).pow(18)).toNumber()
  }

  return (
    <StyledBlzdStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(534, 'CLOCK Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'Total CLOCK Supply')}</Text>
          {blzdSupply && <CardValue fontSize="14px" value={blzdSupply} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(999, 'Market Cap')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(538, 'Total CLOCK Burned')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} decimals={0} />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(540, 'New CLOCK/block')}</Text>
          <Text bold fontSize="14px">
            {cakePerBlock}
          </Text>
        </Row>
      </CardBody>
    </StyledBlzdStats>
  )
}

export default BlzdStats
