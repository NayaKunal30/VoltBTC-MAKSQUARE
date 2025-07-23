<!-- BANNER -->
<p align="center">
  <img src="Project details and workflow images/VOLTBTC LOGO.png" alt="VoltBTC Logo" width="120" style="border-radius: 50%;"/>
</p>

<h1 align="center">⚡ VoltBTC – Modular BTC Finance on Starknet ⚡</h1>

<p align="center">
  <b>Grow your Bitcoin (WBTC) safely, automatically, and transparently with next-gen DeFi vaults, bonds, and strategies.</b>
</p>

<p align="center">
  <a href="#-what-is-voltbtc">⚡ What is VoltBTC?</a> • 
  <a href="#homepage">🖼 Homepage</a> • 
  <a href="#-unique-selling-points-usp">🏆 USP</a> • 
  <a href="#-features">✨ Features</a> • 
  <a href="#-project-structure">📦 Structure</a> • 
  <a href="#-quick-start">🚀 Quick Start</a> • 
  <a href="#-architecture">🛠 Architecture</a> • 
  <a href="#-workflow">🔄 Workflow</a> • 
  <a href="#-how-to-use-a-z">📝 How to Use</a> • 
  <a href="#-glossary">📖 Glossary</a> • 
  <a href="#-use-cases">🎯 Use Cases</a> • 
  <a href="#-performance--security">📊 Performance</a> • 
  <a href="#-visuals--workflow">🖼 Visuals</a> • 
  <a href="#-contributing">🤝 Contribute</a> • 
  <a href="#-faq">❓ FAQ</a>
</p>


---

## 🌟 What is VoltBTC?
VoltBTC is a modular DeFi platform built on Starknet (Ethereum Layer 2) that helps you grow your Bitcoin (WBTC) through smart contracts, automated vaults, fixed-term bonds, community strategies, and integrated DeFi education. It’s designed for everyone—from total beginners to DeFi pros.

## VoltBTC in one Paragraph to Understand :
<div style="
  color: #d400ff;
  background-color: #0a0a0a;
  padding: 20px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.6;
  text-align: justify;
  text-shadow: 0 0 3px #d400ff, 0 0 6px #9e00b3;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
">
  VoltBTC is a user-friendly platform built on the Starknet blockchain that lets people grow their Bitcoin (BTC) through decentralized finance (DeFi) without needing to leave the Bitcoin ecosystem. It offers features like automated vaults that optimize earnings (2–10% annual returns), fixed-term BTC bonds (5–15% returns for 7, 30, or 90 days), and a strategy marketplace where users can create, share, or follow custom investment plans. The platform is secure, transparent, and non-custodial, meaning users always control their funds, with all actions handled by open-source smart contracts. It also includes a built-in learning section to teach beginners about DeFi, uses modern tech like React and Next.js for a smooth experience, and keeps transaction fees low (under $0.10) with fast confirmations. In short, VoltBTC makes it easy for anyone to earn more BTC safely and learn about DeFi in one place.
</div>



---
### Website Screenshots
#### Homepage
<p align="center">
  <img src="Project details and workflow images\homepage.png" width="600" alt="Homepage"/>
</p>

<table>
  <tr>
    <td align="center">
      <strong>📊 Dashboard</strong><br>
      <img src="Project details and workflow images/dashboard.png" width="400" alt="Dashboard"/>
    </td>
    <td align="center">
      <strong>💰 Bonds Page</strong><br>
      <img src="Project details and workflow images/bonds.png" width="400" alt="Bonds"/>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td valign="top" width="50%">
      <h3>🏆 Unique Selling Points (USP)</h3>
      <ul>
        <li><strong>BTC-First:</strong> Focused on Bitcoin and WBTC yield generation.</li>
        <li><strong>Automation:</strong> Auto-rebalancing vaults optimize returns.</li>
        <li><strong>Transparency:</strong> All strategies and returns are visible and auditable.</li>
        <li><strong>Education:</strong> Built-in learning section for DeFi beginners.</li>
        <li><strong>Composability:</strong> Create, share, and follow custom strategies.</li>
      </ul>
    </td>
    <td valign="top" width="50%">
      <h3>✨ Features</h3>
      <ul>
        <li><strong>Vaults:</strong> Deposit WBTC and earn yield via automated or manual strategies.</li>
        <li><strong>Bonds:</strong> Lock BTC for fixed terms (7, 30, 90 days) for extra yield.</li>
        <li><strong>Marketplace:</strong> Discover, follow, and copy community strategies.</li>
        <li><strong>Forecasting:</strong> Simulate and compare potential returns.</li>
        <li><strong>History:</strong> Track deposits, withdrawals, and actions.</li>
        <li><strong>DeFi Learning:</strong> Simple guides and explanations for new users.</li>
      </ul>
    </td>
  </tr>
</table>

---

