import React from 'react'
import Image from 'next/image'
import styles from '@/app/ui/transactions/transactions.module.css'

const Transactions = () => {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Latest Transactions</h2>
        <table className={styles.table}>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Status</td>
                    <td>Date</td>
                    <td>Amount</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div className={styles.user}>
                            <Image src="/avatar.svg"
                             alt=""
                             height={40}
                             width={40}
                             className={styles.userImage}
                             />
                            ALAN
                        </div>
                    </td>
                    <td>
                        <span className={`${styles.status} ${styles.pending}`}>
                            Pending
                        </span>
                    </td>
                    <td>
                        17.03.2024
                    </td>
                    <td>
                        $999
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className={styles.user}>
                            <Image src="/avatar.svg"
                             alt=""
                             height={40}
                             width={40}
                             className={styles.userImage}
                             />
                            Harry 
                        </div>
                    </td>
                    <td>
                        <span className={`${styles.status} ${styles.pending}`}>
                            Pending
                        </span>
                    </td>
                    <td>
                        17.03.2024
                    </td>
                    <td>
                        $999
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className={styles.user}>
                            <Image src="/avatar.svg"
                             alt=""
                             height={40}
                             width={40}
                             className={styles.userImage}
                             />
                            Hermionee
                        </div>
                    </td>
                    <td>
                        <span className={`${styles.status} ${styles.done}`}>
                            Done
                        </span>
                    </td>
                    <td>
                        17.03.2024
                    </td>
                    <td>
                        $999
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className={styles.user}>
                            <Image src="/avatar.svg"
                             alt=""
                             height={40}
                             width={40}
                             className={styles.userImage}
                             />
                            Ron
                        </div>
                    </td>
                    <td>
                        <span className={`${styles.status} ${styles.cancel}`}>
                            Cancelled
                        </span>
                    </td>
                    <td>
                        17.03.2024
                    </td>
                    <td>
                        $999
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className={styles.user}>
                            <Image src="/avatar.svg"
                             alt=""
                             height={40}
                             width={40}
                             className={styles.userImage}
                             />
                            Voldemort
                        </div>
                    </td>
                    <td>
                        <span className={`${styles.status} ${styles.done}`}>
                            Done
                        </span>
                    </td>
                    <td>
                        17.03.2024
                    </td>
                    <td>
                        $999
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Transactions

