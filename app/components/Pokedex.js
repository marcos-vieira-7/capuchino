import Image from 'next/image';
import styles from '../../styles/Geral.module.css';

export default function Pokedex(props){

    return(
        <div className={styles.pokedex +" "+ props.classe}>

            <Image width={240} height={240} className="p-4 " src={props.url}></Image>

            <h1 className="font-extrabold text-3xl px-4">{props.nome}</h1>
            <p className="px-4">{props.descricao}</p>
        </div>
    );

}