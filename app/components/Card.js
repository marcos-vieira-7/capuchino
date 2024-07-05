import Image from 'next/image';
import styles from '../../styles/Geral.module.css';


export default function Card(props){

    return(
     <div className={styles.meuCard}>
        <Image width={60} height={60} className={styles.imgCard} src={props.imagem}></Image>
        <h3 className="font-extrabold text-2xl">{props.nome}</h3>
        <span>{props.descricao}</span>
     </div>
    );

}