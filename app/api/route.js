import Ticket from "../(models)/Ticket";
import { NextResponse } from "next/server";


export async function POST(req) {
    try {
        const body = await req.json();
        const ticketData = body.fromData;
        await Ticket.create(ticketData);
        return NextResponse.json({ message: "Ticket Created" }, { status: 2001 });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}