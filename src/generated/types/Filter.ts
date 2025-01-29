import { isJSON, decodeString, decodeNumber, decodeArray } from "type-decoder";

/**
 * @type { FilterItem }
 */
export type FilterItem = {
  /**
   * @type { string }
   * @memberof FilterItem
   */
  label: string;
  /**
   * @type { string }
   * @memberof FilterItem
   */
  value: string;
  /**
   * @type { number }
   * @memberof FilterItem
   */
  count: number;
};

export function decodeFilterItem(rawInput: unknown): FilterItem | null {
  if (isJSON(rawInput)) {
    const decodedLabel = decodeString(rawInput["label"]);
    const decodedValue = decodeString(rawInput["value"]);
    const decodedCount = decodeNumber(rawInput["count"]);

    if (
      decodedLabel === null ||
      decodedValue === null ||
      decodedCount === null
    ) {
      return null;
    }

    return {
      label: decodedLabel,
      value: decodedValue,
      count: decodedCount,
    };
  }
  return null;
}

/**
 * @type { Filter }
 */
export type Filter = {
  /**
   * @type { string }
   * @memberof Filter
   */
  labelName: string;
  /**
   * @type { FilterItem[] }
   * @memberof Filter
   */
  valueHolder: FilterItem[];
  /**
   * @type { FilterItem[] }
   * @memberof Filter
   */
  values: FilterItem[];
};

export function decodeFilter(rawInput: unknown): Filter | null {
  if (isJSON(rawInput)) {
    const decodedLabelName = decodeString(rawInput["labelName"]);
    const decodedValueHolder = decodeArray(
      rawInput["valueHolder"],
      decodeFilterItem,
    );
    const decodedValues = decodeArray(rawInput["values"], decodeFilterItem);

    if (
      decodedLabelName === null ||
      decodedValueHolder === null ||
      decodedValues === null
    ) {
      return null;
    }

    return {
      labelName: decodedLabelName,
      valueHolder: decodedValueHolder,
      values: decodedValues,
    };
  }
  return null;
}
