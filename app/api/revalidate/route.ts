import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

async function handleRevalidation(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');

  // Validate secret
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  try {
    // Parse webhook body to determine content type
    let contentType = 'unknown';
    try {
      const body = await request.json();
      contentType = body._type || 'unknown';
    } catch {
      // If body parsing fails, just revalidate homepage
    }

    // Revalidate relevant paths based on content type
    const pathsToRevalidate = new Set<string>(['/']); // Always revalidate homepage

    if (contentType === 'galleryImage') {
      pathsToRevalidate.add('/gallery');
    }

    // Revalidate all affected paths
    await Promise.all(
      Array.from(pathsToRevalidate).map(path => revalidatePath(path))
    );

    return NextResponse.json({
      revalidated: true,
      paths: Array.from(pathsToRevalidate),
      contentType,
      now: Date.now(),
    });
  } catch (err) {
    return NextResponse.json(
      { message: 'Error revalidating', error: String(err) },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  return handleRevalidation(request);
}

export async function GET(request: NextRequest) {
  return handleRevalidation(request);
}
