import css from '../Styles/Loader.module.css';
import { Oval } from 'react-loader-spinner';
import React from 'react';

export const Loader = () => {
  return (
    <div className={css.loader}>
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
