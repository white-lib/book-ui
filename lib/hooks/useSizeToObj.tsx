import { useEffect, useState } from "react";
import { SizeExt } from "../system/measurement.types.ts";
import { getCssVar } from "../helpers/skinning.tsx";

type SizeObj = {
  height: string | number;
  width?: string | number;
};

type SizeToObjConfig = {
  square?: boolean;
};

export function useSizeToObj(size: SizeExt, config?: SizeToObjConfig) {
  const [obj, setObj] = useState<SizeObj | null>(null);
  useEffect(() => {
    const rootSize = getCssVar(`--bu-size-${size}`);

    if (!rootSize) {
      return;
    }

    const _obj: SizeObj = { height: rootSize };

    if (config?.square) {
      _obj.width = rootSize;
    }
    setObj(_obj);
  }, [size]);

  return obj;
}
