/**
 * Converts a CRC amount to a TC amount.
 * @param timestamp The point in time when the CRC transaction happened
 * @param amount The CRC value of the transaction
 * @return The TC value of the transaction
 */
export declare function crcToTc(timestamp: Date, amount: number): number;
/**
 * Converts a TC amount to a CRC amount.
 * @param timestamp The point in time when the TC transaction happened
 * @param amount The TC value of the transaction
 * @returns The CRC value of the transaction
 */
export declare function tcToCrc(timestamp: Date, amount: number): number;
