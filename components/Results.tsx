import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move"

export default function Results ({ results }: any) {
  //console.log(results)
  return (
      <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
        {results.map((result: any) => <Thumbnail key={result.id} movie={result} />)}
      </FlipMove>
  )
}