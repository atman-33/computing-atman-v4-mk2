/* eslint-disable @nx/enforce-module-boundaries */
import '@/styles/animation.css';

import Image from '@/components/elements/Image';
import cloudsImage from '../../../public/static/images/clouds.png';

export default function Page() {
  return (
    <div className="relative">
      <div
        className="loop_wrap"
        style={{ margin: '0 calc(50% - 50vw)', width: '100vw', height: '40vw' }}
      >
        <Image src={cloudsImage.src} alt="clouds" width={0} height={0}></Image>
        <Image src={cloudsImage.src} alt="clouds" width={0} height={0}></Image>
      </div>
      <p className="absolute flex w-full items-center justify-center" style={{ bottom: '200px' }}>
        Sample Text
      </p>
    </div>
  );
}
