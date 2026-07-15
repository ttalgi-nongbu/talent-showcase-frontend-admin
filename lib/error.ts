export function getErrorMessage(
  err: unknown,
  fallback = "Something went wrong",
) {
  if (typeof err !== "object" || err === null) {
    return fallback;
  }

  const errors = (
    err as {
      errors?: Record<string, string> | null;
    }
  ).errors;

  if (errors) {
    return Object.values(errors)[0];
  }

  return (err as { message?: string }).message || fallback;
}
