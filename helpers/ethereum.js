import { utils } from "ethers"

export function isEthereumAddress(address) {
  try {
    utils.getAddress(address)
    return true
  } catch (error) {
    return false
  }
}
