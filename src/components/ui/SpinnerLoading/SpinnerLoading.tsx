import React, { FC } from "react";
import styles from "./SpinnerLoading.module.scss";

const SpinnerLoading: FC = () => {
  return (
    <div className={styles.lds_ring}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default SpinnerLoading;
