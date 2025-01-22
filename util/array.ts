/**
 * Groups an array of objects into a dictionary based on a specified key.
 *
 * @template T - The type of objects in the array.
 * @param {T[]} array - An array of objects to be grouped.
 * @param {keyof T} key - The property of the objects to group by.
 * @returns {Record<string, T[]>} - A record where each key is a unique value of the specified property,
 *                                   and the value is an array of objects sharing that key.
 *
 * @example
 * // Sample data
 * const helplineContacts = [
 *   { territory: "delhi", name: "PCR", tel: ["112"], category: "Emergency Services" },
 *   { territory: "delhi", name: "Eyes and Ears", tel: ["14547"], category: "General Assistance" },
 *   { territory: "national", name: "Police", tel: ["100"], category: "Emergency Services" },
 * ];
 *
 * // Group by category
 * const grouped = groupBy(helplineContacts, "category");
 * console.log(grouped);
 * // Output:
 * // {
 * //   "Emergency Services": [
 * //     { territory: "delhi", name: "PCR", tel: ["112"], category: "Emergency Services" },
 * //     { territory: "national", name: "Police", tel: ["100"], category: "Emergency Services" }
 * //   ],
 * //   "General Assistance": [
 * //     { territory: "delhi", name: "Eyes and Ears", tel: ["14547"], category: "General Assistance" }
 * //   ]
 * // }
 */
export function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
  return array.reduce((result, item) => {
    const groupKey = item[key] as unknown as string;
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {} as Record<string, T[]>);
}
