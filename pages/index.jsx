import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Home.module.css'


export const getStaticProps = async () => {
  const res = await fetch('https://wobn-backend.dharmik2004.repl.co');
  const data = await res.json();

  return {
    props: { ninjas: data }
  }
}

const Ninjas = ({ ninjas }) => {
  console.log(ninjas)

  return (
    <div>
<div className={styles.tt}>
  Worty Of Bing Non
</div>
      
<form action="https://wobn-backend.dharmik2004.repl.co/post" method="post">
  <label>Post:</label>
  <input type="thoughts" id="thoughts" name="thoughts"   />
  <button type="submit">Submit</button>
</form>

      {ninjas.thoughts.map(ninja => (
        <div key={ninja}>
          <div className={styles.article}>
            <h3>{ ninja}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
 
export default Ninjas;