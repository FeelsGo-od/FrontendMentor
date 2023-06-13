export default async function getMovies(link) {
  const res = await fetch(link)
  if(!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}