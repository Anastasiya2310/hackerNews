export function formatDate(timestamp) {
  return new Date(timestamp * 1000)
  .toLocaleString('en-US', { hour: 'numeric', minute: 'numeric' })
}