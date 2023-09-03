import Card from '../../..//components/card';
import sitesData from '../../../data/sites-data';
import { genPageMetadata } from '../_components/seo';

export const metadata = genPageMetadata({ title: 'Games' });

export default function Games() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl">
            Sites
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">Showcase my sites</p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {sitesData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
