export const SEVER = 'http://35.73.85.39:80/';
export const SEVER_NFT = "http://44.196.172.34/nft/"
export const SABER_LOGO = '/img/saber.png';
export const LogoImg: {
    [name: string]: string,
} = {
    saber: '/img/saber.png',
    francium: '/img/francium.png',
    marinade: '/img/marinade.png',
    larix: '/img/larix.png',
    serum: '/img/serum.png',
    raydium: '/img/raydium.png',
    orca: '/img/orca.svg'
};

export interface SPLTokenData {
    symbol: string,
    amount: number,
    price: number,
    coingeckoId: string,
    logoUrl: string,
};

export interface WalletAction {
    sig: string,
    bt: number,
    slot: number,
    w: string,
    protocol: string,
    acts: [{
        stake: number,
        type: string,
        a_token: string,
        b_token: string,
        a_change: number,
        b_change: number,
        a_token_price: number,
        b_token_price: number,
        borrow: number,
        lend: number
    }]
}
export interface ParsedWalletAction {
    sig: string,
    bt: number,
    time: string,
    slot: number,
    w: string,
    protocol: string,
    acts: [{
        stake: number,
        type: string,
        a_token: string,
        b_token: string,
        a_change: number,
        b_change: number,
        a_token_price: number,
        b_token_price: number,
        borrow: number,
        lend: number
    }]
}



