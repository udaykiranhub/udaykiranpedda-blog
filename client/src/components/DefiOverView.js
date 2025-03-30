import React from "react";
import {
  ArrowRight,
  HardDrive,
  Layers,
  Lock,
  RefreshCw,
  TrendingUp,
  Users,
  DollarSign,
  Smartphone,
  Landmark,
  ChevronRight,
  ArrowDown,
  ArrowUp,
  PieChart,
  Clock,
  Shield,
  Activity
} from "lucide-react";

const DefiFlow = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">DeFi Protocol Execution Flow</h2>
      
      {/* Step-by-Step Lending/Borrowing Flow */}
      <div className="defi-process mb-5">
        <h4 className="mb-4 text-center"><Layers className="me-2" />Lending & Borrowing Protocol</h4>
        
        <div className="process-steps">
          {/* Step 1 */}
          <div className="process-step">
            <div className="step-header">
              <div className="step-number">1</div>
              <h5>Liquidity Provision</h5>
            </div>
            <div className="step-content">
              <div className="step-icon">
                <ArrowDown size={24} className="text-primary" />
              </div>
              <p>
                <strong>Example (Aave):</strong> Users deposit ETH into the protocol's liquidity pool
                and receive aTokens (interest-bearing tokens)
              </p>
            </div>
          </div>
          
          <ChevronRight size={24} className="step-connector" />
          
          {/* Step 2 */}
          <div className="process-step">
            <div className="step-header">
              <div className="step-number">2</div>
              <h5>Borrowing</h5>
            </div>
            <div className="step-content">
              <div className="step-icon">
                <ArrowUp size={24} className="text-success" />
              </div>
              <p>
                <strong>Example:</strong> Borrower deposits DAI as collateral (at 150% ratio) 
                and borrows USDC against it
              </p>
            </div>
          </div>
          
          <ChevronRight size={24} className="step-connector" />
          
          {/* Step 3 */}
          <div className="process-step">
            <div className="step-header">
              <div className="step-number">3</div>
              <h5>Interest Accrual</h5>
            </div>
            <div className="step-content">
              <div className="step-icon">
                <Clock size={24} className="text-warning" />
              </div>
              <p>
                <strong>Real-time:</strong> Lenders earn variable APY (e.g., 3.2% on ETH deposits)
                <br />
                Borrowers pay interest (e.g., 5.8% on USDC loans)
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* DEX Trading Flow */}
      <div className="defi-process mb-5">
        <h4 className="mb-4 text-center"><RefreshCw className="me-2" />DEX Trading Protocol</h4>
        
        <div className="process-steps">
          {/* Step 1 */}
          <div className="process-step">
            <div className="step-header">
              <div className="step-number">1</div>
              <h5>Liquidity Pool Creation</h5>
            </div>
            <div className="step-content">
              <div className="step-icon">
                <PieChart size={24} className="text-info" />
              </div>
              <p>
                <strong>Example (Uniswap):</strong> LP provides equal value of ETH and USDC 
                to create a 50/50 pool
              </p>
            </div>
          </div>
          
          <ChevronRight size={24} className="step-connector" />
          
          {/* Step 2 */}
          <div className="process-step">
            <div className="step-header">
              <div className="step-number">2</div>
              <h5>Price Determination</h5>
            </div>
            <div className="step-content">
              <div className="step-icon">
                <Activity size={24} className="text-danger" />
              </div>
              <p>
                <strong>Automated:</strong> Prices adjust via x*y=k formula based on 
                pool reserves (e.g., 1 ETH = 1800 USDC)
              </p>
            </div>
          </div>
          
          <ChevronRight size={24} className="step-connector" />
          
          {/* Step 3 */}
          <div className="process-step">
            <div className="step-header">
              <div className="step-number">3</div>
              <h5>Fee Distribution</h5>
            </div>
            <div className="step-content">
              <div className="step-icon">
                <DollarSign size={24} className="text-success" />
              </div>
              <p>
                <strong>Real-time:</strong> 0.3% trade fees distributed to LPs proportionally
                <br />
                (e.g., $1M volume → $3,000 to pool)
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Yield Farming Example */}
      <div className="defi-application mb-5">
        <h4 className="mb-4 text-center"><TrendingUp className="me-2" />Yield Farming in Action</h4>
        
        <div className="app-flow">
          <div className="app-step">
            <div className="app-icon bg-primary">
              <Lock size={20} />
            </div>
            <h6>1. Provide Liquidity</h6>
            <p>User deposits ETH-USDC into Uniswap V3</p>
          </div>
          
          <ChevronRight size={20} className="app-connector" />
          
          <div className="app-step">
            <div className="app-icon bg-success">
              <RefreshCw size={20} />
            </div>
            <h6>2. Receive LP Tokens</h6>
            <p>Gets UNI-V3-LP tokens representing share</p>
          </div>
          
          <ChevronRight size={20} className="app-connector" />
          
          <div className="app-step">
            <div className="app-icon bg-warning">
              <TrendingUp size={20} />
            </div>
            <h6>3. Stake in Farm</h6>
            <p>Deposits LP tokens into Yearn Finance vault</p>
          </div>
          
          <ChevronRight size={20} className="app-connector" />
          
          <div className="app-step">
            <div className="app-icon bg-info">
              <DollarSign size={20} />
            </div>
            <h6>4. Earn Yield</h6>
            <p>Receives 8.5% APY in ETH + YFI tokens</p>
          </div>
        </div>
      </div>
      
      {/* DeFi Architecture Overview */}
      <div className="defi-architecture">
        <h4 className="mb-4 text-center"><HardDrive className="me-2" />DeFi Protocol Stack</h4>
        
        <div className="architecture-layers">
          {/* Layer 1 */}
          <div className="layer">
            <div className="layer-header bg-primary text-white">
              <HardDrive size={18} className="me-2" />
              Blockchain Layer
            </div>
            <div className="layer-content">
              <p>Ethereum, Arbitrum, Optimism</p>
              <p>Smart contract execution</p>
            </div>
          </div>
          
          <ArrowDown size={20} className="layer-connector" />
          
          {/* Layer 2 */}
          <div className="layer">
            <div className="layer-header bg-success text-white">
              <Layers size={18} className="me-2" />
              Core Protocols
            </div>
            <div className="layer-content">
              <p>Aave (Lending), Uniswap (DEX)</p>
              <p>Compound, Curve, MakerDAO</p>
            </div>
          </div>
          
          <ArrowDown size={20} className="layer-connector" />
          
          {/* Layer 3 */}
          <div className="layer">
            <div className="layer-header bg-info text-white">
              <Smartphone size={18} className="me-2" />
              Applications
            </div>
            <div className="layer-content">
              <p>Zapper.fi, MetaMask</p>
              <p>Yearn Finance, Aave UI</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .defi-process {
          background: #f8f9fa;
          padding: 2rem;
          border-radius: 12px;
        }
        
        .process-steps {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
        }
        
        .process-step {
          flex: 1;
          min-width: 250px;
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          margin: 0.5rem;
        }
        
        .step-header {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .step-number {
          width: 30px;
          height: 30px;
          background: #0d6efd;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;
          font-weight: bold;
        }
        
        .step-content {
          text-align: center;
        }
        
        .step-icon {
          margin: 0 auto 1rem;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8f9fa;
        }
        
        .step-connector {
          align-self: center;
          color: #6c757d;
        }
        
        .defi-application {
          padding: 2rem 0;
        }
        
        .app-flow {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;
        }
        
        .app-step {
          flex: 1;
          min-width: 180px;
          text-align: center;
          padding: 1rem;
        }
        
        .app-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          color: white;
        }
        
        .app-connector {
          align-self: center;
          color: #6c757d;
        }
        
        .defi-architecture {
          background: #f8f9fa;
          padding: 2rem;
          border-radius: 12px;
        }
        
        .architecture-layers {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .layer {
          width: 100%;
          max-width: 600px;
          border-radius: 8px;
          overflow: hidden;
          margin: 0.5rem 0;
        }
        
        .layer-header {
          padding: 1rem;
          display: flex;
          align-items: center;
        }
        
        .layer-content {
          padding: 1.5rem;
          background: white;
          text-align: center;
        }
        
        .layer-connector {
          margin: 0.5rem 0;
          color: #6c757d;
        }
        
        @media (max-width: 768px) {
          .process-steps, .app-flow {
            flex-direction: column;
            align-items: center;
          }
          
          .process-step, .app-step {
            margin-bottom: 1.5rem;
            width: 100%;
          }
          
          .step-connector, .app-connector {
            transform: rotate(90deg);
            margin: 1rem 0;
          }
        }
      `}</style>
    </div>
  );
};

export default DefiFlow;