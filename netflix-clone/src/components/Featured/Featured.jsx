import React from 'react'
import styles from './featured.module.css'
import movie_image from '../../assets/movie_img.jpg'
import {AiFillStar} from 'react-icons/ai'
import {BsFillPlayFill} from 'react-icons/bs'
import {GrAddCircle} from 'react-icons/gr'
import {MdAddCircle} from 'react-icons/md'
const Featured = () => {
  return (
    <>
    <main className={styles.__container}>
        <img className={styles.img__} width='100%' src={movie_image} alt="" />
        <div className={styles.info__}>
          <div className={styles.stats__}>
            <p className={styles.rating__}> <AiFillStar className={styles.star__}/> 7.5</p>
            <p className={styles.date__}>2018 </p>
            <p className={styles.season__}>2 Seasons</p>
          </div>
          <p className={styles.title__}>Strangers Things</p>
          <p className={styles.desc__}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In maxime, 
          beatae hic sunt accusantium molestias, maiores placeat obcaecati amet saepe rem esse similique.
           </p>
           <div className={styles.btn__}>
              <button className={styles.watch__}>
                <BsFillPlayFill className={styles.icon__watch}/> Watch
              </button>
              <button className={styles.add__list}>
                <MdAddCircle className={styles.add__icon}/>
                Add To List
              </button>
           </div>
        </div>
    </main>
    </>
  )
}

export default Featured   