type Seat = { name: string; capacity: number }
const seats: Seat[] = [
  { name: 'カウンター１', capacity: 0 },
  { name: 'カウンター２', capacity: 0 },
]

const Seats = () => {
  return (
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
  )
}

export default Seats
