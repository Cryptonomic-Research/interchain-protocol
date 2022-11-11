# BKC Interchain Protocol

## Overview
BKC interchain protocol is a interoperability protocol for Bitkub Chain which enable users to cross their transaction between Bitkub Chain and the other chain both EVM and non-EVM blockchains

## Development
### Setup
- copy .env.example to .env and fill in variables
- `yarn install`
### Testing
`yarn test`

### Gas Uasge
`yarn test:gas`
### Coverage
`yarn test:coverage`



## Deployment Guide

Deploy networks are generated based on tags.

#### Hardhat and Local
`yarn dev`

spins up local environment and deploys contracts 

#### Development
```
npx hardhat --network bkc_testnet deploy
```

#### Production
```
npx hardhat --network bkc deploy
```


### Acknowledgments

Thank you to the core development team for building the LayerZero Endpoints: Ryan Zarick, Isaac Zhang, Caleb Banister, Carmen Cheng and T. Riley Schwarz 


### LICENSING
The primary license for LayerZero is the Business Source License 1.1 (BUSL-1.1). see [`LICENSE`](./LICENSE).
