import {NextRequest} from "next/server";
import RequestContext from "@/app/lib/types/RequestContext";

export async function GET(request: NextRequest, context: RequestContext<{ id: string }>) {
    try {
        const id = (await context.params).id
        return Response.json({message: `it is nothing ${id}`});
    } catch (error) {
        return Response.json(error)
    }
}