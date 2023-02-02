import { Audio } from 'react-loader-spinner';
import css from "./loader.module.css"

const Loader = () => {
    return (
      <div className={css.loaderBox}>
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass="wrapper-class"
        />
      </div>
    );
};
export default Loader;
