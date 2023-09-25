/* eslint-disable @nx/enforce-module-boundaries */
import '@/styles/animation.css';

import Image from '@/components/image';
import cloudsImage from '../../../public/static/images/clouds.png';

export default function page() {
  return (
    <div
      className="loop_wrap"
      style={{ margin: '0 calc(50% - 50vw)', width: '100vw', height: '40vw' }}
    >
      <Image src={cloudsImage.src} alt="clouds" width={0} height={0}></Image>
      <Image src={cloudsImage.src} alt="clouds" width={0} height={0}></Image>
    </div>
  );
}
