import Link from "next/link"
import { use } from "react"

//getStaticProps
async function getCharacters() {
  console.log(getCharacters)
  return await (await fetch("https://rickandmortyapi.com/api/character")).json()
}

export default function StaticProps() {
    const allCharacter = use(getCharacters())

  return (
    <div>
    <h2>GET STATIC PROPS</h2>
    {allCharacter?.results.map(c =>
    <ul key= {c.id}>
    <Link href={`/staticprops/${c.name}`.replace(/\s+/g, "-").toLowerCase()}>
    <li>{c.name}</li>
		</Link>
    </ul>
    )}
    </div>
  )
}

