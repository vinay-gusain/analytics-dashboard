
/**
 * Formats a number as currency with $ symbol
 * @param amount - The amount to format
 * @returns Formatted currency string
 */
export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  }
  
  /**
   * Calculates the percentage difference between two numbers
   * @param current - Current value
   * @param previous - Previous value
   * @returns Percentage change
   */
  export function calculatePercentageChange(current: number, previous: number): number {
    if (previous === 0) return 0;
    return Math.round(((current - previous) / previous) * 100 * 10) / 10;
  }
  
  /**
   * Formats a date relative to now (e.g., "5 min ago")
   * @param date - Date to format
   * @returns Formatted relative time string
   */
  export function formatRelativeTime(date: Date): string {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSecs = Math.floor(diffMs / 1000);
    const diffMins = Math.floor(diffSecs / 60);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);
  
    if (diffDays > 0) {
      return `${diffDays}d ago`;
    } else if (diffHours > 0) {
      return `${diffHours}hr ago`;
    } else if (diffMins > 0) {
      return `${diffMins}min ago`;
    } else {
      return 'just now';
    }
  }
  