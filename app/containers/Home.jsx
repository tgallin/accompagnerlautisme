import React from 'react';
import ScrollToTopOnMount from '../components/ScrollToTopOnMount';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import styles from 'css/components/home';

const cx = classNames.bind(styles);

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const Home = () => {
  return (
    <div>
      <ScrollToTopOnMount/>

      <p className={'text-justify ' + cx('content')}>Bienvenue sur notre site Accompagner l’Autisme</p>
      
      <p className={cx('content', 'paddingBottom')}> </p>
      
      <p className={'text-justify ' + cx('content', 'bigPaddingBottom')}>Notre philosophie repose sur 2 axes principaux :</p>
      <ul className={cx('list')}>
        <li className={cx('list-item')}><p className={'text-justify ' + cx('content', 'bigPaddingBottom')}>Avec une prise en charge adaptée et coordonnée, l’enfant et sa famille sont les principaux acteurs du projet. Ainsi, nous proposons d’une part des formations pour parents et professionnels et d’autre part des accompagnements personnalisés à l’école et à domicile.</p></li>
        <li className={cx('list-item')}><p className={'text-justify ' + cx('content', 'bigPaddingBottom')}>La place des enfants autistes est à l’école. A ce titre nous oeuvrons pour la formation des AVS / AESH, mais nos accompagnants peuvent intervenir à l’école dans le cadre de conventions individuelles avec l’Education Nationale.</p></li>
      </ul>

      <p className={'text-center ' + cx('content', 'bigPaddingBottom')}><Link to="/contact" className="btn btn-info">Contactez-nous pour devenir adhérents</Link></p>
      
      <p className={'text-justify ' + cx('content', 'bigPaddingBottom')}>Certaines parties du site sont encore en cours de construction, n'hésitez pas à revenir régulièrement.</p>
      
    </div>
  );
};

export default Home;
