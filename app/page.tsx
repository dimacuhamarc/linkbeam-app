import { Button } from '@headlessui/react';

export default function Home() {
  return (
    <div className="h-full w-full">
      Linkbeam Landing Page
      <Button className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
        Save changes
      </Button>
    </div>
  );
}
