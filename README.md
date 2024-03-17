# MeterTrust

## Purpose

MeterTrust empowers consumers to manage their energy usage with confidence.

* **Verifiable Readings**: We ensure accurate billing by placing smart meter readings directly on a secure blockchain, accessible to both consumers and suppliers.
* **Seamless Payments**: Pay for your energy instantly using stablecoins through our integrated payment providers.
* **Future Innovation**: We're exploring peer-to-peer lending options to help consumers who may need short-term support managing their energy bills.

## Architecture

### Current Architecture

![HLA](/images/metertrust-hla.png)

### Tech Stack

![Tech Stack](/images/metertrust-stack.png)

## Functional Description

### Smart Meter Readings

Smart meter readings are sent to MeterTrust platform. Once the reading is received then the consumer is notified a reading is ready for them to approve. This is out of scope for the Proof of Concept (PoC).

### Authentication

We are using two independent methods to authenticate a consumer.

1. Login
2. Identity verification

#### Login

Consumers will need to login using their crypto wallet. We use Dynamic as the platform to give users a very simple and intuitive login experience.

#### Identity Verification

We are using World coin to validate the Consumer, who they say they are.

#### Commit Reading on-chain

Once the consumer and the energy supplier approve the readings its committed on the blockchain. We are using BASE to write on the blockchain.

#### Payment

We are using Celo pay and Gnosis pay as simple and easy payment methods for consumers to pay for their energy immediately.

### User Flows

![User Flows](/images/metertrust-user-flow.png)

### System Flow

![System Flow](/images/metertrust-system-flow.png)

## Technical Description

The frontend is a React application that we can start locally from the `frontend` directory:

```bash
npm run start
```

The backend is a Node.js server, which is required to send the verification proof to World ID. We need to run it at the same time as the frontend:

```bash
node index.js
```

From the front-end, we log in to MeterTrust using Dynamic. Upon successful login, we need to verify our human identity using WorldID.

From the Dashboard we have an option to validate or reject our readings. Once the readings have been confirmed, we can proceed to the payment screen, where we either pay the bill ourselves or submit a request for funding.
