import React from 'react'
import coinbase from "../assets/icons/coinbase.svg"
import binance from "../assets/icons/binance.svg"
import bitmex from "../assets/icons/bitmex.svg"
import blockchain from "../assets/icons/blockchain.svg"

const partnersLogos = [
    {
        img:coinbase,
        name:"coinbase"
    },
    {
        img:binance,
        name:"binance"
    },
    {
        img:bitmex,
        name:"bitmex"
    },
    {
        img:blockchain,
        name:"blockchain"
    }
]
const Partners = () => {
  return (
    <div className='partners'>
        {partnersLogos.map((partner)=>(
            <img
            src={partner.img}
            alt={partner.name}
            key={partner.img}
            className='partner'
            >
            </img>
        ))}
    </div>
  )
}

export default Partners