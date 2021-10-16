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
import classNames from "classnames";

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
            <div className={styles.row} key={row.label}>
              <p>{row.label}</p>
              <p className={styles.value}>{row.value}</p>
            </div>
          ))}
        </div>
        <div className={styles.buttonsWrapper}>
          <Button size="small" variant="outlined" className={styles.leftButton}>
            Add Pair to Metamusk
          </Button>
          <Button className={styles.rightButton}>Connect Wallet</Button>
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
        <p className={styles.title}>{title}</p>
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
        <p className={styles.text}>{text}</p>
      </div>
    </DashboardCard>
  );
};

const DashboardLayout = (props) => {
  const predictedGasCard = (
    <DashboardStatusCard
      icon={<GasSvg className={styles.gasSvg} />}
      iconContainerColor="#FDBD2E"
      title="529"
      subtitle={
        <p>
          Predicted gas
          <br /> fee
        </p>
      }
    />
  );

  return (
    <div>
      <h1 className={styles.headerTitle}>Dashboard</h1>
      <p className={styles.subTitle}>Here you can see the current token price. And maybe some other text...</p>
      <div className={styles.gridWrapper}>
        <DashboardCard>
          <div className={styles.dashboardChartCard}>
            <div className={styles.chartWrapper}>
              <div className={styles.insideChart}>
                <p className={styles.text}>TOTAL TOKENS LOCKED</p>
                <p className={styles.number}>250,000</p>
                <p className={styles.conversion}>~ 25,978 USDT</p>
              </div>
            </div>
            <div className={styles.rightSide}>
              <p className={styles.text}>
                TOKENS ALREADY CLAIMED: <br />
                <span className={styles.bold}>150,000 WFAIR ~ 1,114 USDT</span>
              </p>
              <p className={styles.text}>
                TOKENS TO BE CLAIMED: <br />
                <span className={styles.bold}>1,000 WFAIR ~ 114 USDT</span>
              </p>
              <Button size="medium">Claim WFAIR</Button>
            </div>
          </div>
        </DashboardCard>
        <DashboardCoinPairCard
          key={"eth"}
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
          key="USDT"
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

        <div className={classNames(styles.columnsGrid, styles.statusesContainer)}>
          <DashboardStatusCard
            icon={<TransactionSvg className={styles.transactionSvg} />}
            iconContainerColor="#4DC671"
            title="1200"
            subtitle={
              <p>
                Number of
                <br /> transactions
              </p>
            }
          />
          <DashboardStatusCard
            icon={<UserSvg className={styles.userSvg} />}
            iconContainerColor="#496188"
            title="529"
            subtitle={
              <p>
                Number of
                <br /> holders
              </p>
            }
          />
          <div className={styles.hideMdUp}>{predictedGasCard}</div>
        </div>

        <div className={styles.rowsGrid}>
          <DashboardConvertCard coin={TetherImg} text="1 WFAIR ~ 0.07 USDT" />
          <DashboardCard>
            <div className={styles.dashboardCompaniesCard}>
              <div className={styles.svgWrapper}>
                <MCompanySvg />
              </div>
              <div className={styles.svgWrapper}>
                <FrogSvg />
              </div>
              <div className={classNames(styles.svgWrapper, styles.qweSvg)}>
                <QweSvg />
              </div>
              <div className={styles.svgWrapper}>
                <WfraiSvg />
              </div>
            </div>
          </DashboardCard>
        </div>

        <div className={classNames(styles.columnsGrid, styles.metamuskGrid)}>
          <div className={styles.hideMdDown}>{predictedGasCard}</div>
          <DashboardCard>
            <div className={styles.dashboardMetamuskCard}>
              <img src={MetamuskImg} alt="metmusk" />
              <Button size="small" variant="outlined" fontSize="small">
                Add WFAIR to Metamask
              </Button>
            </div>
          </DashboardCard>
        </div>

        <div className={styles.columnsGrid}>
          <DashboardCard>
            <div className={styles.dashboardWfairCard}>
              <div className={styles.iconWrapper}>
                <WfraiSvg className={styles.icon} />
              </div>
              <Button size="medium">Buy WFAIR</Button>
            </div>
          </DashboardCard>
        </div>
      </div>
    </div>
  );
};
export default DashboardLayout;
