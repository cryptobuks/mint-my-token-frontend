import { utils } from "ethers"

export const validTokenParameters = ({
  email,
  name,
  symbol,
  supply,
  decimals,
  walletAddress,
  terms
}) =>
  validEmail(email) &&
  validName(name) &&
  validSymbol(symbol) &&
  validSupply(supply) &&
  validDecimals(decimals) &&
  validEthereumAddress(walletAddress) &&
  validTerms(terms)

export const validEmail = email => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+)$/.test(email)

export const validName = name => {
  const valid = name.length > 0 && name !== ""
  // debugger
  return valid
}

export const validSymbol = symbol => symbol.length <= 10 && symbol.length >= 0 && symbol !== ""

export const validSupply = supply => supply > 0

export const validDecimals = decimals => 18 >= decimals && decimals >= 0

export const validEthereumAddress = address => {
  try {
    utils.getAddress(address)
    return true
  } catch (error) {
    return false
  }
}

export const validTerms = terms => terms
