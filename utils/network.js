const { CHAIN_ID, CHAIN_STAGE, ChainStage } = require("@layerzerolabs/lz-sdk")

function getEndpointId() {
    if (isLocalhost()) {
        return 30137
    }
    if (isBKC()) {
        return 25925
    }
    return CHAIN_ID[hre.network.name]
}

function isLocalhost() {
    return hre.network.name === "localhost" || hre.network.name === "hardhat"
}

function isBKC() {
    return hre.network.name === "bkc" || hre.network.name === "bkc_testnet"
}

function isTestnet() {
    return (
        hre.network.name === "localhost" ||
        hre.network.name === "hardhat" ||
        CHAIN_STAGE[hre.network.name] === ChainStage.TESTNET ||
        CHAIN_STAGE[hre.network.name] === ChainStage.TESTNET_SANDBOX
    )
}

module.exports = {
    getEndpointId,
    isTestnet,
    isLocalhost,
    isBKC,
}
