import dahua from '../../assets/dahua.png';
import hickvision from '../../assets/hickvision.png';
import ajax from '../../assets/ajax.png';
import elkron from '../../assets/elkron.png';
import zkteko from '../../assets/zkteko.png';

import './Brand.css';

const Brand = () => {
  return (
    <section className='brand'>
      <article className='section-center brand__center'>
        <div>
          <img src={dahua} alt='dahua' />
        </div>

        <div>
          <img src={hickvision} alt='hickvision' />
        </div>

        <div>
          <img src={ajax} alt='ajax' />
        </div>

        <div>
          <img src={elkron} alt='elkron' />
        </div>

        <div>
          <img src={zkteko} alt='zkteko' />
        </div>
      </article>
    </section>
  );
};

export default Brand;
