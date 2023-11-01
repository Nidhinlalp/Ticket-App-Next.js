
import React from 'react'
import TicketCard from './(components)/TicketCard'

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store"
    });
    return res.json();
  } catch (error) {
    console.log('Faild to get Tickets', error)
  }
}

const Dashboard = async () => {
  const { tickets } = await getTickets();

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];
  return (
    <div className="p-5">
      <div>
        {tickets && uniqueCategories?.map((uniqueCategorory, categoryIndex) =>
          <div key={categoryIndex} className='mb-4'>
            <h2>{uniqueCategorory}</h2>
            <div className='lg:grid grid-cols-2 xl:grid-cols-4'>
              {tickets.filter((ticket) => ticket.category === uniqueCategorory).map((filterdTicket, _index) => (
                <TicketCard id={_index} key={_index} ticket={filterdTicket} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Dashboard