# Contents

- [I Preamble](#i-preamble)  
- [II Introduction](#ii-introduction)  
- [III Objectives](#iii-objectives)  
- [IV Mandatory part](#iv-mandatory-part)  

---

## Preamble

This subject is the production of a partnership between **42** and **BNB Chain**.

Build N Build (**BNB**) Chain is a distributed blockchain network upon which developers and innovators can build decentralized applications (**DApps**) as part of the move to Web3.

As of October 2022, BNB Chain is the world’s largest smart-contract blockchain in terms of transaction volume and daily active users. At the time of writing, it has processed **3 billion transactions** from **232 million unique addresses**, and has an ecosystem of more than **1,500 active DApps**.

The decentralized nature of the network means anyone can build a product on BNB Chain without having to ask for permission, and potentially reach a massive audience.

You can retrieve **Tbnb** for free and with no minimum coins on your wallet via this faucet: [BNB Chain Faucet](https://www.bnbchain.org/)

---

## Introduction

Welcome to the exciting world of blockchain technology!

Have you ever dreamed of creating your own digital token?  
Now is your chance to make that dream a reality.

Blockchain technology allows for the creation and distribution of unique digital assets, known as **tokens**. These tokens can represent a wide range of things, from a simple representation of currency to more complex assets like artwork or even a real-world asset.

The process of creating your own token is not without its challenges, but with the right knowledge and resources, it can be a rewarding and fulfilling experience.

So, why wait?  
Start your journey towards creating your very own token on the blockchain today!

---

## Objectives

As a participant in this project, you will have the opportunity to contribute to the creation of a digital asset on the blockchain.

This project is designed to challenge you in several areas, including your ability to master multiple programming languages and your familiarity with public blockchain technology.

While a strong background in cryptography is not required for this project, you should be prepared to learn and adapt as you work towards creating your own digital asset. This project will require you to think critically and creatively, as well as to push yourself out of your comfort zone as you navigate the complexities of blockchain technology.

Ultimately, your participation in this project will not only help you develop valuable skills and knowledge, but it will also allow you to be part of something truly innovative and exciting.

**Are you ready to take on the challenge?**  
**Let’s get started!**

---

## Mandatory part

In order to create a token, there are several technical requirements that must be met.

- You are free to choose the name of your token. Your only constraint is to have **42** in it.
- It is forbidden to use insulting terms under penalty of punishment.

You must therefore create a `README.md` file at the root of your repository explaining:
- The choices you had to make
- The reasons why you made these choices.

The language used is of course free, but you must respect the standards of the blockchain you are going to use (for example **ERC-20** for ETH or **BEP-20** for BSC).

---

### Steps:

1. **Choose a blockchain platform** that supports the creation of tokens.  
   Many different options exist, each with unique features and capabilities.

2. **Learn the programming language** used by the selected platform.  
   Examples: IDE, Truffle, Remix, Hardhat.

> ⚠️ You will never be asked to use real money for this project.  
> There are test chains to avoid this problem.

---

### Tokenizer: Build your own token

- Submit the code used to create your token in a `code` folder located at the root of your repository.
- Comment your code carefully and use readable and explicit variable/function names.
- During evaluation, there will be a **code review**.

You must be very careful about how you demonstrate the operation of your token:
- Perform minimalist actions to demonstrate its operation.
- Think about all aspects of security such as **ownership** or **privileges**.

---

### Deployment:

- Put all deployment-related content in a `deployment` folder.
- After deploying your token on a public blockchain:
  - Define its **ticker**.
  - Publish it on a blockchain explorer (e.g.: **blockscan** or **bscscan**).
  - Mention the **smart contract address** and the **network used** in your Git repository.

---

### Documentation:

- Create a folder named `documentation` at the root of your repository.
- This folder should contain all necessary information to understand how your token works and how to use it.
- You may need to develop a **whitepaper** or other documentation outlining the features and functionality of your token.

> Take the time to create clear and explicit documentation.  
> This will be reviewed during your evaluation.

---

### Demo Video (Optional):

- You may create a demo video to showcase your token and its features to potential users and investors.
- You do not need to push the video to your repository — a simple link is sufficient.
- **Creating a demo video is not required**. You will not get a better grade by creating this video.

---

### Expected Directory Structure:

```bash
$> ls -al
total XX
drwxrwxr-x 3 wil wil 4096 avril 42 20:42 .
drwxrwxrwt 17 wil wil 4096 avril 42 20:42 ..
-rw-rw-r-- 1 wil wil XXXX avril 42 20:42 README.md
drwxrwxr-x 3 wil wil 4096 avril 42 20:42 code
drwxrwxr-x 3 wil wil 4096 avril 42 20:42 deployment
drwxrwxr-x 3 wil wil 4096 avril 42 20:42 documentation
```