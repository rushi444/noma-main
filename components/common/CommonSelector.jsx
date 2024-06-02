import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { Fragment, useState } from "react";
import { SelectDownArrow } from "./Icons";

export default function CommonSelector({ list, className }) {
  const [selected, setSelected] = useState(list[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className={`relative ${className}`}>
        <ListboxButton className="relative w-full flex items-center justify-between bg-gray-50  text-[#666666] text-sm rounded-full focus:ring-black focus:border-black pl-4 ">
          <span className="flex items-center justify-between text-nowrap text-[#666666] opacity-[0.7] text-base">
            {selected.name}
          </span>
          <span className="bg-pastel-yellow px-5 py-4 rounded-r-full">
            <SelectDownArrow />
          </span>
        </ListboxButton>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ListboxOptions className="origin-top-left absolute overflow-hidden left-0 mt-2 w-full rounded-[16px] bg-gray-50 border border-gray-300 text-white z-10">
            {list.map((obj, index) => (
              <ListboxOption
                key={index}
                className={({ active }) =>
                  `relative cursor-pointer text-[#666666]  text-sm tracking-[-0.32px] select-none py-1.5 sm:py-2 px-4 ${
                    active
                      ? "!text-white text-base bg-pastel-yellow"
                      : "text-gray-900 text-base !text-start"
                  }`
                }
                value={obj}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }  !text-start`}
                    >
                      {obj.name}
                    </span>
                  </>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Transition>
      </div>
    </Listbox>
  );
}
