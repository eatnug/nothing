export async function GET() {
    try {
        return Response.json({message: 'it is nothing'});
    } catch (error) {
        return Response.json(error)
    }
}