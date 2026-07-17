export function formatRelativeTime(date: string): string {
  const now = new Date().getTime();

  const target = new Date(date).getTime();

  const diff = Math.floor((now - target) / 1000);

  if (diff < 60) {
    return `${diff}s`;
  }

  const minutes = Math.floor(diff / 60);

  if (minutes < 60) {
    return `${minutes}m`;
  }

  const hours = Math.floor(minutes / 60);

  if (hours < 24) {
    return `${hours}h`;
  }

  const days = Math.floor(hours / 24);

  if (days < 7) {
    return `${days}d`;
  }

  const weeks = Math.floor(days / 7);

  if (weeks < 4) {
    return `${weeks}w`;
  }

  const months = Math.floor(days / 30);

  if (months < 12) {
    return `${months}mo`;
  }

  const years = Math.floor(days / 365);

  return `${years}y`;
}

export function formatDateTime(date: string): string {
  const target = new Date(date);

  const year = target.getFullYear();

  const month = String(target.getMonth() + 1).padStart(2, "0");

  const day = String(target.getDate()).padStart(2, "0");

  const hours = String(target.getHours()).padStart(2, "0");

  const minutes = String(target.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}`;
}
