import React from 'react'
import './Contracts.css'
import { ContractInfo } from "./Component/ContractInfo"

export const AuditedContracts = () => (
    <div className="contracts">
        <h1>Contracts</h1>
        <ContractInfo />
        <ContractInfo />
    </div>
)
