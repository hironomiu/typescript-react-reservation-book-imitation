import { useState, useLayoutEffect, useRef } from 'react'
import json from '../data.json'

const col = [
  '０時〜',
  '１時〜',
  '２時〜',
  '３時〜',
  '４時〜',
  '５時〜',
  '６時〜',
  '７時〜',
  '８時〜',
  '９時〜',
  '１０時〜',
  '１１時〜',
  '１２時〜',
  '１３時〜',
  '１４時〜',
  '１５時〜',
  '１６時〜',
  '１７時〜',
  '１８時〜',
  '１９時〜',
  '２０時〜',
  '２１時〜',
  '２２時〜',
  '２３時〜',
]

type Seat = { name: string; capacity: number }
const seats: Seat[] = [
  { name: 'カウンター１', capacity: 0 },
  { name: 'カウンター２', capacity: 0 },
]

const Main = () => {
  const [data] = useState<any>(() => json.reservedData)
  const scrollRef = useRef<null | HTMLTableCellElement>(null)

  // MEMO: divを埋め込んで特定の時刻に合わせる（但し現時点では右端を指定する形なので中央に表示したいカラムにしたい場合は要検討）
  useLayoutEffect(() => {
    if (scrollRef) {
      if (scrollRef.current) {
        scrollRef.current.scrollIntoView()
      }
    }
  }, [])

  return (
    <div className="flex flex-col justify-center items-center mx-4 w-screen">
      <div className="text-2xl mt-6 text-gray-500">{data.ymd}</div>
      <div className="flex mx-4 mt-4 w-screen">
        <table className="border-collapse border-[1px] border-gray-500 text-sm mr-4">
          <thead className="bg-gray-300 text-xs">
            <tr className="h-10">
              <th className="border border-gray-400 w-32 text-gray-800">座席</th>
              <th className="border border-gray-400 w-16 text-gray-800">定員</th>
            </tr>
          </thead>
          <tbody className="text-xs">
            {seats.map((seat: Seat, index: number) => (
              <tr className="h-10">
                <td className="border border-gray-400 w-32 text-center">{seat.name}</td>
                <td className="border border-gray-400 w-16 text-center">{seat.capacity === 0 ? '~' : seat.capacity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="overflow-x-auto ">
          <div className=" md:w-[600px] lg:w-[800px] xl:w-[1000px]">
            <table className="border-collapse border-[1px] border-gray-500 text-sm w-[1300px]">
              <thead className="bg-gray-300 text-xs ">
                <tr className="h-10">
                  {col.map((c, index) => (
                    <th key={index} className="border border-gray-400 w-32 min-w-0 text-gray-800 text-left">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-xs">
                {data.data.map((data: any, dIndex: number) => (
                  <tr className="h-10" key={dIndex}>
                    {col.map((_: any, index: number) =>
                      data[index].prev === true ? null : (
                        <td
                          className={
                            data[index].isReserved === true
                              ? data[index].prev === true
                                ? ''
                                : 'border border-gray-400 w-32 min-w-0 bg-yellow-500 text-center hover:cursor-pointer'
                              : 'border border-gray-400 w-32 min-w-0'
                          }
                          colSpan={data[index].next === true ? data[index].colSpan : 1}
                          key={index}
                        >
                          {data[index].isReserved === true ? (
                            data[index].prev === true ? null : (
                              <span className="" onClick={() => alert(data[index].reservedId)}>
                                {data[index].title},
                              </span>
                            )
                          ) : null}
                          {/* MEMO: overflow-x-autoの右端を指定（現時点では） */}
                          {index === 17 ? <div ref={scrollRef}></div> : null}
                        </td>
                      )
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
