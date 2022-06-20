import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Example({titulo, array1 = [], array2 = []}) {  

  let campos = array1.length;

  let opc = []

  for (let i = 0; i<campos; i++){
   
    opc.push(
          <Menu.Item>
            {({ active }) => (
              <a href={array2[i]} className={classNames(active ? 'bg-white' : 'text-white',
              'block px-4 py-2 text-lg')}>
                {array1[i]}
              </a>
            )}
          </Menu.Item>
        );
    
  }

  return (

    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center bg-blue-800 w-200 rounded-md px-10 py-2 bg-white text-lg font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          {titulo}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute left-0 mt-2 w-full rounded-sm shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none bg-blue-800">
          <div className="py-2">

          {/* se imprimen la lista de opciones  */}
          {opc}

          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
