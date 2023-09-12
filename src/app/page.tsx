//Her er alt vi trenger for å importere inn komponenter :) 
// Bygge med legoklosser, eks <Nav> 
//Pagen, er topp nivået. Også fylle det med informasjon, fylle med små deler:

import Title from "@/components/Title"

export default function Home() {
  return (
      <main>
          <Title title="First title" className="bg-red-200"/>
          <Title title="second title" />
      </main>
  )
  }