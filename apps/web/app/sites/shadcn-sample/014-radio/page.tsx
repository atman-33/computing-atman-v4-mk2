import { Label, RadioGroup, RadioGroupItem } from '@libs/web/ui-shadcn';

const Page = () => {
  const RADIO_COLLECTION = ['apple', 'banana', 'cherry'];

  return (
    <div className="mt-8">
      <RadioGroup defaultValue="comfortable">
        {RADIO_COLLECTION.map((item, index) => (
          <div key={item} className="flex items-center space-x-2">
            <RadioGroupItem value={item} id={index as unknown as string} />
            <Label htmlFor={index as unknown as string}>{item}</Label>
          </div>
        ))}
        {/* <div className="flex items-center space-x-2">
          <RadioGroupItem value="apple" id="r1" />
          <Label htmlFor="r1">apple</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="banana" id="r2" />
          <Label htmlFor="r2">banana</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="cherry" id="r3" />
          <Label htmlFor="r3">cherry</Label>
        </div> */}
      </RadioGroup>
    </div>
  );
};

export default Page;
