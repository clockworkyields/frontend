import React from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { allLanguages } from 'config/localisation/languageCodes'
// import { LanguageContext } from 'contexts/Localisation/languageContext'
import useTheme from 'hooks/useTheme'
import { usePriceCakeBusd } from 'state/hooks'
import { Menu as UikitMenu } from 'clock-uikit'
import config from './config'

const Menu = (props) => {
  const { account, connect, reset } = useWallet()
  // const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const cakePriceUsd = usePriceCakeBusd()

  return (
    <UikitMenu
      account={account}
      login={connect}
      logout={reset}
      isDark={isDark}
      toggleTheme={toggleTheme}
      // currentLang={selectedLanguage && selectedLanguage.code}
      langs={allLanguages}
      // setLang={setSelectedLanguage}
      cakePriceUsd={cakePriceUsd.toNumber()}
      links={config}
      priceLink="https://pancakeswap.info/token/0xA0bB7B9f0dB2FaF0eE51fAbb4502c430750Eea6F"
      {...props}
    />
  )
}

export default Menu