## 📦 Project Structure
- **apps/contracts/** — Cairo smart contracts for Starknet (BTC vault, rBTC, etc.)
- **apps/webapp/** — Next.js 15 frontend
- **Root** — Monorepo configs, shared dependencies, and docs

---

## 🚀 Quick Start

### 1. Clone the Repository
```sh
git clone <your-repo-url>
cd VoltBTC
```

### 2. Install Dependencies
```sh
cd apps/webapp
bun install # or pnpm install / npm install
```
```sh
cd apps/contracts
scarb build
```

### 3. Deploy Smart Contracts
```sh
scarb build
starkli deploy --account <YOUR_ACCOUNT_ADDRESS> --rpc <SEPOLIA_RPC_URL> target/dev/btc_vault.sierra.json
starkli deploy --account <YOUR_ACCOUNT_ADDRESS> --rpc <SEPOLIA_RPC_URL> target/dev/rbBTC.sierra.json
```

### 4. Configure Frontend
Edit `apps/webapp/.env`:
```env
NEXT_PUBLIC_BTC_VAULT_ADDRESS=0x...
NEXT_PUBLIC_rBTC_ADDRESS=0x...
```

### 5. Run Frontend
```sh
cd apps/webapp
bun dev # or pnpm dev / npm run dev
```
Visit [http://localhost:3000](http://localhost:3000).

---

## 🛠 Architecture
- **Smart Contracts**: Cairo on Starknet Sepolia.
- **Frontend**: Next.js 15 (React), TailwindCSS, shadcn/ui.
- **Wallets**: Braavos, ArgentX.
- **Backend**: Supabase for DB/auth.
- **APIs**: Pragma (oracle), Vesu, Ekubo, GraphQL.

```
+-------------------+
|   User Wallet     |
+--------+----------+
         |
         v
+-------------------+
|   Next.js Frontend|
+--------+----------+
         |
         v
+-------------------+
|  API Integrations |
| (Pragma, Vesu,    |
|  Ekubo, Supabase) |
+--------+----------+
         |
         v
+-------------------+
|  Starknet Smart   |
|    Contracts      |
+-------------------+
```

---

## 🔄 Workflow
1. **Connect Wallet**
2. **Deposit WBTC**
3. **Choose Strategy**
4. **Earn Yield**
5. **Track Growth**
6. **Withdraw Anytime**
7. **Try Bonds**
8. **Explore Learn Section**

---

## 📝 How to Use (A-Z)
A. Go to the website  
B. Click 'Connect Wallet'  
C. Deposit WBTC from your wallet  
D. Pick a strategy or let the app auto-allocate  
E. Watch your BTC grow on the dashboard  
F. Try Bonds for fixed returns  
G. Forecast future yield  
H. Withdraw at any time  
I. See history of all actions  
J. Learn DeFi basics inside the app  
K. Get help from the Learn section

---

## 💡 Glossary
- **DeFi**: Decentralized Finance via smart contracts.
- **WBTC**: Wrapped Bitcoin (1:1 with BTC on Starknet).
- **Vault**: Automated yield strategies.

---

## 🎯 Use Cases
- **Passive Saver**: Deposit and earn.
- **Active Investor**: Experiment with strategies.
- **Learner**: Use in-app tutorials.
- **Community Member**: Share and follow strategies.

---

## 📊 Performance & Security
| Metric                    | Value                          |
|---------------------------|-------------------------------|
| Transaction Fee           | <$0.10 (L2)                   |
| Confirmation Time         | Seconds to minutes            |
| Vault Yield (APY)         | 2–10%                         |
| Bond Yield (APY)          | 5–15%                         |
| First Yield Time          | Within minutes                |
| Withdrawal Latency        | Minutes                       |
| User Control              | 100% non-custodial            |
| Security                  | Open-source & auditable       |
| Education                 | Built-in guides               |

---

## 🖼 Visuals & Workflow

#### 🎯 Idea Pitch

Presenting the core vision, strategy, and innovation behind **VoltBTC** — how it revolutionizes BTC-based DeFi with automated vaults, transparent returns, and beginner-friendly design.

📎 [**View Full Pitch Deck (PDF)**](./VOLTBTC%20IDEA%20PPT%20-%20MAKSQUARE.pdf)

📽️ **Watch the Idea Pitch Video**  
Gain quick insight into the VoltBTC concept, user flow, and technical architecture through our short visual walkthrough.

🔗 [Watch on YouTube](https://your-youtube-link-here.com)




### 🛠️ Technical Architecture & Project Overview

<table>
  <tr>
    <td align="center">
      <strong>Technical Architecture</strong><br>
      <img src="Project details and workflow images/VOLTBTC Technical Architecture.png" width="400" alt="Technical Architecture"/>
    </td>
    <td align="center">
      <strong>Project Structure</strong><br>
      <img src="Project details and workflow images/VOLTBTC Project Structure.png" width="400" alt="Project Structure"/>
    </td>
  </tr>
  <tr>
    <td align="center">
      <strong>Workflow Diagram</strong><br>
      <img src="Project details and workflow images/VOLTBTC Project Workflow.png" width="400" alt="Workflow Diagram"/>
    </td>
    <td align="center">
      <strong>How to Use VoltBTC</strong><br>
      <img src="Project details and workflow images/How to Use VoltBTC.png" width="400" alt="How to Use VoltBTC"/>
    </td>
  </tr>
</table>

---

## 🧑‍💻 Contributing
We welcome pull requests, issues, and suggestions to improve VoltBTC.

---

## 📚 FAQ
**Q: Is VoltBTC safe?**  
A: Yes. It's fully open-source and your funds remain in your wallet.

**Q: Do I need to know DeFi?**  
A: No! VoltBTC is beginner-friendly.

**Q: Can I lose BTC?**  
A: Risks exist in DeFi. Always start small and read guides.

**Q: Which wallets are supported?**  
A: Braavos and ArgentX on Starknet Sepolia.

---

<p align="center">
  <b>🚀 Start your DeFi journey with VoltBTC today!</b>
</p>
