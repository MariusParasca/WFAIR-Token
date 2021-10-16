import React from "react";
import styles from "./styles.module.scss";
import EthereumImg from "../../data/images/coins/ethereum.png";
import TetherImg from "../../data/images/coins/tether.png";
import WallFairImg from "../../data/images/wallfair-logo-coin.png";
import MetamuskImg from "../../data/images/metamusk.png";
import { ReactComponent as TransactionSvg } from "../../data/icons/transaction.svg";
import { ReactComponent as UserSvg } from "../../data/icons/user-icon.svg";
import { ReactComponent as GasSvg } from "../../data/icons/gas.svg";
import { ReactComponent as MCompanySvg } from "../../data/icons/company-logos/m-company.svg";
import { ReactComponent as FrogSvg } from "../../data/icons/company-logos/frog.svg";
import { ReactComponent as QweSvg } from "../../data/icons/company-logos/qwe.svg";
import { ReactComponent as WfraiSvg } from "../../data/icons/company-logos/wfair.svg";
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

const DashboardStatusCard = ({ icon, iconContainerColor, title, subtitle }) => {
  return (
    <DashboardCard>
      <div className={styles.dashboardStatusCard}>
        <div className={styles.iconContainer} style={{ backgroundColor: iconContainerColor }}>
          {icon}
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
    </DashboardCard>
  );
};

const DashboardConvertCard = ({ coin, text }) => {
  return (
    <DashboardCard>
      <div className={styles.dashboardConvertCard}>
        <img src={coin} alt="coin" />
        <div className={styles.text}>{text}</div>
      </div>
    </DashboardCard>
  );
};

const DashboardLayout = (props) => {
  return (
    <div>
      <h1 className={styles.headerTitle}>Dashboard</h1>
      <p className={styles.subTitle}>Here you can see the current token price. And maybe some other text...</p>
      <div>
        <DashboardCard>
          <div className={styles.dashboardCompaniesCard}>
            <div className={styles.svgWrapper}>
              <MCompanySvg />
            </div>
            <div className={styles.svgWrapper}>
              <FrogSvg />
            </div>
            <div className={styles.svgWrapper}>
              <QweSvg />
            </div>
            <div className={styles.svgWrapper}>
              <WfraiSvg />
            </div>
          </div>
        </DashboardCard>
        <DashboardCard>
          <div className={styles.dashboardWfairCard}>
            <WfraiSvg className={styles.icon} />
            <Button size="medium">Buy WFAIR</Button>
          </div>
        </DashboardCard>
        <DashboardConvertCard coin={TetherImg} text="1 WFAIR ~ 0.07 USDT" />
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
        <DashboardStatusCard
          icon={<TransactionSvg />}
          iconContainerColor="#4DC671"
          title="1200"
          subtitle="Number of transactions"
        />
        <DashboardStatusCard icon={<UserSvg />} iconContainerColor="#496188" title="529" subtitle="Number of holders" />
        <DashboardStatusCard icon={<GasSvg />} iconContainerColor="#FDBD2E" title="529" subtitle="Predicted gas fee" />
        <DashboardCard>
          <div className={styles.dashboardMetamuskCard}>
            <img src={MetamuskImg} alt="metmusk" />
            <Button size="small" variant="outlined" fontSize="small">
              Add WFAIR to Metamask
            </Button>
          </div>
        </DashboardCard>
      </div>
    </div>
  );
};
export default DashboardLayout;
