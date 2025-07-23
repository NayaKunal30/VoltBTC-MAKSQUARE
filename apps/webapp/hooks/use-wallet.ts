import { createContext, useContext } from 'react'
import { useAccount, useConnect, useDisconnect } from '@starknet-react/core'

interface WalletContextType {
  address: string | undefined
  connect: ReturnType<typeof useConnect>['connect']
  disconnect: ReturnType<typeof useDisconnect>['disconnect']
  connectors: ReturnType<typeof useConnect>['connectors']
  isConnecting: boolean
  isDisconnecting: boolean
}

export const WalletContext = createContext<WalletContextType | null>(null)

/**
 * Centralized wallet hook to prevent multiple instances of useAccount
 * Use this instead of calling useAccount directly in components
 */
export function useWallet(): WalletContextType {
  const context = useContext(WalletContext)
  
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider')
  }
  
  return context
}

/**
 * Hook for components that only need to check if wallet is connected
 * This is optimized to prevent unnecessary re-renders
 */
export function useWalletStatus() {
  const { address } = useWallet()
  
  return {
    isConnected: !!address,
    address,
  }
} 
