import React from "react";
import styles from "./styles.module.scss";
import EthereumImg from "../../data/images/coins/ethereum.png";
import TetherImg from "../../data/images/coins/tether.png";
import WallFairImg from "../../data/images/wallfair-logo-coin.png";
import Button from "../Button";

const DashboardCard = ({ children }) => {
  return <div className={styles.dashboardCardContainer}>{children}</div>;
};

const DashboardCoinPairCard = ({ coinIcon, title, rows }) => {
  return (
    <DashboardCard>
      <div className={styles.dashboardCoinPair}>
        <div className={styles.titleWrapper}>
          <div className={styles.coinWrapper}>
            <img src={coinIcon} alt="coin" className={styles.coinImg} />
            <img src={WallFairImg} alt="wallfair" className={styles.wallfairLogo} />
          </div>
          <div className={styles.title}>{title}</div>
        </div>
        <div>
          {rows.map((row) => (
            <div className={styles.row}>
              <div>{row.label}</div>
              <div className={styles.value}>{row.value}</div>
            </div>
          ))}
        </div>
        <div className={styles.buttonsWrapper}>
          <Button size="small" variant="outlined">
            Add Pair to Metamusk
          </Button>
          <Button>Connect Wallet</Button>
        </div>
      </div>
    </DashboardCard>
  );
};

const DashboardStatusCard = () => {
  
}

const DashboardLayout = (props) => {
  return (
    <div>
      <h1 className={styles.headerTitle}>Dashboard</h1>
      <p className={styles.subTitle}>Here you can see the current token price. And maybe some other text...</p>
      <div>
        <DashboardCoinPairCard
          coinIcon={EthereumImg}
          title="WFAIR-ETH LP"
          rows={[
            {
              label: "Liquidity provided:",
              value: "22,000,000 WFAIR",
            },
            {
              label: "Participants:",
              value: "2,200,000",
            },
            {
              label: "Rewards:",
              value: "250,00 WFAIR",
            },
            {
              label: "APR:",
              value: "20%",
            },
          ]}
        />
        <DashboardCoinPairCard
          coinIcon={TetherImg}
          title="WFAIR-USDT LP"
          rows={[
            {
              label: "Liquidity provided:",
              value: "22,000,000 WFAIR",
            },
            {
              label: "Participants:",
              value: "2,200,000",
            },
            {
              label: "Rewards:",
              value: "250,00 WFAIR",
            },
            {
              label: "APR:",
              value: "20%",
            },
          ]}
        />
      </div>
    </div>
  );
};
export default DashboardLayout;
