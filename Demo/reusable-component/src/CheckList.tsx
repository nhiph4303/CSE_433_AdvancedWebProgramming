import { useState, type ComponentPropsWithoutRef, type ReactNode } from "react";

type Props<Data> = {
  data: Data[];
  id: keyof Data;
  primary: keyof Data;
  secondary: keyof Data;
  renderItem?: (item: Data) => ReactNode;
} & ComponentPropsWithoutRef<"ul">;

type IdValue = string | number;

export function CheckList<Data>({
  data,
  id,
  primary,
  secondary,
  renderItem,
  ...ulProps
}: Props<Data>) {
  const [checkIds, setCheckIds] = useState<Set<IdValue>>(new Set());
  return (
    <ul className="bg-gray-300 rounded p-10" {...ulProps}>
      {data.map((item) => {
        const idValue = item[id] as unknown;
        if (typeof idValue !== "string" && typeof idValue !== "number") {
          return null;
        }

        const primaryText = item[primary] as unknown;
        if (typeof primaryText !== "string") {
          return null;
        }

        const secondaryText = item[secondary] as unknown;
        if (typeof secondaryText !== "string") {
          return null;
        }

        const handleCheck = () => {
          const newSet = new Set(checkIds);
          if (newSet.has(idValue as IdValue)) {
            newSet.delete(idValue as IdValue);
          } else {
            newSet.add(idValue as IdValue);
          }
          setCheckIds(newSet);
        };

        if (renderItem) {
          return (
            <li
              key={idValue}
              className="bg-white p-6 shadow rounded mb-4 last:mb-0 flex items-center gap-4"
            >
              <input
                type="checkbox"
                checked={checkIds.has(idValue as IdValue)}
                onChange={handleCheck}
                className="w-5 h-5 cursor-pointer"
              />
              <div className="flex-1">{renderItem(item)}</div>
            </li>
          );
        }
        return (
          <li
            key={idValue}
            className="bg-white p-6 shadow rounded mb-4 last:mb-0 flex items-center gap-4"
          >
            <input
              type="checkbox"
              checked={checkIds.has(idValue as IdValue)}
              onChange={handleCheck}
              className="w-5 h-5 cursor-pointer"
            />
            <div className="flex-1">
              <div className="text-xl text-gray-800 pb-1">{primaryText}</div>
              <div className="text-sm text-gray-800">{secondaryText}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
