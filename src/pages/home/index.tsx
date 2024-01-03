import { useEffect, useState } from 'react'
import styles from './home.module.css'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'

//1b5d26827b367bf3
//https://coinlib.io/api/v1/coin?key=1b5d26827b367bf3

export function Home(){

    useEffect(() => {
        function getData(){
            fetch('https://sujeitoprogramador.com/api-cripto/?key=1b5d26827b367bf3&pref=BRL')
            .then(response => response.json())
            .then((data) => {
                let coinsData = data.coins.slice(0, 15);
            })
        }
        getData();
    }, [])

    return(
        <main className={styles.container}>
        <form className={styles.form}>
            <input
            placeholder='Digite a moeda'
            />
            <button type='submit'>
                <BiSearch size={30} color='#fff' />
            </button>
        </form>

        <table>
            <thead>
                <th scope='col'>Moeda</th>
                <th scope='col'>Valor mercado</th>
                <th scope='col'>Preço</th>
                <th scope='col'>Volume</th>
            </thead>

            <tbody id='tbody'>
                <tr  className={styles.tr}>
                    <td className={styles.tdLabel} data-label="Moeda">
                        <Link className={styles.link} to="/detail/btc">
                        <span>Bitcoin</span> / BTC
                        </Link>
                    </td>
                    <td className={styles.tdLabel} data-label="Valor de mercado">
                        R$ 19258
                    </td>
                    <td className={styles.tdLabel} data-label="Preço">
                        R$ 40555
                    </td>
                    <td className={styles.tdProfit} data-label="Volume">
                        <span>+10</span>
                    </td>
                </tr>
            </tbody>

        </table>

        </main>
    )
}