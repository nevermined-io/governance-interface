/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NVMToken, NVMTokenInterface } from "../NVMToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint96",
        name: "_initialSupply",
        type: "uint96",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "fromDelegate",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "toDelegate",
        type: "address",
      },
    ],
    name: "DelegateChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    name: "DelegateVotesChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DELEGATION_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DOMAIN_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "rawAmount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "checkpoints",
    outputs: [
      {
        internalType: "uint32",
        name: "fromBlock",
        type: "uint32",
      },
      {
        internalType: "uint96",
        name: "votes",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "delegateBySig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "delegates",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getCurrentVotes",
    outputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPriorVotes",
    outputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "numCheckpoints",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "rawAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalVotingPower",
    outputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "rawAmount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "rawAmount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "votingPower",
    outputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162002a6138038062002a6183398101604081905262000034916200083e565b8282601283338484848280600090805190602001906200005692919062000709565b505081516200006d90600790602085019062000709565b5060f81b7fff000000000000000000000000000000000000000000000000000000000000001660805250620000a590508183620000b3565b505050505050505062000a33565b6001600160a01b038216620001355760405162461bcd60e51b815260206004820152603860248201527f566f74696e67506f7765723a3a5f6d696e74566f7465733a2063616e6e6f742060448201527f6d696e7420746f20746865207a65726f2061646472657373000000000000000060648201526084015b60405180910390fd5b6001600160a01b03821660009081526002602090815260409182902054825160608101909352602e80845262000183936001600160601b039092169285929190620029849083013962000271565b6001600160a01b03831660009081526002602090815260409182902080546001600160601b0319166001600160601b03948516179055600154825160608101909352602f808452620001e79491909116928592909190620029b29083013962000271565b600180546001600160601b0319166001600160601b0392831617905560405190821681526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a36001600160a01b038083166000908152600360205260408120546200026d921683620002c3565b5050565b60008062000280848662000927565b9050846001600160601b0316816001600160601b031610158390620002ba5760405162461bcd60e51b81526004016200012c9190620008c7565b50949350505050565b816001600160a01b0316836001600160a01b031614158015620002ef57506000816001600160601b0316115b156200048b576001600160a01b03831615620003c0576001600160a01b03831660009081526005602052604081205463ffffffff1690816200033357600062000382565b6001600160a01b038516600090815260046020526040812090620003596001856200094c565b63ffffffff16815260208101919091526040016000205464010000000090046001600160601b03165b90506000620003ac828560405180606001604052806027815260200162002a3a6027913962000490565b9050620003bc86848484620004df565b5050505b6001600160a01b038216156200048b576001600160a01b03821660009081526005602052604081205463ffffffff169081620003fe5760006200044d565b6001600160a01b038416600090815260046020526040812090620004246001856200094c565b63ffffffff16815260208101919091526040016000205464010000000090046001600160601b03165b90506000620004778285604051806060016040528060268152602001620029e16026913962000271565b90506200048785848484620004df565b5050505b505050565b6000836001600160601b0316836001600160601b031611158290620004ca5760405162461bcd60e51b81526004016200012c9190620008c7565b50620004d7838562000974565b949350505050565b6000620005064360405180606001604052806033815260200162002a0760339139620006d6565b905060008463ffffffff161180156200056357506001600160a01b038516600090815260046020526040812063ffffffff831691620005476001886200094c565b63ffffffff908116825260208201929092526040016000205416145b15620005d6576001600160a01b03851660009081526004602052604081208391620005906001886200094c565b63ffffffff168152602081019190915260400160002080546001600160601b039290921664010000000002600160201b600160801b031990921691909117905562000681565b60408051808201825263ffffffff80841682526001600160601b0380861660208085019182526001600160a01b038b166000908152600482528681208b8616825290915294909420925183549451909116640100000000026001600160801b031990941691161791909117905562000650846001620008fc565b6001600160a01b0386166000908152600560205260409020805463ffffffff191663ffffffff929092169190911790555b604080516001600160601b038086168252841660208201526001600160a01b038716917fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724910160405180910390a25050505050565b6000816401000000008410620007015760405162461bcd60e51b81526004016200012c9190620008c7565b509192915050565b8280546200071790620009ca565b90600052602060002090601f0160209004810192826200073b576000855562000786565b82601f106200075657805160ff191683800117855562000786565b8280016001018555821562000786579182015b828111156200078657825182559160200191906001019062000769565b506200079492915062000798565b5090565b5b8082111562000794576000815560010162000799565b600082601f830112620007c0578081fd5b81516001600160401b0380821115620007dd57620007dd62000a1d565b604051601f8301601f19908116603f0116810190828211818310171562000808576200080862000a1d565b8160405283815286602085880101111562000821578485fd5b6200083484602083016020890162000997565b9695505050505050565b60008060006060848603121562000853578283fd5b83516001600160401b03808211156200086a578485fd5b6200087887838801620007af565b945060208601519150808211156200088e578384fd5b506200089d86828701620007af565b604086015190935090506001600160601b0381168114620008bc578182fd5b809150509250925092565b6020815260008251806020840152620008e881604085016020870162000997565b601f01601f19169190910160400192915050565b600063ffffffff8083168185168083038211156200091e576200091e62000a07565b01949350505050565b60006001600160601b038281168482168083038211156200091e576200091e62000a07565b600063ffffffff838116908316818110156200096c576200096c62000a07565b039392505050565b60006001600160601b03838116908316818110156200096c576200096c62000a07565b60005b83811015620009b45781810151838201526020016200099a565b83811115620009c4576000848401525b50505050565b600181811c90821680620009df57607f821691505b6020821081141562000a0157634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b60805160f81c611f3262000a5260003960006101bd0152611f326000f3fe608060405234801561001057600080fd5b506004361061011d5760003560e01c806306fdde0314610122578063095ea7b31461014057806318160ddd1461016357806320606b701461017957806323b872dd1461018e57806330adf81f146101a1578063313ce567146101b6578063587cde1e146101e75780635c19a95c14610228578063671b37931461023d5780636fcfff451461025757806370a0823114610292578063782d6fe1146102a55780637ecebe00146102b857806395d89b41146102d8578063a9059cbb146102e0578063b4b5ea57146102f3578063c07473f614610306578063c3cda52014610319578063d505accf1461032c578063dd62ed3e1461033f578063e7a324dc14610381578063f1127ed814610396575b600080fd5b61012a6103fd565b6040516101379190611b1f565b60405180910390f35b61015361014e366004611969565b61040c565b6040519015158152602001610137565b61016b6104be565b604051908152602001610137565b61016b600080516020611ced83398151915281565b61015361019c3660046118c5565b6104e0565b61016b600080516020611e4a83398151915281565b60405160ff7f0000000000000000000000000000000000000000000000000000000000000000168152602001610137565b6102106101f5366004611879565b6003602052600090815260409020546001600160a01b031681565b6040516001600160a01b039091168152602001610137565b61023b610236366004611879565b610696565b005b6001546001600160601b03165b6040516101379190611b72565b61027d610265366004611879565b60056020526000908152604090205463ffffffff1681565b60405163ffffffff9091168152602001610137565b61016b6102a0366004611879565b6106a3565b61024a6102b3366004611969565b6106bd565b61016b6102c6366004611879565b60066020526000908152604090205481565b61012a610943565b6101536102ee366004611969565b6109d5565b61024a610301366004611879565b610a8a565b61024a610314366004611879565b610b08565b61023b610327366004611992565b610b2c565b61023b61033a366004611900565b610dae565b61016b61034d366004611893565b6001600160a01b0391821660009081526008602090815260408083209390941682529190915220546001600160601b031690565b61016b600080516020611d0d83398151915281565b6103d96103a43660046119e9565b600460209081526000928352604080842090915290825290205463ffffffff811690600160201b90046001600160601b031682565b6040805163ffffffff90931683526001600160601b03909116602083015201610137565b6060610407611108565b905090565b60008060001983141561042757506001600160601b0361044c565b61044983604051806060016040528060248152602001611e8a60249139611117565b90505b3360008181526008602090815260408083206001600160a01b03891680855292529182902080546001600160601b0319166001600160601b0386161790559051909190600080516020611e6a833981519152906104aa908590611b72565b60405180910390a360019150505b92915050565b60006104d26001546001600160601b031690565b6001600160601b0316905090565b60006001600160a01b0383163014156105635760405162461bcd60e51b81526020600482015260466024820152600080516020611eae83398151915260448201527f657246726f6d3a2063616e6e6f742073656e6420746f6b656e7320746f20636f6064820152651b9d1c9858dd60d21b608482015260a4015b60405180910390fd5b6001600160a01b03841660009081526008602090815260408083203380855290835281842054825160608101909352602480845291946001600160601b039091169390926105b9928892611e8a90830139611117565b9050866001600160a01b0316836001600160a01b0316141580156105e657506001600160601b0382811614155b1561067e57600061061083836040518060600160405280603c8152602001611cb1603c9139611146565b6001600160a01b038981166000818152600860209081526040808320948a16808452949091529081902080546001600160601b0319166001600160601b038616179055519293509091600080516020611e6a83398151915290610674908590611b72565b60405180910390a3505b610689878783611190565b5060019695505050505050565b6106a033826113bd565b50565b60006106ae82610b08565b6001600160601b031692915050565b600043821061071d5760405162461bcd60e51b815260206004820152602660248201527f556e693a3a6765745072696f72566f7465733a206e6f742079657420646574656044820152651c9b5a5b995960d21b606482015260840161055a565b6001600160a01b03831660009081526005602052604090205463ffffffff168061074b5760009150506104b8565b6001600160a01b03841660009081526004602052604081208491610770600185611bff565b63ffffffff908116825260208201929092526040016000205416116107e3576001600160a01b0384166000908152600460205260408120906107b3600184611bff565b63ffffffff168152602081019190915260400160002054600160201b90046001600160601b031691506104b89050565b6001600160a01b038416600090815260046020908152604080832083805290915290205463ffffffff1683101561081e5760009150506104b8565b60008061082c600184611bff565b90505b8163ffffffff168163ffffffff1611156108fe57600060026108518484611bff565b61085b9190611bd0565b6108659083611bff565b6001600160a01b038816600090815260046020908152604080832063ffffffff858116855290835292819020815180830190925254928316808252600160201b9093046001600160601b0316918101919091529192508714156108d2576020015194506104b89350505050565b805163ffffffff168711156108e9578193506108f7565b6108f4600183611bff565b92505b505061082f565b506001600160a01b038516600090815260046020908152604080832063ffffffff909416835292905220546001600160601b03600160201b9091041691505092915050565b60606007805461095290611c44565b80601f016020809104026020016040519081016040528092919081815260200182805461097e90611c44565b80156109cb5780601f106109a0576101008083540402835291602001916109cb565b820191906000526020600020905b8154815290600101906020018083116109ae57829003601f168201915b5050505050905090565b60006001600160a01b038316301415610a4f5760405162461bcd60e51b81526020600482015260426024820152600080516020611eae83398151915260448201527f65723a2063616e6e6f742073656e6420746f6b656e7320746f20636f6e74726160648201526118dd60f21b608482015260a40161055a565b6000610a7383604051806060016040528060258152602001611e2560259139611117565b9050610a80338583611190565b5060019392505050565b6001600160a01b03811660009081526005602052604081205463ffffffff1680610ab5576000610b01565b6001600160a01b038316600090815260046020526040812090610ad9600184611bff565b63ffffffff168152602081019190915260400160002054600160201b90046001600160601b03165b9392505050565b6001600160a01b03166000908152600260205260409020546001600160601b031690565b6000600080516020611ced8339815191526000604051610b4c9190611a27565b6040518091039020610b5b4690565b30604051602001610b6f9493929190611add565b60408051808303601f190181528282528051602091820120600080516020611d0d833981519152828501526001600160a01b038b1684840152606084018a905260808085018a90528351808603909101815260a085019093528251929091019190912090925090600090610be9908490849060c001611ac2565b604051602081830303815290604052805190602001209050600060018288888860405160008152602001604052604051610c269493929190611b01565b6020604051602081039080840390855afa158015610c48573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610cb95760405162461bcd60e51b815260206004820152602560248201527f556e693a3a64656c656761746542795369673a20696e76616c6964207369676e604482015264617475726560d81b606482015260840161055a565b6001600160a01b0381166000908152600660205260408120805491610cdd83611c7f565b919050558914610d395760405162461bcd60e51b815260206004820152602160248201527f556e693a3a64656c656761746542795369673a20696e76616c6964206e6f6e636044820152606560f81b606482015260840161055a565b87421115610d975760405162461bcd60e51b815260206004820152602560248201527f556e693a3a64656c656761746542795369673a207369676e61747572652065786044820152641c1a5c995960da1b606482015260840161055a565b610da1818b6113bd565b505050505b505050505050565b6000600019861415610dc857506001600160601b03610ded565b610dea86604051806060016040528060238152602001611d8260239139611117565b90505b6000600080516020611ced833981519152610e066103fd565b80519060200120610e144690565b30604051602001610e289493929190611add565b60408051601f1981840301815291815281516020928301206001600160a01b038c16600090815260069093529082208054919350600080516020611e4a833981519152918c918c918c9186610e7c83611c7f565b909155506040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810188905260e00160405160208183030381529060405280519060200120905060008282604051602001610ee5929190611ac2565b604051602081830303815290604052805190602001209050600060018289898960405160008152602001604052604051610f229493929190611b01565b6020604051602081039080840390855afa158015610f44573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610fa75760405162461bcd60e51b815260206004820152601e60248201527f556e693a3a7065726d69743a20696e76616c6964207369676e61747572650000604482015260640161055a565b8b6001600160a01b0316816001600160a01b0316146110045760405162461bcd60e51b8152602060048201526019602482015278155b9a4e8e9c195c9b5a5d0e881d5b985d5d1a1bdc9a5e9959603a1b604482015260640161055a565b884211156110545760405162461bcd60e51b815260206004820152601e60248201527f556e693a3a7065726d69743a207369676e617475726520657870697265640000604482015260640161055a565b84600860008e6001600160a01b03166001600160a01b0316815260200190815260200160002060008d6001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160601b0302191690836001600160601b031602179055508a6001600160a01b03168c6001600160a01b0316600080516020611e6a833981519152876040516110f29190611b72565b60405180910390a3505050505050505050505050565b60606000805461095290611c44565b600081600160601b841061113e5760405162461bcd60e51b815260040161055a9190611b1f565b509192915050565b6000836001600160601b0316836001600160601b03161115829061117d5760405162461bcd60e51b815260040161055a9190611b1f565b506111888385611c24565b949350505050565b6001600160a01b0383166111f85760405162461bcd60e51b815260206004820152603b6024820152600080516020611d2d83398151915260448201527a6e736665722066726f6d20746865207a65726f206164647265737360281b606482015260840161055a565b6001600160a01b03821661125e5760405162461bcd60e51b81526020600482015260396024820152600080516020611d2d8339815191526044820152786e7366657220746f20746865207a65726f206164647265737360381b606482015260840161055a565b6001600160a01b0383166000908152600260209081526040918290205482516060810190935260358084526112a9936001600160601b039092169285929190611d4d90830139611146565b6001600160a01b03848116600090815260026020908152604080832080546001600160601b0319166001600160601b0396871617905592861682529082902054825160608101909352602f8084526113119491909116928592909190611ece90830139611447565b6001600160a01b038381166000818152600260205260409081902080546001600160601b0319166001600160601b0395909516949094179093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9061137e908590611b72565b60405180910390a36001600160a01b038084166000908152600360205260408082205485841683529120546113b892918216911683611494565b505050565b6001600160a01b03808316600081815260036020818152604080842080546002845282862054949093528787166001600160a01b031984168117909155905191909516946001600160601b039092169391928592917f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a4611441828483611494565b50505050565b6000806114548486611bae565b9050846001600160601b0316816001600160601b03161015839061148b5760405162461bcd60e51b815260040161055a9190611b1f565b50949350505050565b816001600160a01b0316836001600160a01b0316141580156114bf57506000816001600160601b0316115b156113b8576001600160a01b03831615611584576001600160a01b03831660009081526005602052604081205463ffffffff1690816114ff57600061154b565b6001600160a01b038516600090815260046020526040812090611523600185611bff565b63ffffffff168152602081019190915260400160002054600160201b90046001600160601b03165b905060006115728285604051806060016040528060278152602001611dfe60279139611146565b90506115808684848461163c565b5050505b6001600160a01b038216156113b8576001600160a01b03821660009081526005602052604081205463ffffffff1690816115bf57600061160b565b6001600160a01b0384166000908152600460205260408120906115e3600185611bff565b63ffffffff168152602081019190915260400160002054600160201b90046001600160601b03165b905060006116328285604051806060016040528060268152602001611da560269139611447565b9050610da6858484845b600061166043604051806060016040528060338152602001611dcb60339139611825565b905060008463ffffffff161180156116ba57506001600160a01b038516600090815260046020526040812063ffffffff83169161169e600188611bff565b63ffffffff908116825260208201929092526040016000205416145b15611728576001600160a01b038516600090815260046020526040812083916116e4600188611bff565b63ffffffff168152602081019190915260400160002080546001600160601b0392909216600160201b02600160201b600160801b03199092169190911790556117d0565b60408051808201825263ffffffff80841682526001600160601b0380861660208085019182526001600160a01b038b166000908152600482528681208b8616825290915294909420925183549451909116600160201b026001600160801b031990941691161791909117905561179f846001611b86565b6001600160a01b0386166000908152600560205260409020805463ffffffff191663ffffffff929092169190911790555b604080516001600160601b038086168252841660208201526001600160a01b038716917fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724910160405180910390a25050505050565b600081600160201b841061113e5760405162461bcd60e51b815260040161055a9190611b1f565b80356001600160a01b038116811461186357600080fd5b919050565b803560ff8116811461186357600080fd5b60006020828403121561188a578081fd5b610b018261184c565b600080604083850312156118a5578081fd5b6118ae8361184c565b91506118bc6020840161184c565b90509250929050565b6000806000606084860312156118d9578081fd5b6118e28461184c565b92506118f06020850161184c565b9150604084013590509250925092565b600080600080600080600060e0888a03121561191a578283fd5b6119238861184c565b96506119316020890161184c565b9550604088013594506060880135935061194d60808901611868565b925060a0880135915060c0880135905092959891949750929550565b6000806040838503121561197b578182fd5b6119848361184c565b946020939093013593505050565b60008060008060008060c087890312156119aa578182fd5b6119b38761184c565b955060208701359450604087013593506119cf60608801611868565b92506080870135915060a087013590509295509295509295565b600080604083850312156119fb578182fd5b611a048361184c565b9150602083013563ffffffff81168114611a1c578182fd5b809150509250929050565b600080835482600182811c915080831680611a4357607f831692505b6020808410821415611a6357634e487b7160e01b87526022600452602487fd5b818015611a775760018114611a8857611ab4565b60ff19861689528489019650611ab4565b60008a815260209020885b86811015611aac5781548b820152908501908301611a93565b505084890196505b509498975050505050505050565b61190160f01b81526002810192909252602282015260420190565b938452602084019290925260408301526001600160a01b0316606082015260800190565b93845260ff9290921660208401526040830152606082015260800190565b6000602080835283518082850152825b81811015611b4b57858101830151858201604001528201611b2f565b81811115611b5c5783604083870101525b50601f01601f1916929092016040019392505050565b6001600160601b0391909116815260200190565b600063ffffffff808316818516808303821115611ba557611ba5611c9a565b01949350505050565b60006001600160601b03828116848216808303821115611ba557611ba5611c9a565b600063ffffffff80841680611bf357634e487b7160e01b83526012600452602483fd5b92169190910492915050565b600063ffffffff83811690831681811015611c1c57611c1c611c9a565b039392505050565b60006001600160601b0383811690831681811015611c1c57611c1c611c9a565b600181811c90821680611c5857607f821691505b60208210811415611c7957634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415611c9357611c93611c9a565b5060010190565b634e487b7160e01b600052601160045260246000fdfe556e693a3a7472616e7366657246726f6d3a207472616e7366657220616d6f756e742065786365656473207370656e64657220616c6c6f77616e63658cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a866e48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf556e693a3a5f7472616e73666572546f6b656e733a2063616e6e6f7420747261556e693a3a5f7472616e73666572546f6b656e733a207472616e7366657220616d6f756e7420657863656564732062616c616e6365556e693a3a7065726d69743a20616d6f756e7420657863656564732039362062697473556e693a3a5f6d6f7665566f7465733a20766f746520616d6f756e74206f766572666c6f7773556e693a3a5f7772697465436865636b706f696e743a20626c6f636b206e756d62657220657863656564732033322062697473556e693a3a5f6d6f7665566f7465733a20766f746520616d6f756e7420756e646572666c6f7773556e693a3a7472616e736665723a20616d6f756e74206578636565647320393620626974736e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925556e693a3a617070726f76653a20616d6f756e74206578636565647320393620626974735472616e736665727261626c65566f74696e67546f6b656e3a3a7472616e7366556e693a3a5f7472616e73666572546f6b656e733a207472616e7366657220616d6f756e74206f766572666c6f7773a2646970667358221220be8d2a1f70c0a0c985d3d8b9f9a7f4b23b4713bbfe60d2ebeb7c7b1b81ecc7f464736f6c63430008040033566f74696e67506f7765723a3a5f6d696e74566f7465733a206d696e7420616d6f756e74206f766572666c6f7773566f74696e67506f7765723a3a5f6d696e74566f7465733a20746f74616c20737570706c79206f766572666c6f7773556e693a3a5f6d6f7665566f7465733a20766f746520616d6f756e74206f766572666c6f7773556e693a3a5f7772697465436865636b706f696e743a20626c6f636b206e756d62657220657863656564732033322062697473556e693a3a5f6d6f7665566f7465733a20766f746520616d6f756e7420756e646572666c6f7773";

export class NVMToken__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _name: string,
    _symbol: string,
    _initialSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NVMToken> {
    return super.deploy(
      _name,
      _symbol,
      _initialSupply,
      overrides || {}
    ) as Promise<NVMToken>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    _initialSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _initialSupply,
      overrides || {}
    );
  }
  attach(address: string): NVMToken {
    return super.attach(address) as NVMToken;
  }
  connect(signer: Signer): NVMToken__factory {
    return super.connect(signer) as NVMToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NVMTokenInterface {
    return new utils.Interface(_abi) as NVMTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NVMToken {
    return new Contract(address, _abi, signerOrProvider) as NVMToken;
  }
}
