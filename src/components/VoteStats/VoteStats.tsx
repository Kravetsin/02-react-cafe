//* 🔹 Imports
import styles from "./VoteStats.module.css";
import type { Votes } from "../../types/votes";
//! --------------------------------------

//! 🔹 Interface
interface VoteStatsProps {
  votes: Votes;
  total: number;
  positive: number;
}
//! --------------------------------------

//! 🔹 Component
export default function VoteStats({ votes, total, positive }: VoteStatsProps) {
  return (
    <div className={styles.container}>
      <p className={styles.stat}>
        Good: <strong>{votes.good}</strong>
      </p>
      <p className={styles.stat}>
        Neutral: <strong>{votes.neutral}</strong>
      </p>
      <p className={styles.stat}>
        Bad: <strong>{votes.bad}</strong>
      </p>
      <p className={styles.stat}>
        Total: <strong>{total}</strong>
      </p>
      <p className={styles.stat}>
        Positive: <strong>{positive}%</strong>
      </p>
    </div>
  );
}
//! --------------------------------------
