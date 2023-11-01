import TicketFrom from "../../(components)/TicketFrom";

const getTicketById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to get ticket.");
  }
  return res.json();
};

const TicketPage = async ({ params }) => {
  const EDITEMODE = params.id === "new" ? false : true;
  let updateTicketData = {};
  if (EDITEMODE) {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      _d: "new",
    };
  }
  return <TicketFrom ticket={updateTicketData} />;
};

export default TicketPage;
