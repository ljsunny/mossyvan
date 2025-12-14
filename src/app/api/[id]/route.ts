import { NextResponse } from "next/server";

export async function GET(_: Request, { params }: any) {
  return NextResponse.json({ id: params.id });
}

export async function PUT(req: Request, { params }: any) {
  return NextResponse.json({ updated: params.id });
}

export async function DELETE(_: Request, { params }: any) {
  return NextResponse.json({ deleted: params.id });
}
